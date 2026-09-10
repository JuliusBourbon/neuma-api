import { OAuth2Client } from 'google-auth-library';
import { prisma } from '../../db/prismaClient.js';
import { hashPassword, comparePassword } from '../../utils/password.js';
import { signAccessToken, signRefreshToken } from '../../utils/token.js';
import { ApiError } from '../../utils/ApiError.js';

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

function buildTokens(user) {
    const payload = { userId: user.id, email: user.email };
    return {
        accessToken: signAccessToken(payload),
        refreshToken: signRefreshToken(payload),
    };
}

// Create new user with UserStats
async function createUserWithStats(data) {
    return prisma.user.create({
        data: {
            ...data,
            stats: { create: {} },
        },
    });
}

export async function registerUser({ email, password, username }) {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        throw new ApiError(409, 'Email sudah terdaftar.');
    }

    const passwordHash = await hashPassword(password);
    const user = await createUserWithStats({ email, passwordHash, username });

    return { user, tokens: buildTokens(user) };
}

export async function loginUser({ email, password }) {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.passwordHash) {
        throw new ApiError(401, 'Email atau password salah.');
    }

    const isValid = await comparePassword(password, user.passwordHash);
    if (!isValid) {
        throw new ApiError(401, 'Email atau password salah.');
    }

    return { user, tokens: buildTokens(user) };
}

export async function loginOrRegisterWithGoogle({ idToken }) {
    let payload;
    try {
        const ticket = await googleClient.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        payload = ticket.getPayload();
    } catch {
        throw new ApiError(401, 'Google ID token tidak valid.');
    }

    const { sub: googleId, email } = payload;

    let user = await prisma.user.findUnique({ where: { googleId } });

    if (!user) {
        // Check if email is already used in manual account
        // If yes, link googleId to that account
        const existingByEmail = await prisma.user.findUnique({ where: { email } });

        if (existingByEmail) {
            user = await prisma.user.update({
                where: { id: existingByEmail.id },
                data: { googleId },
            });
        } else {
            user = await createUserWithStats({ email, googleId });
        }
    }

    return { user, tokens: buildTokens(user) };
}

export async function refreshUserSession(userId) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
        throw new ApiError(401, 'Sesi tidak valid.');
    }
    return buildTokens(user);
}