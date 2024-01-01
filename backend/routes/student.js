import express from 'express';
import { updateStudent,deleteStudent,getAllStudents,getSingleStudent } from "../controllers/studentController.js";
import { authenticate,restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id',authenticate,restrict(['student']),getSingleStudent);
router.get('/',getAllStudents);
router.put('/:id',authenticate,restrict(['student']),updateStudent);
router.delete('/:id',authenticate,restrict(['student']),deleteStudent);

export default router;