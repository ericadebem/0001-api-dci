import { Employee } from "./employeeModel.js";

export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    employee
      ? res.status(201).json({ employee })
      : res.status(404).json({ msg: "Employee not found" });
  } catch (error) {
    console.error(error.msg);
    res.status(500).json(error);
  }
};
export const getAllEmployee = async (req, res) => {
  try {
    const employee = await Employee.find({});
    res.status(201).json({ employee });
  } catch (error) {
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
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    employee
      ? res.status(201).json({ employee })
      : res.status(404).json({ msn: "Employee not found" });
  } catch (error) {
    console.error(error.msg);
    res.status(500).json(error);
  }
};
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.status(201).json({ employee });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
