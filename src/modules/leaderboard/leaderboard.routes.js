import { Router } from 'express';
import * as leaderboardController from './leaderboard.controller.js';
import { requireAuth } from '../../middlewares/authMiddleware.js';

const router = Router();

router.use(requireAuth);

router.get('/top', leaderboardController.getTop);
router.get('/me', leaderboardController.getMyRank);

export default router;