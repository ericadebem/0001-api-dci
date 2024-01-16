import express from "express"
import {createCustomer} from "./customersController.js"

export const travelRouter = express.Router();

travelRouter.route("/").post(createCustomer)


