import express from 'express';
import { paymentIntent } from '../controller/paymentController.js';

const paymentRoute = express.Router();

paymentRoute.get('/v1/payment_intents', paymentIntent);


export default paymentRoute;