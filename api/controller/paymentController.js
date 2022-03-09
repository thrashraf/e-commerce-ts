import { stripe } from '../config/stripe.js'

export const config = async (req, res) => {
    res.json({publishableKey: process.env.STRIPE_PUBLISHABLE_KEY})
}

export const paymentIntent = async (req, res) => {

    const amount = Math.round(req.body.amount * 100)
    console.log(amount)

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'myr',
            payment_method_types: ['fpx'],
          });

        res.json({clientSecret: paymentIntent.client_secret})
    } catch (error) {
        res.status(400).json({message: error})
    }
} 
