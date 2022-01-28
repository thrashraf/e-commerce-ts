import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './router/productsRoute.js';

const app = express();
dotenv.config();
const port = process.env.port || 5000;


app.use(cors({
    origin: '*'
}))

app.use('/api', route);


app.listen(port, console.log(`server running on port ${port}`))