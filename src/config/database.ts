import mongoose from "mongoose";

import {config} from "./env"

console.log(config)
export const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};