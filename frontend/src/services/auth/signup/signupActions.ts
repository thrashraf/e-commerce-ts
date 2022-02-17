import axios from "axios";
import { signup } from "../../../constant/signupConstant";


export const signupUser = (firstName:string, lastName:string, email:string, password:string) => async (dispatch: any) => {

    try { 
        
        dispatch({type: signup.REQUEST_SIGNUP})
        const user = await axios.post(`http://localhost:5000/api/signup`, {firstName, lastName, email, password})
        
        console.log(user);
        
        dispatch({
            type: signup.SUCCESS_SIGNUP,
            payload: user.data
        })

    } catch (error: any) {
        console.log(error.response.data.message);
        dispatch({
            type: signup.FAIL_SIGNUP,
            payload: error.response.data.message
        })
    }
}