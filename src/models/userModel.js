import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'Please enter a id']
    },
    email:{
        type: String,
        required: [true, 'Please enter a email address']
    },
    
    first_name: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter a last name']
    },
});


export default mongoose.model('user', userSchema);