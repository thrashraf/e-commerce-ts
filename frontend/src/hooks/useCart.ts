import { RootStateOrAny, useSelector } from "react-redux";

export const useCart = () => {
    
    const cartDetail = useSelector((state: RootStateOrAny) => state.cartReducer);
    const { cart } = cartDetail;
    
    return [cart];
}