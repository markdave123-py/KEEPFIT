// src/app.ts
import express, { Request, Response } from 'express';
import {connectToDatabase} from "./config/database"
import { config } from './config/env';






const app = express();


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Connect to the database
connectToDatabase().then(() => {
  // Start the server after successful database connection
  app.listen(config.port, () => {
    
    console.log(`Server is running on http://localhost:${config.port}`);
  });
});