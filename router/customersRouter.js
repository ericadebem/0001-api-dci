import express from "express";
import {
  createCustomer,
  getCustomer,
  deleteCustomer,
  getAllCustomers,
  updateCustomer,
} from "../controller/customersController.js";

export const customersRouter = express.Router();

customersRouter.route("/").post(createCustomer).get(getAllCustomers);
customersRouter
  .route("/:id")
  .get(getCustomer)
  .delete(deleteCustomer)
  .patch(updateCustomer);
