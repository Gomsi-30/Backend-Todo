import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title : {
        required : true,
        type:String,
        unique : true
    },
    description:{
        required : true,
        type:String,
        unique : true
    },
},{
    timestamps:true
})

export const Todo = mongoose.model.Todo || mongoose.model('Todo',todoSchema);