import { loginConstant } from "../../../constant/loginConstant";

export const loginReducer = (state = {userInfo: null, userloading: true}, action:any) => {
    
    switch (action.type) {
        case loginConstant.REQUEST_LOGIN:
            return { 
                userloading: true, 
                    userInfo: null
                }
    
            case loginConstant.SUCCESS_LOGIN:
                
                
                return { 
                    userloading: false, 
                    userInfo: action.payload
                }
    
    
            case loginConstant.FAIL_LOGIN:
                return { 
                    userloading: false, 
                    error: action.payload
                }
                
            default:
                return state;
        }



}


