import axios from "axios";
import { addressConstant } from "../constant/addressConstant";

export const addAddress = (address: string[]) => async (dispatch: any) => {

    try {
        
        console.log(address)

        dispatch({type: addressConstant.REQUEST})
        const user = await axios.post(`http://localhost:5000/api/addAddress`, address, {withCredentials: true})
        
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

export const editAddress = (email: string, password: string) => async (dispatch: any) => {

    try {
        //console.log(email, password);
        dispatch({type: addressConstant.REQUEST})
        const user = await axios.post(`http://localhost:5000/api/login`, {email, password}, {withCredentials: true})
        
        dispatch({
            type: addressConstant.SUCCESS_EDIT_ADDRESS,
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

export const deleteAddressAction = (address: string[]) => async (dispatch: any) => {

    try {
        
        dispatch({type: addressConstant.REQUEST})
        await axios.post(`http://localhost:5000/api/deleteAddress`, address, {withCredentials: true})
        
        dispatch({
            type: addressConstant.SUCCESS_DELETE_ADDRESS,
            payload: true
        })

    } catch (error: any) {
        console.log(error.response.data.message);
        dispatch({
            type: addressConstant.FAIL,
            payload: false
        })
    }
}