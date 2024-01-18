import express from "express";

import { getTravel, postTravel, updateTravel, deleteTravel } from "../controller/travelController.js"

export const travelRouter = express.Router()

travelRouter.route("/").post(postTravel)
travelRouter.route("/:id").get(getTravel).patch(updateTravel).delete(deleteTravel)




