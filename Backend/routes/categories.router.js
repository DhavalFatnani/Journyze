import express from "express";
import getAllCategoriesHandler from "../controllers/categoryController.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getAllCategoriesHandler);

export default categoriesRouter;
