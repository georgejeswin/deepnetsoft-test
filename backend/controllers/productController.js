import Product from "../models/productModel.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
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
};

export const getProductsWithId = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

export const postProducts = async (req, res) => {
  try {
    // const file = req.file;
    // if (!file) return res.status(400).send("No image in the req ");
    // const fileName = req.file.filename;
    // const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    // const imagepath = `${basePath}${fileName}`;
    let product = new Product({
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
      // image: imagepath,
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
};

export const updateProducts = async (req, res) => {
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
};

export const deleteProduct = (req, res) => {
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
};
