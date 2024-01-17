import mongoose from "mongoose";

export const employeeSchema = new mongoose.Schema(
  {
    name: String,
    sector: String,
  },
  {
    collection: "employee",
    versionKey: false,
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", employeeSchema);
