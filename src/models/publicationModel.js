import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'Please enter a id']
    },
    student_id: {
        type: Number,
        required: [true, 'Please enter a student id']
    },
    
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    year: {
        type: String,
        required: [true, 'Please enter a year']
    },
});


export default mongoose.model('publication', publicationSchema);