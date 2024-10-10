import express from "express";
import getAllhotelHandler from "../controllers/hotelController.js";

const hotelsRouter = express.Router();

hotelsRouter.get("/", getAllhotelHandler);

export default hotelsRouter;
