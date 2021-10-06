import express from "express";
import Product from "../models/productModel.js";
import multer from "multer";
import mongoose from "mongoose";

const router = express.Router();

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadErr = new Error("Invalid image type");
    if (isValid) uploadErr = null;
    cb(uploadErr, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extenstion = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extenstion}`);
  },
});

const uploadOptions = multer({ storage: storage });

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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
});

router.post("/", uploadOptions.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).send("No image in the req ");
    const fileName = req.file.filename;
    const basepath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    const imagepath = `${basePath}${fileName}`;
    let product = new Product({
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
      image: imagepath,
    });

    product = await product.save();
    if (!product) {
      return res.status(500).send("The product cannot be saved");
    }
    res.status(201).send(product);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/:id", uploadOptions.single("image"), async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).send("Invalid product ID");
  }
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(400).send("Invalid product");

  const file = req.file;
  let imagepath;

  if (file) {
    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    imagepath = `${basePath}${fileName}`;
  } else {
    imagepath = product.image;
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      image: imagepath,
    },
    { new: true }
  );

  if (!updatedProduct)
    return res.status(500).send("The Product cannot be Update!");

  res.send(updatedProduct);
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then((product) => {
      if (product) {
        return res.status(200).json({
          success: true,
          message: "Product deleted",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "delete failed",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
    });
});

export default router;
