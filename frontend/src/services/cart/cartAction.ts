import axios from "axios";
import { addressConstant } from "../../constant/addressConstant";

export const addToCart = (item: any) => async (dispatch: any) => {

    try {
        console.log(item)

        dispatch({type: addressConstant.REQUEST})
        const user = await axios.post(`http://localhost:5000/api/cart/addItem`, item, {withCredentials: true})
        
        dispatch({
            type: addressConstant.SUCCESS_ADD_ADDRESS,
            payload: user.data
        })

    } catch (error: any) {
        console.log(error.response.data.message);
        dispatch({
            type: addressConstant.FAIL,
            payload: error.response.data.message
        })
    }


}

