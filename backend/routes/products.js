import express from "express";
import Product from "../models/productModel.js";
import multer from "multer";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const productList = await Product.find();
    if (!productList) {
      res.status(500).json({ success: false });
    }
    res.json(productList);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
