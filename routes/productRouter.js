import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productCtrl.js";

const router = express.Router();

router.route("/products", getProducts).get(getProducts).post(createProduct);

router.route("/products/:id").delete(deleteProduct).put(updateProduct);

export default router;
