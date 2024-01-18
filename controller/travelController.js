import { Travel } from "../model/travelModel.js";
import Data from "../travelData.json" assert {type: "json"}

const handleError = (error, res) => {
  console.error(error.msg);
  return res.status(500).json(error);
};
const handleTrue = (travel, res) => {
  return travel
    ? res.status(201).json({ travel })
    : res.status(404).json({ msg: "Travel not found" });
};

export const getTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    handleTrue(travel, res);
  } catch (error) {
    handleError(error, res);
  }
};
export const postTravel = async (req, res) => {
  try {
    const travel = await Travel.create(req.body);
    res.status(201).json({ travel });
  } catch (error) {
    handleError(error, res);
  }
};
export const updateTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    handleTrue(travel, res);
  } catch (error) {
    handleError(error, res);
  }
};
export const deleteTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    handleTrue(travel, res);
  } catch (error) {
    handleError(error, res);
  }
};
export const postManyTravels = async (req, res) => {
  try {
    const travels = await Travel.insertMany(Data)
    handleTrue(travels, res);
  }catch(error) {
    handleError(error, res);
  }
}
