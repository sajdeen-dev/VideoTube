import mongoose  from "mongoose"; 

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum: ['M', 'F', 'Other']
    },
    diagnosedWith:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Doctor'
    },
    admittedIn:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Hospital',
        required: true
    }

})