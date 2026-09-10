import { Router } from 'express';
import * as usersController from './users.controller.js';
import { validate } from '../../middlewares/validate.js';
import { requireAuth } from '../../middlewares/authMiddleware.js';
import { updateProfileSchema, completeOnboardingSchema } from './users.schema.js';

const router = Router();

// All route require authentication
router.use(requireAuth);

router.get('/me', usersController.getMe);
router.patch('/me', validate(updateProfileSchema), usersController.updateMe);
router.patch('/me/onboarding', validate(completeOnboardingSchema), usersController.completeOnboarding);
router.get('/me/stats', usersController.getMyStats);

export default router;