import axios from "axios";
import { loginConstant } from "../constant/loginConstant";


export const refreshAction = () => async (dispatch: any) => {

    try {
        
        dispatch({type: loginConstant.REQUEST_LOGIN})
        const user = await axios.get(`http://localhost:5000/api/refresh`, {withCredentials: true})
        
        console.log(user);
        
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