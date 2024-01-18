import { Employee } from "../model/employeeModel.js";
import Data from "../employeeData.json" assert { type: "json" };

const handleError = (error, res) => {
  console.error(error.msg);
  return res.status(500).json(error);
};
const handleTrue = (employee, res) => {
  return employee
    ? res.status(201).json({ employee })
    : res.status(404).json({ msg: "Employee not found" });
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    handleTrue(employee, res);
  } catch (error) {
    handleError(error, res);
  }
};
export const getAllEmployee = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(201).json({ employee });
  } catch (error) {
    handleError(error, res);
  }
};
export const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    console.log(req.body);
    res.status(201).json({ employee });
  } catch (error) {
    handleError(error, res);
  }
};
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    handleTrue(employee, res);
  } catch (error) {
    handleError(error, res);
  }
};
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.status(201).json({ employee });
  } catch (error) {
    handleError(error, res);
  }
};
export const postManyEmployee = async (req, res) => {
  try {
    const employee = await Employee.insertMany(Data);
    handleTrue(employee, res);
  } catch (error) {
    handleError(error, res);
  }
};