// routes/studentProfile.js
import express from 'express';
import { authenticate } from '../auth/verifyToken.js';
import StudentProfile from '../models/studentProfileSchema.js';

const router = express.Router();

// Create a new StudentProfile document
router.post('/', authenticate, async (req, res) => {
  try {
    // Extract data from the request body
    const {
      age,
      certificate_number,
      disabilityType,
      percentage,
    } = req.body;

    // Create a new StudentProfile document
    const studentProfile = new StudentProfile({
      user: req.userId, // User ID obtained from authentication middleware
      age,
      certificate_number,
      disabilityType,
      percentage
    });

    // Save the StudentProfile document to the database
    await studentProfile.save();

    res.status(201).json(studentProfile);
  } catch (error) {
    console.error('Error creating StudentProfile:', error);
    res.status(500).json({ error: 'Failed to create StudentProfile' });
  }
});

export default router;
