import { prisma } from '../prismaClient.js';

export async function seedLevels() {
    console.log('[*] Seeding 10 Levels, Materials & Questions...');
    const createdLevels = [];

    const defaultMediaUrl = 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg';

    const levelsData = [
        // Level 1: Huruf A
        {
            orderIndex: 1,
            type: 'learning',
            title: { id: 'Level 1: Huruf A', en: 'Level 1: Letter A' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf A.',
                en: 'Learn the basics of BISINDO sign language for letter A.',
            },
            minScoreToUnlockNext: 70,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Ini adalah huruf A dalam BISINDO. Isyarat dibentuk menggunakan kedua belah tangan secara bersamaan dan simetris, saling berhadapan di depan dada',
                            en: 'This is the letter A in BISINDO. The sign is formed using both hands simultaneously and symmetrically, facing each other in front of the chest.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Kedua ujung jari telunjuk saling bersentuhan di bagian atas unuk menjadi puncak huruf "A" dan Kedua ibu jari direntangkan mendatar ke arah dalam dan ujungnya saling menempel di bagian tengah sebagai palang horizonal.',
                            en: 'The fingertips of both index fingers touch at the top to form the peak of the letter "A". The two thumbs are extended horizontally inward, with their tips touching in the middle to form a horizontal bar.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_a.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari tengah, manis, dan kelingking benar benar tertekuk rapat. Jika ikut terbuka, bentuk segitiga "A" menjadi tidak terbaca jelas',
                            en: 'Ensure the middle, ring, and pinky fingers are tightly bent. If they are also open, the triangle shape of "A" will not be clearly legible.',
                        },
                        // mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_a.jpg',
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah deskripsi yang tepat untuk huruf BISINDO A?',
                            en: 'Which statement accurately describes the BISINDO sign for letter A?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan membentuk segitiga di depan dada', en: 'Both hands form a triangle in front of the chest', image_url: null },
                                { key: 'b', id: 'Kedua tangan membentuk lingkaran di depan dada', en: 'Both hands form a circle in front of the chest', image_url: null },
                                { key: 'c', id: 'Kedua tangan membentuk kotak di depan dada', en: 'Both hands form a square in front of the chest', image_url: null },
                                { key: 'd', id: 'Kedua tangan membentuk trapesium di depan dada', en: 'Both hands form a trapezoid in front of the chest', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakan yang termasuk huruf BISINDO A?',
                            en: 'Which image is the BISINDO letter A?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO A?',
                            en: 'Is the following image an example of the BISINDO letter A?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg',
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'true',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO A di depan kamera!",
                            en: "Sign letter 'A' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'A',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO A di depan kamera!",
                            en: "Once again! Sign letter 'A' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'A',
                        timeLimitSeconds: 20,
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['A', 'A', 'A'],
                        },
                        correctAnswer: 'AAA',
                        timeLimitSeconds: 40,
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
        },

        // Level 2: Huruf B
        {
            orderIndex: 2,
            type: 'learning',
            title: { id: 'Level 2: Huruf B', en: 'Level 2: Letter B' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf B.',
                en: 'Learn the basics of BISINDO sign language for letter B.',
            },
            minScoreToUnlockNext: 70,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Huruf B diperagakan dengan membuka kedua tangan tegak lurus, telapak tangan menghadap ke depan dengan jari-jari rapat.',
                            en: 'Letter B is performed with both hands open upright, palms facing forward with fingers together.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Posisikan kedua tangan tegak sejajar di depan dada dengan jemari lurus ke atas.',
                            en: 'Position both hands parallel upright in front of the chest with fingers pointing straight up.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Bagaimanakah posisi tangan untuk memperagakan huruf B dalam BISINDO?',
                            en: 'What is the hand position to sign letter B in BISINDO?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan terbuka tegak lurus menghadap depan', en: 'Both hands open upright facing forward', image_url: null },
                                { key: 'b', id: 'Mengepalkan tangan dengan jempol tegak', en: 'Fist with thumb upright', image_url: null },
                                { key: 'c', id: 'Melengkungkan jari ke bawah', en: 'Curving fingers downward', image_url: null },
                                { key: 'd', id: 'Mengangkat hanya jari kelingking', en: 'Raising only pinky finger', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 30,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Benar atau salah: Huruf B diperagakan dengan kedua telapak tangan terbuka dan jari rapat menghadap depan.',
                            en: 'True or False: Letter B is signed with both open palms facing forward with fingers together.',
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
                            id: "Peragakan huruf 'B' di depan kamera dan tahan posisi sampai terdeteksi.",
                            en: "Show letter 'B' in front of camera and hold position until detected.",
                        },
                        options: null,
                        correctAnswer: 'B',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan kembali huruf 'B' di depan kamera dengan stabil.",
                            en: "Show letter 'B' in front of camera again steadily.",
                        },
                        options: null,
                        correctAnswer: 'B',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
        },

        // Level 3: Huruf C
        {
            orderIndex: 3,
            type: 'learning',
            title: { id: 'Level 3: Huruf C', en: 'Level 3: Letter C' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf C.',
                en: 'Learn the basics of BISINDO sign language for letter C.',
            },
            minScoreToUnlockNext: 70,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Huruf C diperagakan dengan melengkungkan jari-jari satu tangan membentuk setengah lingkaran mirip huruf C.',
                            en: 'Letter C is signed by curving the fingers of one hand into a half-circle resembling letter C.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Arahkan bukaan lengkungan huruf C ke samping agar bentuknya terlihat jelas oleh lawan bicara.',
                            en: 'Point the opening of the curve to the side so the C shape is clearly visible.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Bentuk apakah yang dibuat oleh jari tangan saat memperagakan huruf C?',
                            en: 'What shape is formed by the hand when signing letter C?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Melengkung membentuk setengah lingkaran C', en: 'Curved forming a half circle C', image_url: null },
                                { key: 'b', id: 'Mengepal erat', en: 'Tight fist', image_url: null },
                                { key: 'c', id: 'Menjulurkan dua jari mendatar', en: 'Extending two fingers horizontally', image_url: null },
                                { key: 'd', id: 'Menunjuk ke atas', en: 'Pointing upward', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 30,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Benar atau salah: Huruf C dibentuk dengan melengkungkan jari tangan menyerupai busur C.',
                            en: 'True or False: Letter C is formed by curving hand fingers resembling an arc C.',
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
                            id: "Peragakan huruf 'C' di depan kamera dan tahan posisi sampai terdeteksi.",
                            en: "Show letter 'C' in front of camera and hold position until detected.",
                        },
                        options: null,
                        correctAnswer: 'C',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan kembali huruf 'C' di depan kamera dengan stabil.",
                            en: "Show letter 'C' in front of camera again steadily.",
                        },
                        options: null,
                        correctAnswer: 'C',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
        },

        // Level 4: Huruf D
        {
            orderIndex: 4,
            type: 'test',
            title: { id: 'Level 4: Huruf D', en: 'Level 4: Letter D' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf D.',
                en: 'Learn the basics of BISINDO sign language for letter D.',
            },
            minScoreToUnlockNext: 70,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Huruf D diperagakan dengan jari telunjuk tegak lurus ke atas, sedangkan ibu jari dan jari lainnya melingkar saling bersentuhan.',
                            en: 'Letter D is formed with the index finger pointing upright, while thumb and other fingers form a circle.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Hanya jari telunjuk yang lurus tegak ke atas menyerupai tiang garis vertikal huruf D.',
                            en: 'Only the index finger stands straight up representing the vertical line of letter D.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Jari manakah yang berdiri tegak lurus ke atas saat membentuk huruf D?',
                            en: 'Which finger points straight up when signing letter D?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari telunjuk tegak lurus ke atas', en: 'Index finger straight up', image_url: null },
                                { key: 'b', id: 'Ibu jari', en: 'Thumb', image_url: null },
                                { key: 'c', id: 'Jari kelingking', en: 'Pinky finger', image_url: null },
                                { key: 'd', id: 'Jari tengah', en: 'Middle finger', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 30,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Benar atau salah: Pada huruf D, jari telunjuk tegak ke atas sementara jari lainnya membentuk lingkaran.',
                            en: 'True or False: For letter D, index finger points up while other fingers form a circle.',
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
                            id: "Peragakan huruf 'D' di depan kamera dan tahan posisi sampai terdeteksi.",
                            en: "Show letter 'D' in front of camera and hold position until detected.",
                        },
                        options: null,
                        correctAnswer: 'D',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan kembali huruf 'D' di depan kamera dengan stabil.",
                            en: "Show letter 'D' in front of camera again steadily.",
                        },
                        options: null,
                        correctAnswer: 'D',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
        },

        // Level 5: Huruf E
        {
            orderIndex: 5,
            type: 'test',
            title: { id: 'Level 5: Huruf E', en: 'Level 5: Letter E' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf E.',
                en: 'Learn the basics of BISINDO sign language for letter E.',
            },
            minScoreToUnlockNext: 70,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Huruf E diperagakan dengan menekuk semua ujung jari ke bawah mendekati telapak tangan dan menyentuh ibu jari.',
                            en: 'Letter E is signed by bending all fingertips down toward the palm touching the thumb.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Bentuk cengkeraman rapat dengan ujung-ujung jari bertumpu ringan pada ibu jari yang terlipat mendatar.',
                            en: 'Form a tight grip with fingertips resting lightly on the thumb folded horizontally.',
                        },
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Bagaimanakah posisi jari-jari tangan saat membentuk huruf E?',
                            en: 'How are fingers positioned when signing letter E?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Semua ujung jari ditekuk ke bawah menyentuh ibu jari', en: 'All fingertips bent downward touching the thumb', image_url: null },
                                { key: 'b', id: 'Semua jari terbuka lurus', en: 'All fingers open straight', image_url: null },
                                { key: 'c', id: 'Membentuk tanda perdamaian (dua jari)', en: 'Peace sign (two fingers)', image_url: null },
                                { key: 'd', id: 'Hanya ibu jari yang berdiri', en: 'Only thumb standing', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 30,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Benar atau salah: Pada huruf E, semua ujung jari dilipat ke bawah menyentuh ibu jari.',
                            en: 'True or False: In letter E, all fingertips curl down touching the thumb.',
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
                            id: "Peragakan huruf 'E' di depan kamera dan tahan posisi sampai terdeteksi.",
                            en: "Show letter 'E' in front of camera and hold position until detected.",
                        },
                        options: null,
                        correctAnswer: 'E',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan kembali huruf 'E' di depan kamera dengan stabil.",
                            en: "Show letter 'E' in front of camera again steadily.",
                        },
                        options: null,
                        correctAnswer: 'E',
                        timeLimitSeconds: 25,
                        mediaUrl: defaultMediaUrl,
                    },
                ],
            },
        },

    ];

    for (const data of levelsData) {
        let level = await prisma.level.findFirst({
            where: { orderIndex: data.orderIndex },
        });

        if (!level) {
            level = await prisma.level.create({ data });
            console.log(`   [+] Level ${data.orderIndex} (${data.title.id}) added.`);
        } else {
            // Clean up old materials & questions so they are replaced cleanly with the new single-letter data
            await prisma.levelMaterial.deleteMany({
                where: { levelId: level.id },
            });
            await prisma.levelQuestion.deleteMany({
                where: { levelId: level.id },
            });

            level = await prisma.level.update({
                where: { id: level.id },
                data: {
                    title: data.title,
                    description: data.description,
                    minScoreToUnlockNext: data.minScoreToUnlockNext,
                    type: data.type,
                    materials: data.materials,
                    questions: data.questions,
                },
            });
            console.log(`   [*] Level ${data.orderIndex} (${data.title.id}) updated.`);
        }
        createdLevels.push(level);
    }

    console.log(`[✓] Successfully processed ${createdLevels.length} levels.`);
    return createdLevels;
}
