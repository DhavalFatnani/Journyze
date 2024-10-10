import Hotel from "../model/hotel.model.js";

const getAllhotelHandler = async (req, res) => {
  const hotelCategory = req.query.category;
  try {
    let hotelsData;
    if (hotelCategory) {
      hotelsData = await Hotel.find({ category: hotelCategory });
    } else {
      hotelsData = await Hotel.find({});
    }
    hotelsData
      ? res.json(hotelsData)
      : res.status(404).json({ message: "Hotels not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllhotelHandler;
