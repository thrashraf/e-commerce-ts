import { userConstant } from '../../constant/userConstant'

export const userReducer = (state = {userInfo: null, userloading: true}, action:any) => {
    
    switch (action.type) {

        case userConstant.GET_USER:
            return { 
                userloading: true, 
                    userInfo: null
                }

        case userConstant.SUCCESS_GET_USER:
            return { 
                userloading: true, 
                userInfo: action.payload
                }

        case userConstant.FAIL_GET_USER:
            return { 
                userloading: true, 
                userInfo: action.payload
                }
    
        case userConstant.UPDATE_USER_INFORMATION:
            return {
                userLoading: false,
                userInfo: action.payload
            }
                
            default:
                return state;
        }

}


