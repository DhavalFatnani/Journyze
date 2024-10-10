import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const loginController = async (req, res) => {
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
};

export default loginController;
