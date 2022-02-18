import cart from "../model/cart.js"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export const getCartItem = async (req, res, next) => {

    try {
        
        const token = req.cookies.token
        console.log(req.cookies.token);
        const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        if (!id) return res.status(400).json({message: 'lol u screwed up'})

        const [getCart] = await cart.getUserCart(id)
        const cartItem = getCart[0]

        res.status(200).json(cartItem.cart)

    } catch (error) {
        next(error)
    }
}

export const addItemToCart = async (req, res, next) => {

    try {
        const cartItems = JSON.stringify(req.body)
        const cookie = req.cookies.token
        
        const id = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
        //console.log(item)

        const [productById] = await cart.addToCart(id, cartItems)
        //console.log(productById);
        res.status(200).json({productById});

    } catch (error) {
        next(error)
    }
}


