import express from 'express';
import { addMultipleStudentsToMentor, createMentor, getStudentsForMentor } from '../Controllers/mentorController.js';

const router = express.Router();

router.post('/create-mentor', createMentor);
router.post('/add-multilple-students', addMultipleStudentsToMentor);
router.get('/students/:mentorId', getStudentsForMentor);


export default router;