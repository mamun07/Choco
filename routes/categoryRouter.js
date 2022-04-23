import express from "express";
const router = express.Router();
import {
  getCategories,
  creatCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryCtrl.js";
import { auth } from "../middleware/auth.js";
import { authAdmin } from "../middleware/authAdmin.js";

router
  .route("/category")
  .get(getCategories)
  .post(auth, authAdmin, creatCategory);

router
  .route("/category/:id")
  .delete(auth, authAdmin, deleteCategory)
  .put(auth, authAdmin, updateCategory);

export default router;
