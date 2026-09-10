import { z } from 'zod';

export const updateProfileSchema = z.object({
    body: z.object({
        username: z.string().min(3).max(30).optional(),
        age: z.number().int().min(5).max(100).nullable().optional(),
        gender: z.enum(['male', 'female', 'other', 'prefer_not_to_say']).nullable().optional(),
        preferredLanguage: z.enum(['id', 'en']).optional(),
        activeAvatarId: z.string().uuid().nullable().optional(),
    }).refine((data) => Object.keys(data).length > 0, {
        message: 'Minimal satu field harus diisi untuk update profil.',
    }),
    query: z.object({}).optional(),
    params: z.object({}).optional(),
});

export const completeOnboardingSchema = z.object({
    body: z.object({}).optional(),
    query: z.object({}).optional(),
    params: z.object({}).optional(),
});