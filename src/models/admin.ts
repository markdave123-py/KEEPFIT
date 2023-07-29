import mongoose, { Schema }from "mongoose";


const adminSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    height: {
        type: String,
        required: true
    },
    profileIsPublic: {
        type: Boolean,
        default: false
    }
    
})

export const ADMIN = mongoose.model("ADMIN", adminSchema);