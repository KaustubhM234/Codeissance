  import mongoose from 'mongoose';

  const StudentProfileSchema = new mongoose.Schema({
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    age: { type: String },
    certificate_number: { type: String },
    disabilityType: {
      type: String,
    },
    percentage: {type:String,}
    // Add more parameters as needed to categorize the disability
  });

  export default mongoose.model('StudentProfile', StudentProfileSchema);
  