import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import { Spinner } from "../components/Spinner/Spinner";
import { Input } from '../components/Input';

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
            cart.map((item) => {
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
            })
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
        <div className="bg-blue-500 w-[35%] rounded-lg px-5 text-white mb-10">

          <h1 className="font-medium py-5">Card Details</h1>
          
          <section>
            <p className="text-[10px]">Card Type</p>
            <aside className="grid grid-cols-4 gap-2 mt-4">

              <div className="px-5 py-2 flex justify-center items-center  border-[1.5px] rounded-md border-gray-100">
                <img src="/images/mastercard.png" alt="" className="object-contain"/>
              </div>

              <div className="px-5 py-2 flex justify-center items-center border-[1.5px] rounded-md border-blue-400">
                <img src="/images/visa.png" alt="" className="object-contain"/>
              </div>

              <div className="px-6 py-3 flex justify-center items-center border-[1.5px] rounded-md border-blue-400">
                <img src="/images/paypal.png" alt="" className="object-contain"/>
              </div>

              <div className="px-5 py-2 flex justify-center items-center border-[1.5px] rounded-md border-blue-400">
                <img src="/images/apple.png" alt="" className="object-contain"/>
              </div>

            </aside>
          </section>

          <section className="mt-10 border-b border-blue-400 pb-10">
            <aside className="my-10">
              <p className="text-[10px]">Name on Card</p>
            </aside>
            
            <aside className="my-10">
              <p className="text-[10px]">Card Number</p>
            </aside>

            <section className="flex justify-between">
              <aside>
                <p className="text-[10px]">Expiration Date</p>
              </aside>
              <aside>
                <p className="text-[10px]">CVV</p>
              </aside>
            </section>

          </section>

          <section className="flex justify-between text-sm">
            
            <aside>
              <p className="my-3">Subtotal</p>
              <p className="my-3">Shipping</p>
              <p className="my-3">Total (tax incl.)</p>
            </aside>

            <aside>
              <p className="my-3 font-semibold">$16.00</p>
              <p className="my-3 font-semibold">$4.00</p>
              <p className="my-3 font-semibold">$0.60</p>
            </aside>

          </section>


          <section className="flex py-2 px-5 justify-between bg-green-400 rounded-xl my-5">
            <span>$ 20.00</span>
            <p>checkout <i className="fa-solid fa-arrow-right-long ml-3"></i></p>
          </section>

        </div>
    </div>
  );
};
