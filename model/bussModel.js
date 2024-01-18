import express from "express";
export const bussSchema = new mongoose.Schema(
    {
      bussNumber : {
        type: Number,
        require: true
      },
      capacity: {
        type: Number,
        require: true
      },
      driver: true
    },
    {
      collection: "buss",
      versionKey: false,
      timestamps: true,
    }
  );
  
  export const Buss = mongoose.model("Buss", bussSchema);
  