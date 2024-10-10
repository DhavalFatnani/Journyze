import express from "express";
import Category from "../model/category.model.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", async (req, res) => {
  try {
    const categoriesData = await Category.find({});
    categoriesData
      ? res.json(categoriesData)
      : res.status(404).json({ message: "Categories not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default categoriesRouter;
