import express from "express";
const router = express.Router();
import { getCategories, creatCategory } from "../controllers/categoryCtrl.js";
import { auth } from "../middleware/auth.js";
import { authAdmin } from "../middleware/authAdmin.js";

router
  .route("/category")
  .get(getCategories)
  .post(auth, authAdmin, creatCategory);

export default router;
