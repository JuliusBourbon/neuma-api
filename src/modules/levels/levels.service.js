import { prisma } from '../../db/prismaClient.js';
import { ApiError } from '../../utils/ApiError.js';

// Get all levels with status (locked/available/completed)
export async function listLevelsForUser(userId) {
    const levels = await prisma.level.findMany({
        orderBy: { orderIndex: 'asc' },
    });

    const progressList = await prisma.userProgress.findMany({
        where: { userId },
    });
    const progressMap = new Map(progressList.map((p) => [p.levelId, p]));

    return levels.map((level) => {
        const progress = progressMap.get(level.id);
        return {
            id: level.id,
            orderIndex: level.orderIndex,
            title: level.title,
            description: level.description,
            status: progress?.status ?? (level.orderIndex === 1 ? 'available' : 'locked'),
            bestScore: progress?.bestScore ?? 0,
        };
    });
}

// Get detail of level with materials and questions (without correct answer)
export async function getLevelDetail(levelId, userId) {
    const level = await prisma.level.findUnique({
        where: { id: levelId },
        include: {
            materials: { orderBy: { orderIndex: 'asc' } },
            questions: true,
        },
    });

    if (!level) {
        throw new ApiError(404, 'Level tidak ditemukan.');
    }

    // Ensure user is not accessing a 'locked' level
    const progress = await prisma.userProgress.findUnique({
        where: { userId_levelId: { userId, levelId } },
    });

    const isFirstLevel = level.orderIndex === 1;
    const status = progress?.status ?? (isFirstLevel ? 'available' : 'locked');

    if (status === 'locked') {
        throw new ApiError(403, 'Level ini masih terkunci.');
    }

    return {
        id: level.id,
        title: level.title,
        description: level.description,
        minScoreToUnlockNext: level.minScoreToUnlockNext,
        materials: level.materials,
        questions: level.questions.map(({ correctAnswer, ...q }) => q),
    };
}