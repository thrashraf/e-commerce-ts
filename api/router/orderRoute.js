import express from 'express';
import { createOrder, getOrder } from '../controller/orderController.js';

const orderRoute = express.Router();

orderRoute.post('/order/createOrder', createOrder);
orderRoute.get('/order/getOrder/:id', getOrder);

export default orderRoute;