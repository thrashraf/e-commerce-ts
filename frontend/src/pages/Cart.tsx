import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import { Spinner } from "../components/Spinner/Spinner";

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
    <div className="max-w-7xl px-10 m-auto">
      <h1 className="text-3xl font-normal mt-10 pb-5 ">My Order</h1>
      {!loading ? (
        cart !== null ? (
          cart.map((item) => {
            return (
              <div className="flex my-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[150px] h-[130px] object-cover
                        rounded-lg"
                />

                <section className="ml-10 py-2">
                  <h1 className="text-xl font-medium">{item.name}</h1>
                  <p className="text-gray-500">
                    Quantity: <span className="">{item.quantity}</span>
                  </p>
                  <p className="text-gray-500">
                    Total Price:{" "}
                    <span className="">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </section>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center items-center flex-col pt-5">
            <h1 className="text-3xl mb-10 text-gray-400">
              Your cart is empty...
            </h1>
            <img src="/images/empty-cart.png" alt="cart" className=" w-[45%]" />
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};
