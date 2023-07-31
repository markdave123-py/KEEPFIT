import jwt from 'jsonwebtoken';
import { config } from 'src/config/env';

export const generateAccessToken = (userEmail: String) =>{

    if (!userEmail) return new Error('User Email not defined')
    return jwt.sign({email: userEmail}, config.ACCESS_TOKEN_SECRET!, {expiresIn: '2016h'})

}


export const generatRefreshToken = (userEmail: String) => {

    if(!userEmail) return new Error('user Email not defined');
    return jwt.sign({email: userEmail}, config.ACCESS_TOKEN_SECRET!)
}