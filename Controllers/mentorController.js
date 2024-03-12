import Mentor from "../Models/mentor.js";
import Student from "../Models/student.js";

export const createMentor = async (req,res) => {
    try {
        const newMentor = new Mentor(req.body);
        await newMentor.save();
        res.status(200).json({message:"Mentor added successfully",data:newMentor})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'})
    }
}

export const addMultipleStudentsToMentor = async (req, res) => {
    try {
        const { mentorId, studentIds } = req.body;

        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        const validStudentIds = [];
        const studentsWithMentor = [];

        for (const studentId of studentIds) {
            const student = await Student.findById(studentId);
            if (!student) {
                return res.status(404).json({ message: `Student with ID ${studentId} not found` });
            }
            if (student.mentor) {
                studentsWithMentor.push(studentId);
            } else {
                validStudentIds.push(studentId);
            }
        }

        if (studentsWithMentor.length > 0) {
            return res.status(400).json({ message: `Students with IDs ${studentsWithMentor.join(', ')} already have a mentor` });
        }

        if (validStudentIds.length > 0) {
            await Mentor.findByIdAndUpdate(mentorId, { $addToSet: { students: { $each: validStudentIds } } });
        }

        res.status(200).json({ message: 'Students added to mentor successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getStudentsForMentor = async (req, res) => {
    try {
        const { mentorId } = req.params;

        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        const students = await Student.find({ mentor: mentorId });
        
        res.status(200).json({message:"Here are students assigned for the particular mentor",data: students});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

