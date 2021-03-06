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
    //current order id
    const id = req.params.id;
    const [orderDetail] = await orderQuery.getOrder(id);

    if (!orderDetail[0])
      return res.status(400).json({
        message: "error lol",
      });

    res.status(200).json({
      id: orderDetail[0].id,
      orderItem: orderDetail[0].orderItem,
      isPaid: orderDetail[0].isPaid,
      isDelivered: orderDetail[0].isDelivered,
      fullName: orderDetail[0].fullName,
      phoneNumber: orderDetail[0].phoneNumber,
      address: orderDetail[0].address,
      totalPrice: orderDetail[0].totalPrice,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrder = async (req, res) => {
  const token = req.cookies.token;
  const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  try {
    if (!id)
      return res.status(401).json({
        message: "please login first",
      });
    
    const [allOrder] = await orderQuery.getAllOrder(id);
    console.log(allOrder)
    res.status(200).json(allOrder);

  } catch (error) {
    res.status(400).json(error);
  }
};


export const updateSuccessPayment = async(req, res) => {
  
  const orderID = req.body.orderID
  console.log(orderID)
  try {
    const [successOrder] = await orderQuery.successPayment(orderID)
    console.log(successOrder)
    if (successOrder.changedRows !== 1) return res.status(400).json({
      message: 'error lol'
  })

    res.state(200).json({message: 'Success Payment'})
    
  } catch (error) {
    res.status(400).json({message: 'something went wrong...'})
  }
}
 




