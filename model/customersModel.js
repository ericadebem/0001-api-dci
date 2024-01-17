import mongoose from "mongoose";

export const customersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "You must add a name"],
      maxlength: 50,
      trim: true,
      lowercase: true
    },
    age: {
      type: Number,
      require: [true, "You must add an age"],
      maxlength: 50,
      trim: true,
    },
  },
  {
    collection: "customers",
    versionKey: false,
    timestamps: true,
  }
);

export const Customers = mongoose.model("Customers", customersSchema);
