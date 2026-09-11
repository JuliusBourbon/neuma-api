import { prisma } from '../prismaClient.js';

export async function seedLevels() {
    console.log('[*] Seeding Levels, Materials & Questions...');
    const createdLevels = [];

    // Level 1: Huruf A, B, & C
    let level1 = await prisma.level.findFirst({
        where: { orderIndex: 1 },
    });

    if (!level1) {
        level1 = await prisma.level.create({
            data: {
                orderIndex: 1,
                title: { id: 'Level 1: Huruf A, B, & C', en: 'Level 1: Letters A, B, & C' },
                description: {
                    id: 'Pelajari dasar huruf isyarat BISINDO untuk alfabet A, B, dan C.',
                    en: 'Learn the basics of BISINDO sign language for letters A, B, and C.',
                },
                minScoreToUnlockNext: 70,
                materials: {
                    create: [
                        {
                            orderIndex: 1,
                            contentText: {
                                id: 'Huruf A dalam BISINDO diperagakan dengan mengepalkan satu tangan dan posisi ibu jari tegak di samping jari telunjuk.',
                                en: 'Letter A in BISINDO is signed with a closed fist and the thumb pointing upward alongside the index finger.',
                            },
                            mediaUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=BISINDO+Huruf+A',
                        },
                        {
                            orderIndex: 2,
                            contentText: {
                                id: 'Huruf B diperagakan dengan membuka kedua tangan tegak lurus dengan telapak tangan menghadap ke depan.',
                                en: 'Letter B is formed with both hands upright, palms facing forward.',
                            },
                            mediaUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=BISINDO+Huruf+B',
                        },
                        {
                            orderIndex: 3,
                            contentText: {
                                id: 'Huruf C diperagakan dengan melengkungkan jari-jari tangan membentuk setengah lingkaran mirip huruf C.',
                                en: 'Letter C is signed by curving fingers into a half-circle resembling the letter C.',
                            },
                            mediaUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=BISINDO+Huruf+C',
                        },
                    ],
                },
                questions: {
                    create: [
                        {
                            type: 'multiple_choice',
                            questionText: {
                                id: 'Manakah bentuk tangan yang benar untuk memperagakan huruf A?',
                                en: 'Which handshape is correct for letter A?',
                            },
                            options: {
                                choices: [
                                    {
                                        key: 'a',
                                        id: 'Mengepalkan tangan dengan ibu jari tegak di samping',
                                        en: 'Closed fist with thumb upright at side',
                                        image_url: null,
                                    },
                                    {
                                        key: 'b',
                                        id: 'Membuka seluruh telapak tangan menghadap depan',
                                        en: 'Open palm facing forward',
                                        image_url: null,
                                    },
                                    {
                                        key: 'c',
                                        id: 'Melengkungkan jari membentuk huruf C',
                                        en: 'Curved fingers like letter C',
                                        image_url: null,
                                    },
                                ],
                            },
                            correctAnswer: 'a',
                            timeLimitSeconds: 30,
                        },
                        {
                            type: 'true_false',
                            questionText: {
                                id: 'Huruf C dibentuk dengan melengkungkan jari-jari tangan menyerupai busur lingkaran C.',
                                en: 'Letter C is formed by curving fingers into a semi-circular arc.',
                            },
                            options: {
                                choices: [
                                    { key: 'true', id: 'Benar', en: 'True', image_url: null },
                                    { key: 'false', id: 'Salah', en: 'False', image_url: null },
                                ],
                            },
                            correctAnswer: 'true',
                            timeLimitSeconds: 20,
                        },
                        {
                            type: 'camera_practice',
                            questionText: {
                                id: "Peragakan huruf 'A' di depan kamera dan tahan posisi sampai terdeteksi.",
                                en: "Show letter 'A' in front of camera and hold position until detected.",
                            },
                            options: null,
                            correctAnswer: 'A',
                            timeLimitSeconds: 25,
                            mediaUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Praktek+Kamera+Huruf+A',
                        },
                        {
                            type: 'camera_practice',
                            questionText: {
                                id: "Peragakan huruf 'B' di depan kamera dan tahan posisi sampai terdeteksi.",
                                en: "Show letter 'B' in front of camera and hold position until detected.",
                            },
                            options: null,
                            correctAnswer: 'B',
                            timeLimitSeconds: 25,
                            mediaUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Praktek+Kamera+Huruf+B',
                        },
                    ],
                },
            },
        });
        console.log('   [+] Level 1 (Huruf A, B, C) added.');
    } else {
        console.log('   [-] Level 1 already exists, skipped.');
    }
    createdLevels.push(level1);

    // Level 2: Huruf D, E, & F
    let level2 = await prisma.level.findFirst({
        where: { orderIndex: 2 },
    });

    if (!level2) {
        level2 = await prisma.level.create({
            data: {
                orderIndex: 2,
                title: { id: 'Level 2: Huruf D, E, & F', en: 'Level 2: Letters D, E, & F' },
                description: {
                    id: 'Tingkatkan kemampuan isyaratmu dengan mempelajari huruf D, E, dan F.',
                    en: 'Advance your sign language by learning letters D, E, and F.',
                },
                minScoreToUnlockNext: 70,
                materials: {
                    create: [
                        {
                            orderIndex: 1,
                            contentText: {
                                id: 'Huruf D diperagakan dengan jari telunjuk tegak lurus ke atas dan jari lainnya membentuk lingkaran bersama ibu jari.',
                                en: 'Letter D is formed with the index finger pointing up and other fingers touching the thumb.',
                            },
                            mediaUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=BISINDO+Huruf+D',
                        },
                        {
                            orderIndex: 2,
                            contentText: {
                                id: 'Huruf E diperagakan dengan menekuk semua ujung jari ke bawah mendekati telapak tangan menyentuh ibu jari.',
                                en: 'Letter E is signed by bending all fingertips down toward the palm touching the thumb.',
                            },
                            mediaUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=BISINDO+Huruf+E',
                        },
                    ],
                },
                questions: {
                    create: [
                        {
                            type: 'multiple_choice',
                            questionText: {
                                id: 'Jari manakah yang tegak lurus ke atas saat memperagakan huruf D?',
                                en: 'Which finger points straight up when signing letter D?',
                            },
                            options: {
                                choices: [
                                    { key: 'a', id: 'Jari Telunjuk', en: 'Index Finger', image_url: null },
                                    { key: 'b', id: 'Ibu Jari', en: 'Thumb', image_url: null },
                                    { key: 'c', id: 'Jari Kelingking', en: 'Little Finger', image_url: null },
                                ],
                            },
                            correctAnswer: 'a',
                            timeLimitSeconds: 25,
                        },
                        {
                            type: 'camera_practice',
                            questionText: {
                                id: "Peragakan huruf 'D' di depan kamera!",
                                en: "Show letter 'D' in front of camera!",
                            },
                            options: null,
                            correctAnswer: 'D',
                            timeLimitSeconds: 25,
                            mediaUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Praktek+Kamera+Huruf+D',
                        },
                    ],
                },
            },
        });
        console.log('   [+] Level 2 (Huruf D, E, F) added.');
    } else {
        console.log('   [-] Level 2 already exists, skipped.');
    }
    createdLevels.push(level2);

    return createdLevels;
}
