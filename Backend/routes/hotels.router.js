import express from "express";
import hotels from "../data/hotels.js";

const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Hotels Route Accessed Successfully!");

  res.json(hotels.data);
});

export default router;
