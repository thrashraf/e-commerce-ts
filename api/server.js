import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products.js';

const app = express();
dotenv.config();
const port = process.env.port || 5000;


app.use(cors({
    origin: '*'
}))

app.get('/product', (req, res) => {
    res.json(products)
})

app.get('/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
})


app.listen(port, console.log(`server running on port ${port}`))