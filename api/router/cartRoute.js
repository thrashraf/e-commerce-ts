import express from 'express';
import { addItemToCart, getCartItem } from '../controller/cartController.js'

const cartRoute = express.Router();

cartRoute.get('/cart/getCart', getCartItem);
cartRoute.post('/cart/addItem', addItemToCart);

export default cartRoute;