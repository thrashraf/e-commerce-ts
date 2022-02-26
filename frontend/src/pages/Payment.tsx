import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { getOrderDetails } from "../services/order/orderAction";
import { OrderSummary } from "../components/summary/orderSummary/OrderSummary";
import { Spinner } from "../components/Spinner/Spinner";
import {
  useStripe,
  useElements,
  FpxBankElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

type Props = {};

export const Payment = (props: Props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const params = new URLSearchParams(window.location.search)

  const orderDetail = useSelector(
    (state: RootStateOrAny) => state.orderReducers
  );
  const { order } = orderDetail;
  const [orderItem, setOrderItem] = useState<any[]>();

  useEffect(() => {
    if (id) {
      dispatch(getOrderDetails(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (order) {
      setOrderItem(order.orderItem);
    }
  }, [order]);

  console.log(query);

  const paymentSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { clientSecret } = await axios
      .post(
        "http://localhost:5000/api/v1/payment_intents",
        { amount: order.totalPrice },
        { withCredentials: true }
      )
      .then((res) => res.data);

    //confirm payment
    await stripe?.confirmFpxPayment(clientSecret, {
      payment_method: {
        fpx: elements?.getElement(FpxBankElement) || { bank: "" },
        billing_details: {
          address: {
            line1: order.address,
            state: order.state,
          },
          name: order.fullName,
          phone: order.phoneNumber,
        },
      },
      return_url: `${window.location.origin}/payment/:id?return=true`,
     
    }).then(res => {
      if (res.error) {
        console.log(res.error);
      }
    })
  };

  return query.get("return") ? params.get('redirect_status') === 'succeeded' ? (
    <div className="px-10">
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
        <h1 className="text-2xl text-gray-500">Successful Payment ✔️</h1>
        <img
          src="/images/success-payment.png"
          alt="success"
          className=" object-contain w-[50%] h-[50%] m-auto"
        />
      </div>
    </div>
  ) : (
    <div>
      <h1>lol you fucked up</h1>
    </div>
  ) : (
    <div className="max-w-7xl px-10 m-auto justify-center">
      {order && orderItem ? (
        <div className="flex justify-between pb-20 pt-5">
          <section className="w-[60%]">
            <h1>FPX</h1>
            <form onSubmit={paymentSubmitHandler}>
              <div className="w-[200px] p-3 border border-gray-500 rounded-lg">
                <FpxBankElement options={{ accountHolderType: "individual" }} />
              </div>

              <button
                type="submit"
                className="px-5 py-1 bg-blue-500 rounded-md mt-10 text-white"
              >
                Pay
              </button>
            </form>

            {/* <h1>Payment</h1>
              <p className="text-gray-500">choose payment method</p> */}
          </section>

          <section>
            <OrderSummary order={orderItem} createOrder={null} />
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
