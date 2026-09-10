import * as usersService from './users.service.js';

export async function getMe(req, res, next) {
    try {
        const user = await usersService.getUserProfile(req.userId);
        res.status(200).json({ success: true, data: { user } });
    } catch (err) {
        next(err);
    }
}

export async function updateMe(req, res, next) {
    try {
        const user = await usersService.updateUserProfile(req.userId, req.validated.body);
        res.status(200).json({ success: true, data: { user } });
    } catch (err) {
        next(err);
    }
}

export async function completeOnboarding(req, res, next) {
    try {
        const user = await usersService.completeOnboarding(req.userId);
        res.status(200).json({ success: true, data: { user } });
    } catch (err) {
        next(err);
    }
}

export async function getMyStats(req, res, next) {
    try {
        const stats = await usersService.getUserStats(req.userId);
        res.status(200).json({ success: true, data: { stats } });
    } catch (err) {
        next(err);
    }
}