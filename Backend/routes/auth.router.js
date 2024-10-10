import express from "express";
import signupController from "../controllers/signupController.js";
import loginController from "../controllers/loginController.js";

const authRouter = express.Router();

authRouter.post("/register", signupController);

authRouter.post("/login", loginController);

export default authRouter;
