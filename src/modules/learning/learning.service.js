import { prisma } from '../../db/prismaClient.js';
import { ApiError } from '../../utils/ApiError.js';
import { syncQuestProgress, incrementQuestProgress } from '../quests/questProgress.service.js';

const TIME_TOLERANCE_SECONDS = 2;

const CAMERA_CONFIDENCE_THRESHOLD = 0.85;

// XP Given
const XP_REWARD = {
    multiple_choice: 10,
    true_false: 10,
    camera_practice: 20,
};

export async function startQuestion(userId, levelId, questionId) {
    const question = await prisma.levelQuestion.findFirst({
        where: { id: questionId, levelId },
    });

    if (!question) {
        throw new ApiError(404, 'Soal tidak ditemukan pada level ini.');
    }

    const attempt = await prisma.questionAttempt.create({
        data: {
            userId,
            questionId,
            status: 'pending',
        },
    });

    return {
        attemptId: attempt.id,
        timeLimitSeconds: question.timeLimitSeconds,
        startedAt: attempt.startedAt,
    };
}

function evaluateAnswer(question, payload) {
    if (question.type === 'multiple_choice' || question.type === 'true_false') {
        return payload.answerKey === question.correctAnswer;
    }

    if (question.type === 'camera_practice') {
        const { detectedLetter, confidence } = payload;
        return (
            detectedLetter?.toUpperCase() === question.correctAnswer.toUpperCase() &&
            (confidence ?? 0) >= CAMERA_CONFIDENCE_THRESHOLD
        );
    }

    return false;
}

export async function submitQuestion(userId, levelId, questionId, payload) {
    const question = await prisma.levelQuestion.findFirst({
        where: { id: questionId, levelId },
    });

    if (!question) {
        throw new ApiError(404, 'Soal tidak ditemukan pada level ini.');
    }

    const attempt = await prisma.questionAttempt.findFirst({
        where: { userId, questionId, status: 'pending' },
        orderBy: { startedAt: 'desc' },
    });

    if (!attempt) {
        throw new ApiError(400, 'Belum ada sesi soal yang dimulai. Panggil endpoint /start terlebih dahulu.');
    }

    const now = new Date();
    const elapsedSeconds = (now.getTime() - attempt.startedAt.getTime()) / 1000;

    let isTimeout = false;
    if (
        question.timeLimitSeconds != null &&
        elapsedSeconds > question.timeLimitSeconds + TIME_TOLERANCE_SECONDS
    ) {
        isTimeout = true;
    }

    const isCorrect = isTimeout ? false : evaluateAnswer(question, payload);

    await prisma.questionAttempt.update({
        where: { id: attempt.id },
        data: {
            submittedAt: now,
            status: isTimeout ? 'timeout' : 'answered',
            isCorrect,
        },
    });

    const xpEarned = isCorrect ? XP_REWARD[question.type] : 0;

    if (xpEarned > 0) {
        await prisma.userStats.update({
            where: { userId },
            data: { totalXp: { increment: xpEarned } },
        });
    }

    return {
        isCorrect,
        isTimeout,
        xpEarned,
        correctAnswer: isCorrect ? undefined : question.correctAnswer,
    };
}

export async function completeLevel(userId, levelId) {
    const level = await prisma.level.findUnique({
        where: { id: levelId },
        include: { questions: true },
    });

    if (!level) {
        throw new ApiError(404, 'Level tidak ditemukan.');
    }

    const questionIds = level.questions.map((q) => q.id);
    const attempts = await prisma.questionAttempt.findMany({
        where: {
            userId,
            questionId: { in: questionIds },
            status: { in: ['answered', 'timeout'] },
        },
        orderBy: { submittedAt: 'desc' },
    });

    const latestAttemptPerQuestion = new Map();
    for (const attempt of attempts) {
        if (!latestAttemptPerQuestion.has(attempt.questionId)) {
            latestAttemptPerQuestion.set(attempt.questionId, attempt);
        }
    }

    let correctCount = 0;
    let correctCameraCount = 0;

    for (const question of level.questions) {
        const attempt = latestAttemptPerQuestion.get(question.id);
        if (attempt && attempt.status === 'answered' && attempt.isCorrect) {
            correctCount += 1;
            if (question.type === 'camera_practice') {
                correctCameraCount += 1;
            }
        }
    }

    const scorePercentage = level.questions.length > 0
        ? Math.round((correctCount / level.questions.length) * 100)
        : 0;

    const isPassed = scorePercentage >= level.minScoreToUnlockNext;

    const existingProgress = await prisma.userProgress.findUnique({
        where: { userId_levelId: { userId, levelId } },
    });

    const isFirstPass = isPassed && existingProgress?.status !== 'completed';
    const bestScore = Math.max(scorePercentage, existingProgress?.bestScore ?? 0);

    await prisma.userProgress.upsert({
        where: { userId_levelId: { userId, levelId } },
        update: {
            status: isPassed ? 'completed' : (existingProgress?.status ?? 'available'),
            bestScore,
            completedAt: isPassed ? (existingProgress?.completedAt ?? new Date()) : existingProgress?.completedAt,
        },
        create: {
            userId,
            levelId,
            status: isPassed ? 'completed' : 'available',
            bestScore,
            completedAt: isPassed ? new Date() : null,
        },
    });

    if (isPassed) {
        const nextLevel = await prisma.level.findFirst({
            where: { orderIndex: level.orderIndex + 1 },
        });

        if (nextLevel) {
            await prisma.userProgress.upsert({
                where: { userId_levelId: { userId, levelId: nextLevel.id } },
                update: {},
                create: {
                    userId,
                    levelId: nextLevel.id,
                    status: 'available',
                },
            });
        }

        if (isFirstPass) {
            await incrementQuestProgress(userId, 'levels_completed');
        }

        if (scorePercentage === 100 && (!existingProgress || existingProgress.bestScore < 100)) {
            await incrementQuestProgress(userId, 'perfect_scores');
        }
    }

    const stats = await updateStatsAfterSession(userId, level, correctCameraCount, isFirstPass);

    return {
        scorePercentage,
        isPassed,
        correctCount,
        totalQuestions: level.questions.length,
        stats,
    };
}

async function updateStatsAfterSession(userId, level, correctCameraCount, isFirstPass) {
    const stats = await prisma.userStats.findUnique({ where: { userId } });
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let newStreak = stats.dayStreak;
    const lastActive = stats.lastActiveDate ? new Date(stats.lastActiveDate) : null;

    if (!lastActive) {
        newStreak = 1;
    } else {
        const diffDays = Math.floor((today - lastActive) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
            newStreak += 1;
        } else if (diffDays > 1) {
            newStreak = 1;
        }
    }

    const wordsIncrement = isFirstPass ? correctCameraCount : 0;

    const updatedStats = await prisma.userStats.update({
        where: { userId },
        data: {
            dayStreak: newStreak,
            lastActiveDate: today,
            ...(wordsIncrement > 0 && { wordsCollected: { increment: wordsIncrement } }),
        },
    });

    await syncQuestProgress(userId, 'streak_days', updatedStats.dayStreak);
    await syncQuestProgress(userId, 'words_collected', updatedStats.wordsCollected);

    return updatedStats;
}