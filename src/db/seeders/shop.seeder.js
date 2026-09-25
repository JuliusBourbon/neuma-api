import { prisma } from '../prismaClient.js';

export const shopItemData = [
    {
        name: { id: 'Sunny', en: 'Sunny' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_1.png',
        price: 100,
    },
    {
        name: { id: 'Sully', en: 'Sully' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_2.png',
        price: 100,
    },
    {
        name: { id: 'Giggle', en: 'Giggle' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_3.png',
        price: 200,
    },
    {
        name: { id: 'Finch', en: 'Finch' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_4.png',
        price: 200,
    },
    {
        name: { id: 'Gloom', en: 'Gloom' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_5.png',
        price: 100,
    },
    {
        name: { id: 'Romeo', en: 'Romeo' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_6.png',
        price: 200,
    },
    {
        name: { id: 'Shade', en: 'Shade' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_7.png',
        price: 100,
    },
    {
        name: { id: 'Ragnar', en: 'Ragnar' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_8.png',
        price: 300,
    },
    {
        name: { id: 'Teddy', en: 'Teddy' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_9.png',
        price: 200,
    },
    {
        name: { id: 'Rizzler', en: 'Rizzler' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_10.png',
        price: 300,
    },
    {
        name: { id: 'Wobble', en: 'Wobble' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_11.png',
        price: 200,
    },
    {
        name: { id: 'Orion', en: 'Orion' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_12.png',
        price: 200,
    },
    {
        name: { id: 'Boo', en: 'Boo' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_13.png',
        price: 100,
    },
    {
        name: { id: 'Lucius', en: 'Lucius' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_14.png',
        price: 100,
    },
    {
        name: { id: 'Chad', en: 'Chad' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_15.png',
        price: 300,
    },
    {
        name: { id: 'Berry', en: 'Berry' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_16.png',
        price: 300,
    },
    {
        name: { id: 'Pepper', en: 'Pepper' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_17.png',
        price: 100,
    },
    {
        name: { id: 'Juliet', en: 'Juliet' },
        imageUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/v1790034257/mascot_18.png',
        price: 100,
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
