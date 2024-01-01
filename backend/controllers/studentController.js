import User from '../models/UserSchema.js';

export const updateStudent = async (req, res) => {
    const id = req.params.id
    try {
        const updatedStudent = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, messgae: "Successfully updated user", data:updatedStudent });
    } catch (err) {
        res.status(500).json({ success: false, messgae: "Failed to updated" });
    }
};

export const deleteStudent = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, messgae: "Successfully deleted user" });
    } catch (err) {
        res.status(500).json({ success: false, messgae: "Failed to delete" });
    }
};

export const getSingleStudent = async (req, res) => {
    const id = req.params.id
    try {
        const student = await User.findById(id,).select("-password" );
        res.status(200).json({ success: true, messgae: "User found",data:student });
    } catch (err) {
        res.status(404).json({ success: false, messgae: "User does not exist" });
    }
};

export const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ role: 'students' });
        res.status(200).json({ success: true, messgae: "Users found",data:students });
    } catch (err) {
        res.status(404).json({ success: false, messgae: "Not found" });
    }
};