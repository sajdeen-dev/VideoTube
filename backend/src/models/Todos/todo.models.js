import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },
    subTodos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
    }]
}, {
    timestamps: true
})

export const Todo = mongoose.model('Todo', todoSchema)