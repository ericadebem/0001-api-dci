import { Travel } from "../model/travelModel.js";

export const getTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    travel
      ? res.status(201).json({ travel })
      : res.status(404).json({ msg: "Travel not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
export const postTravel = async (req, res) => {
  try {
    const travel = await Travel.create(req.body);
    res.status(201).json({ travel });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
export const updateTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    travel
      ? res.status(201).json({ travel })
      : res.status(404).json({ msg: "Travel not found " });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
export const deleteTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    travel
      ? res.status(201).json({ travel })
      : res.status(404).json({ msg: "Travel not found " });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};