import { prisma } from "../../db/prismaClient.js";
import { ApiError } from "../../utils/ApiError.js";

function sanitizeUser(user) {
  const { passwordHash, ...safeUser } = user;

  return {
    ...safeUser,
    hasPassword: Boolean(passwordHash),
  };
}

export async function getUserProfile(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { activeAvatar: true },
  });

  if (!user) {
    throw new ApiError(404, "User tidak ditemukan.");
  }

  return sanitizeUser(user);
}

export async function updateUserProfile(userId, updates) {
  if (updates.activeAvatarId) {
    const owned = await prisma.userInventory.findUnique({
      where: {
        userId_shopItemId: {
          userId,
          shopItemId: updates.activeAvatarId,
        },
      },
    });

    if (!owned) {
      throw new ApiError(403, "Avatar tersebut belum dimiliki oleh user ini.");
    }
  }

  const user = await prisma.user.update({
    where: { id: userId },
    data: updates,
    include: { activeAvatar: true },
  });

  return sanitizeUser(user);
}

export async function completeOnboarding(userId) {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { onboardingCompleted: true },
  });

  return sanitizeUser(user);
}

export async function getUserStats(userId) {
  let stats = await prisma.userStats.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          username: true,
          activeAvatar: {
            select: { id: true, name: true, imageUrl: true },
          },
        },
      },
    },
  });

  if (!stats) {
    stats = await prisma.userStats.create({
      data: { userId },
      include: {
        user: {
          select: {
            username: true,
            activeAvatar: {
              select: { id: true, name: true, imageUrl: true },
            },
          },
        },
      },
    });
  }

  const higherCount = await prisma.userStats.count({
    where: { totalXp: { gt: stats.totalXp } },
  });

  const { user, ...cleanStats } = stats;

  return {
    ...cleanStats,
    rank: higherCount + 1,
    avatar: user?.activeAvatar?.imageUrl || null,
    activeAvatarId: user?.activeAvatar?.id || null,
    username: user?.username || null,
  };
}
