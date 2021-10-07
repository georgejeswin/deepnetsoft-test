import User from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const userList = await User.find().select("-passwordHash");
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const registerUser = async (req, res) => {
  try {
    let user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
    });
    user = await user.save();

    if (!user) return res.status(400).send("User cannot be created");

    res.send(user);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("cannot find the user");
    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
      const token = jwt.sign(
        {
          userId: user._id,
          username: user.username,
        },
        process.env.secret,
        { expiresIn: "1w" }
      );
      res.status(200).send({ user: user.username, token });
    } else {
      res.status(400).send("password is wrong");
    }
  } catch (error) {
    res.status(400).json({
      error: error,
    });
  }
};
