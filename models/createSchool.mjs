import mongoose from "mongoose";


const schoolSchema = new mongoose.Schema({
    name : {
        required : true,
        type:String,
        unique : true
    },
    address:{
        required : true,
        type:String,
        unique : true
    },
    latitude:{
        required : true,
        type: Number,
        unique : true
    },
    longitude:{
        required : true,
        type: Number,
        unique : true
    }
},{
    timestamps:true
})

export const School = mongoose.model.School || mongoose.model('School',schoolSchema);