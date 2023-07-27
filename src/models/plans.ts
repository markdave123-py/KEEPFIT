import mongoose, { Schema }from "mongoose";

const planSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        
        
    }
})