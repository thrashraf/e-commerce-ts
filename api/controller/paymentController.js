import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const paymentIntent = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2000,
            currency: 'myr',
            payment_method_types: ['card'],
          });

        res.json({clientSecret: paymentIntent.client_secret})
    } catch (error) {
        res.status(400).json({message: 'something went wrong'})
    }
} 
