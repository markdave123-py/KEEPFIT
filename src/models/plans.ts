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
    goals: {
        type: ["Goal"]
    },
    duration:{
        type: Date , 
        required: true     
    },
    timeInterval:{
        type: Number,
        required: true
    },
    subscriptionCount:{
        type:Number,
        required: true
    },
    createdBy: mongoose.SchemaTypes.ObjectId,
    isPublic: {
        type: Boolean,
        default: false
    }
})