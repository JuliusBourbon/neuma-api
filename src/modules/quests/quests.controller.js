import * as questsService from './quests.service.js';

export async function listQuests(req, res, next) {
    try {
        const quests = await questsService.listQuestsForUser(req.userId);
        res.status(200).json({ success: true, data: { quests } });
    } catch (err) {
        next(err);
    }
}

export async function claimQuest(req, res, next) {
    try {
        const result = await questsService.claimQuestReward(req.userId, req.validated.params.id);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        next(err);
    }
}