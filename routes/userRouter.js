import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  getUser,
  refreshToken,
} from "../controllers/userCtrl.js";
import { auth } from "../middleware/auth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/refresh_token", refreshToken);

router.get("/infor", auth, getUser);

export default router;
