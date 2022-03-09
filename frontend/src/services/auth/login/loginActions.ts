import axios from "axios";
import { loginConstant } from "../../../constant/loginConstant";


export const loginUser = (email: string, password: string) => async (dispatch: any) => {

    try {
        //console.log(email, password);
        dispatch({type: loginConstant.REQUEST_LOGIN})
        const user = await axios.post(`http://localhost:5000/api/login`, {email, password}, {withCredentials: true})
        dispatch({
            type: loginConstant.SUCCESS_LOGIN,
            payload: user.data
        })

    } catch (error: any) {
        console.log(error.response.data.message);
        dispatch({
            type: loginConstant.FAIL_LOGIN,
            payload: error.response.data.message
        })
    }
}

export const logout = () => async(dispatch: any) => {
    try {
        await axios.get("http://localhost:5000/api/logout", {withCredentials: true})
        dispatch({
            type: loginConstant.LOGOUT,
            payload: null
        })
    } catch (error: any) {
        dispatch({
            type: loginConstant.FAIL_LOGIN,
            payload: error.response.data.message
        })       
    }
}