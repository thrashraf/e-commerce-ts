import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { addToCart } from '../services/cart/cartAction';

type Props = {
  image: string;
  id: string
  name: string;
  quantity: any;
  price: number;
  brand: string,
  category: string,
  countInStock: number,
  description: string,
  numReview: number,
  rating: number,
  sold: number,
  setUserCart: any,
  cart: any
};

export const CartItem = (props: Props) => {

  const cartDetail = useSelector(
    (state: RootStateOrAny) => state.cartReducer
  );
  const { cart } = cartDetail;
  const dispatch = useDispatch()

  const addItemToCartHandler = () => {
    const index = props.cart.findIndex((item: any) => item.id === props.id);  
    cart[index].quantity += 1;
    dispatch(addToCart(cart));
  };

  const dropItemToCartHandler = () => {
    const index = props.cart.findIndex((item: any) => item.id === props.id);  
    cart[index].quantity <= 1 ? cart.splice(index, 1) : cart[index].quantity -= 1;
    dispatch(addToCart(cart));
  };

  return (
    <div className=" grid grid-cols-4 gap-5">
        <img
          src={props.image}
          alt={props.name}
          className="object-cover rounded-lg"
        />

        <section className="py-2">
          <h1 className=" ">{props.name.length > 30 ? `${props.name.slice(0, 30)}...` : props.name}</h1>
          <p className="text-gray-500 mt-4 text-sm">variation</p>
        </section>

        <section className="flex justify-center items-center ">
          <button className="m-5 font-medium hover:bg-red-400 hover:text-white px-2 rounded-md" 
          onClick={dropItemToCartHandler}>
            {" "}
            -{" "}
          </button>
          <span className="px-4 py-1.5 border-2 rounded-lg border-gray-300">
            {props.quantity}
          </span>
          <button className="m-5 font-medium hover:bg-green-400 hover:text-white px-2 rounded-md" onClick={addItemToCartHandler}>
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
