import { z } from 'zod';

export const registerSchema = z.object({
    body: z.object({
        email: z.string().email('Format email tidak valid.'),
        password: z.string().min(8, 'Password minimal 8 karakter.'),
        username: z.string().min(3).max(30).optional(),
    }),
    query: z.object({}).optional(),
    params: z.object({}).optional(),
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().email('Format email tidak valid.'),
        password: z.string().min(1, 'Password wajib diisi.'),
    }),
    query: z.object({}).optional(),
    params: z.object({}).optional(),
});

export const googleAuthSchema = z.object({
    body: z.object({
        idToken: z.string().min(1, 'Google ID token wajib disertakan.'),
    }),
    query: z.object({}).optional(),
    params: z.object({}).optional(),
});