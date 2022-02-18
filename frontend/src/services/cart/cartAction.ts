import axios from "axios";
import { cartConstant } from "../../constant/cartConstant";

export const getCartItem = () => async (dispatch: any) => {

    try {
        dispatch({type: cartConstant.REQUEST_CART})
        const cart = await axios.get(`http://localhost:5000/api/cart/getCart`,  {withCredentials: true})
        
        console.log(cart)

        dispatch({
            type: cartConstant.GET_CART,
            payload: cart.data
        })

    } catch (error: any) {
        console.log(error.response.data.message);
        dispatch({
            type: cartConstant.FAIL,
            payload: error.response.data.message
        })
    }
}


export const addToCart = (item: any) => async (dispatch: any) => {

    try {
        console.log(item)

        dispatch({type: cartConstant.ADD_PRODUCT})
        const cart = await axios.post(`http://localhost:5000/api/cart/addItem`, item, {withCredentials: true})
        
        console.log(cart)

        dispatch({
            type: cartConstant.SUCCESS_ADD,
            payload: cart.data
        })

    } catch (error: any) {
        console.log(error.response.data.message);
        dispatch({
            type: cartConstant.FAIL,
            payload: error.response.data.message
        })
    }
}

