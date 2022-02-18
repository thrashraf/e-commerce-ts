import { Spinner } from "../components/Spinner/Spinner";
import { useCart } from "../hooks/useCart";
import { PaymentSummary } from "../components/summary/payment-summary/PaymentSummary";
import { CartItem } from '../components/CartItem'

type Props = {};

export const Cart = (props: Props) => {

  const fetchCart = useCart();
  const cart: any = fetchCart ? fetchCart : null;
  
  console.log(cart);

  return (
    <div className="max-w-7xl px-10 m-auto flex pt-10">
      {/* <h1 className="text-3xl font-normal mt-10 pb-5 ">My Order</h1> */}

      <div className={`${cart ? 'w-[70%]' : 'w-[100%]'}`}>

        {cart ? (
          cart ? (
            <div>
              <section className="flex justify-between items-center mr-10 mb-5">
                <h1 className="text-2xl mb-5">My Cart</h1>
                <p className="text-gray-500">{cart.length} items</p>
              </section>
              {cart.map((item: any, index:number) => {
                return (
                  <CartItem image={item.image} name={item.name} quantity={item.quantity}
                  price={item.price}
                  index={index} />
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

      <div className={`w-[35%] mb-10 ${cart ? 'block' : 'hidden'}`}>
        <PaymentSummary />
      </div>

    </div>
  );
};
