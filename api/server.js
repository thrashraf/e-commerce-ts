import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import productRoute from './router/productsRoute.js';
import userRoute from './router/usersRoute.js';
import cartRoute from './router/cartRoute.js';
import orderRoute from './router/orderRoute.js';
import  paymentRoute from './router/paymentRoute.js';


const app = express();
dotenv.config();
const port = process.env.port || 5000;


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', productRoute, userRoute, cartRoute, orderRoute, paymentRoute);


app.listen(port, console.log(`server running on port ${port}`))