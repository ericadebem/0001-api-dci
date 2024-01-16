import mongoose from "mongoose";

export const customersSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "customers",
    versionKey: false,
    timestamps: true,
  }
);

export const Customers = mongoose.model("Customers", customersSchema);
