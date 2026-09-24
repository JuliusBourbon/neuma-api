import * as authService from "./auth.service.js";

const REFRESH_COOKIE_NAME = "neuma_refresh_token";

function setRefreshCookie(res, token) {
  res.cookie(REFRESH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/api/auth",
  });
}

function sanitizeUser(user) {
  const { passwordHash, ...safeUser } = user;

  return {
    ...safeUser,
    hasPassword: Boolean(passwordHash),
  };
}

export async function register(req, res, next) {
  try {
    const { email, password, username } = req.validated.body;
    const { user, tokens } = await authService.registerUser({
      email,
      password,
      username,
    });

    setRefreshCookie(res, tokens.refreshToken);
    res.status(201).json({
      success: true,
      data: { user: sanitizeUser(user), accessToken: tokens.accessToken },
    });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.validated.body;
    const { user, tokens } = await authService.loginUser({ email, password });

    setRefreshCookie(res, tokens.refreshToken);
    res.status(200).json({
      success: true,
      data: { user: sanitizeUser(user), accessToken: tokens.accessToken },
    });
  } catch (err) {
    next(err);
  }
}

export async function googleAuth(req, res, next) {
  try {
    const { idToken, accessToken } = req.validated.body;
    const { user, tokens } = await authService.loginOrRegisterWithGoogle({
      idToken,
      accessToken,
    });

    setRefreshCookie(res, tokens.refreshToken);
    res.status(200).json({
      success: true,
      data: { user: sanitizeUser(user), accessToken: tokens.accessToken },
    });
  } catch (err) {
    next(err);
  }
}

export async function refresh(req, res, next) {
  try {
    const tokens = await authService.refreshUserSession(req.userId);

    setRefreshCookie(res, tokens.refreshToken);
    res.status(200).json({
      success: true,
      data: { accessToken: tokens.accessToken },
    });
  } catch (err) {
    next(err);
  }
}

export async function setPassword(req, res, next) {
  try {
    const { newPassword } = req.validated.body;

    const result = await authService.setUserPassword({
      userId: req.userId,
      newPassword,
    });

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (err) {
    next(err);
  }
}

export async function changePassword(req, res, next) {
  try {
    const { oldPassword, newPassword } = req.validated.body;

    const result = await authService.changeUserPassword({
      userId: req.userId,
      oldPassword,
      newPassword,
    });

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (err) {
    next(err);
  }
}

export function logout(req, res) {
  res.clearCookie(REFRESH_COOKIE_NAME, { path: "/api/auth" });
  res.status(200).json({ success: true, message: "Berhasil logout." });
}
