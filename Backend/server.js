import express from "express";
import dotenv from "dotenv";
import hotelsRouter from "./routes/hotels.router.js";
import singleHotelRouter from "./routes/singleHotel.router.js";
import categoriesRouter from "./routes/categories.router.js";
import hotelImportRouter from "./routes/hotelsImport.router.js";
import categoriesImportRouter from "./routes/categoriesImport.router.js";
import usersRouter from "./routes/auth.router.js";
import wishlistRouter from "./routes/wishlist.router.js";
import connectDB from "./config/dbConfig.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.use("/api/hotelsDataImport", hotelImportRouter);
app.use("/api/categoriesDataImport", categoriesImportRouter);

app.use("/api/hotels", hotelsRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/auth", usersRouter);

app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected Successfully!");
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
