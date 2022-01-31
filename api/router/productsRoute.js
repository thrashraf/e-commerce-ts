import express from 'express';
import { getAllProducts } from '../controller/productsController.js';
import { getProductsById } from '../controller/productsController.js';

const productsRoute = express.Router();

productsRoute.get('/product', getAllProducts);
productsRoute.get('/product/:id', getProductsById);

export default productsRoute;