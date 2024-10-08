import express from "express";
import hotels from "../data/hotels.js";
import Hotel from "../model/hotel.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const hotelsData = await Hotel.find({});
    hotelsData
      ? res.json(hotelsData)
      : res.status(404).json({ message: "Hotels not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
