import React, { useState } from "react";
import { useAllOrder } from "../../hooks/useAllOrders";
import { useNavigate } from "react-router-dom";
import PurchaseItem from "../PurchaseItem";

type Props = {};

export const Purchase = (props: Props) => {
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabChangeHandler = (number: number) => (e: React.MouseEvent) => {
    setCurrentTab(number);
  };

  const isTabActive = (number: number) => {
    if (number === currentTab) {
      return "bg-blue-500";
    } else {
      return "bg-gray-300";
    }
  };

  const allOrder = useAllOrder();

  const paymentItemHandler = (id: string) => (e: React.MouseEvent) => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="pl-10">
      <div className="flex items-center pt-5 mb-10">
        <section
          className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(
            0
          )}`}
          onClick={tabChangeHandler(0)}
        >
          <span className="text-white">
            <i className="fa-solid fa-dollar-sign fa-xl"></i>
          </span>
        </section>

        <span className={`w-[120px] h-[1.8px] ${isTabActive(1)}`}></span>

        <section
          className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(
            1
          )}`}
          onClick={tabChangeHandler(1)}
        >
          <span className="text-white">
            <i className="fa-solid fa-box-open fa-xl"></i>
          </span>
        </section>

        <span className={`w-[120px] h-[1.8px] ${isTabActive(2)}`}></span>

        <section
          className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(
            2
          )}`}
          onClick={tabChangeHandler(2)}
        >
          <span className="text-white">
            <i className="fa-solid fa-truck fa-xl"></i>
          </span>
        </section>

        <span className={`w-[120px] h-[1.8px] ${isTabActive(3)}`}></span>

        <section
          className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(
            3
          )}`}
          onClick={tabChangeHandler(3)}
        >
          <span className="text-white">
            <i className="fa-solid fa-check fa-xl"></i>
          </span>
        </section>
      </div>

      <div className="w-full mb-10">
        {/* map the order item */}

        {/* map for unpaid item */}
        {currentTab === 0 ? (
          allOrder &&
          allOrder.filter((order: any) => !order.isPaid).length > 0 ? (
            allOrder
              .filter((order: any) => !order.isPaid)
              .map((order: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 rounded-xl relative mt-5 "
                  >
                    <>
                      {order.orderItem.map((item: any, index: number) => {
                        return (
                          <PurchaseItem
                            index={index}
                            item={item}
                          />
                        );
                      })}
                    </>
                    <button
                      className="px-5 py-1 bg-gradient-to-r from-[#2c69d1]  to-[#0abcf9] rounded-md  text-white float-right transition-transform transform hover:scale-110 absolute bottom-0 right-0 mr-5 mb-5 "
                      onClick={paymentItemHandler(order.orderID)}
                    >
                      Pay
                    </button>
                  </div>
                );
              })
          ) : (
            <img
              src="/images/empty-cart.png"
              alt=""
              className="object-contain w-[40%] m-auto mt-20"
            />
          )
        ) : null}

        {/* map for paid item */}
        {currentTab === 1 ? (
          allOrder &&
          allOrder.filter((order: any) => order.isPaid).length > 0 ? (
            allOrder
              .filter((order: any) => order.isPaid)
              .map((order: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 rounded-xl relative mt-5 "
                  >
                    <>
                      {order.orderItem.map((item: any, index: number) => {
                        return (
                          <PurchaseItem
                            index={index}
                            item={item}
                            
                          />
                        );
                      })}
                    </>
                  </div>
                );
              })
          ) : (
            <img
              src="/images/empty-cart.png"
              alt=""
              className="object-contain w-[40%] m-auto mt-20"
            />
          )
        ) : null}
      </div>
    </div>
  );
};
