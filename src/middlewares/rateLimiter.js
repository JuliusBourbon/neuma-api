import rateLimit from 'express-rate-limit';

// Auth Endpoint
export const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 20,
    message: {
        success: false,
        message: 'Terlalu banyak percobaan. Coba lagi beberapa saat lagi.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// All Endpoint
export const globalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
});