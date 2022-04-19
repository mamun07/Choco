import express from "express";
const router = express.Router();
import { userRegister, refreshToken } from "../controllers/userCtrl.js";

router.post("/register", userRegister);
router.get("/refresh_token", refreshToken);

export default router;
