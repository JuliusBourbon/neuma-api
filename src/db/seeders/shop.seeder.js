import { prisma } from '../prismaClient.js';

export const shopItemData = Array.from({ length: 18 }).map((_, i) => {
    const mascotNumber = i + 1;
    // Set price progressively for demonstration (e.g. 50, 100, 150...)
    const price = 50 * (Math.floor(i / 3) + 1); 
    return {
        name: { id: `Mascot ${mascotNumber}`, en: `Mascot ${mascotNumber}` },
        imageUrl: `https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_${mascotNumber}.png`,
        price: price,
    };
});

export async function seedShop() {
    console.log('[*] Seeding Shop Items (Avatars)...');
    const createdItems = [];

    for (const item of shopItemData) {
        const existing = await prisma.shopItem.findFirst({
            where: {
                name: {
                    path: ['id'],
                    equals: item.name.id,
                },
            },
        });

        if (existing) {
            createdItems.push(existing);
        } else {
            const created = await prisma.shopItem.create({ data: item });
            createdItems.push(created);
        }
    }

    console.log(`   [+] ${createdItems.length} Shop Items added.`);
    return createdItems;
}
