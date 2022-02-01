import user from '../model/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signupUser = async (req, res, next) => {

    try {

        //const { firstName, lastName, email, password } = req.body;
        
        //? check if user's email is exist

        //? bcyrpt password

        //? save user's detail

        //? send jwt

        // const [productById] = await products.getProductById(id)
        // console.log(productById);
        // res.status(200).json({productById});

    } catch (error) {
        next(error)
    }

}

export const loginUser = async (req, res, next) => {

    try {

        const { email, password } = req.body;
        const [login] = await user.login(email);
        
        //? wanna check if use exist
        if (login) {

            const userInfo = login[0]; 
            
            //console.log(password, userInfo.password);
            //? compare password
            const isPassValid = bcrypt.compareSync(password, userInfo.password)
            //console.log(isPassValid);

            if (isPassValid) {

                jwt.sign(userInfo.id, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
                    
                    if (err) return console.log(err);

                    res.cookie('token', result, {httpOnly : false}).json({
                        isAuth: true,
                        firstName: userInfo.firstName,
                        lastName: userInfo.lastName,
                        role: userInfo.role,
                        isVerified: userInfo.isVerified,
                        redirect: '/'})
                })
                
            } else {
                console.log('invalid password');
                res.status(401).json({message: 'invalid password'})
            }
        } 

    } catch (error) {
        res.status(401).json({message: 'invalid password lol'})
    }

}