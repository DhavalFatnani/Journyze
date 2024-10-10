import express from "express";
import getsingleHotelHandler from "../controllers/singleHotelController.js";

const singleHotelRouter = express.Router();

singleHotelRouter.get("/:id", getsingleHotelHandler);

export default singleHotelRouter;
