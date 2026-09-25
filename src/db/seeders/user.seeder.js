import { prisma } from '../prismaClient.js';
import { hashPassword } from '../../utils/password.js';

export async function seedUsers() {
    console.log('[*] Seeding Dummy Users...');
    const defaultPasswordHash = await hashPassword('password123');

    // Ambil shop items untuk avatar dummy jika ada
    const shopItems = await prisma.shopItem.findMany({
        orderBy: { price: 'asc' },
    });

    const dummyUsersData = [
        {
            email: 'rosso@gmail.com',
            username: 'Rosso',
            totalXp: 480,
            currencyBalance: 250,
            dayStreak: 7,
            wordsCollected: 12,
            avatarIndex: shopItems.length > 2 ? 2 : null,
        },
        {
            email: 'martini@gmail.com',
            username: 'Martini',
            totalXp: 380,
            currencyBalance: 180,
            dayStreak: 5,
            wordsCollected: 9,
            avatarIndex: shopItems.length > 1 ? 1 : null,
        },
        {
            email: 'vermouth@gmail.com',
            username: 'Vermouth',
            totalXp: 290,
            currencyBalance: 120,
            dayStreak: 4,
            wordsCollected: 7,
            avatarIndex: shopItems.length > 0 ? 0 : null,
        },
        {
            email: 'whiskey@gmail.com',
            username: 'Whiskey',
            totalXp: 210,
            currencyBalance: 90,
            dayStreak: 3,
            wordsCollected: 5,
            avatarIndex: null,
        },
        {
            email: 'gin@gmail.com',
            username: 'Gin',
            totalXp: 140,
            currencyBalance: 60,
            dayStreak: 2,
            wordsCollected: 3,
            avatarIndex: null,
        },
        {
            email: 'liquor@gmail.com',
            username: 'Liquor',
            totalXp: 60,
            currencyBalance: 20,
            dayStreak: 1,
            wordsCollected: 2,
            avatarIndex: null,
        },
    ];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const createdUsers = [];
    for (const d of dummyUsersData) {
        let user = await prisma.user.findUnique({ where: { email: d.email } });

        if (!user) {
            const avatarId = d.avatarIndex != null ? shopItems[d.avatarIndex]?.id : null;

            user = await prisma.user.create({
                data: {
                    email: d.email,
                    username: d.username,
                    passwordHash: defaultPasswordHash,
                    onboardingCompleted: true,
                    activeAvatarId: avatarId,
                    stats: {
                        create: {
                            totalXp: d.totalXp,
                            currencyBalance: d.currencyBalance,
                            dayStreak: d.dayStreak,
                            lastActiveDate: today,
                            wordsCollected: d.wordsCollected,
                        },
                    },
                },
            });

            // Jika user menggunakan avatar, tambahkan ke inventori
            if (avatarId) {
                await prisma.userInventory.create({
                    data: {
                        userId: user.id,
                        shopItemId: avatarId,
                    },
                });
            }
        }
        createdUsers.push(user);
    }

    console.log(`   [+] ${createdUsers.length} Dummy users added.`);
    return createdUsers;
}
