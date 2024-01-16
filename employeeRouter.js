import express from "express";
import {
  createEmployee,
  getEmployee,
  deleteEmployee,
} from "./employeeController.js";

export const employeeRouter = express.Router();

employeeRouter.route("/").post(createEmployee);
employeeRouter.route("/:id").get(getEmployee).delete(deleteEmployee);
