import { prisma } from '../../db/prismaClient.js';
import { ApiError } from '../../utils/ApiError.js';

// Get all items & ownership status per user
export async function listShopItemsForUser(userId) {
    const items = await prisma.shopItem.findMany();
    const inventory = await prisma.userInventory.findMany({ where: { userId } });
    const ownedIds = new Set(inventory.map((inv) => inv.shopItemId));

    return items.map((item) => ({
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        isOwned: ownedIds.has(item.id),
    }));
}

// Purchase item with currency
export async function purchaseItem(userId, shopItemId) {
    const item = await prisma.shopItem.findUnique({ where: { id: shopItemId } });
    if (!item) {
        throw new ApiError(404, 'Item tidak ditemukan.');
    }

    const alreadyOwned = await prisma.userInventory.findUnique({
        where: { userId_shopItemId: { userId, shopItemId } },
    });
    if (alreadyOwned) {
        throw new ApiError(409, 'Item ini sudah dimiliki.');
    }

    const stats = await prisma.userStats.findUnique({ where: { userId } });
    if (stats.currencyBalance < item.price) {
        throw new ApiError(400, 'Saldo currency tidak mencukupi.');
    }

    const [updateResult] = await prisma.$transaction([
        prisma.userStats.updateMany({
            where: { userId, currencyBalance: { gte: item.price } },
            data: { currencyBalance: { decrement: item.price } },
        }),
        prisma.userInventory.create({
            data: { userId, shopItemId },
        }),
    ]);

    if (updateResult.count === 0) {
        throw new ApiError(400, 'Saldo currency tidak mencukupi.');
    }

    const updatedStats = await prisma.userStats.findUnique({ where: { userId } });

    return {
        itemId: shopItemId,
        newCurrencyBalance: updatedStats.currencyBalance,
    };
}