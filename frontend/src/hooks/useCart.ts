import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

export const useCart = () => {

    const [userCart, setUserCart] = useState<any []>([])
    
    const cartDetail = useSelector((state: RootStateOrAny) => state.cartReducer);
    const { cart } = cartDetail;

    useEffect(() => {
        cart && setUserCart(cart)
    }, [cart])
    
    return [userCart];
}