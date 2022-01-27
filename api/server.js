const express = require('express');
require('dotenv').config()
const port = process.env.port || 5000;
const cors = require('cors');
const products = require('./data/products')

const app = express()


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