import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import user from '../model/user.js'

dotenv.config()

export const refreshToken = async (req, res, next) => {

    try {
        
        const token = req.cookies.token
        console.log(req.cookies.token);
        const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        if (token && id) {
            console.log('first');
            const [verifyUser] = await user.user(id);
            const userInfo = verifyUser[0];

            
            res.status(200).json(
                {
                    isAuth: true,
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    role: userInfo.role,
                    isVerified: userInfo.isVerified,
                    redirect: '/'
                }
            )

        } 

    } catch (error) {
        
    }

    
}