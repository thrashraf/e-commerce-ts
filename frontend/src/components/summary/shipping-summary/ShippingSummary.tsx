import React, { useState } from "react";
import { Summary } from "../Summary";
import { shippingProvider } from "../../../assets/shippingMethod";
import { days } from '../../../assets/days' 

type Props = {
  placeOrder: any,
  courier: any,
  setCourier: any,
  totalPrice: number
  
};

export const ShippingSummary = (props: Props) => {

  const [selectedItem, setSelectedItem] = useState<number>()

  const selectProvider = (currentTabs: number, name: string, price: number) => (e: React.MouseEvent) => {
    setSelectedItem(currentTabs)
    props.setCourier({name, price})
  }

  const isActive = (currentTabs: number) => {
    if (currentTabs === selectedItem) {
        return {
            backgroundColor: '#eff6ff',
            border: '1.5px solid #0079fe'
        }
    } 
  }

  return (
    <Summary>
      <div className="h-[450px] py-5 relative">
        {shippingProvider.map((company, index) => {
          return (
            <div key={index} className={`flex bg-gray-50 p-3 rounded-lg mb-3 cursor-pointer`} style={isActive(index)} onClick={selectProvider(index, company.name, company.cost)}>
              <img
                src={company.image}
                alt={company.name}
                className="object-contain h-[70px] w-[100px] rounded-lg"
              />
              <section className="text-xs font-medium ml-5 flex flex-col justify-around w-[170px]">
                <p>{company.name}</p>
                <section className="flex justify-between text-gray-500">
                  <p>{company.type}</p>
                  <p>{`${days[new Date().getDay() + company.expectArrive]}, ${
                    new Date().getDate() + company.expectArrive
                  }`}</p>
                </section>
                <p className="font-medium">${company.cost}</p>
              </section>
            </div>
          );
        })}

        <section className="flex w-full absolute bottom-0 py-2 px-5 justify-between bg-blue-500 rounded-xl my-5 cursor-pointer hover:bg-blue-300 text-white" onClick={props.placeOrder}>
          ${props.totalPrice}
          <p>
            Confirm <i className="fa-solid fa-arrow-right-long ml-3"></i>
          </p>
        </section>
      </div>
    </Summary>
  );
};
