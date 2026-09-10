import { z } from 'zod';

export const getLevelDetailSchema = z.object({
    body: z.object({}).optional(),
    query: z.object({}).optional(),
    params: z.object({
        id: z.string().uuid(),
    }),
});