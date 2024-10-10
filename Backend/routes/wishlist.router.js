import express from "express";
import Wishlist from "../model/wishlist.model.js";
import verifyUser from "../middleware/verifyUser.js";
import {
  createWishlistHandler,
  deleteWishlistHandler,
  getWishlistHandler,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter.post("/", verifyUser, createWishlistHandler);

wishlistRouter.delete("/:id", verifyUser, deleteWishlistHandler);

wishlistRouter.get("/", verifyUser, getWishlistHandler);

export default wishlistRouter;
