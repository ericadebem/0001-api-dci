import express from "express";
export const bussSchema = new mongoose.Schema(
    {
      
      
    },
    {
      collection: "customers",
      versionKey: false,
      timestamps: true,
    }
  );
  
  export const Buss = mongoose.model("Buss", bussSchema);
  