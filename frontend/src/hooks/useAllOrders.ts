import { RootStateOrAny, useSelector } from "react-redux";

export const useCart = () => {
    
    const cartDetail = useSelector((state: RootStateOrAny) => state.orderReducers);
    const { allOrder } = cartDetail;
    
    return [allOrder];
}