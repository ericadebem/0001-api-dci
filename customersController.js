import { Customers } from "./customersModel.js";

export const createCustomer = async (req, res) => {
  try {
    const customer = await Customers.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    console.error(Error.msg);
    res.status(500).json(error);
  }
};
export const 