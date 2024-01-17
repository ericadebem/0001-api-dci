import express from "express";
import {
  createEmployee,
  getEmployee,
  getAllEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeeController.js";

export const employeeRouter = express.Router();

employeeRouter.route("/").post(createEmployee).get(getAllEmployee);
employeeRouter
  .route("/:id")
  .get(getEmployee)
  .delete(deleteEmployee)
  .patch(updateEmployee);
