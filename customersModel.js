import mongoose from "mongoose";

export const customersSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "customers",
  }
);

export const Customers = mongoose.model("Customers", customersSchema);
