import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    photo: { type: String },
    role: {
      type: String,
      enum: ["student", "admin", "teacher", "doctor"],
      default: "student",
    },
    gender: { type: String, enum: ["male", "female", "other"], default:"male", },
    bloodType: { type: String },
    appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
    isApproved: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
      },
    studentProfile: [{ type: mongoose.Types.ObjectId, ref: "StudentProfile" }],
    // teacherData: {},

  });
  
  export default mongoose.model("User", UserSchema);