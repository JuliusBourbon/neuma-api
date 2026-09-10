import * as leaderboardService from './leaderboard.service.js';

export async function getTop(req, res, next) {
    try {
        const leaderboard = await leaderboardService.getTopLeaderboard();
        res.status(200).json({ success: true, data: { leaderboard } });
    } catch (err) {
        next(err);
    }
}

export async function getMyRank(req, res, next) {
    try {
        const myRank = await leaderboardService.getMyRank(req.userId);
        res.status(200).json({ success: true, data: { myRank } });
    } catch (err) {
        next(err);
    }
}