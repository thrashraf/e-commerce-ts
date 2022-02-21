import { Spinner } from "../components/Spinner/Spinner";
import { OrderSummary } from "../components/summary/orderSummary/OrderSummary";
import { CartItem } from "../components/CartItem";
import { RootStateOrAny, useSelector } from "react-redux";
import { useEffect, useState } from "react";

type Props = {};

export const Cart = (props: Props) => {
  const [userCart, setUserCart] = useState<any[]>([]);
  const [order, setOrder] = useState<any[]>([]);

  const cartDetail = useSelector((state: RootStateOrAny) => state.cartReducer);
  const { cart, cartLoading } = cartDetail;

  useEffect(() => {
    console.log(cart, cartLoading);
    if (!cartLoading) {
      if (!cart) return;
      //console.log(cart);
      setUserCart(cart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartLoading]);

  const handleChange = (e: any, item: any) => {
    if (e.target.checked) {
      setOrder((order) => [...order, item]);
    } else {
      const currentOrder = [...order];
      const orderIndex = currentOrder.findIndex((id) => id === item.id);
      currentOrder.splice(orderIndex, 1);
      setOrder(currentOrder);
    }
  };

  return (
    <div className="max-w-7xl px-10 m-auto flex pt-10 relative">
      <div className={`${userCart.length > 0 ? "w-[67%]" : "w-[100%]"}`}>
        {userCart.length >= 0 ? (
          userCart.length > 0 ? (
            <div>
              <section className="flex justify-between items-center mr-10 mb-5 text-gray-500 font-medium">
                <h1 className="mb-5 ">My Cart</h1>
                <p className="text-gray-500">{userCart.length} items</p>
              </section>

              {userCart.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="shadow-md w-[95%] rounded-lg flex mb-5 px-3 py-7"
                  >
                    <input
                      type="checkbox"
                      className="mr-3"
                      onChange={(e) => handleChange(e, item)}
                    />
                    <CartItem
                      image={item.image}
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                      id={item.id}
                      brand={item.brand}
                      category={item.category}
                      countInStock={item.countInStock}
                      description={item.description}
                      numReview={item.numReview}
                      rating={item.rating}
                      sold={item.sold}
                      setUserCart={setUserCart}
                      cart={userCart}
                    />
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
                className=" w-[35%]"
              />
            </div>
          )
        ) : (
          <Spinner />
        )}
      </div>

      <div
        className={`w-[35%] mb-10 fixed right-0  ${userCart.length > 0 ? "block" : "hidden"}`}
      >
        <OrderSummary order={order} />
      </div>
    </div>
  );
};
