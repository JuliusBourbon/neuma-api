import { Router } from 'express';
import * as authController from './auth.controller.js';
import { validate } from '../../middlewares/validate.js';
import { requireRefreshToken } from '../../middlewares/authMiddleware.js';
import { authRateLimiter } from '../../middlewares/rateLimiter.js';
import { registerSchema, loginSchema, googleAuthSchema } from './auth.schema.js';

const router = Router();

router.post('/register', authRateLimiter, validate(registerSchema), authController.register);
router.post('/login', authRateLimiter, validate(loginSchema), authController.login);
router.post('/google', authRateLimiter, validate(googleAuthSchema), authController.googleAuth);
router.post('/refresh', requireRefreshToken, authController.refresh);
router.post('/logout', authController.logout);

export default router;