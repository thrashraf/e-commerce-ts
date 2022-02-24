import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import orderQuery from '../model/order.js'
import crypto from 'crypto';

dotenv.config()

export const createOrder = async (req, res, next) => { 

    const orderId = crypto.randomBytes(16).toString('hex');

    try {

        const token = req.cookies.token
        console.log(req.cookies.token);
        const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        
        const [userOrder] = await orderQuery.createOrder(orderId, id, JSON.stringify(req.body.order), req.body.fullName, req.body.address, req.body.phoneNumber, req.body.state)

        console.log(userOrder)

        if (userOrder.affectedRows !== 1) return res.status(401).json({message: 'error lol'})
        res.status(200).json({message: 'creating order...'})
        
    } catch (error) {
        console.log(error)
    }


}