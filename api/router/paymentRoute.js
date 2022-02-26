import express from 'express';
import { paymentIntent, config } from '../controller/paymentController.js';

const paymentRoute = express.Router();

paymentRoute.post('/v1/payment_intents', paymentIntent);
paymentRoute.get('/v1/config', config);


export default paymentRoute;