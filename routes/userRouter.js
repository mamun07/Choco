import express from "express";
const router = express.Router();
import { userRegister } from "../controllers/userCtrl.js";

router.post("/register", userRegister);

export default router;
