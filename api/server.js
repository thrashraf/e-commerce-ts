const express = require('express');
const app = express()
const products = require('./data/products')
const cors = require('cors');

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


app.listen(5000, console.log('server running'))