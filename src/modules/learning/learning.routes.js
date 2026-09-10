import * as learningService from './learning.service.js';

export async function startQuestion(req, res, next) {
    try {
        const { levelId, questionId } = req.validated.params;
        const result = await learningService.startQuestion(req.userId, levelId, questionId);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        next(err);
    }
}

export async function submitQuestion(req, res, next) {
    try {
        const { levelId, questionId } = req.validated.params;
        const result = await learningService.submitQuestion(req.userId, levelId, questionId, req.validated.body);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        next(err);
    }
}

export async function completeLevel(req, res, next) {
    try {
        const { levelId } = req.validated.params;
        const result = await learningService.completeLevel(req.userId, levelId);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        next(err);
    }
}