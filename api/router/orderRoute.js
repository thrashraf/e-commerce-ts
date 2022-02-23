import express from 'express';

const orderRoute = express.Router();

orderRoute.get('/order/createOrder');

export default orderRoute;