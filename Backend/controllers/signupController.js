import User from "../model/user.model.js";
import CryptoJS from "crypto-js";

const signupController = async (req, res) => {
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
};

export default signupController;
