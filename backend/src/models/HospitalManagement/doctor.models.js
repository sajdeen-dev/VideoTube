import mongoose from "mongoose";

const HospitalHours = new mongoose.Schema({
    openTime: {
        type: String,
        required: true
    },
    closeTime: {
        type: String,
        required: true
    }
});
const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true  
    },
    age:{
        type: Number,
        required: true
    },
    specialization:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    hospital:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Hospital',
        required: true
    },
}, {
    timestamps: true,
})

export const Doctor = mongoose.model("Doctor", doctorSchema);