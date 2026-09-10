import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import { globalRateLimiter } from './middlewares/rateLimiter.js';
import authRoutes from './modules/auth/auth.routes.js';
import userRoutes from './modules/users/users.routes.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(globalRateLimiter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Neuma API is running!!!' });
});

// Route
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Neuma API berjalan di port ${PORT}`);
});