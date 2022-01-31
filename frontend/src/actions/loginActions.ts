import axios from "axios";
import { loginConstant } from "../constant/loginConstant";


export const loginUser = (email: string, password: string) => async (dispatch: any) => {

    try {
        
        console.log(email, password);

        dispatch({type: loginConstant.REQUEST_LOGIN})


        const login = await axios.post(`http://localhost:5000/api/login`, {email, password})
        const loginData = login.data;

        console.log(loginData);        
        
        dispatch({
            type: loginConstant.SUCCESS_LOGIN,
            payload: loginData
        })

    } catch (error) {
        dispatch({
            type: loginConstant.FAIL_LOGIN,
            payload: error
        })
    }

}