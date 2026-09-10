import { Router } from 'express';
import * as learningController from './learning.controller.js';
import { validate } from '../../middlewares/validate.js';
import { requireAuth } from '../../middlewares/authMiddleware.js';
import {
    startQuestionSchema,
    submitQuestionSchema,
    completeLevelSchema,
} from './learning.schema.js';

const router = Router();

router.use(requireAuth);

router.post(
    '/:levelId/questions/:questionId/start',
    validate(startQuestionSchema),
    learningController.startQuestion
);
router.post(
    '/:levelId/questions/:questionId/submit',
    validate(submitQuestionSchema),
    learningController.submitQuestion
);
router.post(
    '/:levelId/complete',
    validate(completeLevelSchema),
    learningController.completeLevel
);

export default router;