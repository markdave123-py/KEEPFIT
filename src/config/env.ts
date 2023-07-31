import dotenv from "dotenv"

dotenv.config()



export const config = Object.freeze(
    {
    port : process.env.PORT,
    mongoUrl: process.env.MONGO_URL as string,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
}
)