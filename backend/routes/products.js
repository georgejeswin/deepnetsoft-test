import express from "express";
import {
  getProducts,
  getProductsWithId,
  postProducts,
} from "../controllers/productController.js";
import authJwt from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductsWithId);

router.post("/", authJwt, postProducts);

export default router;
