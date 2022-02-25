import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../services/order/orderAction";
import { OrderSummary } from "../components/summary/orderSummary/OrderSummary";
import { Spinner } from "../components/Spinner/Spinner";

type Props = {};

export const Payment = (props: Props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

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

  return (
    <div className="max-w-7xl px-10 m-auto justify-center">
      {order && orderItem ? (
        <div className="flex justify-between pb-20 pt-5">
          
          <section className="w-[60%]">
            
           

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
