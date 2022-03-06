import React from "react";
import { useNavigate } from "react-router-dom";
import { Summary } from "../Summary";
import toast, { Toaster } from 'react-hot-toast';

type Props = {
  order: any[],
  createOrder: any,
  isVisible: boolean
};

export const OrderSummary = (props: Props) => {

  const navigate = useNavigate()

  const calculateTotalPrice = () => {
    if (props.order.length > 0) {
      return props.order
        .reduce((sum, { price, quantity }) => sum + price * quantity, 0)
        .toFixed(2);
    }
  };

  const checkoutHandler = () => {
    props.createOrder()
    props.order.length > 0 ? 
    navigate('/shipping') 
    : toast.error('select item to continue')
  }

  return (
    <Summary>
      <Toaster />
      <div className="h-[425px] relative">
        <h1 className="font-medium py-5 text-blue-500">Order Summary</h1>

        <section className=" overflow-y-auto h-[280px]">
          
            {props.order.length > 0 ? (
              props.order.map((item, index) => {
                return (
                <div className="flex bg-gray-50 p-3 rounded-lg mb-3" key={index}>
                    <img src={item.image} alt={item.name} className='object-cover h-[70px] w-[70px] rounded-lg'/>
                    <section className="text-xs ml-5 flex flex-col justify-around">
                        <p>{item.name.length > 30 ? `${item.name.slice(0, 30)}...` : item.name}</p>
                        <section className="flex justify-between text-gray-500">
                        <p>variation</p>
                        <p>0{item.quantity}</p>
                        </section>
                        <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </section>
                </div>
                );
              })
            ) : (
              <img
                src="/images/empty-cart.png"
                alt="empty-cart"
                className=" w-[70%] m-auto mt-10"
              />
            )}
        </section> 
        
          <section className={`${props.isVisible ? 'hidden' : 'flex'} w-full absolute bottom-0 py-2 px-5 justify-between bg-blue-500 rounded-xl my-5 cursor-pointer hover:bg-blue-300 text-white`} onClick={checkoutHandler}>
            <span>
              RM {props.order.length <= 0 ? "0.00" : calculateTotalPrice()}
            </span>
            <p>
              checkout <i className="fa-solid fa-arrow-right-long ml-3"></i>
            </p>
          </section>

      </div>
    </Summary>
  );
};
