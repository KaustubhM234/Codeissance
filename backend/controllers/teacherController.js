import User from '../models/UserSchema.js';

export const updateTeacher = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTeacher = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, messgae: "Successfully updated Doctor", data: updatedTeacher });
    } catch (err) {
        res.status(500).json({ success: false, messgae: "Failed to updated" });
    }
};

export const deleteTeacher = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, messgae: "Successfully deleted Doctor" });
    } catch (err) {
        res.status(500).json({ success: false, messgae: "Failed to delete" });
    }
};

export const getSingleTeacher = async (req, res) => {
    const id = req.params.id
    try {
        const doctor = await User.findById(id,)
            .populate("reviews")
            .select("-password");
        res.status(200).json({ success: true, messgae: "Doctor found", data: teacher });
    } catch (err) {
        res.status(404).json({ success: false, messgae: "Doctor does not exist" });
    }
};

export const getAllTeacher = async (req, res) => {
    try {
        const { query } = req.query
        let doctors;

        if (query) {
            teachers = await User.find({
                isApproved: 'approved',
                $or: [{ name: { $regex: query, $options: "i" } },
                { specialization: { $regex: query, $options: "i" } }
                ],
            }).select("-password");
        }
        else {
            teachers = await User.find({ isApproved: 'approved' }).select("-password");
        }
        res.status(200).json({ success: true, messgae: "Doctors found", data: teachers });
    } catch (err) {
        res.status(404).json({ success: false, messgae: "Not found" });
    }
};
