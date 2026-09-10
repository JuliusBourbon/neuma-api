import * as shopService from './shop.service.js';

export async function listItems(req, res, next) {
    try {
        const items = await shopService.listShopItemsForUser(req.userId);
        res.status(200).json({ success: true, data: { items } });
    } catch (err) {
        next(err);
    }
}

export async function purchaseItem(req, res, next) {
    try {
        const result = await shopService.purchaseItem(req.userId, req.validated.params.id);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        next(err);
    }
}