import express from "express";
const router = express.Router();
import { register, login, refreshToken } from "../controllers/userCtrl.js";

router.post("/register", register);
router.post("/login", login);
router.get("/refresh_token", refreshToken);

export default router;
