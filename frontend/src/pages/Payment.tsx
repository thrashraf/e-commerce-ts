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
  const params = new URLSearchParams(window.location.search);

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

    if (!stripe) return;

    const { clientSecret } = await axios
      .post(
        "http://localhost:5000/api/v1/payment_intents",
        { amount: order.totalPrice },
        { withCredentials: true }
      )
      .then((res) => res.data);

    //confirm payment
    await stripe
      ?.confirmFpxPayment(clientSecret, {
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
        return_url: `${window.location.origin}/fpx?return=true`,
      })
      .then((result) => {
        console.log(result.paymentIntent);
      });
  };

  return (
    <div className="max-w-7xl px-10 m-auto justify-center">
      {order && orderItem ? (
        <div className="flex justify-between pb-20 pt-5">
          <section className="w-[63%]">
            <div>
              <h1 className="text-blue-500 font-medium">User Information</h1>
              <section className="mt-5">
                <section className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-[12px] text-gray-500 mb-2">Full Name</p>
                    <h1 className="text-lg px-6 py-3 bg-blue-50 rounded-lg">
                      {order.fullName}
                    </h1>
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 mb-2">Phone Number</p>
                    <h1 className="text-lg px-6 py-3 bg-blue-50 rounded-lg">
                      {order.phoneNumber}
                    </h1>
                  </div>
                </section>
                <div className="w-full bg-blue-50 rounded-lg h-[150px] mt-5 py-3 px-6">
                  <span className="" >{order.address}</span>
                </div>
              </section>
            </div>

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
