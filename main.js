import express from "express";
import mongoose from "mongoose";
import { travelRouter } from "./travelRoute.js";

const app = express();

app.use("/travel", travelRouter);

app.use("/", (req, res) => {
  res.send("Hallo");
});

const conectDB = async () => {
  try {
    const conection = await mongoose.connect(
      "mongodb+srv://ericadebemm:cQQVdsTUT6ZrSsMj@cluster0.mu3nqdl.mongodb.net/"
    );
  } catch (error) {
    console.error(error);
  }
};
    conectDB().then(()=> {
    app.listen(5000, () => console.log("server listening on port 5000"));  


    })
