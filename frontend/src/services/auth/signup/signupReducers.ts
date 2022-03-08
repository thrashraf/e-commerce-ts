import { signup } from "../../../constant/signupConstant"

export const signupReducers = (state = {userInfo: [], loading: true}, action:any) => {

    switch (action.type) {
        case signup.REQUEST_SIGNUP:
            return { 
                loading: true, 
                userInfo: []
            }

        case signup.SUCCESS_SIGNUP:
            return { 
                loading: false, 
                userInfo: action.payload
            }


        case signup.FAIL_SIGNUP:
            return { 
                loading: false, 
                error: action.payload
            }
            
        default:
            return state;
    }
}