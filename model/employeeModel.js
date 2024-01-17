import mongoose from "mongoose";

export const singleAbsenceSchema = new mongoose.Schema({
  startDate: Date,
  endeDate: Date,
});
const validateEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};
export const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "You must add a name"],
      maxlength: 50,
      trim: true,
      lowercase: true
    },
    sector: String,
    email: {
      type: String,
      validate: { validator: validateEmail, msg: "Invalid Email format" },
    },
    adresse: String,
    vacationDays: Number,
    vacationTake: [singleAbsenceSchema],
    sickDays: [singleAbsenceSchema],
    startDate: Date,
  },
  {
    collection: "employee",
    versionKey: false,
    timestamps: true,
  }
);

export const Employee = mongoose.model("Employee", employeeSchema);
