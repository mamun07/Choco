import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  refreshToken,
} from "../controllers/userCtrl.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh_token", refreshToken);

export default router;
