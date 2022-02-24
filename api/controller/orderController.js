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

        const [userOrder] = await orderQuery.createOrder(orderId, id, JSON.stringify(req.body.order), req.body.fullName, req.body.address, req.body.phoneNumber, req.body.state, req.body.totalPrice)

        if (userOrder.affectedRows !== 1) return res.status(400).json({
            message: 'error lol'
        })

        console.log(userOrder)
        
        res.status(200).json({
            id: orderId,
        })

    } catch (error) {
        console.log(error)
    }


}

export const getOrder = async (req, res, next) => {

    try {

        const id = req.params.id
        const [orderDetail] = await orderQuery.getOrder(id)
        
        if (!orderDetail[0]) return res.status(400).json({
            message: 'error lol'
        })

        res.status(200).json({
            id: orderDetail[0].id,
            orderItem: orderDetail[0].orderItem,
            isPaid: orderDetail[0].isPaid,
            isDelivered: orderDetail[0].isDelivered,
            fullName: orderDetail[0].fullName,
            phoneNumber: orderDetail[0].phoneNumber,
            address: orderDetail[0].address,
        })

    } catch (error) {
        console.log(error)
    }


}