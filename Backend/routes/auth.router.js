// @ts-ignore
import express from "express";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET
      ).toString(),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Error Creating a New User!" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Incorrect Email!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    ).toString(CryptoJS.enc.Utf8);

    if (hashedPassword !== req.body.password) {
      return res.status(401).json("Incorrect Password!");
    }

    const { password, ...others } = user._doc;
    const accessToken = jwt.sign(
      { username: user.username },
      process.env.ACCESS_TOKEN
    );

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default authRouter;
