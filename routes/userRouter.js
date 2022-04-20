import express from "express";
const router = express.Router();
import { register, login, refreshToken } from "../controllers/userCtrl.js";

router.post("/register", register);
router.get("/login", login);
router.get("/refresh_token", refreshToken);

export default router;
