import Wishlist from "../model/wishlist.model.js";

const createWishlistHandler = async (req, res) => {
  const wishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await wishlist.save();
    res.status(201).json(savedWishlist);
  } catch (error) {
    res.status(500).json({ message: "Error Creating a Wishlist!" });
  }
};

const deleteWishlistHandler = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);

    res.json({ message: "Wishlist Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting a Wishlist!" });
  }
};

const getWishlistHandler = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({});
    wishlist.length === 0
      ? res.status(404).json({ message: "No items found in Wishlist" })
      : res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error Fetching Wishlist!" });
  }
};

export { createWishlistHandler, deleteWishlistHandler, getWishlistHandler };
