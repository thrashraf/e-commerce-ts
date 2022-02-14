import user from '../model/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

export const signupUser = async (req, res) => {

    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(firstName, lastName, email, password);
        const id = crypto.randomBytes(16).toString('hex');
        
        const [checkExistingEmail] = await user.checkEmail(email)
        
        if (checkExistingEmail.length > 0) {
            //console.log('email already exist');
            res.status(409).json({message: 'email already exist'})
            
        } else {

            console.log('register User');
            const hashPassword = bcrypt.hashSync(password);
            
            await user.createNewUser(id, firstName, lastName, email, hashPassword)
            
            res.status(201).json({
                redirect: '/login',
                message: 'please verified your email'
            })
        }

    } catch (error) {
        console.log(error);
    }

}

export const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;
        const [login] = await user.checkEmail(email);
        
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
                        id: userInfo.id,
                        email: userInfo.email,
                        isAuth: true,
                        firstName: userInfo.firstName,
                        lastName: userInfo.lastName,
                        role: userInfo.role,
                        isVerified: userInfo.isVerified,
                        phoneNumber: userInfo.phoneNumber,
                        address: userInfo.address,
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

export const updateUserInformation = async (req, res) => {

    try {
        
        const {id, firstName, lastName, email, phoneNumber} = req.body;
        const [updateUser] = await user.updateUser(id, firstName, lastName, email, phoneNumber);

        console.log(updateUser);

        if (updateUser.affectedRows === 1) {
            res.status(200).json({message: 'successful update!'})
        } else {
            res.status(401).json({message: 'error lol'})
        }

    } catch (error) {
        res.status(404)
    }
}

export const updateAddress =  async (req, res) => {

    const cookie = req.cookies.token
    const id = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

    try {
        
        const data = req.body

        //console.log(req.body)
        const userAddressJson = JSON.stringify(data)

        //console.log(userAddressJson)

        const [addNewAddress] = await user.addAddress(id, userAddressJson)

        if (addNewAddress.changedRows !== 1) return res.status(401).json({message: 'error lol'})
        res.status(200).json({message: 'successful update!'})
        
        console.log(addNewAddress)

    } catch (error) {
        console.log(error)
    }

}


export const deleteAddress =  async (req, res) => {

    const cookie = req.cookies.token
    const id = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

    try {
        
        const data = req.body

        console.log(req.body)
        const userAddressJson = JSON.stringify(data)

        //console.log(userAddressJson)

        const [addNewAddress] = await user.addAddress(id, userAddressJson)

        if (addNewAddress.changedRows !== 1) return res.status(401).json({message: 'error lol'})
        res.status(200).json({message: 'successful update!'})
        
        console.log(addNewAddress)

    } catch (error) {
        console.log(error)
    }

}