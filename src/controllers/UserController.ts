import { NextFunction, Request, Response } from 'express';
import { USER } from 'src/models/user';
import { hashPassword } from 'src/utils/hash';



export const createNewUser = async (req: Request, res:Response, next: NextFunction) =>{

    try {
        //creating new users
        const { password } = req.body
        const theHashedPassword = hashPassword(password)

        const newUser = new USER(Object.assign({}, req.body, {password: theHashedPassword}));

        //validate all required fields are present

    
        const validationError = newUser.validateSync();

        if (validationError){
            return res.status(404).json({error: 'missing required fields'});
        }

        const savedUser = newUser.save()
        return  res.status(201).json(savedUser);

    } catch (error) {
        console.error('Error saving this user', error)
        return res.status(500).json({error: "something went wrong"});
        
    }

}