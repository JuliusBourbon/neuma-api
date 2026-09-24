import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../db/prismaClient.js";
import { hashPassword, comparePassword } from "../../utils/password.js";
import { signAccessToken, signRefreshToken } from "../../utils/token.js";
import { ApiError } from "../../utils/ApiError.js";
import { syncQuestProgress } from "../quests/questProgress.service.js";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

function buildTokens(user) {
  const payload = { userId: user.id, email: user.email };
  return {
    accessToken: signAccessToken(payload),
    refreshToken: signRefreshToken(payload),
  };
}

// Create new user with UserStats and default avatars
async function createUserWithStats(data) {
  const shopItems = await prisma.shopItem.findMany();
  const mascot1 = shopItems.find((item) =>
    item.imageUrl.includes("mascot_1.png"),
  );
  const mascot2 = shopItems.find((item) =>
    item.imageUrl.includes("mascot_2.png"),
  );

  const inventoryData = [];
  if (mascot1) inventoryData.push({ shopItemId: mascot1.id });
  if (mascot2) inventoryData.push({ shopItemId: mascot2.id });

  const user = await prisma.user.create({
    data: {
      ...data,
      activeAvatarId: mascot1 ? mascot1.id : undefined,
      stats: { create: {} },
      inventory: {
        create: inventoryData,
      },
    },
  });

  if (inventoryData.length > 0) {
    await syncQuestProgress(user.id, "avatars_collected", inventoryData.length);
  }

  return user;
}

export async function registerUser({ email, password, username }) {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw new ApiError(409, "Email sudah terdaftar.");
  }

  const passwordHash = await hashPassword(password);
  const user = await createUserWithStats({ email, passwordHash, username });

  return { user, tokens: buildTokens(user) };
}

export async function loginUser({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user.passwordHash) {
    throw new ApiError(401, "Email atau password salah.");
  }

  const isValid = await comparePassword(password, user.passwordHash);
  if (!isValid) {
    throw new ApiError(401, "Email atau password salah.");
  }

  return { user, tokens: buildTokens(user) };
}

export async function setUserPassword({ userId, newPassword }) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new ApiError(404, "User tidak ditemukan.");
  }

  if (user.passwordHash) {
    throw new ApiError(
      409,
      "Password sudah tersedia. Gunakan fitur ganti password.",
    );
  }

  const passwordHash = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash },
  });

  return {
    message: "Password berhasil dibuat.",
  };
}

export async function changeUserPassword({ userId, oldPassword, newPassword }) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new ApiError(404, "User tidak ditemukan.");
  }

  if (!user.passwordHash) {
    throw new ApiError(
      400,
      "Akun belum memiliki password. Gunakan fitur buat password.",
    );
  }

  const isValid = await comparePassword(oldPassword, user.passwordHash);

  if (!isValid) {
    throw new ApiError(401, "Password lama salah.");
  }

  const passwordHash = await hashPassword(newPassword);

  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash },
  });

  return {
    message: "Password berhasil diubah.",
  };
}

export async function loginOrRegisterWithGoogle({ idToken, accessToken }) {
  let googleId;
  let email;

  if (accessToken) {
    try {
      const tokenInfo = await googleClient.getTokenInfo(accessToken);

      if (
        process.env.GOOGLE_CLIENT_ID &&
        tokenInfo.aud !== process.env.GOOGLE_CLIENT_ID
      ) {
        throw new Error("Google token audience mismatch.");
      }

      googleId = tokenInfo.sub || tokenInfo.user_id;
      email = tokenInfo.email;

      if (!googleId || !email) {
        const userinfoRes = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          },
        );
        if (userinfoRes.ok) {
          const profile = await userinfoRes.json();
          googleId = googleId || profile.sub;
          email = email || profile.email;
        }
      }
    } catch {
      throw new ApiError(401, "Google access token tidak valid.");
    }
  } else if (idToken) {
    try {
      const ticket = await googleClient.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      googleId = payload.sub;
      email = payload.email;
    } catch {
      throw new ApiError(401, "Google ID token tidak valid.");
    }
  } else {
    throw new ApiError(400, "Google access token atau ID token diperlukan.");
  }

  if (!googleId || !email) {
    throw new ApiError(400, "Informasi akun Google tidak lengkap.");
  }

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
    throw new ApiError(401, "Sesi tidak valid.");
  }
  return buildTokens(user);
}
