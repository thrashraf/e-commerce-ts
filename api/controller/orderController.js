import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import orderQuery from "../model/order.js";
import crypto, { privateDecrypt } from "crypto";

dotenv.config();

export const createOrder = async (req, res, next) => {
  const orderId = crypto.randomBytes(16).toString("hex");

  try {
    const token = req.cookies.token;
    console.log(req.cookies.token);
    const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const [userOrder] = await orderQuery.createOrder(
      orderId,
      id,
      JSON.stringify(req.body.order),
      req.body.fullName,
      req.body.address,
      req.body.phoneNumber,
      req.body.state,
      req.body.totalPrice
    );

    if (userOrder.affectedRows !== 1)
      return res.status(400).json({
        message: "error lol",
      });

    console.log(userOrder);

    res.status(200).json({
      id: orderId,
    });
  } catch (error) {
    console.log(error);
  }
};

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
  //console.log(req.cookies.token);
  const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(id)
  try {
    if (!id)
      return res.status(401).json({
        message: "lol u screwed up",
      });
    const [allOrder] = await orderQuery.getAllOrder(id);

    //this to flat array of object from order = [orderItem:[object], orderItem:[object]]
    //into order = [{order...}, {order...}]
    const order = allOrder.reduce(
      (order, obj) => order.concat(obj.orderItem),
      []
    );
    res.status(200).json(order);

  } catch (error) {
    res.status(400).json(error);
  }
};
 