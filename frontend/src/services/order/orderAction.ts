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

    //console.log(requestData)
    const orderData = requestData.data.id;
    //console.log(orderData);

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

export const getOrderDetails = (id: string) => async (dispatch: any) => {
  
  dispatch({type: OrderConstant.REQUEST_ORDER_DETAIL})
  const requestOrder: any = await axios.get(
    `http://localhost:5000/api/order/getOrder/${id}`,
    { withCredentials: true }
  )

  console.log(requestOrder)

  dispatch({
    type: OrderConstant.SUCCESS_ORDER_DETAIL,
    payload: requestOrder.data,
  });
};


