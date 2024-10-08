import express from "express";
import dotenv from "dotenv";
import router from "./routes/hotels.router.js";
import dataImportRouter from "./routes/dataImport.router.js";
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

app.use("/api/hotelsDataImport", dataImportRouter);

app.use("/api/hotels", router);

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected Successfully!");
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
