import express from "express";

import {
  getTravel,
  getAllTravel,
  postTravel,
  updateTravel,
  deleteTravel,
  postManyTravels,
} from "../controller/travelController.js";

export const travelRouter = express.Router();

travelRouter.route("/").post(postTravel);
travelRouter.route("/many").post(postManyTravels).get(getAllTravel);
travelRouter
  .route("/:id")
  .get(getTravel)
  .patch(updateTravel)
  .delete(deleteTravel);
