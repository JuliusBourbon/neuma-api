import { prisma } from '../../db/prismaClient.js';

const TOP_LIMIT = 100;

// Top 100 based on total XP order descending
export async function getTopLeaderboard() {
    const topStats = await prisma.userStats.findMany({
        take: TOP_LIMIT,
        orderBy: { totalXp: 'desc' },
        include: {
            user: {
                select: {
                    id: true,
                    username: true,
                    activeAvatar: { select: { id: true, name: true, imageUrl: true } },
                },
            },
        },
    });

    return topStats.map((stat, index) => ({
        rank: index + 1,
        userId: stat.userId,
        username: stat.user.username,
        avatar: stat.user.activeAvatar,
        totalXp: stat.totalXp,
    }));
}

// My rank even if outside Top 100
export async function getMyRank(userId) {
    const myStats = await prisma.userStats.findUnique({
        where: { userId },
        include: {
            user: {
                select: {
                    username: true,
                    activeAvatar: { select: { id: true, name: true, imageUrl: true } },
                },
            },
        },
    });

    if (!myStats) {
        return null;
    }

    const higherCount = await prisma.userStats.count({
        where: { totalXp: { gt: myStats.totalXp } },
    });

    return {
        rank: higherCount + 1,
        userId,
        username: myStats.user.username,
        avatar: myStats.user.activeAvatar,
        totalXp: myStats.totalXp,
    };
}