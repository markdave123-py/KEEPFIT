import mongoose, { Schema }from "mongoose";

const goalSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})
