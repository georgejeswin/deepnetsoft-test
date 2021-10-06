import express from "express";
import multer from "multer";
import {
  deleteProduct,
  getProducts,
  getProductsWithId,
  postProducts,
  updateProducts,
} from "../controllers/productController.js";

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

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductsWithId);

router.post("/", uploadOptions.single("image"), postProducts);

router.put("/:id", uploadOptions.single("image"), updateProducts);

router.delete("/:id", deleteProduct);

export default router;
