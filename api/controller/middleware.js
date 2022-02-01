import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import user from '../model/user.js'

dotenv.config()

export const middleware = async (req, res, next) => {

    const token = req.cookies.token
    console.log(req.cookies.token);

    const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const [userInfo] = await user.user(id);
    console.log(userInfo);
}