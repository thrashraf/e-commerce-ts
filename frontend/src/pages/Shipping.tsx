import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { ShippingSummary } from "../components/summary/shipping-summary/ShippingSummary";
import { createOrder } from "../services/order/orderAction";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../services/cart/cartAction";

type Props = {};

export const Shipping = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { userInfo } = userDetail;

  const orderDetail = useSelector(
    (state: RootStateOrAny) => state.orderReducers
  );
  const { order, success, id } = orderDetail;

  const cartDetail = useSelector((state: RootStateOrAny) => state.cartReducer);
  const { cart } = cartDetail;

  const [option, setOption] = useState<number>();

  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [address, setAddress] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [courier, setCourier] = useState<any>();

  const [orderItem, setOrderItem] = useState<any[]>();
  const [cartItem, setCartItem] = useState<any[]>();

  const selectOptionHandler = (e: any) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    if (userInfo && option) {
      if (userInfo.address.length <= 0) return;
      setFullName(userInfo.address[option].fullName);
      setPhoneNumber(userInfo.address[option].phoneNumber);
      setState(userInfo.address[option].state);
      setAddress(userInfo.address[option].address);
      setOrderItem(order);
      setCartItem(cart);
    } else {
      setFullName("");
      setPhoneNumber(0);
      setState("");
      setAddress("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option, userInfo]);

  useEffect(() => {
    if (success) {
      toast.success("Successfully Create Order 🎉");
      navigate(`/payment/${id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const checkoutShipping = async () => {
    //console.log(order)
    if (!fullName && !phoneNumber && !address && !state && !courier) return;

    const currentOrder = {
      order: order,
      fullName,
      phoneNumber,
      address,
      state,
      courier,
      isDelivered: false,
      isPay: false,
      totalPrice: totalPrice,
    };

    //this to splice the cart item to staging order
    const latestCart = cartItem?.filter(
      (arr: any) => !order.find(({ id }: { id: number }) => arr.id === id)
    );
    console.log(latestCart);
    await setCartItem(latestCart);
    //console.log(cartItem);
    dispatch(addToCart(latestCart));

    dispatch(createOrder(currentOrder));
  };

  const totalPrice: number = orderItem
    ? orderItem.reduce(
        (
          sum: number,
          { price, quantity }: { price: number; quantity: number }
        ) => sum + price * quantity + (courier ? courier.price : 0),
        0
      )
    : null;

  return (
    <div className="max-w-7xl h-full px-10 m-auto flex justify-between pb-20 pt-5 items-center ">
      <Toaster />
      <div className="w-[60%]">
        <h1 className="font-medium mt-5">Shipping details</h1>
        <section className="flex justify-between mt-5 items-center">
          <p className="text-sm">Use saved address</p>

          <select
            name=""
            id=""
            className="bg-blue-50 border-[1.5px] text-gray-400 rounded-md p-2 focus:outline-none border-blue-50"
            onChange={(e) => selectOptionHandler(e)}
          >
            <option value={""}>Default</option>
            {userInfo && userInfo.address.length > 0 ? (
              userInfo.address.map((item: any, index: number) => {
                return (
                  <option key={index} value={index}>{`Address ${
                    index + 1
                  }`}</option>
                );
              })
            ) : (
              <option>None</option>
            )}
          </select>
        </section>

        <section className="flex justify-between w-full gap-3">
          <Input
            value={fullName}
            setValue={setFullName}
            placeholder="Full Name"
          />
          <Input
            value={phoneNumber}
            setValue={setPhoneNumber}
            placeholder="Phone Number"
          />
        </section>
        <section className="">
          <Input value={state} setValue={setState} placeholder="State" />
        </section>

        <section>
          <textarea
            name=""
            id=""
            cols={30}
            rows={6}
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full bg-blue-50 mt-5 rounded-lg px-3 py-1 focus:outline-none"
          />
        </section>
      </div>

      <div className="w-[35%] mt-5">
        <ShippingSummary
          placeOrder={checkoutShipping}
          courier={courier}
          setCourier={setCourier}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};
