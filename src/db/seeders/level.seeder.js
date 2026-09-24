import { prisma } from '../prismaClient.js';

export async function seedLevels() {
    console.log('[*] Seeding All Levels...');
    const createdLevels = [];
    const levelsData = [
        // Level 1: Huruf A
        {
            orderIndex: 1,
            type: 'learning',
            title: { id: 'Huruf A', en: 'Letter A' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf A.',
                en: 'Learn the basics of BISINDO sign language for letter A.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf A dalam BISINDO.',
                            en: 'Watch the following image. This is the letter A in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua belah tangan secara bersamaan dan simetris, saling berhadapan di depan dada. Kedua ujung jari telunjuk saling bersentuhan di bagian atas unuk menjadi puncak huruf "A" dan Kedua ibu jari direntangkan mendatar ke arah dalam dan ujungnya saling menempel di bagian tengah',
                            en: 'The sign is formed using both hands simultaneously and symmetrically, facing each other in front of the chest. The tips of both index fingers touch at the top to form the peak of the letter "A". The two thumbs are extended horizontally inward, with their tips touching in the middle.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_a.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari tengah, manis, dan kelingking benar benar tertekuk rapat. Jika ikut terbuka, bentuk segitiga "A" menjadi tidak terbaca jelas',
                            en: 'Ensure the middle, ring, and pinky fingers are tightly bent. If they are also open, the triangle shape of "A" will not be clearly legible.',
                        },
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
                            id: 'Manakah gambar yang termasuk huruf BISINDO A?',
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
                    },
                ],
            },
        },

        // Level 2: Huruf B
        {
            orderIndex: 2,
            type: 'learning',
            title: { id: 'Huruf B', en: 'Letter B' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf B.',
                en: 'Learn the basics of BISINDO sign language for letter B.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf B dalam BISINDO.',
                            en: 'Watch the following image. This is the letter B in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua belah tangan dengan 1 jari telunjuk tangan kiri ditegakkan lurus ke atas dan tangan kanan membuka tiga jari mendatar (jari telunjuk, tengah dan manis). Ujung ketiga jari tersebut ditempelkan langsung ke tiang jari telunjuk kiri (di bagian atas, tengah, dan bawah) sehingga membentuk siluet huruf "B" kapital bergaris tiga.',
                            en: 'The sign is formed using both hands with the left index finger extended straight up and the right hand opening three fingers flat (index, middle, and ring fingers). The fingertips of the three fingers are placed directly against the shaft of the left index finger (at the top, middle, and bottom) to form a silhouette of the capital letter "B" with three lines.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_b.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan ujung jari telunjuk, tengah, dan manis kanan benar-benar menempel rata di sepanjang jari telunjuk kiri agar pembagian ruang atas dan bawah huruf "B" terbaca dengan tegas.',
                            en: 'Ensure the fingertips of the right index, middle, and ring fingers are firmly and evenly pressed along the shaft of the left index finger so that the upper and lower divisions of the letter "B" are clearly defined.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO B?',
                            en: 'Which image represents the BISINDO letter B?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar di bawah ini merupakan contoh huruf BISINDO apa?',
                            en: 'What BISINDO letter does the image below represent?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg',
                        options: {
                            choices: [
                                { key: 'a', id: 'A', en: 'A', image_url: null },
                                { key: 'b', id: 'B', en: 'B', image_url: null },
                                { key: 'c', id: 'C', en: 'C', image_url: null },
                                { key: 'd', id: 'D', en: 'D', image_url: null },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah huruf BISINDO B dibentuk dengan 1 jari telunjuk tangan kiri dan 3 jari tangan kanan?',
                            en: 'Is the letter B in BISINDO formed using one extended index finger on the left hand and three fingers extended on the right hand?',
                        },
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
                            id: "Peragakan huruf BISINDO B di depan kamera!",
                            en: "Sign letter 'B' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'B',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO B di depan kamera!",
                            en: "Once again! Sign letter 'B' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'B',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'B', 'B'],
                        },
                        correctAnswer: 'BBB',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 3: Huruf C
        {
            orderIndex: 3,
            type: 'learning',
            title: { id: 'Huruf C', en: 'Letter C' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf C.',
                en: 'Learn the basics of BISINDO sign language for letter C.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf C dalam BISINDO.',
                            en: 'Watch the following image. This is the letter C in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan tangan kanan atau tangan dominan dengan punggung tangan menghadap ke samping luar dan telapak tangan sedikit menghadap ke bagian kiri.',
                            en: 'The sign is formed using the right or dominant hand with the back of the hand facing outward and the palm facing slightly to the left.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_b.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Ibu jari dan jari telunjuk dilengkungkan membentuk busur setengah lingkaran yang saling berhadapan. Sisa jari lainnya ikut ditekuk untuk mempertegas lekukan huruf "C" kapital',
                            en: 'Thumb and index finger are curved to form a semi-circular arc facing each other. The remaining fingers are also bent to emphasize the curve of the capital letter "C".',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO C?',
                            en: 'Which image represents the BISINDO letter C?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar di bawah ini merupakan contoh huruf BISINDO apa?',
                            en: 'What BISINDO letter does the image below represent?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg',
                        options: {
                            choices: [
                                { key: 'a', id: 'A', en: 'A', image_url: null },
                                { key: 'b', id: 'B', en: 'B', image_url: null },
                                { key: 'c', id: 'C', en: 'C', image_url: null },
                                { key: 'd', id: 'D', en: 'D', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah huruf BISINDO C dibentuk dengan seluruh jari yang dibentuk menyerupai huruf "C"?',
                            en: 'Is the letter C in BISINDO formed using all fingers bent to form the letter "C"?',
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO C di depan kamera!",
                            en: "Sign letter 'C' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'C',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO C di depan kamera!",
                            en: "Once again! Sign letter 'C' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'C',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['C', 'C', 'C'],
                        },
                        correctAnswer: 'CCC',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 4: Uji Pemahaman 1
        {
            orderIndex: 4,
            type: 'test',
            title: { id: 'Uji Pemahaman 1', en: 'Comprehension Test 1' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-C.',
                en: 'Test your knowledge of BISINDO sign language for letters A-C.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO A?',
                            en: 'Which image represents the BISINDO letter A?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO B?',
                            en: 'Which image represents the BISINDO letter B?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO C?',
                            en: 'Which image represents the BISINDO letter C?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO A?',
                            en: 'Does the image below represent the BISINDO letter A?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg',
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
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
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO B di depan kamera!",
                            en: "Sign letter 'B' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'B',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO C di depan kamera!",
                            en: "Sign letter 'C' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'C',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['A', 'B', 'C'],
                        },
                        correctAnswer: 'ABC',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'A', 'B', 'A'],
                        },
                        correctAnswer: 'BABA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'A', 'C', 'A'],
                        },
                        correctAnswer: 'BACA',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 5: Huruf D
        {
            orderIndex: 5,
            type: 'learning',
            title: { id: 'Huruf D', en: 'Letter D' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf D.',
                en: 'Learn the basics of BISINDO sign language for letter D.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf D dalam BISINDO.',
                            en: 'Watch the following image. This is the letter D in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan dua tangan dengan 1 jari telunjuk tangan kiri ditegakkan lurus ke atas membentuk tiang vertikal huruf "D".',
                            en: 'The sign is formed using two hands with 1 finger of the left index finger straightened upright forming a vertical pole for the letter "D".',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_d.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Tangan kanan membentuk lengkungan seperti huruf "C" menggunakan ibu jari dan jari telunjuk lalu tempelkan ujung jari telunjuk dan ibu jari kanan ke jari telunjuk kiri hingga membentuk ruang tertutup menyerupai huruf "D" kapital.',
                            en: 'The right hand forms a curve like the letter "C" using the thumb and index finger then touches the tips of the right index finger and thumb to the left index finger to form a closed space resembling the capital letter "D".',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO D?',
                            en: 'Which image represents the BISINDO letter D?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah deskripsi berikut yang sesuai dengan huruf Bisindo "D"?',
                            en: 'Which of the following descriptions corresponds to the BISINDO letter "D"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Tangan kiri dan kanan membentuk segitiga.', en: 'A', image_url: null },
                                { key: 'b', id: 'Tangan kanan membentuk angka 3.', en: 'B', image_url: null },
                                { key: 'c', id: 'Tangan kiri tegak dan kanan membentuk C.', en: 'C', image_url: null },
                                { key: 'd', id: 'Kedua tangan ditutup.', en: 'D', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah huruf D dalam BISINDO dibentuk dengan menggunakan 1 tangan?',
                            en: 'Is the letter D in BISINDO formed using 1 hand?',
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO D di depan kamera!",
                            en: "Sign letter 'D' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'D',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO D di depan kamera!",
                            en: "Once again! Sign letter 'D' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'D',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['D', 'D', 'D'],
                        },
                        correctAnswer: 'DDD',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 6: Huruf E
        {
            orderIndex: 6,
            type: 'learning',
            title: { id: 'Huruf E', en: 'Letter E' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf E.',
                en: 'Learn the basics of BISINDO sign language for letter E.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf E dalam BISINDO.',
                            en: 'Watch the following image. This is the letter E in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan 1 tangan, yaitu tangan kanan, dengan jari telunjuk dan jempol ditekuk, sedangkan jari lainnya membentuk angka 3.',
                            en: 'The sign is formed using 1 hand, namely the right hand, with the index and thumb fingers bent, while the other fingers form the number 3.'
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_e.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Posisi tangan kanan ditegakkan ke samping sehingga menyerupai huruf "E" kapital.',
                            en: 'The position of the right hand is raised to the side so that it resembles a capital letter "E".'
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah deskripsi yang sesuai dengan huruf BISINDO E?',
                            en: 'Which description corresponds to the BISINDO letter E?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Isyarat dibentuk dengan 3 jari tangan kanan yang ditegakkan ke samping.', en: 'The sign is formed using 3 fingers of the right hand raised to the side.', image_url: null },
                                { key: 'b', id: 'Isyarat dibentuk dengan 2 jari tangan kanan yang dibengkokkan.', en: 'The sign is formed using 2 fingers of the right hand that are bent.', image_url: null },
                                { key: 'c', id: 'Isyarat dibentuk dengan 1 jari telunjuk tangan kanan.', en: 'The sign is formed using the index finger of the right hand.', image_url: null },
                                { key: 'd', id: 'Isyarat dibentuk dengan 1 tangan kiri yang ditegakkan ke samping.', en: 'The sign is formed using 1 hand, the left hand, raised to the side.', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang menunjukan isyarat huruf BISINDO E?',
                            en: 'Which image represents the BISINDO letter E?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_d.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_b.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO E dibentuk dengan 3 jari tangan kanan?',
                            en: 'Does the BISINDO letter E sign use 3 fingers of the right hand?'
                        },
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
                            id: "Peragakan huruf BISINDO E di depan kamera!",
                            en: "Sign letter 'E' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'E',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO E di depan kamera!",
                            en: "Once again! Sign letter 'E' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'E',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['E', 'E', 'E'],
                        },
                        correctAnswer: 'EEE',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 7: Huruf F
        {
            orderIndex: 7,
            type: 'learning',
            title: { id: 'Huruf F', en: 'Letter F' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf F.',
                en: 'Learn the basics of BISINDO sign language for letter F.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf D dalam BISINDO. Isyarat dibentuk menggunakan 2 tangan dengan jari telunjuk tangan kiri ditegakkan ke atas membentuk tiang. Sedangkan jari telunjuk dan jari tengah tangan kanan diangkat, ditegakkan ke arah samping.',
                            en: 'Watch the following image. This is the letter D in BISINDO. The sign is formed using two hands with the index finger of the left hand extended upward to form a post. Meanwhile, the index finger and middle finger of the right hand are raised and extended to the side.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Silangkan tangan kanan ke arah depan telunjuk tangan kiri sehingga membentuk menyerupai huruf "F" Kapital.',
                            en: 'Cross your right hand in front of your left index finger to form the letter "F".'
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_d.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lainnya tetap menekuk agar huruf "F" terlihat jelas.',
                            en: 'Ensure the other fingers remain bent so that the letter "F" is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk isyarat BISINDO "F"?',
                            en: 'Which image represents the BISINDO sign for "F"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat BISINDO "F"?',
                            en: 'Which description matches the BISINDO sign for "F"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari telunjuk kiri tegak, jari telunjuk dan tengah kanan tegak kesamping lalu disilangkan.', en: 'Index finger of left hand is upright, index and middle fingers of right hand are extended sideways and crossed.', image_url: null },
                                { key: 'b', id: 'Kedua tangan membentuk segitiga.', en: 'Both hands form a triangle.', image_url: null },
                                { key: 'c', id: 'Tangan kanan membentuk angka 3 tegak kesamping.', en: 'The right hand forms the number 3 upright sideways.', image_url: null },
                                { key: 'd', id: 'Kedua tangan ditutup dan ditumpuk.', en: 'Both hands are closed and stacked.', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "F" menggunakan kedua tangan dan membentuk segitiga?',
                            en: 'Does the BISINDO sign "F" use both hands and form a triangle?'
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO 'F' di depan kamera!",
                            en: "Sign letter 'F' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'F',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO 'F' di depan kamera!",
                            en: "Once again! Sign letter 'F' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'F',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['F', 'F', 'F'],
                        },
                        correctAnswer: 'FFF',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 8: Uji Pemahaman 2
        {
            orderIndex: 8,
            type: 'test',
            title: { id: 'Uji Pemahaman 2', en: 'Comprehension Test 2' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-F.',
                en: 'Test your knowledge of BISINDO sign language for letters A-F.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO D?',
                            en: 'Which image represents the BISINDO letter D?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO E?',
                            en: 'Which image represents the BISINDO letter E?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO F?',
                            en: 'Which image represents the BISINDO letter F?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO B?',
                            en: 'Does the image below represent the BISINDO letter B?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg',
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
                            id: "Peragakan huruf BISINDO D di depan kamera!",
                            en: "Sign letter 'D' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'D',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO E di depan kamera!",
                            en: "Sign letter 'E' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'E',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO F di depan kamera!",
                            en: "Sign letter 'F' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'F',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'E', 'D', 'A'],
                        },
                        correctAnswer: 'BEDA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['F', 'A', 'D', 'A'],
                        },
                        correctAnswer: 'FADA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['F', 'A', 'F', 'A'],
                        },
                        correctAnswer: 'FAFA',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 9: Huruf G
        {
            orderIndex: 9,
            type: 'learning',
            title: { id: 'Huruf G', en: 'Letter G' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf G.',
                en: 'Learn the basics of BISINDO sign language for letter G.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf G dalam BISINDO.',
                            en: 'Watch the following image. This is the letter G in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan kondisi seluruh jari mengepal tertutup. Tumpukkan kedua tangan tersebut ke atas.',
                            en: 'Sign is formed using both hands with all fingers clenched closed. Stack both hands on top of each other.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_d.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan seluruh jari tertutup dan kedua tangan menumpuk dengan rapi.',
                            en: 'Ensure all fingers are closed and both hands are stacked neatly.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar dibawah berikut menunjujan isyarat BISINDO huruf apa?',
                            en: 'What BISINDO letter does the image below represent?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg',
                        options: {
                            choices: [
                                { key: 'a', id: 'T', en: 'T', image_url: null },
                                { key: 'b', id: 'A', en: 'A', image_url: null },
                                { key: 'c', id: 'G', en: 'G', image_url: null },
                                { key: 'd', id: 'F', en: 'F', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat BISINDO "G"?',
                            en: 'Which description correctly represents the BISINDO letter "G"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari telunjuk kiri tegak, jari telunjuk dan tengah kanan tegak kesamping lalu disilangkan', en: 'Formed with left index finger extended upright, while right index and middle fingers extend to the sides and cross each other', image_url: null },
                                { key: 'b', id: 'Tangan kanan membentuk bulan', en: 'Right hand forms a crescent shape', image_url: null },
                                { key: 'c', id: 'Kedua jari telunjuk disilangkan', en: 'Both index fingers are crossed', image_url: null },
                                { key: 'd', id: 'Kedua tangan mengepal tertutup dan ditumpuk ke atas.', en: 'Both hands clenched closed and stacked on top of each other.', image_url: null },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "G" dilakukan dengan mengepal kedua tangan, posisi tertutup dan ditumpuk keatas?',
                            en: 'Is the BISINDO letter "G" sign made by clenching both hands closed and stacking them on top of each other?'
                        },
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
                            id: "Peragakan huruf BISINDO G di depan kamera!",
                            en: "Sign letter 'G' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'G',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO G di depan kamera!",
                            en: "Once again! Sign letter 'G' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'G',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['G', 'G', 'G'],
                        },
                        correctAnswer: 'GGG',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 10: Huruf H
        {
            orderIndex: 10,
            type: 'learning',
            title: { id: 'Huruf H', en: 'Letter H' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf H.',
                en: 'Learn the basics of BISINDO sign language for letter H.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf H dalam BISINDO.',
                            en: 'Watch the following image. This is the letter H in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan jari telunjuk kiri ditegakkan lalu jari telunjuk dan tengah kanan diangkat membentuk siku-siku. Jari tengah kanan kemudian ditempelkan ke bagian tengah telunjuk kiri sehingga membentuk menyerupai huruf "H" kapital.',
                            en: 'The sign is formed using both hands, with the left index finger extended upright, then the right index and middle fingers are raised to form a right angle. The right middle finger is then placed against the middle of the left index finger, resembling a capital letter "H".',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_h.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari tengah kanan menempel ke bagian tengah telunjuk kiri agar huruf "H" terlihat jelas.',
                            en: 'Make sure the right middle finger touches the middle of the left index finger so that the letter "H" is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk isyarat BISINDO "H"?',
                            en: 'Which image represents the BISINDO letter "H"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat BISINDO "H"?',
                            en: 'Which description best represents the BISINDO sign for "H"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan mengepal dan ditumpuk keatas', en: 'Both hands are clenched and stacked upwards', image_url: null },
                                { key: 'b', id: 'Kedua tangan membentuk segitiga', en: 'Both hands form a triangle', image_url: null },
                                { key: 'c', id: 'Tangan kiri ditegakkan lalu jari telunjuk dan tengah kanan membentuk siku-siku.', en: 'The left hand is raised then the right index and middle fingers form a right angle.', image_url: null },
                                { key: 'd', id: 'Tangan kanan membentuk angka 3.', en: 'The right hand forms the number 3.', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "H" menggunakan tangan kiri yang dibentuk siku-siku',
                            en: 'Does the BISINDO sign for "H" use the left hand formed into a right angle?'
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO H di depan kamera!",
                            en: "Sign letter 'H' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'H',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO H di depan kamera!",
                            en: "Once again! Sign letter 'H' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'H',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['H', 'H', 'H'],
                        },
                        correctAnswer: 'HHH',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 11: Huruf I
        {
            orderIndex: 11,
            type: 'learning',
            title: { id: 'Huruf I', en: 'Letter I' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf I.',
                en: 'Learn the basics of BISINDO sign language for letter I.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf I dalam BISINDO.',
                            en: 'Watch the following image. This is the letter I in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_i.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan 1 tangan kanan atau tangan dominan dengan jari kelingking di angkat ke atas sehingga membentuk menyerupai huruf "I".',
                            en: 'The sign is formed using 1 right hand or dominant hand with the little finger raised upright, resembling the letter "I".',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_i.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari yang lainnya selain kelingking tertekuk agar huruf "I" terlihat jelas.',
                            en: 'Ensure all fingers except the little finger are bent so that the letter "I" is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk isyarat BISINDO "I"?',
                            en: 'Which image represents the BISINDO letter I?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_L.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_A.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_E.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_I.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat BISINDO "I"?',
                            en: 'Which description matches the BISINDO sign "I"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari kelingking tangan kanan diangkat ke atas.', en: 'The right little finger is raised upright.', image_url: null },
                                { key: 'b', id: 'Jari telunjuk dan ibu jari tangan kanan membentuk bulan.', en: 'The index finger and thumb of the right hand form a moon.', image_url: null },
                                { key: 'c', id: 'Kedua tangan mengepal tertutup dan ditumpuk.', en: 'Both hands are clenched closed and stacked.', image_url: null },
                                { key: 'd', id: 'Jari telunjuk tangan kiri diangkat ke atas.', en: 'The left index finger is raised upright.', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "I" perlu mengangkat kedua jari kelingking di kedua tangan?',
                            en: 'Does the BISINDO sign "I" require raising both little fingers of both hands?',
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO I di depan kamera!",
                            en: "Sign letter 'I' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'I',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO I di depan kamera!",
                            en: "Once again! Sign letter 'I' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'I',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO I secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['I', 'I', 'I'],
                        },
                        correctAnswer: 'III',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 12: Huruf J
        {
            orderIndex: 12,
            type: 'learning',
            title: { id: 'Huruf J', en: 'Letter J' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf J.',
                en: 'Learn the basics of BISINDO sign language for letter J.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf J dalam BISINDO.',
                            en: 'Watch the following image. This is the letter J in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan 1 tangan kanan atau tangan dominan dengan jari kelingking ditegakkan ke bawah.',
                            en: 'The sign is formed using 1 right hand or dominant hand with the little finger extended downwards.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_j.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari yang lainnya selain kelingking tertekuk.',
                            en: 'Ensure that the fingers other than the little finger are bent.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "J"?',
                            en: 'Which image represents the BISINDO letter J?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_i.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat BISINDO "J"?',
                            en: 'Which description accurately represents the BISINDO sign "J"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari kelingking tangan kanan diangkat ke atas.', en: 'The little finger of the right hand is raised upwards.', image_url: null },
                                { key: 'b', id: 'Jari kelingking tangan kanan ditegakkan ke bawah.', en: 'The little finger of the right hand is extended downwards.', image_url: null },
                                { key: 'c', id: 'Jari telunjuk kanan ditegakkan ke bawah.', en: 'The index finger of the right hand is extended downwards.', image_url: null },
                                { key: 'd', id: 'Jari telunjuk kiri diangkat ke atas.', en: 'The index finger of the left hand is raised upwards.', image_url: null },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "J" menggunakan jari kelingking tangan kanan yang ditegakkan kebawah?',
                            en: 'Does the BISINDO sign "J" use the little finger of the right hand extended downwards?',
                        },
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
                            id: "Peragakan huruf BISINDO J di depan kamera!",
                            en: "Sign letter 'J' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'J',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO J di depan kamera!",
                            en: "Once again! Sign letter 'J' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'J',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['J', 'J', 'J'],
                        },
                        correctAnswer: 'JJJ',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 13
        // Level 13: Uji Pemahaman 3
        {
            orderIndex: 13,
            type: 'test',
            title: { id: 'Uji Pemahaman 3', en: 'Comprehension Test 3' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-J.',
                en: 'Test your knowledge of BISINDO sign language for letters A-J.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO G?',
                            en: 'Which image represents the BISINDO letter G?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_i.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO H?',
                            en: 'Which image represents the BISINDO letter H?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO I?',
                            en: 'Which image represents the BISINDO letter I?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_i.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO J?',
                            en: 'Does the image below represent the BISINDO letter J?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg',
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
                            id: "Peragakan huruf BISINDO G di depan kamera!",
                            en: "Sign letter 'G' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'G',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO H di depan kamera!",
                            en: "Sign letter 'H' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'H',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO I di depan kamera!",
                            en: "Sign letter 'I' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'I',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'A', 'B', 'I'],
                        },
                        correctAnswer: 'BABI',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'I', 'B', 'I'],
                        },
                        correctAnswer: 'BIBI',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'A', 'J', 'A'],
                        },
                        correctAnswer: 'BAJA',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 14
        // Level 14: Uji Pemahaman 4
        {
            orderIndex: 14,
            type: 'test',
            title: { id: 'Uji Pemahaman 4', en: 'Comprehension Test 4' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-J.',
                en: 'Test your knowledge of BISINDO sign language for letters A-J.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO G?',
                            en: 'Which image represents the BISINDO letter G?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO E?',
                            en: 'Which image represents the BISINDO letter E?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO J?',
                            en: 'Which image represents the BISINDO letter J?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO I?',
                            en: 'Does the image below represent the BISINDO letter I?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_i.jpg',
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
                            id: "Peragakan huruf BISINDO J di depan kamera!",
                            en: "Sign letter 'J' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'J',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO I di depan kamera!",
                            en: "Sign letter 'I' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'I',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO E di depan kamera!",
                            en: "Sign letter 'E' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'E',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['G', 'A', 'J', 'I'],
                        },
                        correctAnswer: 'GAJI',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'A', 'G', 'I'],
                        },
                        correctAnswer: 'BAGI',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'E', 'D', 'A'],
                        },
                        correctAnswer: 'BEDA',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 15: Huruf K
        {
            orderIndex: 15,
            type: 'learning',
            title: { id: 'Huruf K', en: 'Letter K' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf K.',
                en: 'Learn the basics of BISINDO sign language for letter K.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf K dalam BISINDO. Isyarat dibentuk menggunakan kedua tangan dengan jari telunjuk kiri diangkat ke atas dan jari telunjuk kanan ditekuk dan diangkat. ',
                            en: 'Watch the following image. This is the letter K in BISINDO. The sign is formed using both hands with the index finger of the left hand raised upwards and the index finger of the right hand bent and raised.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Selanjutnya jari telunjuk kanan yang sudah ditekuk ditempelkan ke bagian tengah telunjuk kiri sehingga membentuk menyerupai huruf "K".',
                            en: 'Next, the bent index finger of the right hand is placed on the middle of the index finger of the left hand, forming a shape resembling the letter "K".'
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_k.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan telunjuk kanan yang ditekuk menempel ke bagian tengah telunjuk kiri agar huruf "K" terlihat dengan jelas.',
                            en: 'Ensure the bent index finger of the right hand is touching the middle of the index finger of the left hand so that the letter "K" is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "K"?',
                            en: 'Which image represents the BISINDO letter "K"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang yang sesuai menggambarkan isyarat BISINDO "K"?',
                            en: 'Which description corresponds to the BISINDO sign for "K"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari telunjuk dan ibu jari membentuk lingkaran.', en: 'Index finger and thumb form a circle.', image_url: null },
                                { key: 'b', id: 'Jari telunjuk kiri ditegakkan ke atas, jari telunjuk kanan ditekuk dan diangkat lalu ditempelkan ke telunjuk kiri.', en: 'Left index finger raised upwards, right index finger bent, raised, and placed on the left index finger.', image_url: null },
                                { key: 'c', id: 'Tangan kanan membentuk angka 3', en: 'Right hand forms the number 3.', image_url: null },
                                { key: 'd', id: 'Jari kelingking tangan kanan membentuk lingkaran.', en: 'Right pinky finger forms a circle.', image_url: null },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "K" menggunakan kedua jari telunjuk yang ditekuk?',
                            en: 'Does the BISINDO sign for "K" use both bent index fingers?',
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO K di depan kamera!",
                            en: "Sign letter 'K' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'K',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO K di depan kamera!",
                            en: "Once again! Sign letter 'K' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'K',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['K', 'K', 'K'],
                        },
                        correctAnswer: 'KKK',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 16: Huruf L
        {
            orderIndex: 16,
            type: 'learning',
            title: { id: 'Huruf L', en: 'Letter L' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf L.',
                en: 'Learn the basics of BISINDO sign language for letter L.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf L dalam BISINDO.',
                            en: 'Watch the following image. This is the letter L in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan satu tangan kanan atau dominan dengan jari telunjuk diangkat ke atas dan ibu jari ditegakkan ke samping sehingga membentuk siku-siku menyerupai huruf "L" kapital.',
                            en: 'The sign is formed using one right or dominant hand with the index finger raised upward and the thumb extended to the side, forming a right angle resembling a capital letter "L".',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_l.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lainnya ditekuk rapat agar huruf "L" terlihat dengan jelas.',
                            en: 'Ensure the other fingers are bent tightly so that the letter "L" is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO L?',
                            en: 'Which image represents the BISINDO letter L?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_t.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "L"?',
                            en: 'Which description corresponds to the BISINDO sign "L"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan membentuk bintang.', en: 'Both hands form a star.', image_url: null },
                                { key: 'b', id: 'Kedua tangan membentuk segitiga', en: 'Both hands form a triangle.', image_url: null },
                                { key: 'c', id: 'Telunjuk tangan kiri diangkat ke atas.', en: 'The left index finger is raised upwards.', image_url: null },
                                { key: 'd', id: 'Telunjuk tangan kanan diangkat ke atas dan ibu jari ditegakkan kesamping membentuk siku-siku.', en: 'The right index finger is raised upward and the thumb is extended sideways to form a right angle.', image_url: null },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "L" membentuk siku-siku dengan jari telunjuk dan ibu jari?',
                            en: 'Does the BISINDO sign "L" form a right angle with the index finger and thumb?',
                        },
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
                            id: "Peragakan huruf BISINDO L di depan kamera!",
                            en: "Sign letter 'L' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'L',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO L di depan kamera!",
                            en: "Once again! Sign letter 'L' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'L',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['L', 'L', 'L'],
                        },
                        correctAnswer: 'LLL',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 17: Huruf M
        {
            orderIndex: 17,
            type: 'learning',
            title: { id: 'Huruf M', en: 'Letter M' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf M.',
                en: 'Learn the basics of BISINDO sign language for letter M.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf M dalam BISINDO.',
                            en: 'Watch the following image. This is the letter M in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan seluruh jari tangan kanan dibuka dan 3 jari tangan kiri (telunjuk, tengah dan manis) ditempelkan pada telapak tangan kanan.',
                            en: 'The sign is formed using both hands with the entire right hand fingers open and 3 fingers of the left hand (index, middle and ring) placed on the palm of the right hand.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_m.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan agar telapak tangan dihadapkan ke arah depan agar huruf isyarat terlihat jelas.',
                            en: 'Ensure the palm is facing forward so that the sign is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termsuk BISINDO "M"?',
                            en: 'Which image represents the BISINDO "M"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_r.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "M"?',
                            en: 'Which description matches the "M" sign?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Tangan kanan dibuka dan tiga jari tangan kiri ditempelkan.', en: 'The right hand is open and the three fingers of the left hand are attached.', image_url: null },
                                { key: 'b', id: 'Kedua tangan dikepal dan ditumpuk.', en: 'Both hands are clenched and stacked.', image_url: null },
                                { key: 'c', id: 'Tangan kiri mebentuk lingkaran dan telunjuk tangan kanan menempel.', en: 'The left hand forms a circle and the index finger of the right hand touches it.', image_url: null },
                                { key: 'd', id: 'Tangan kanan membentuk bulan.', en: 'The right hand forms a crescent moon.', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat "M" dibentuk dengan tangan kanan terbuka dan tiga jari tangan kiri menempel di telapak tangan kanan?',
                            en: 'Is the "M" sign formed with the right hand open and the three fingers of the left hand attached to the right palm?',
                        },
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
                            id: "Peragakan huruf BISINDO M di depan kamera!",
                            en: "Sign letter 'M' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'M',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO M di depan kamera!",
                            en: "Once again! Sign letter 'M' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'M',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['M', 'M', 'M'],
                        },
                        correctAnswer: 'MMM',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 18: Huruf N
        {
            orderIndex: 18,
            type: 'learning',
            title: { id: 'Huruf N', en: 'Letter N' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf N.',
                en: 'Learn the basics of BISINDO sign language for letter N.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf N dalam BISINDO.',
                            en: 'Watch the following image. This is the letter N in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan seluruh jari tangan kanan dibuka dan 2 jari tangan kiri (telunjuk dan tengah) ditempelkan pada telapak tangan kanan.',
                            en: 'The sign is formed using both hands with all fingers of the right hand open and the 2 fingers of the left hand (index and middle) attached to the right palm.',
                        },
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan agar telapak tangan dihadapkan ke arah depan agar huruf isyarat terlihat jelas.',
                            en: 'Ensure that the palm is facing forward so that the sign letter is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "N"?',
                            en: 'Which image represents the BISINDO letter N?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "N"?',
                            en: 'Which description matches the sign for "N"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Tangan kanan dibuka dan dua jari tangan kiri ditempelkan', en: 'Right hand open and 2 fingers of left hand attached to palm', image_url: null },
                                { key: 'b', id: 'Tangan kanan dibuka dan tiga jari tangan kiri. ditempelkan', en: 'Right hand open and 3 fingers of left hand attached to palm', image_url: null },
                                { key: 'c', id: 'Tangan kanan dibuka dan 1 jari tangan kiri. ditempelkan', en: 'Right hand open and 1 finger of left hand attached to palm', image_url: null },
                                { key: 'd', id: 'Kedua tangan dibuka.', en: 'Both hands open', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "N" menggunakan tangan kanan dibuka dan dua jari kiri yang ditempelkan ke telapak tangan kanan?',
                            en: 'Does the BISINDO sign for "N" use the right hand open and the two fingers of the left hand attached to the right palm?'
                        },
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
                            id: "Peragakan huruf BISINDO N di depan kamera!",
                            en: "Sign letter 'N' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'N',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO N di depan kamera!",
                            en: "Once again! Sign letter 'N' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'N',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['N', 'N', 'N'],
                        },
                        correctAnswer: 'NNN',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 19: Huruf O
        {
            orderIndex: 19,
            type: 'learning',
            title: { id: 'Huruf O', en: 'Letter O' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf O.',
                en: 'Learn the basics of BISINDO sign language for letter O.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf O dalam BISINDO.',
                            en: 'Watch the following image. This is the letter O in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_o.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan satu tangan kanan atau tangan dominan dengan dua jari (telunjuk dan ibu jari) ditempelkan membentuk lingkaran. Sisa jari lainnnya dibuka.',
                            en: 'The sign is formed using one right hand or dominant hand with two fingers (thumb and index finger) attached to form a circle. The rest of the fingers are open.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_o.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lain selain telunjuk dan ibu jari dibuka dengan lebar agar bentuk lingkaran dapat terlihat dengan jelas.',
                            en: 'Make sure the other fingers besides the thumb and index finger are spread wide so that the circle shape can be clearly seen.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "O"?',
                            en: 'Which image represents the BISINDO "O"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_o.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_y.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "O"?',
                            en: 'Which description matches the sign for "O"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari kelingking tangan kanan diangkat ke atas.', en: 'The little finger of the right hand is raised upwards.', image_url: null },
                                { key: 'b', id: 'Kedua tangan membentuk segitiga.', en: 'Both hands form a triangle.', image_url: null },
                                { key: 'c', id: 'Ibu jari dan telunjuk tangan kanan ditempelkan membentuk lingkaran.', en: 'The thumb and index finger of the right hand are attached to form a circle.', image_url: null },
                                { key: 'd', id: 'Kedua tangan disilangkan.', en: 'Both hands are crossed.', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "O" menggunakan kedua tangan untuk membuat bentuk lingkaran?',
                            en: 'Does the BISINDO sign for "O" use both hands to form a circle?'
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO O di depan kamera!",
                            en: "Sign letter 'O' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'O',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO O di depan kamera!",
                            en: "Once again! Sign letter 'O' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'O',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['O', 'O', 'O'],
                        },
                        correctAnswer: 'OOO',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 20
        // Level 13: Uji Pemahaman 5
        {
            orderIndex: 20,
            type: 'test',
            title: { id: 'Uji Pemahaman 5', en: 'Comprehension Test 5' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-O.',
                en: 'Test your knowledge of BISINDO sign language for letters A-O.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO K?',
                            en: 'Which image represents the BISINDO letter K?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO L?',
                            en: 'Which image represents the BISINDO letter L?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_o.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO M?',
                            en: 'Which image represents the BISINDO letter M?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_o.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO O?',
                            en: 'Does the image below represent the BISINDO letter O?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg',
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO K di depan kamera!",
                            en: "Sign letter 'K' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'K',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO L di depan kamera!",
                            en: "Sign letter 'L' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'L',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO M di depan kamera!",
                            en: "Sign letter 'M' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'M',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'O', 'L', 'A'],
                        },
                        correctAnswer: 'BOLA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['K', 'A', 'D', 'O'],
                        },
                        correctAnswer: 'KADO',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['K', 'I', 'L', 'O'],
                        },
                        correctAnswer: 'KILO',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 21: Uji Pemahaman 6
        {
            orderIndex: 21,
            type: 'test',
            title: { id: 'Uji Pemahaman 6', en: 'Comprehension Test 6' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-O.',
                en: 'Test your knowledge of BISINDO sign language for letters A-O.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO O?',
                            en: 'Which image represents the BISINDO letter O?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_o.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO L?',
                            en: 'Which image represents the BISINDO letter L?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_o.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO A?',
                            en: 'Which image represents the BISINDO letter A?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_C.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO D?',
                            en: 'Does the image below represent the BISINDO letter D?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg',
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
                            id: "Peragakan huruf BISINDO M di depan kamera!",
                            en: "Sign letter 'M' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'M',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO N di depan kamera!",
                            en: "Sign letter 'N' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'N',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO L di depan kamera!",
                            en: "Sign letter 'L' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'L',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['M', 'A', 'N', 'A'],
                        },
                        correctAnswer: 'MANA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['D', 'A', 'N', 'A'],
                        },
                        correctAnswer: 'DANA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['L', 'A', 'M', 'A'],
                        },
                        correctAnswer: 'LAMA',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 22: Huruf P
        {
            orderIndex: 22,
            type: 'learning',
            title: { id: 'Huruf P', en: 'Letter P' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf P.',
                en: 'Learn the basics of BISINDO sign language for letter P.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf P dalam BISINDO.',
                            en: 'Watch the following image. This is the letter P in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_p.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan jari telunjuk tangan kiri diangkat ke atas dan dua jari tangan kanan (telunjuk dan ibu jari) membentuk huruf "C" lalu ditempelkan pada bagian atas telunjuk kiri.',
                            en: 'The sign is formed using both hands with the index finger of the left hand raised upwards and the index finger and thumb of the right hand forming a "C" shape, then attached to the top of the left index finger.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_p.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan dua jari tangan kanan yang ditempelkan berada tepat di bagian atas telunjuk kiri agar tidak terlihat seperti isyarat BISINDO "D".',
                            en: 'Ensure the two fingers of the right hand that are attached are positioned exactly at the top of the left index finger so it doesn\'t look like the BISINDO sign for "D".',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "P"?',
                            en: 'Which image represents the BISINDO letter P?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_p.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat P?',
                            en: 'Which description matches the sign for P?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari kelingking tangan kanan diangkat ke atas.', en: 'The little finger of the right hand is raised upwards.', image_url: null },
                                { key: 'b', id: 'Kedua tangan membentuk segitiga.', en: 'Both hands form a triangle.', image_url: null },
                                { key: 'c', id: 'Jari tangan kanan membentuk huruf "C" dan ditempelkan pada bagian atas telunjuk kiri.', en: 'The index finger and thumb of the right hand form a "C" shape and are placed on top of the left index finger.', image_url: null },
                                { key: 'd', id: 'Kedua tangan disilangkan.', en: 'Both hands are crossed.', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "P" menggunakan jari tangan kanan yang membentuk "C" dan ditempelkan ke bagian atas telunjuk kiri?',
                            en: 'Does the BISINDO sign for "P" use the index finger and thumb of the right hand forming a "C" shape and placed on top of the left index finger?'
                        },
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
                            id: "Peragakan huruf BISINDO P di depan kamera!",
                            en: "Sign letter 'P' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'P',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO P di depan kamera!",
                            en: "Once again! Sign letter 'P' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'P',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['P', 'P', 'P'],
                        },
                        correctAnswer: 'PPP',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 23: Huruf Q
        {
            orderIndex: 23,
            type: 'learning',
            title: { id: 'Huruf Q', en: 'Letter Q' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf Q.',
                en: 'Learn the basics of BISINDO sign language for letter Q.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf Q dalam BISINDO.',
                            en: 'Watch the following image. This is the letter Q in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan dua jari tangan kiri (telunjuk dan ibu jari) membentuk lingkaran dan telunjuk tangan kanan menempel pada bagian tengah lingkaran tersebut.',
                            en: 'The sign is formed using both hands with the index finger and thumb of the left hand forming a circle and the index finger of the right hand touching the center of the circle.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_q.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lain pada tangan kiri terbuka dan jari lain pada tangan tertutup agar huruf isyarat terlihat jelas!',
                            en: 'Make sure other fingers on the left hand are open and other fingers on the right hand are closed so the sign is clearly visible!',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "Q"?',
                            en: 'Which image represents the BISINDO letter Q?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "Q"?',
                            en: 'Which description matches the sign for "Q"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Tangan kanan membentuk lingkaran.', en: 'The right hand forms a circle.', image_url: null },
                                { key: 'b', id: 'Telunjuk tangan kanan diangkat ke atas', en: 'The right index finger points upward', image_url: null },
                                { key: 'c', id: 'Jari kelingking kanan membentuk segitigas.', en: 'The right pinky finger forms a triangle.', image_url: null },
                                { key: 'd', id: 'Tangan kiri membentuk lingkaran dan telunjuk kanan menempel pada tengah lingkaran.', en: 'The left hand forms a circle and the right index finger touches the center of the circle.', image_url: null },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "Q" menggunakan tangan kanan untuk membentuk lingkaran?',
                            en: 'Does the BISINDO sign for "Q" use the right hand to form a circle?',
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO Q di depan kamera!",
                            en: "Sign letter 'Q' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'Q',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO Q di depan kamera!",
                            en: "Once again! Sign letter 'Q' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'Q',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['Q', 'Q', 'Q'],
                        },
                        correctAnswer: 'QQQ',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 24: Huruf R
        {
            orderIndex: 24,
            type: 'learning',
            title: { id: 'Huruf R', en: 'Letter R' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf R.',
                en: 'Learn the basics of BISINDO sign language for letter R.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf R dalam BISINDO. Isyarat dibentuk menggunakan satu tangan kanan atau tangan dominan dengan menggunakan 3 jari (ibu jari, telunjuk, tengah).',
                            en: 'Watch the following image. This is the letter R in BISINDO. The sign is formed using one right hand or dominant hand using 3 fingers (thumb, index, middle).',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_r.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Jari telunjuk diangkat ke atas sedangkan ibu jari dan jari tengah saling menempel.',
                            en: 'The index finger is raised while the thumb and middle finger touch each other.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_r.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari yang tersisa tertekuk kedalam agar huruf isyarat telihat dengan jelas.',
                            en: 'Make sure the remaining fingers are bent inwards so that the sign language letter is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "R"?',
                            en: 'Which image represents the BISINDO letter R?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_r.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "R"?',
                            en: 'Which description matches the sign for "R"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Tangan kanan dikepal.', en: 'Fingers of the right hand are curled.', image_url: null },
                                { key: 'b', id: 'Telunjuk tangan kanan diangkat, ibu jari dan jari tengah saling menempel.', en: 'The index finger of the right hand is raised, while the thumb and middle finger touch each other.', image_url: null },
                                { key: 'c', id: 'Tangan kiri membentuk lingkaran dan telunjuk tangan kanan menempel.', en: 'The left hand forms a circle and the index finger of the right hand touches it.', image_url: null },
                                { key: 'd', id: 'Telunjuk kiri diangkat ke atas dan tangan kanan membentuk huruf "C"', en: 'The left index finger is raised and the right hand forms the letter "C"', image_url: null },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "R" menggunakan kedua tangan untuk membentuk huruf isyarat?',
                            en: 'Does the BISINDO sign for "R" use both hands to form the sign language letter?',
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO R di depan kamera!",
                            en: "Sign letter 'R' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'R',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO R di depan kamera!",
                            en: "Once again! Sign letter 'R' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'R',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['R', 'R', 'R'],
                        },
                        correctAnswer: 'RRR',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 25
        // Level 25: Uji Pemahaman 7
        {
            orderIndex: 25,
            type: 'test',
            title: { id: 'Uji Pemahaman 7', en: 'Comprehension Test 7' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-R.',
                en: 'Test your knowledge of BISINDO sign language for letters A-R.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO P?',
                            en: 'Which image represents the BISINDO letter P?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_r.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_p.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO R?',
                            en: 'Which image represents the BISINDO letter R?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_p.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_r.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO Q?',
                            en: 'Which image represents the BISINDO letter Q?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_r.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO J?',
                            en: 'Does the image below represent the BISINDO letter J?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg',
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
                            id: "Peragakan huruf BISINDO P di depan kamera!",
                            en: "Sign letter 'P' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'P',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO Q di depan kamera!",
                            en: "Sign letter 'Q' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'Q',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO R di depan kamera!",
                            en: "Sign letter 'R' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'R',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['R', 'A', 'J', 'A'],
                        },
                        correctAnswer: 'RAJA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['R', 'O', 'D', 'A'],
                        },
                        correctAnswer: 'RODA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['K', 'E', 'R', 'A'],
                        },
                        correctAnswer: 'KERA',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 26
        // Level 26: Uji Pemahaman 8
        {
            orderIndex: 26,
            type: 'test',
            title: { id: 'Uji Pemahaman 8', en: 'Comprehension Test 8' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-R.',
                en: 'Test your knowledge of BISINDO sign language for letters A-R.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO P?',
                            en: 'Which image represents the BISINDO letter P?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_p.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO K?',
                            en: 'Which image represents the BISINDO letter K?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_p.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO G?',
                            en: 'Which image represents the BISINDO letter G?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_i.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_j.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO P?',
                            en: 'Does the image below represent the BISINDO letter P?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg',
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO P di depan kamera!",
                            en: "Sign letter 'P' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'P',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO I di depan kamera!",
                            en: "Sign letter 'I' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'I',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO R di depan kamera!",
                            en: "Sign letter 'R' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'R',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['P', 'A', 'P', 'A'],
                        },
                        correctAnswer: 'PAPA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['K', 'O', 'P', 'I'],
                        },
                        correctAnswer: 'KOPI',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['P', 'A', 'G', 'I'],
                        },
                        correctAnswer: 'PAGI',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 27: Huruf S
        {
            orderIndex: 27,
            type: 'learning',
            title: { id: 'Huruf S', en: 'Letter S' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf S.',
                en: 'Learn the basics of BISINDO sign language for letter S.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf S dalam BISINDO. Isyarat dibentuk menggunakan kedua tangan yang sama sama membentuk huruf "C" dengan ibu jari dan jari telunjuk.',
                            en: 'Watch the following image. This is the letter S in BISINDO. The sign is formed using both hands, each forming the letter "C" with the thumb and index finger touching.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Tangan kiri diposisikan di atas sedangkan tangan kanan dibawah lalu telunjuk kanan menempel pada ibu jari kiri.',
                            en: 'The left hand is positioned above and the right hand below, with the right index finger touching the left thumb.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_s.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lain tertekuk kedalam agar huruf isyarat dapat terlihat dengan jelas.',
                            en: 'Ensure other fingers are curled inward so the sign language letter is clearly visible.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "S"?',
                            en: 'Which image represents the BISINDO letter "S"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "S"?',
                            en: 'Which description correctly illustrates the sign for "S"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan membentuk huruf "C" dan ditempelkan.', en: 'Both hands form the letter "C" and are placed together.', image_url: null },
                                { key: 'b', id: 'Kedua tangan membentuk segitiga', en: 'Both hands form a triangle.', image_url: null },
                                { key: 'c', id: 'Kedua tangan membentuk hati.', en: 'Both hands form a heart.', image_url: null },
                                { key: 'd', id: 'Kedua tangan membentuk bintang.', en: 'Both hands form a star.', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "S" membentuk huruf "C" di kedua tangannya?',
                            en: 'Does the BISINDO letter "S" sign form the letter "C" with both hands?',
                        },
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
                            id: "Peragakan huruf BISINDO S di depan kamera!",
                            en: "Sign letter 'S' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'S',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO S di depan kamera!",
                            en: "Once again! Sign letter 'S' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'S',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['S', 'S', 'S'],
                        },
                        correctAnswer: 'SSS',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 28: Huruf T
        {
            orderIndex: 28,
            type: 'learning',
            title: { id: 'Huruf T', en: 'Letter T' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf T.',
                en: 'Learn the basics of BISINDO sign language for letter T.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf T dalam BISINDO.',
                            en: 'Watch the following image. This is the letter T in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_t.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan telunjuk kiri yang ditegakkan ke samping kanan dan telunjuk kanan diangkat ke atas. Telunjuk kiri kemudian ditempelkan di atas telunjuk kanan.',
                            en: 'The sign is formed using both hands with the left index finger pointing sideways to the right and the right index finger raised. The left index finger is then placed on top of the right index finger.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_t.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lain ditekuk ke dalam agar huruf isyarat dapat terlihat dengan jelas!',
                            en: 'Ensure other fingers are curled inward so the sign language letter is clearly visible!',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "T"?',
                            en: 'Which image represents the BISINDO letter T?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_x.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_t.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "T"?',
                            en: 'Which description matches the "T" sign?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan membentuk huruf "C"', en: 'Both hands form the letter "C"', image_url: null },
                                { key: 'b', id: 'Telunjuk kiri ditegakkan ke samping dan menempel pada bagian atas telunjuk kanan.', en: 'The left index finger is pointed sideways and placed on top of the right index finger.', image_url: null },
                                { key: 'c', id: 'Telunjuk kanan menempel pada lingkaran tangan kiri.', en: 'The right index finger is placed on the circle of the left hand.', image_url: null },
                                { key: 'd', id: 'Telunjuk kiri menempel pada telapak tangan kanan.', en: 'The left index finger is placed on the palm of the right hand.', image_url: null },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "T" menempelkan telunjuk kanan pada bagian atas telunjuk kiri?',
                            en: 'Does the BISINDO "T" sign place the right index finger on top of the left index finger?'
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO T di depan kamera!",
                            en: "Sign letter 'T' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'T',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO T di depan kamera!",
                            en: "Once again! Sign letter 'T' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'T',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['T', 'T', 'T'],
                        },
                        correctAnswer: 'TTT',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 29: Huruf U
        {
            orderIndex: 29,
            type: 'learning',
            title: { id: 'Huruf U', en: 'Letter U' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf U.',
                en: 'Learn the basics of BISINDO sign language for letter U.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf U dalam BISINDO.',
                            en: 'Watch the following image. This is the letter U in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_u.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan tangan kanan atau tangan dominan dengan dua jari (ibu jari dan telunjuk) membentuk huruf "C" yang mengahadap ke atas sehingga terlihat seperti mangkuk.',
                            en: 'The sign is formed using the right or dominant hand with two fingers (thumb and index finger) forming the letter "C" facing upwards, resembling a bowl.'
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_u.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan huruf "C" mengahadap ke atas bukan kesamping dan tekuk jari lain agar huruf isyarat terlihat jelas.',
                            en: 'Ensure the letter "C" faces upwards, not sideways, and curl the other fingers so the sign is clear.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "U"?',
                            en: 'Which image represents BISINDO "U"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_u.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_z.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "U"?',
                            en: 'Which description matches the sign for "U"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan membentuk huruf "C"', en: 'Both hands form the letter "C"', image_url: null },
                                { key: 'b', id: 'Tangan kanan membentuk lingkaran.', en: 'The right hand forms a circle.', image_url: null },
                                { key: 'c', id: 'Tangan kanan membentuk huruf C yang dihadapkan ke atas.', en: 'The right hand forms the letter C facing upwards.', image_url: null },
                                { key: 'd', id: 'Tangan kanan membentuk huruf C.', en: 'The right hand forms the letter C.', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "U" menggunakan tangan kanan untuk membentuk huruf "C" dan dihadapkan ke samping?',
                            en: 'Does the BISINDO sign "U" use the right hand to form the letter "C" and face sideways?'
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO U di depan kamera!",
                            en: "Sign letter 'U' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'U',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO U di depan kamera!",
                            en: "Once again! Sign letter 'U' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'U',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['U', 'U', 'U'],
                        },
                        correctAnswer: 'UUU',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 30: Huruf V
        {
            orderIndex: 30,
            type: 'learning',
            title: { id: 'Huruf V', en: 'Letter V' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf V.',
                en: 'Learn the basics of BISINDO sign language for letter V.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf V dalam BISINDO.',
                            en: 'Watch the following image. This is the letter V in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan tangan kanan atau tangan dominan dengan 2 jari (telunjuk dan tengah) yang diangkat ke atas sehingga membentuk huruf "V".',
                            en: 'The sign is formed using the right or dominant hand with 2 fingers (index and middle) raised upwards to form the letter "V".'
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_v.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan berikan jarak antara jari telunjuk dan tengahnya lalu tekuk ke dalam jari lainnya.',
                            en: 'Make sure to give space between the index and middle fingers, then fold the other fingers inwards.'
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "V"?',
                            en: 'Which image represents the BISINDO letter V?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_f.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_u.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_p.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "V"?',
                            en: 'Which description matches the sign for "V"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari telunjuk dan tengah tangan kanan diangkat ke atas.', en: 'Index and middle fingers of the right hand are raised upwards.', image_url: null },
                                { key: 'b', id: 'Ibu jari dan telunjuk tangan kanan diangkat ke atas.', en: 'Thumb and index fingers of the right hand are raised upwards.', image_url: null },
                                { key: 'c', id: 'Jari kelingking diangkat ke atas.', en: 'Pinky finger is raised upwards.', image_url: null },
                                { key: 'd', id: 'Jari telunjuk dan tengah ditempelkan.', en: 'Index and middle fingers are attached to each other.', image_url: null },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "V" menggunakan ibu jari dan telunjuk yang diangkat ke atas?',
                            en: 'Does the BISINDO sign "V" use the thumb and index fingers raised upwards?'
                        },
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
                            id: "Peragakan huruf BISINDO V di depan kamera!",
                            en: "Sign letter 'V' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'V',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO V di depan kamera!",
                            en: "Once again! Sign letter 'V' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'V',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['V', 'V', 'V'],
                        },
                        correctAnswer: 'VVV',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 31
        // Level 31: Uji Pemahaman 9
        {
            orderIndex: 31,
            type: 'test',
            title: { id: 'Uji Pemahaman 9', en: 'Comprehension Test 9' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-V.',
                en: 'Test your knowledge of BISINDO sign language for letters A-V.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO S?',
                            en: 'Which image represents the BISINDO letter S?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_u.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_t.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO T?',
                            en: 'Which image represents the BISINDO letter T?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_t.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO U?',
                            en: 'Which image represents the BISINDO letter U?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_i.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_u.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO V?',
                            en: 'Does the image below represent the BISINDO letter V?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg',
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
                            id: "Peragakan huruf BISINDO S di depan kamera!",
                            en: "Sign letter 'S' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'S',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO T di depan kamera!",
                            en: "Sign letter 'T' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'T',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO U di depan kamera!",
                            en: "Sign letter 'U' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'U',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['V', 'A', 'S'],
                        },
                        correctAnswer: 'VAS',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['Q', 'A', 'D', 'I'],
                        },
                        correctAnswer: 'QADI',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['R', 'O', 'T', 'I'],
                        },
                        correctAnswer: 'ROTI',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 32
        // Level 32: Uji Pemahaman 10
        {
            orderIndex: 32,
            type: 'test',
            title: { id: 'Uji Pemahaman 10', en: 'Comprehension Test 10' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-V.',
                en: 'Test your knowledge of BISINDO sign language for letters A-V.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO B?',
                            en: 'Which image represents the BISINDO letter B?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_d.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO S?',
                            en: 'Which image represents the BISINDO letter S?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_t.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_g.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO M?',
                            en: 'Which image represents the BISINDO letter M?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO Q?',
                            en: 'Does the image below represent the BISINDO letter Q?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_q.jpg',
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
                            id: "Peragakan huruf BISINDO S di depan kamera!",
                            en: "Sign letter 'S' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'S',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO K di depan kamera!",
                            en: "Sign letter 'K' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'K',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO D di depan kamera!",
                            en: "Sign letter 'D' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'D',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'U', 'K', 'U'],
                        },
                        correctAnswer: 'BUKU',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['S', 'U', 'S', 'U'],
                        },
                        correctAnswer: 'SUSU',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['M', 'A', 'D', 'U'],
                        },
                        correctAnswer: 'MADU',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 33: Huruf W
        {
            orderIndex: 33,
            type: 'learning',
            title: { id: 'Huruf W', en: 'Letter W' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf W.',
                en: 'Learn the basics of BISINDO sign language for letter W.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf W dalam BISINDO.',
                            en: 'Watch the following image. This is the letter W in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_w.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan ibu jari dan telunjuk kedua tangannya membentuk siku-siku. Rotasikan kedua tangan ke arah luar dan tempelkan kedua ibu jari sehingga membentuk huruf "W".',
                            en: 'The sign is formed using both hands with the thumb and index finger of both hands forming a right angle. Rotate both hands outwards and touch the thumbs together to form the letter "W".',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_w.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lainnya tertekuk ke dalam agar huruf isyarat dapat terlihat dengan jelas!',
                            en: 'Ensure the other fingers are bent inwards so that the sign can be clearly seen!',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "W"?',
                            en: 'Which image represents the BISINDO letter "W"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_w.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_m.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_n.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_k.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "W"?',
                            en: 'Which description accurately represents the sign for "W"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan membentuk segitiga.', en: 'Both hands form a triangle.', image_url: null },
                                { key: 'b', id: 'Tangan kanan membentuk huruf "C".', en: 'Right hand forms the letter "C".', image_url: null },
                                { key: 'c', id: 'Tangan kiri membentuk lingkaran.', en: 'Left hand forms a circle.', image_url: null },
                                { key: 'd', id: 'Kedua tangan membentuk siku-siku, rotasikan dan ditempelkan.', en: 'Both hands form a right angle, rotate and touch.', image_url: null },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "W" menggunakan kedua tangan untuk membentuk segitiga?',
                            en: 'Does the BISINDO sign for "W" use both hands to form a triangle?'
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO W di depan kamera!",
                            en: "Sign letter 'W' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'W',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO W di depan kamera!",
                            en: "Once again! Sign letter 'W' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'W',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['W', 'W', 'W'],
                        },
                        correctAnswer: 'WWW',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 34: Huruf X
        {
            orderIndex: 34,
            type: 'learning',
            title: { id: 'Huruf X', en: 'Letter X' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf X.',
                en: 'Learn the basics of BISINDO sign language for letter X.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf X dalam BISINDO.',
                            en: 'Watch the following image. This is the letter X in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_x.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan dengan jari telunjuk kedua tangan diangkat ke atas dan di rotasikan ke dalam. Kedua telunjuk tersebut kemudian disilangkan sehingga membentuk huruf "X".',
                            en: 'The sign is formed using both hands with the index fingers of both hands raised upwards and rotated inwards. The two index fingers are then crossed to form the letter "X".',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_x.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lainnya tertekuk kedalam agar huruf isyarat dapat terlihat dengan jelas.',
                            en: 'Make sure the other fingers are bent inwards so that the sign language letter can be seen clearly.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO X?',
                            en: 'Which image represents the BISINDO letter X?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_t.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_x.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_w.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "X"?',
                            en: 'Which description best represents the BISINDO sign "X"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Jari telunjuk dan tengah menyilang.', en: 'Index and middle fingers crossed.', image_url: null },
                                { key: 'b', id: 'Jari telunjuk kanan dan kiri menyilang', en: 'Right and left index fingers crossed', image_url: null },
                                { key: 'c', id: 'Ibu jari kanan dan kiri menyilang.', en: 'Right and left thumb crossed.', image_url: null },
                                { key: 'd', id: 'Jari telunjuk dan ibu jari membentuk lingkaran', en: 'Index finger and thumb form a circle.', image_url: null },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "X" menggunakan kedua jari telunjuk dan disilangkan?',
                            en: 'Does the BISINDO sign for "X" use both index fingers and cross them?',
                        },
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
                            id: "Peragakan huruf BISINDO X di depan kamera!",
                            en: "Sign letter 'X' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'X',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO X di depan kamera!",
                            en: "Once again! Sign letter 'X' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'X',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['X', 'X', 'X'],
                        },
                        correctAnswer: 'XXX',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 35: Huruf Y
        {
            orderIndex: 35,
            type: 'learning',
            title: { id: 'Huruf Y', en: 'Letter Y' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf Y.',
                en: 'Learn the basics of BISINDO sign language for letter Y.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf Y dalam BISINDO.',
                            en: 'Watch the following image. This is the letter Y in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_y.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan kedua tangan dengan 2 jari tangan kiri (telunjuk dan ibu jari) membentuk siku-siku dan jari telunjuk tangan kanan menyentuh siku.',
                            en: 'The sign is formed using both hands with 2 fingers of the left hand (index and thumb) forming a right angle and the index finger of the right hand touching the elbow.'
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_y.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari lainnya tertekuk kedalam agar huruf isyarat dapat terlihat dengan jelas.',
                            en: 'Make sure the other fingers are bent inward so the sign can be clearly seen.',
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "Y"?',
                            en: 'Which image represents the BISINDO letter Y?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_y.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_w.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_x.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_z.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "Y"?',
                            en: 'Which description best represents the BISINDO sign "Y"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan dengan 2 jari tangan kiri membentuk siku-siku dan jari telunjuk tangan kanan menyentuh siku.', en: 'Both hands with 2 fingers of the left hand forming a right angle and the index finger of the right hand touching the elbow.', image_url: null },
                                { key: 'b', id: 'Kedua tangan dengan ibu jari dan telunjuk tangan kiri dan kanan saling bersentuhan membentuk segitiga', en: 'Both hands with the thumb and index finger of the left and right hands touching each other forming a triangle and the other fingers are bent inward.', image_url: null },
                                { key: 'c', id: 'Kedua tangan dengan ibu jari dan telunjuk tangan kiri dan kanan saling bersentuhan dan digerakkan menjauh satu sama lain.', en: 'Both hands with the thumb and index finger of the left and right hands touching each other and moved away from each other.', image_url: null },
                                { key: 'd', id: 'Kedua tangan dengan 2 jari tangan kiri membentuk siku-siku dan ibu jari tangan kanan menyentuh siku.', en: 'Both hands with 2 fingers of the left hand forming a right angle and the thumb of the right hand touching the elbow.', image_url: null },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "Y" menggunakan jari telunjuk tangan kanan untuk menyentuh siku?',
                            en: 'Does the BISINDO sign "Y" use the index finger of the right hand to touch the elbow?',
                        },
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
                            id: "Peragakan huruf BISINDO Y di depan kamera!",
                            en: "Sign letter 'Y' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'Y',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO Y di depan kamera!",
                            en: "Once again! Sign letter 'Y' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'Y',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['Y', 'Y', 'Y'],
                        },
                        correctAnswer: 'YYY',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // Level 36: Huruf Z
        {
            orderIndex: 36,
            type: 'learning',
            title: { id: 'Huruf Z', en: 'Letter Z' },
            description: {
                id: 'Pelajari dasar huruf isyarat BISINDO untuk huruf Z.',
                en: 'Learn the basics of BISINDO sign language for letter Z.',
            },
            minScoreToUnlockNext: 50,
            materials: {
                create: [
                    {
                        orderIndex: 1,
                        contentText: {
                            id: 'Perhatikan gambar berikut. Ini adalah huruf Z dalam BISINDO.',
                            en: 'Watch the following image. This is the letter Z in BISINDO.',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_z.jpg',
                    },
                    {
                        orderIndex: 2,
                        contentText: {
                            id: 'Isyarat dibentuk menggunakan tangan kanan atau tangan dominan dengan kondisi telapak terbuka dan rapat lalu ditekuk ke arah luar/kiri.',
                            en: 'The sign is formed using the right or dominant hand with the palm open and flat then bent outwards/to the left.'
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/ft_z.jpg',
                    },
                    {
                        orderIndex: 3,
                        contentText: {
                            id: 'Pastikan jari-jari tangan tertutup rapat dan lengan ditekuk dengan tegas, bukan melengkung.',
                            en: 'Ensure the fingers are closed tightly and the arm is bent firmly, not curved.'
                        },
                    },
                ],
            },
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Gambar manakah yang termasuk BISINDO "Z"?',
                            en: 'Which image represents the BISINDO letter Z?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_y.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_w.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_z.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_x.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Deskripsi manakah yang sesuai menggambarkan isyarat "Z"?',
                            en: 'Which description matches the sign "Z"?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: 'Kedua tangan ditekuk', en: '', image_url: null },
                                { key: 'b', id: 'Tangan kanan dikepal dan ditekuk', en: '', image_url: null },
                                { key: 'c', id: 'Kedua jari telunjuk disilangkan', en: '', image_url: null },
                                { key: 'd', id: 'Telapak tangan terbuka rapat, lalu lengan ditekuk ke arah luar', en: '', image_url: null },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah isyarat BISINDO "Z" menggunakan tangan kanan yang dikepal?',
                            en: 'Does the BISINDO sign "Z" use the right hand that is clenched?'
                        },
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO Z di depan kamera!",
                            en: "Sign letter 'Z' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'Z',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Sekali lagi! Peragakan huruf BISINDO Z di depan kamera!",
                            en: "Once again! Sign letter 'Z' in front of camera!",
                        },
                        options: null,
                        correctAnswer: 'Z',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['Z', 'Z', 'Z'],
                        },
                        correctAnswer: 'ZZZ',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 37
        // Level 37: Uji Pemahaman 11
        {
            orderIndex: 37,
            type: 'test',
            title: { id: 'Uji Pemahaman 11', en: 'Comprehension Test 11' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-Z.',
                en: 'Test your knowledge of BISINDO sign language for letters A-Z.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO W?',
                            en: 'Which image represents the BISINDO letter W?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_x.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_w.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_h.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO X?',
                            en: 'Which image represents the BISINDO letter X?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_y.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_x.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO Y?',
                            en: 'Which image represents the BISINDO letter Y?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_y.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                            ],
                        },
                        correctAnswer: 'b',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO Z?',
                            en: 'Does the image below represent the BISINDO letter Z?',
                        },
                        mediaUrl: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_r.jpg',
                        options: {
                            choices: [
                                { key: 'true', id: 'Ya', en: 'Yes', image_url: null },
                                { key: 'false', id: 'Tidak', en: 'No', image_url: null },
                            ],
                        },
                        correctAnswer: 'false',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO W di depan kamera!",
                            en: "Sign letter 'W' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'W',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO X di depan kamera!",
                            en: "Sign letter 'X' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'X',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO Y di depan kamera!",
                            en: "Sign letter 'Y' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'Y',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['I', 'Z', 'I', 'N'],
                        },
                        correctAnswer: 'IZIN',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['B', 'A', 'B', 'I'],
                        },
                        correctAnswer: 'BAYI',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['T', 'A', 'X', 'I'],
                        },
                        correctAnswer: 'TAXI',
                        timeLimitSeconds: 40,
                    },
                ],
            },
        },
        // 38
        // Level 38: Uji Pemahaman 12
        {
            orderIndex: 38,
            type: 'test',
            title: { id: 'Uji Pemahaman 12', en: 'Comprehension Test 12' },
            description: {
                id: 'Uji pemahaman huruf isyarat BISINDO untuk huruf A-Z.',
                en: 'Test your knowledge of BISINDO sign language for letters A-Z.',
            },
            minScoreToUnlockNext: 70,
            questions: {
                create: [
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO Z?',
                            en: 'Which image represents the BISINDO letter Z?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_a.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_c.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_s.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_z.jpg' },
                            ],
                        },
                        correctAnswer: 'd',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO W?',
                            en: 'Which image represents the BISINDO letter W?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_e.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_w.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_b.jpg' },
                            ],
                        },
                        correctAnswer: 'c',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'multiple_choice',
                        questionText: {
                            id: 'Manakah gambar yang termasuk huruf BISINDO Y?',
                            en: 'Which image represents the BISINDO letter Y?',
                        },
                        options: {
                            choices: [
                                { key: 'a', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_y.jpg' },
                                { key: 'b', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_u.jpg' },
                                { key: 'c', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_v.jpg' },
                                { key: 'd', id: '', en: '', image_url: 'https://res.cloudinary.com/dnn3mm02t/image/upload/lsn_l.jpg' },
                            ],
                        },
                        correctAnswer: 'a',
                        timeLimitSeconds: 20,
                    },
                    {
                        type: 'true_false',
                        questionText: {
                            id: 'Apakah gambar berikut merupakan contoh huruf BISINDO A?',
                            en: 'Does the image below represent the BISINDO letter A?',
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
                            id: "Peragakan huruf BISINDO Z di depan kamera!",
                            en: "Sign letter 'Z' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'Z',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO W di depan kamera!",
                            en: "Sign letter 'W' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'W',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Peragakan huruf BISINDO S di depan kamera!",
                            en: "Sign letter 'S' in front of camera!",
                        },
                        options: {
                            showHint: true,
                        },
                        correctAnswer: 'S',
                        timeLimitSeconds: 25,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['Z', 'O', 'N', 'A'],
                        },
                        correctAnswer: 'ZONA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['D', 'E', 'W', 'A'],
                        },
                        correctAnswer: 'DEWA',
                        timeLimitSeconds: 40,
                    },
                    {
                        type: 'camera_practice',
                        questionText: {
                            id: "Eja rangkaian huruf BISINDO berikut secara berurutan.",
                            en: "Spell the following BISINDO letters in sequence.",
                        },
                        options: {
                            mode: 'spelling',
                            letters: ['S', 'A', 'Y', 'A'],
                        },
                        correctAnswer: 'SAYA',
                        timeLimitSeconds: 40,
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
