import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../services/order/orderAction";

export const useAllOrder = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllOrder())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const orderDetail = useSelector((state: RootStateOrAny) => state.orderReducers);
    const { allOrder } = orderDetail;
    
    return allOrder;
}