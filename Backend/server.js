import express from "express";
import dotenv from "dotenv";
import hotelsRouter from "./routes/hotels.router.js";
import categoriesRouter from "./routes/categories.router.js";
import hotelImportRouter from "./routes/hotelsImport.router.js";
import categoriesImportRouter from "./routes/categoriesImport.router.js";
import connectDB from "./config/dbConfig.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/hotelsDataImport", hotelImportRouter);
app.use("/api/categoriesDataImport", categoriesImportRouter);

app.use("/api/hotels", hotelsRouter);
app.use("/api/categories", categoriesRouter);

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected Successfully!");
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
