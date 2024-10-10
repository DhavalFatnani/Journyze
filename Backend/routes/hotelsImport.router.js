import express from "express";
import Hotel from "../model/hotel.model.js";
import hotels from "../data/hotels.js";

const hotelImportRouter = express.Router();

hotelImportRouter.post("/import", async (req, res) => {
  try {
    await Hotel.deleteMany({});
    const hotelsInDB = await Hotel.insertMany(hotels.data);
    res.json({ message: "Data Imported Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default hotelImportRouter;
