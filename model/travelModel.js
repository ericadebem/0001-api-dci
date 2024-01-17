import express from "express";
import mongoose from "mongoose";

export const travelSchema = new mongoose.Schema({
    from: String,
    timeFrom: Number,
    to: String,
    timeTo: Number,
    preis: Number    
},{
    timestamps: true,
    versionKey: false,
    collection: "travel"
}) 

export const Travel = mongoose.model("Travel", travelSchema)