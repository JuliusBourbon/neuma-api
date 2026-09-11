import { prisma } from '../prismaClient.js';

export const questData = [
    {
        title: { id: 'Langkah Pertama', en: 'First Steps' },
        description: {
            id: 'Selesaikan 1 level pembelajaran apa saja.',
            en: 'Complete any 1 learning level.',
        },
        targetType: 'levels_completed',
        targetValue: 1,
        rewardCurrency: 50,
    },
    {
        title: { id: 'Penjelajah Isyarat', en: 'Sign Explorer' },
        description: {
            id: 'Selesaikan 3 level pembelajaran.',
            en: 'Complete 3 learning levels.',
        },
        targetType: 'levels_completed',
        targetValue: 3,
        rewardCurrency: 120,
    },
    {
        title: { id: 'Semangat Membara', en: 'On Fire' },
        description: {
            id: 'Pertahankan streak belajar selama 3 hari.',
            en: 'Maintain a learning streak for 3 days.',
        },
        targetType: 'streak_days',
        targetValue: 3,
        rewardCurrency: 100,
    },
    {
        title: { id: 'Kolektor Huruf', en: 'Letter Collector' },
        description: {
            id: 'Kuasai 3 huruf isyarat lewat latihan kamera.',
            en: 'Master 3 sign letters through camera practice.',
        },
        targetType: 'words_collected',
        targetValue: 3,
        rewardCurrency: 75,
    },
    {
        title: { id: 'Presisi Sempurna', en: 'Flawless Precision' },
        description: {
            id: 'Dapatkan skor 100% pada level apa saja.',
            en: 'Achieve 100% score on any level.',
        },
        targetType: 'perfect_scores',
        targetValue: 1,
        rewardCurrency: 80,
    },
];

export async function seedQuests() {
    console.log('[*] Seeding Quests...');
    const createdQuests = [];

    for (const q of questData) {
        const existing = await prisma.quest.findFirst({
            where: {
                title: {
                    path: ['id'],
                    equals: q.title.id,
                },
            },
        });

        if (existing) {
            createdQuests.push(existing);
        } else {
            const created = await prisma.quest.create({ data: q });
            createdQuests.push(created);
        }
    }

    console.log(`   [+] ${createdQuests.length} Quests added.`);
    return createdQuests;
}
