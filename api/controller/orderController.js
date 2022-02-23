import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import orderQuery from '../model/order.js'

dotenv.config()

export const createOrder = async (req, res, next) => {

    try {

        const token = req.cookies.token
        console.log(req.cookies.token);
        const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const order = req.body.order

        const [orderJSON] = JSON.stringify(order)

        const [userOrder] = await orderQuery.createOrder(id, orderJSON)

        if (addNewAddress.changedRows !== 1) return res.status(401).json({message: 'error lol'})
        res.status(200).json({message: 'creating order...'})
        

    } catch (error) {
        console.log(error)
    }


}