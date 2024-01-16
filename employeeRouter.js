import { express } from "express";
import { createEmployee } from "./employeeController.js";

export const employeeRouter = express.Router();

employeeRouter.route("/").post(createEmployee);
