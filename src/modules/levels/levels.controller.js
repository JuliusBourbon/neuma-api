import * as levelsService from './levels.service.js';

export async function listLevels(req, res, next) {
    try {
        const levels = await levelsService.listLevelsForUser(req.userId);
        res.status(200).json({ success: true, data: { levels } });
    } catch (err) {
        next(err);
    }
}

export async function getLevelDetail(req, res, next) {
    try {
        const level = await levelsService.getLevelDetail(req.validated.params.id, req.userId);
        res.status(200).json({ success: true, data: { level } });
    } catch (err) {
        next(err);
    }
}