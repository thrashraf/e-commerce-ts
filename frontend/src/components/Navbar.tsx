import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
import logo from "../assets/logo.png";
import { useCart } from "../hooks/useCart";
import { useLocation } from "react-router-dom";

export const Navbar: FC = (props) => {
  
  const [cart] = useCart()
  
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { userInfo } = userDetail;

  const location = useLocation();

  const orderDetail = useSelector(
    (state: RootStateOrAny) => state.orderReducers
  );
  const { order } = orderDetail;
  
  return (
    <div
      className=" w-full justify-between h-16 items-center  max-w-7xl px-10 m-auto"
      style={
        location.pathname.toString() === "/login" ||
        location.pathname.toString() === "/signup" ||
        location.pathname.toString() === "/cart" ||
        location.pathname.toString() === "/shipping" ||
        location.pathname.toString() === `/fpx` ||
        location.pathname.toString() === `/payment/:id`

          ? { display: "none" }
          : { display: "flex" }
      }
    >
      <section>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[100px] h-[65px] object-contain cursor-pointer"
          />
        </Link>
      </section>

      <section className="flex justify-evenly w-[300px] items-center">
        <section className="relative">
          <span className=" px-[6px] py-[2px] text-white bg-[#F90716] rounded-full absolute left-3 bottom-3 text-[8px] cursor-pointer">
            1
          </span>
          <span className=" text-gray-400 hover:text-gray-300">
            <i className="fas fa-bell fa-lg cursor-pointer" />
          </span>
        </section>

        <section className="relative">
          <Link to="/cart">
            {cart && cart.length > 0 ? (
              <span className=" px-[6px] py-[2px] text-white bg-[#F90716] rounded-full absolute left-3 bottom-3 text-[8px] cursor-pointer ">
                {cart.length}
              </span>
            ) : null}

            <span className=" text-gray-400 hover:text-gray-300">
              <i className="fas fa-shopping-cart fa-lg cursor-pointer" />
            </span>
          </Link>
        </section>

        {userInfo ? (
          <Link to={`/profile/${userInfo.id}`}>
            <section className="flex w-[130px] justify-around items-center hover:bg-gray-100 px-2 py-1 rounded-full">
              <span className="bg-gray-300  px-3 py-2 rounded-full text-white">
                <i className="fas fa-user fa-lg"></i>
              </span>
              <p className="cursor-pointer hover:text-gray-500 text-sm">
                {userInfo.lastName}
              </p>
            </section>
          </Link>
        ) : (
          <Link to="/login">
            <button className="px-3 py-1.5 bg-blue-500 rounded-md text-white text-sm font-medium hover:bg-blue-400 focus:outline-none">
              Log in
            </button>
          </Link>
        )}
      </section>
    </div>
  );
};
