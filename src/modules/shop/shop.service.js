import { prisma } from "../../db/prismaClient.js";
import { ApiError } from "../../utils/ApiError.js";
import { incrementQuestProgress } from "../quests/questProgress.service.js";

export async function listShopItemsForUser(userId) {
  const items = await prisma.shopItem.findMany({
    orderBy: { price: 'asc' },
  });

  const inventory = await prisma.userInventory.findMany({
    where: { userId },
  });

  const ownedIds = new Set(inventory.map((inv) => inv.shopItemId));

  return items.map((item) => ({
    id: item.id,
    name: item.name,
    imageUrl: item.imageUrl,
    price: item.price,
    isOwned: ownedIds.has(item.id),
  }));
}

export async function purchaseItem(userId, shopItemId) {
  const result = await prisma.$transaction(async (tx) => {
    const item = await tx.shopItem.findUnique({
      where: { id: shopItemId },
    });

    if (!item) {
      throw new ApiError(404, "Item tidak ditemukan.");
    }

    const alreadyOwned = await tx.userInventory.findUnique({
      where: {
        userId_shopItemId: {
          userId,
          shopItemId,
        },
      },
    });

    if (alreadyOwned) {
      throw new ApiError(409, "Item ini sudah dimiliki.");
    }

    const stats = await tx.userStats.findUnique({
      where: { userId },
    });

    if (!stats) {
      throw new ApiError(404, "Statistik user tidak ditemukan.");
    }

    if (stats.currencyBalance < item.price) {
      throw new ApiError(400, "Saldo currency tidak mencukupi.");
    }

    const updatedStats = await tx.userStats.update({
      where: { userId },
      data: {
        currencyBalance: {
          decrement: item.price,
        },
      },
    });

    await tx.userInventory.create({
      data: {
        userId,
        shopItemId,
      },
    });

    return {
      itemId: shopItemId,
      newCurrencyBalance: updatedStats.currencyBalance,
    };
  });

  await incrementQuestProgress(userId, 'avatars_collected');

  return result;
}
