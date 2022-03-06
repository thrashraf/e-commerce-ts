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
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const query = new URLSearchParams(useLocation().search); 

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
          name: id,
        },
        metadata: {
          customer_id: id ? id : ''
        },
      },
      return_url: `${window.location.origin}/fpx?return=true&id=${id}`,
      })
      .then((result: any) => {
        console.log('result' + result.paymentIntent);
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
                    <p className="text-[12px] text-gray-500 mb-1">Full Name</p>
                    <h1 className="text-lg px-6 py-3 bg-blue-50 rounded-lg">
                      {order.fullName}
                    </h1>
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 mb-1">
                      Phone Number
                    </p>
                    <h1 className="text-lg px-6 py-3 bg-blue-50 rounded-lg">
                      {order.phoneNumber}
                    </h1>
                  </div>
                </section>

                <p className="text-[12px] text-gray-500 mb-1 mt-3">Address</p>
                <div className="w-full bg-blue-50 rounded-lg h-[100px] py-3 px-6">
                  <span className="">{order.address}</span>
                </div>
              </section>
            </div>

            <form onSubmit={paymentSubmitHandler} className="mt-10">
              <section className="flex justify-between items-center">
                <p className="font-medium text-lg">RM {order.totalPrice}</p>
                <div className="w-[200px] p-3 border border-gray-500 rounded-lg">
                  <FpxBankElement
                    options={{ accountHolderType: "individual" }}
                  />
                </div>
              </section>

              <button
                type="submit"
                className="px-10 py-2 bg-gradient-to-r from-[#2c69d1]  to-[#0abcf9] rounded-md mt-14 text-white float-right transition-transform transform hover:scale-110"
              >
                Pay
              </button>
              
              <button
                type="submit"
                onClick={() => navigate('/')}
                className="px-10 py-2 bg-white text-gray-500 rounded-md mt-14 float-right transition-transform transform hover:scale-110 mr-5"
              >
                Cancel
              </button>
            </form>
          </section>

          <section>
            <OrderSummary
              order={orderItem}
              createOrder={null}
              isVisible={true}
            />
          </section>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
