import express from "express";
import {
  createCustomer,
  getCustomer,
  deleteCustomer,
  getAllCustomers,
  updateCustomer,
  postManyCustomer,
} from "../controller/customersController.js";

export const customersRouter = express.Router();

customersRouter.route("/").post(createCustomer).get(getAllCustomers);
customersRouter.route("/many").post(postManyCustomer);
customersRouter
  .route("/:id")
  .get(getCustomer)
  .delete(deleteCustomer)
  .patch(updateCustomer);
