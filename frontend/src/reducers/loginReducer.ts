import { loginConstant } from "../constant/loginConstant";

export const loginReducer = (state = {user: null}, action:any) => {
    
    switch (action.type) {
        case loginConstant.REQUEST_LOGIN:
            return { 
                    loading: true, 
                    user: null
                }
    
            case loginConstant.SUCCESS_LOGIN:
                
                
                return { 
                    loading: false, 
                    user: action.payload
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


