import express from "express";
import {
  createBuss,
  getBuss,
  deleteBuss,
  getAllBuss,
  updateBuss,
  postManybuss,
} from "../controller/bussController.js";

export const bussRouter = express.Router();

bussRouter.route("/").post(createBuss).get(getAllBuss);
bussRouter.route("/many").post(postManybuss);
bussRouter.route("/:id").get(getBuss).delete(deleteBuss).patch(updateBuss);
