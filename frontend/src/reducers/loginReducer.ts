import { loginConstant } from "../constant/loginConstant";

export const loginReducer = (state = {user: []}, action:any) => {
    
        switch (action.type) {
            case loginConstant.REQUEST_LOGIN:
                return { 
                    loading: true, 
                    user: []
                }
    
            case loginConstant.SUCCESS_LOGIN:
                return { 
                    loading: false, 
                    user: []
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


