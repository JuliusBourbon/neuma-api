import { ApiError } from '../utils/ApiError.js';

export function errorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            details: err.details,
        });
    }

    console.error(err);

    return res.status(500).json({
        success: false,
        message: 'Terjadi kesalahan pada server.',
    });
}

export function notFoundHandler(req, res) {
    res.status(404).json({ success: false, message: 'Route tidak ditemukan.' });
}