import express from "express";
import mongoose from "mongoose";
import { customersRouter } from "./router/customersRouter.js";
import { employeeRouter } from "./router/employeeRouter.js";
import { travelRouter } from "./router/travelRouter.js";
import { bussRouter } from "./router/bussRouter.js"

const app = express();

app.use(express.json());
app.use("/customer", customersRouter);
app.use("/employee", employeeRouter);
app.use("/travel", travelRouter);
app.use("/buss" , bussRouter)

const conectDB = async () => {
  try {
    const conection = await mongoose.connect(
      "mongodb+srv://ericadebemm:cQQVdsTUT6ZrSsMj@cluster0.mu3nqdl.mongodb.net/"
    );
  } catch (error) {
    console.error(error);
  }
};
conectDB().then(() => {
  app.listen(5000, () => {
    console.log("server listening on port 5000");
  });
});
