import axios from "axios";
import { userConstant } from "../../constant/userConstant";

export const getUserInformation = () => async (dispatch: any) => {

    try {
        
        dispatch({type: userConstant.GET_USER})

        const requestData = await axios.get('http://localhost:5000/api/getUser', {withCredentials: true})
        const userInfo = requestData.data;

        console.log(userInfo);        
        
        dispatch({
            type: userConstant.SUCCESS_GET_USER,
            payload: userInfo
        })

    } catch (error) {
        dispatch({
            type: userConstant.FAIL_GET_USER,
            payload: error
        })
    }

}