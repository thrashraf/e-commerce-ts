import { loginConstant } from "../constant/loginConstant";

export const loginReducer = (state = {userInfo: null}, action:any) => {
    
    switch (action.type) {
        case loginConstant.REQUEST_LOGIN:
            return { 
                    loading: true, 
                    userInfo: null
                }
    
            case loginConstant.SUCCESS_LOGIN:
                
                
                return { 
                    loading: false, 
                    userInfo: action.payload
                }
    
    
            case loginConstant.FAIL_LOGIN:
                return { 
                    loading: false, 
                    error: action.payload
                }
                
            default:
                return state;
        }



}


