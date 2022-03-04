import express from 'express';
import { createOrder, getAllOrder, getOrder } from '../controller/orderController.js';

const orderRoute = express.Router();

orderRoute.post('/order/createOrder', createOrder);
orderRoute.get('/order/getOrder/:id', getOrder);
orderRoute.get('/order/getAllOrder', getAllOrder);

export default orderRoute;