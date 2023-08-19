import * as  Jwt from "jsonwebtoken";

export const generateToken = ( 
    user: {id: string}, 
    secretKey: string, 
    expiresIn: number
    ) =>{
    return Jwt.sign( {user}, secretKey, {expiresIn});
}

export const verifyToken = (
    token: string,
    secretKey: string
    ): Jwt.JwtPayload =>{
    return Jwt.verify(token, secretKey) as Jwt.JwtPayload
}