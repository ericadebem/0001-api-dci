import mongoose from "mongoose";

export const bussSchema = new mongoose.Schema(
  {
    bussNumber: {
      type: Number,
      require: true,
    },
    capacity: {
      type: Number,
      require: true,
    },
    driver: {
      type: Boolean,
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
