import {useEffect, useState} from 'react'
import { RootStateOrAny, useSelector } from "react-redux";

export const useCart = () => {
  
    const [userCart, setUserCart] = useState([]);    
    
    const cartDetail = useSelector((state: RootStateOrAny) => state.cartReducer);
    const { cart, cartLoading } = cartDetail;
    
    useEffect(() => {
        if (!cartLoading) {
          if (!cart) return  
          //console.log(cart);
          setUserCart(cart);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [cartLoading]);

    return userCart;
}