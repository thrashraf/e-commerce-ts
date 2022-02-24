import { OrderConstant } from "../../constant/orderConstant";
import axios from "axios";

export const checkout = (order: any) => (dispatch: any) => {
    
  dispatch({
    type: OrderConstant.CHECKOUT,
    payload: order,
  });
};

export const createOrder = (order: any) => async (dispatch: any) => {
  try {
    dispatch({ type: OrderConstant.REQUEST_CREATE_ORDER });
    console.log(order);

    const requestData: any = await axios.post(
      "http://localhost:5000/api/order/createOrder",
      order,
      { withCredentials: true }
    )

    const orderData = requestData.data;
    console.log(orderData);

    dispatch({
      type: OrderConstant.CREATE_ORDER,
      payload: orderData,
    });
  } catch (error) {
    dispatch({
      type: OrderConstant.FAIL,
      payload: error,
    });
  }
};
