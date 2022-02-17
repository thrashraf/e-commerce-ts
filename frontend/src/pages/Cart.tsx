import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import { Spinner } from "../components/Spinner/Spinner";

import { PaymentSummary } from "../components/summary/payment-summary/PaymentSummary";

type Props = {};

export const Cart = (props: Props) => {
  const [cart, setCart] = useState<any[]>([]);
  
  

  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { userInfo, loading } = userDetail;

  useEffect(() => {
    if (!loading) {
      if (userInfo.cart === null) return;
      setCart(userInfo.cart);
      console.log(userInfo.cart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div className="max-w-7xl px-10 m-auto flex pt-10">
      {/* <h1 className="text-3xl font-normal mt-10 pb-5 ">My Order</h1> */}

      <div className="w-[70%]">
        
        {!loading ? (
          cart !== null ? (
            <div>
              <section className="flex justify-between items-center mr-10 mb-5">
                <h1 className="text-2xl mb-5">My Cart</h1>
                <p className="text-gray-500">{cart.length} items</p>
              </section>
              {cart.map((item) => {
                return (
                  <div className="grid grid-cols-4 gap-5 mb-5 shadow-md w-[95%] rounded-lg p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover rounded-lg"
                    />
  
                    <section className="py-2">
                      <h1 className=" ">{item.name}</h1>
                      <p className="text-gray-500 mt-4 text-sm">variation</p>
                    </section>
  
                    <section className="flex justify-center items-center ">
                      <button className="m-5 font-medium hover:bg-red-400 hover:text-white px-2 rounded-md">
                        {" "}
                        -{" "}
                      </button>
                      <span className="px-4 py-1.5 border-2 rounded-lg border-gray-300">
                        {item.quantity}
                      </span>
                      <button className="m-5 font-medium hover:bg-green-400 hover:text-white px-2 rounded-md">
                        {" "}
                        +{" "}
                      </button>
                    </section>
  
                    <section className="flex justify-items-center items-center">
                      <span className="">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </section>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col pt-5">
              <h1 className="text-3xl mb-10 text-gray-400">
                Your cart is empty...
              </h1>
              <img
                src="/images/empty-cart.png"
                alt="cart"
                className=" w-[45%]"
              />
            </div>
          )
        ) : (
          <Spinner />
        )}
      </div>
      <div className="w-[35%] mb-10">
        <PaymentSummary/>
      </div>
    </div>
  );
};
