import { ApiError } from '../utils/ApiError.js';

export function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        if (!result.success) {
            const details = result.error.flatten();
            return next(new ApiError(400, 'Validasi input gagal.', details));
        }

        req.validated = result.data;
        next();
    };
}