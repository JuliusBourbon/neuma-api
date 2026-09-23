import { prisma } from '../prismaClient.js';

export const questData = [
    { title: { id: 'Pelajaran Pertama', en: 'First Lesson' }, description: { id: 'Selesaikan 1 pelajaran pertama.', en: 'Complete your first lesson.' }, targetType: 'learning_completed', targetValue: 1, rewardCurrency: 10 },
    { title: { id: 'Tes Pertama', en: 'First Test' }, description: { id: 'Selesaikan 1 tes pertama.', en: 'Complete your first test.' }, targetType: 'test_completed', targetValue: 1, rewardCurrency: 10 },
    { title: { id: '10 Pelajaran Sempurna', en: '10 Perfect Lesson' }, description: { id: 'Dapatkan skor sempurna di 10 pelajaran.', en: 'Get a perfect score in 10 lessons.' }, targetType: 'perfect_learning', targetValue: 10, rewardCurrency: 50 },
    { title: { id: '20 Pelajaran Sempurna', en: '20 Perfect Lesson' }, description: { id: 'Dapatkan skor sempurna di 20 pelajaran.', en: 'Get a perfect score in 20 lessons.' }, targetType: 'perfect_learning', targetValue: 20, rewardCurrency: 100 },
    { title: { id: 'Semua Pelajaran Sempurna', en: 'All Perfect Lesson' }, description: { id: 'Dapatkan skor sempurna di semua pelajaran.', en: 'Get a perfect score in all lessons.' }, targetType: 'perfect_learning', targetValue: 26, rewardCurrency: 200 },
    { title: { id: '3 Tes Sempurna', en: '3 Perfect Test' }, description: { id: 'Dapatkan skor sempurna di 3 tes.', en: 'Get a perfect score in 3 tests.' }, targetType: 'perfect_test', targetValue: 3, rewardCurrency: 50 },
    { title: { id: '6 Tes Sempurna', en: '6 Perfect Test' }, description: { id: 'Dapatkan skor sempurna di 6 tes.', en: 'Get a perfect score in 6 tests.' }, targetType: 'perfect_test', targetValue: 6, rewardCurrency: 100 },
    { title: { id: '9 Tes Sempurna', en: '9 Perfect Test' }, description: { id: 'Dapatkan skor sempurna di 9 tes.', en: 'Get a perfect score in 9 tests.' }, targetType: 'perfect_test', targetValue: 9, rewardCurrency: 150 },
    { title: { id: 'Semua Tes Sempurna', en: 'All Perfect Test' }, description: { id: 'Dapatkan skor sempurna di semua tes.', en: 'Get a perfect score in all tests.' }, targetType: 'perfect_test', targetValue: 10, rewardCurrency: 200 },
    { title: { id: 'Kumpulkan 5 Alfabet', en: 'Collect 5 Alphabet' }, description: { id: 'Kumpulkan 5 huruf alfabet.', en: 'Collect 5 alphabets.' }, targetType: 'words_collected', targetValue: 5, rewardCurrency: 50 },
    { title: { id: 'Kumpulkan 10 Alfabet', en: 'Collect 10 Alphabet' }, description: { id: 'Kumpulkan 10 huruf alfabet.', en: 'Collect 10 alphabets.' }, targetType: 'words_collected', targetValue: 10, rewardCurrency: 100 },
    { title: { id: 'Kumpulkan 15 Alfabet', en: 'Collect 15 Alphabet' }, description: { id: 'Kumpulkan 15 huruf alfabet.', en: 'Collect 15 alphabets.' }, targetType: 'words_collected', targetValue: 15, rewardCurrency: 150 },
    { title: { id: 'Kumpulkan 20 Alfabet', en: 'Collect 20 Alphabet' }, description: { id: 'Kumpulkan 20 huruf alfabet.', en: 'Collect 20 alphabets.' }, targetType: 'words_collected', targetValue: 20, rewardCurrency: 200 },
    { title: { id: 'Kumpulkan Semua Alfabet', en: 'Collect All Alphabet' }, description: { id: 'Kumpulkan semua huruf alfabet.', en: 'Collect all alphabets.' }, targetType: 'words_collected', targetValue: 26, rewardCurrency: 250 },
    { title: { id: 'Kumpulkan 5 Avatar', en: 'Collect 5 Avatar' }, description: { id: 'Kumpulkan 5 avatar di toko.', en: 'Collect 5 avatars.' }, targetType: 'avatars_collected', targetValue: 5, rewardCurrency: 50 },
    { title: { id: 'Kumpulkan 10 Avatar', en: 'Collect 10 Avatar' }, description: { id: 'Kumpulkan 10 avatar di toko.', en: 'Collect 10 avatars.' }, targetType: 'avatars_collected', targetValue: 10, rewardCurrency: 100 },
    { title: { id: 'Kumpulkan Semua Avatar', en: 'Collect All Avatar' }, description: { id: 'Kumpulkan semua avatar.', en: 'Collect all avatars.' }, targetType: 'avatars_collected', targetValue: 18, rewardCurrency: 200 },
    { title: { id: 'Selesaikan Semua Level', en: 'Complete All Level' }, description: { id: 'Selesaikan semua level pembelajaran.', en: 'Complete all levels.' }, targetType: 'learning_completed', targetValue: 26, rewardCurrency: 250 },
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
