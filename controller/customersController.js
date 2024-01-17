import { Customers } from "../model/customersModel.js";

const handleError = (error) => {
  console.error(error.msg);
  return res.status(500).json(error);
};

export const getCustomer = async (req, res) => {
  try {
    const customer = await Customers.findById(req.params.id);
    customer
      ? res.status(201).json({ customer })
      : res.status(404).json({ msg: "Customer not found" });
  } catch (error) {
    handleError(error);
  }
};
export const getAllCustomers = async (req, res) => {
  try {
    const customer = await Customers.find({});
    res.status(201).json({ customer });
  } catch (error) {
    handleError(error);
  }
};
export const createCustomer = async (req, res) => {
  try {
    const customer = await Customers.create(req.body);
    console.log(req.body);
    res.status(201).json({ customer });
  } catch (error) {
    handleError(error);
  }
};
export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customers.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    customer
      ? res.status(201).json({ customer })
      : res.status(404).json({ msg: "Customer not found" });
  } catch (error) {
    handleError(error);
  }
};
export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customers.findByIdAndDelete(req.params.id);
    res.status(201).json({ customer });
  } catch (error) {
    handleError(error);
  }
};
