import React from "react";

type Props = {
  image: string;
  id: string
  name: string;
  quantity: number;
  price: number;
  index: number;
  order: any[]
};

export const CartItem = (props: Props) => {

  

  return (
    <div className=" grid grid-cols-4 gap-5">
        <img
          src={props.image}
          alt={props.name}
          className="object-cover rounded-lg"
        />

        <section className="py-2">
          <h1 className=" ">{props.name}</h1>
          <p className="text-gray-500 mt-4 text-sm">variation</p>
        </section>

        <section className="flex justify-center items-center ">
          <button className="m-5 font-medium hover:bg-red-400 hover:text-white px-2 rounded-md">
            {" "}
            -{" "}
          </button>
          <span className="px-4 py-1.5 border-2 rounded-lg border-gray-300">
            {props.quantity}
          </span>
          <button className="m-5 font-medium hover:bg-green-400 hover:text-white px-2 rounded-md">
            {" "}
            +{" "}
          </button>
        </section>

        <section className="flex justify-items-center items-center">
          <span className="">${(props.price * props.quantity).toFixed(2)}</span>
        </section>
      </div>

  );
};
