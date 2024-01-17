import { Buss } from "../model/bussModel.js";

const handleError = (error) => {
  console.error(error.msg);
  return res.status(500).json(error);
};
const handleTrue = (true) => {
  buss ? res.status(201).json({ buss })
  : res.status(404).json({ msg: "Buss not found" })
};

export const getBuss = async (req, res) => {
  try {
    const buss = await Buss.findById(req.params.id);
    buss {handleTrue(true)}
  } catch (error) {
    handleError(error)
  }
};
export const getAllBuss = async (req, res) => {
  try {
    const buss = await Buss.find({});
    res.status(201).json({ buss });
  } catch (error) {
    handleError(error);
  }
};
export const createBuss = async (req, res) => {
  try {
    const buss = await Buss.create(req.body);
    console.log(req.body);
    res.status(201).json({ buss });
  } catch (error) {
    handleError(error);
  }
};
export const updateBuss = async (req, res) => {
  try {
    const buss = await Buss.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    buss
      ? res.status(201).json({ buss })
      : res.status(404).json({ msg: "Buss not found" });
  } catch (error) {
    handleError(error);
  }
};
export const deleteBuss = async (req, res) => {
  try {
    const buss = await Buss.findByIdAndDelete(req.params.id);
    res.status(201).json({ buss });
  } catch (error) {
    handleError(error);
  }
};
