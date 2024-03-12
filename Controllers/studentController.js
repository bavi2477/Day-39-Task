import Student from "../Models/student.js";
import Mentor from "../Models/mentor.js";

export const createStudent = async (req,res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(200).json({message:"Student added successfully",data:newStudent})
    } catch (error) {
        console.log(error);
    }
}


export const assignMentorToStudent = async (req, res) => {
    try {
        const { studentId } = req.params;
        const { mentorId } = req.body;

        const student = await Student.findByIdAndUpdate(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        student.mentor = mentorId;
        await student.save();

        res.status(200).json({ message: 'Mentor assigned to student successfully', data: student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getPreviousMentorForStudent = async (req, res) => {
    try {
        const { studentId } = req.params;

        const student = await Student.findById(studentId).populate('mentor', 'name');

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({message:"Succesfully fetched", previousMentor: student.mentor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};