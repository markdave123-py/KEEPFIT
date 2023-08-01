import { NextFunction, Request, Response } from 'express';
import { USER } from 'src/models/user';


export const createNewUser = async (req: Request, res:Response, next: NextFunction) =>{

    const { firstName, lastName, } = req.body;

}