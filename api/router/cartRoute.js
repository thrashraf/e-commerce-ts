import express from 'express';
import { addItemToCart } from '../controller/cartController.js'

const cartRoute = express.Router();

cartRoute.post('/cart/addItem', addItemToCart);

export default cartRoute;