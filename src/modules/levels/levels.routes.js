import { Router } from 'express';
import * as levelsController from './levels.controller.js';
import { validate } from '../../middlewares/validate.js';
import { requireAuth } from '../../middlewares/authMiddleware.js';
import { getLevelDetailSchema } from './levels.schema.js';

const router = Router();

router.use(requireAuth);

router.get('/', levelsController.listLevels);
router.get('/:id', validate(getLevelDetailSchema), levelsController.getLevelDetail);

export default router;