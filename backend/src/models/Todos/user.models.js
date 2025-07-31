import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
    },
    confirmPassword: {
        type: String,
        required: [true, 'Confirm password is required'],
        minlength: 6,
    },
    user:{
        
    }
}, {
    timestamps: true,
})

export const User = mongoose.model('User', userSchema)