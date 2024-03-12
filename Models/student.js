import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name:String,
    email:String,
    mentor : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    }
})

const Student = mongoose.model('Student', studentSchema );
export default Student;