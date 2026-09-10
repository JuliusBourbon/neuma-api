import { prisma } from '../../db/prismaClient.js';
import { ApiError } from '../../utils/ApiError.js';

// Get all quests and progress
export async function listQuestsForUser(userId) {
    const quests = await prisma.quest.findMany();
    const userQuests = await prisma.userQuest.findMany({ where: { userId } });
    const progressMap = new Map(userQuests.map((uq) => [uq.questId, uq]));

    return quests.map((quest) => {
        const progress = progressMap.get(quest.id);
        return {
            id: quest.id,
            title: quest.title,
            description: quest.description,
            targetType: quest.targetType,
            targetValue: quest.targetValue,
            rewardCurrency: quest.rewardCurrency,
            currentProgress: progress?.currentProgress ?? 0,
            status: progress?.status ?? 'in_progress',
        };
    });
}

export async function claimQuestReward(userId, questId) {
    const userQuest = await prisma.userQuest.findUnique({
        where: { userId_questId: { userId, questId } },
        include: { quest: true },
    });

    if (!userQuest) {
        throw new ApiError(404, 'Progress quest tidak ditemukan.');
    }

    if (userQuest.status === 'claimed') {
        throw new ApiError(409, 'Reward quest ini sudah pernah diklaim.');
    }

    if (userQuest.status !== 'achieved') {
        throw new ApiError(400, 'Quest belum tercapai, reward belum bisa diklaim.');
    }

    const [, updatedStats] = await prisma.$transaction([
        prisma.userQuest.update({
            where: { userId_questId: { userId, questId } },
            data: { status: 'claimed' },
        }),
        prisma.userStats.update({
            where: { userId },
            data: { currencyBalance: { increment: userQuest.quest.rewardCurrency } },
        }),
    ]);

    return {
        questId,
        rewardCurrency: userQuest.quest.rewardCurrency,
        newCurrencyBalance: updatedStats.currencyBalance,
    };
}