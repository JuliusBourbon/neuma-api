import 'dotenv/config';
import { prisma } from '../prismaClient.js';
import { seedShop } from './shop.seeder.js';
import { seedQuests } from './quest.seeder.js';
import { seedLevels } from './level.seeder.js';
import { seedUsers } from './user.seeder.js';

async function main() {
    console.log('Start Seeding...');

    // 1. Seed Shop Items (Avatar)
    await seedShop();

    // 2. Seed Quests (Misi)
    await seedQuests();

    // 3. Seed Levels, Materials & Questions
    await seedLevels();

    // 4. Seed Dummy Users (Leaderboard) - butuh ShopItem sudah ada
    await seedUsers();

    console.log('All data seeded successfully!');
    console.log('Data ready to test:');
    console.log('1. Shop Items : 4 Avatars');
    console.log('2. Quests     : 5 Missions (levels, streak, words, perfect)');
    console.log('3. Levels     : Level 1 (Letters A-C) & Level 2 (Letters D-F)');
    console.log('4. Users      : 6 Dummy Users (Password: password123)');
}

main()
    .catch((error) => {
        console.error('Error seeding:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
