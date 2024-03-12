import express from 'express';
import { assignMentorToStudent, createStudent, getPreviousMentorForStudent } from '../Controllers/studentController.js';

const router = express. Router()

router.post('/create-student',createStudent);
router.put('/assign-mentor/:studentId', assignMentorToStudent);
router.get('/previous-mentor/:studentId', getPreviousMentorForStudent);

export default router;
