import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    required: true,
  },
});

const Wishlist = mongoose.model("wishlist", wishlistSchema);

export default Wishlist;
