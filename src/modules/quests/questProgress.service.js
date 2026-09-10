import { prisma } from '../../db/prismaClient.js';

// Get all quest with this type that haven't been claimed by user
export async function syncQuestProgress(userId, targetType, newValue) {
    const quests = await prisma.quest.findMany({
        where: { targetType },
    });

    if (quests.length === 0) return;

    for (const quest of quests) {
        const userQuest = await prisma.userQuest.findUnique({
            where: { userId_questId: { userId, questId: quest.id } },
        });

        if (userQuest?.status === 'claimed') continue;

        const currentProgress = Math.min(newValue, quest.targetValue);
        const isAchieved = currentProgress >= quest.targetValue;

        await prisma.userQuest.upsert({
            where: { userId_questId: { userId, questId: quest.id } },
            update: {
                currentProgress,
                status: isAchieved ? 'achieved' : 'in_progress',
            },
            create: {
                userId,
                questId: quest.id,
                currentProgress,
                status: isAchieved ? 'achieved' : 'in_progress',
            },
        });
    }
}

export async function incrementQuestProgress(userId, targetType) {
    const quests = await prisma.quest.findMany({ where: { targetType } });
    if (quests.length === 0) return;

    for (const quest of quests) {
        const userQuest = await prisma.userQuest.findUnique({
            where: { userId_questId: { userId, questId: quest.id } },
        });

        if (userQuest?.status === 'claimed') continue;

        const nextProgress = Math.min((userQuest?.currentProgress ?? 0) + 1, quest.targetValue);
        const isAchieved = nextProgress >= quest.targetValue;

        await prisma.userQuest.upsert({
            where: { userId_questId: { userId, questId: quest.id } },
            update: {
                currentProgress: nextProgress,
                status: isAchieved ? 'achieved' : 'in_progress',
            },
            create: {
                userId,
                questId: quest.id,
                currentProgress: nextProgress,
                status: isAchieved ? 'achieved' : 'in_progress',
            },
        });
    }
}