import { useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import { Spinner } from '../components/Spinner/Spinner';
import { successPayment } from '../services/order/orderAction'

type Props = {}

export const PaymentUpdate = (props: Props) => {

const stripe = useStripe();
const dispatch = useDispatch();
const query = new URLSearchParams(useLocation().search);
const clientSecret = query.get('payment_intent_client_secret');
const id = query.get('id')
const [paymentStatus, setPaymentStatus] = useState<string>('')
const navigate = useNavigate()

useEffect(() => {
 if (stripe && clientSecret) {
     stripe?.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
        if (paymentIntent?.status && id) {
          setPaymentStatus(paymentIntent?.status)
          dispatch(successPayment(id))
        }
     })
 }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [clientSecret, stripe])

  return (
    paymentStatus ? paymentStatus === 'succeeded' ? (
    <div className="px-10 h-screen pt-10">
      <button
        className="w-[50px] flex items-center text-gray-400 font-medium mt-4 active:outline-none"
        onClick={() => navigate("/")}
      >
        <img
          src="/images/arrow-left.png"
          alt="arrow"
          className="object-contain w-[60%] h-[60%] mr-4"
        />{" "}
        Home
      </button>

      <div className="text-center pt-10 px-10">
        <h1 className="text-xl text-gray-500">Thankyou for shopping with us 🎉</h1>
        <img
          src="/images/success-payment.png"
          alt="success"
          className=" object-contain w-[50%] h-[50%] m-auto"
        />
      </div>
    </div>
    ) : (
        <div>lol</div>
    ) : (
        <Spinner />
    )

  )
}