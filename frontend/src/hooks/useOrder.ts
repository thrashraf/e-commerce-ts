import { RootStateOrAny, useSelector } from "react-redux";

export const useOrder = () => {
    
    const orderDetail = useSelector((state: RootStateOrAny) => state.orderReducers);
    const { order } = orderDetail;
    
    return [order];
}