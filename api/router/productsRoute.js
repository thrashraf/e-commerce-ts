import express from 'express';
import { getAllProducts } from '../controller/productsController.js';
import { getProductsById } from '../controller/productsController.js';

const router = express.Router();

router.get('/product', getAllProducts);
router.get('/product/:id', getProductsById);

export default router;