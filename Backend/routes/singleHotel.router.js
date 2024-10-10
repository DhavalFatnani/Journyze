import express from "express";
import Hotel from "../model/hotel.model.js";

const singleHotelRouter = express.Router();

singleHotelRouter.get("/:id", async (req, res) => {
  const { id: hotelId } = req.params;
  try {
    const hotelData = await Hotel.findById(hotelId);
    hotelData
      ? res.json(hotelData)
      : res.status(404).json({ message: "Hotel not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default singleHotelRouter;
