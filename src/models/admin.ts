import mongoose, { STATES } from "mongoose";
import { Schema } from "mongoose";



const userSchema = new Schema({
    id: {
        type: Schema.Types.UUID,
        required: true
    },
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
        type: Number,
        required: true
    },
    profileImage: {
        type: String
    },
    height: {
        type: Number,
        required: true
    },

        
})