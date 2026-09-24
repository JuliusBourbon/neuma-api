import { Router } from "express";
import * as authController from "./auth.controller.js";
import { validate } from "../../middlewares/validate.js";
import {
  requireAuth,
  requireRefreshToken,
} from "../../middlewares/authMiddleware.js";
import { authRateLimiter } from "../../middlewares/rateLimiter.js";
import {
  registerSchema,
  loginSchema,
  googleAuthSchema,
  setPasswordSchema,
  changePasswordSchema,
} from "./auth.schema.js";

const router = Router();

router.post(
  "/register",
  authRateLimiter,
  validate(registerSchema),
  authController.register,
);
router.post(
  "/login",
  authRateLimiter,
  validate(loginSchema),
  authController.login,
);
router.post(
  "/google",
  authRateLimiter,
  validate(googleAuthSchema),
  authController.googleAuth,
);
router.post(
  "/password/set",
  requireAuth,
  validate(setPasswordSchema),
  authController.setPassword,
);

router.post(
  "/password/change",
  requireAuth,
  validate(changePasswordSchema),
  authController.changePassword,
);

router.post("/refresh", requireRefreshToken, authController.refresh);
router.post("/logout", authController.logout);

export default router;
