import React, { useState } from "react";
import { Input } from "../../Input";
import { Summary } from "../Summary";

type Props = {};

export const PaymentSummary = (props: Props) => {

  const [name, setName] = useState<any[]>([]);
  const [cardNumber, setCardNumber] = useState<any[]>([]);
  const [expiration, setExpiration] = useState<any[]>([]);
  const [ccv, setCcv] = useState<any[]>([]);
  
  return (
    <div>
      <Summary>
        <div>
          <h1 className="font-medium py-5">Card Details</h1>
          
          <section>
            <p className="text-[10px]">Card Type</p>
            <aside className="grid grid-cols-4 gap-2 mt-4">
              <div className="px-5 py-2 flex justify-center items-center  border-[1.5px] rounded-md border-gray-100">
                <img
                  src="/images/mastercard.png"
                  alt=""
                  className="object-contain"
                />
              </div>

              <div className="px-5 py-2 flex justify-center items-center border-[1.5px] rounded-md border-blue-400">
                <img src="/images/visa.png" alt="" className="object-contain" />
              </div>

              <div className="px-6 py-3 flex justify-center items-center border-[1.5px] rounded-md border-blue-400">
                <img
                  src="/images/paypal.png"
                  alt=""
                  className="object-contain"
                />
              </div>

              <div className="px-5 py-2 flex justify-center items-center border-[1.5px] rounded-md border-blue-400">
                <img
                  src="/images/apple.png"
                  alt=""
                  className="object-contain"
                />
              </div>
            </aside>
          </section>

          <section className="mt-10 border-b border-blue-400 pb-10">
            <aside className="my-10">
              <p className="text-[10px]">Name on Card</p>
              <Input value={name} setValue={setName} placeholder='name'/>
            </aside>

            <aside className="my-10">
              <p className="text-[10px]">Card Number</p>
              <Input value={cardNumber} setValue={setCardNumber} placeholder='card'/>
            </aside>

            <section className="flex justify-between">
              <aside>
                <p className="text-[10px]">Expiration Date</p>
                <Input value={expiration} setValue={setExpiration} placeholder='expiration'/>
              </aside>
              <aside>
                <p className="text-[10px]">CVV</p>
                <Input value={ccv} setValue={setCcv} placeholder='CCV'/>
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
              <p className="my-3 font-seminole">$16.00</p>
              <p className="my-3 font-semibold">$4.00</p>
              <p className="my-3 font-semibold">$0.60</p>
            </aside>
          </section>

          <section className="flex py-2 px-5 justify-between bg-green-400 rounded-xl my-5 cursor-pointer hover:bg-green-300">
            <span>$ 20.00</span>
            <p>
              checkout <i className="fa-solid fa-arrow-right-long ml-3"></i>
            </p>
          </section>
        </div>
      </Summary>
    </div>
  );
};
