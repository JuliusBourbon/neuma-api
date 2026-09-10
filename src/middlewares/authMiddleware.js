import { verifyAccessToken, verifyRefreshToken } from '../utils/token.js';
import { ApiError } from '../utils/ApiError.js';

// Used to protect routes that require login (via Bearer access token)
export function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return next(new ApiError(401, 'Token akses tidak ditemukan.'));
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verifyAccessToken(token);
        req.userId = decoded.userId;
        next();
    } catch {
        next(new ApiError(401, 'Token akses tidak valid atau kedaluwarsa.'));
    }
}

// Used to verify refresh token from cookie
export function requireRefreshToken(req, res, next) {
    const token = req.cookies?.neuma_refresh_token;

    if (!token) {
        return next(new ApiError(401, 'Refresh token tidak ditemukan.'));
    }

    try {
        const decoded = verifyRefreshToken(token);
        req.userId = decoded.userId;
        next();
    } catch {
        next(new ApiError(401, 'Refresh token tidak valid atau kedaluwarsa.'));
    }
}