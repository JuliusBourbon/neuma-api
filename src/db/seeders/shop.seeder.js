import { prisma } from '../prismaClient.js';

export const shopItemData = [
    {
        name: { id: 'Kancil Pintar', en: 'Clever Mousedeer' },
        imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Kancil',
        price: 50,
    },
    {
        name: { id: 'Garuda Gagah', en: 'Mighty Garuda' },
        imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Garuda',
        price: 100,
    },
    {
        name: { id: 'Komodo Juara', en: 'Champion Komodo' },
        imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Komodo',
        price: 200,
    },
    {
        name: { id: 'Harimau Tangguh', en: 'Fierce Tiger' },
        imageUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=Tiger',
        price: 350,
    },
];

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
