import { Router } from 'express';
import * as shopController from './shop.controller.js';
import { validate } from '../../middlewares/validate.js';
import { requireAuth } from '../../middlewares/authMiddleware.js';
import { purchaseItemSchema } from './shop.schema.js';

const router = Router();

router.use(requireAuth);

router.get('/items', shopController.listItems);
router.post('/items/:id/purchase', validate(purchaseItemSchema), shopController.purchaseItem);

export default router;