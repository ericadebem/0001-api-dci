import express from "express";
import {
  createEmployee,
  getEmployee,
  getAllEmployee,
  updateEmployee,
  deleteEmployee,
  postManyEmployee,
} from "../controller/employeeController.js";

export const employeeRouter = express.Router();

employeeRouter.route("/").post(createEmployee).get(getAllEmployee);
employeeRouter.route("/many").post(postManyEmployee);
employeeRouter
  .route("/:id")
  .get(getEmployee)
  .delete(deleteEmployee)
  .patch(updateEmployee);
