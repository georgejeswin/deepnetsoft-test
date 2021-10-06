import express from "express";
import User from "../models/usersModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userList = await User.find().select("-passwordHash");
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;
