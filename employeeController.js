import { Employee } from "./employeeModel.js";

export const getEmployee = async (req, res) => {
    try {
        c
    }catch(error) {
        console.error(error.msg);
        res.status(500).json(error);
    }
};

export const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    console.log(req.body);
    res.status(201).json({ employee });
  } catch (error) {
    console.error(error.msg);
    res.status(500).json(error);
  }
};
