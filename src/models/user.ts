import mongoose, { Schema, Document }from "mongoose";

interface IUSER extends Document {
    firstName: String;
    lastName: String;
    email:  String;   
    phoneNumber: String;
    age: Number;
    gender:  String;
    weight:  Number;
    profileImage:String;
    height: Number;
    profileIsPublic: Boolean,

}


const userSchema: Schema<IUSER> = new Schema({
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
    profileIsPublic: {
        type: Boolean,
        default: false
    }
    
})

export const USER = mongoose.model<IUSER>("user", userSchema);