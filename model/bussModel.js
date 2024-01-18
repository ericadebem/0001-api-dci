import mongoose, { Schema } from "mongoose";

export const bussSchema = new mongoose.Schema(
  {
    model: String,
    capacity: {
      type: Number,
      require: true,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      require: true,
    },
  },
  {
    collection: "buss",
    versionKey: false,
    timestamps: true,
  }
);

export const Buss = mongoose.model("Buss", bussSchema);
