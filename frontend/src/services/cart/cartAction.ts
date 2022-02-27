import axios from "axios";
import { cartConstant } from "../../constant/cartConstant";

export const getCartItem = () => async (dispatch: any) => {

    try {
        dispatch({type: cartConstant.REQUEST_CART})
        const cart = await axios.get(`http://localhost:5000/api/cart/getCart`,  {withCredentials: true})
        
        console.log(cart)

        dispatch({
            type: cartConstant.GET_CART,
            payload: cart.data ? cart.data : []
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
        await axios.post(`http://localhost:5000/api/cart/addItem`, item, {withCredentials: true})

        dispatch({
            type: cartConstant.SUCCESS_ADD,
            payload: item
        })

    } catch (error: any) {
        console.log(error.response.data.message);
        dispatch({
            type: cartConstant.FAIL,
            payload: error.response.data.message
        })
    }
}


export const incrementQuantity = (cart: any) => (dispatch: any) => {
    dispatch({
        type: cartConstant.ADD_QUANTITY,
        cart: cart
    })
    //console.log(cart)
}

export const decrementQuantity = (quantity: number) => (dispatch: any) => {
    dispatch({type: cartConstant.DROP_QUANTITY})
}


export const stagingCart = () => {
    
}

