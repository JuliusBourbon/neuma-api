import { z } from 'zod';

export const startQuestionSchema = z.object({
    body: z.object({}).optional(),
    query: z.object({}).optional(),
    params: z.object({
        levelId: z.string().uuid(),
        questionId: z.string().uuid(),
    }),
});

export const submitQuestionSchema = z.object({
    body: z.object({
        answerKey: z.string().optional(),
        detectedLetter: z.string().optional(),
        confidence: z.number().min(0).max(1).optional(),
    }),
    query: z.object({}).optional(),
    params: z.object({
        levelId: z.string().uuid(),
        questionId: z.string().uuid(),
    }),
});

export const completeLevelSchema = z.object({
    body: z.object({}).optional(),
    query: z.object({}).optional(),
    params: z.object({
        levelId: z.string().uuid(),
    }),
});