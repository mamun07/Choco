import express from "express";
import { getPosts, getHome } from "../controllers/posts.js";
const router = express.Router();

router.get("/", getHome);
router.get("/", getPosts);

export default router;
