import { Router } from 'express';
import * as questsController from './quests.controller.js';
import { validate } from '../../middlewares/validate.js';
import { requireAuth } from '../../middlewares/authMiddleware.js';
import { claimQuestSchema } from './quests.schema.js';

const router = Router();

router.use(requireAuth);

router.get('/', questsController.listQuests);
router.post('/:id/claim', validate(claimQuestSchema), questsController.claimQuest);

export default router;