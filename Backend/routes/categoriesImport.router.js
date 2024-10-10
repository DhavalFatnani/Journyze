import express from "express";
import categories from "../data/categories.js";
import Category from "../model/category.model.js";

const categoriesImportRouter = express.Router();

categoriesImportRouter.post("/", async (req, res) => {
  try {
    await Category.deleteMany({});
    const categoriesInDB = await Category.insertMany(categories.data);
    res.json({ message: "Categories Imported Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default categoriesImportRouter;
