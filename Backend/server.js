import express from "express";
import dotenv from "dotenv";
import router from "./routes/hotels.router.js";

const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/hotels", router);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
