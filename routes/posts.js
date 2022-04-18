import express from "express";
import { HomePage } from "../controllers/posts.js";
const router = express.Router();

router.get("/", HomePage);

export default router;
