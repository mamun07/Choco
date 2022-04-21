import express from "express";
const router = express.Router();
import { getCategories } from "../controllers/categoryCtrl.js";

router.route("/category").get(getCategories);

export default router;
