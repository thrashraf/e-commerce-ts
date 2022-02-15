import { addressConstant } from "../constant/addressConstant";

export const addressReducer = (state = {address: null, loading: true}, action:any) => {
    
    switch (action.type) {

            case addressConstant.REQUEST:
                return { 
                        loading: true, 
                        address: null
                    }

            case addressConstant.SUCCESS_ADD_ADDRESS:
                return { 
                        loading: true, 
                        address: action.payload
                    }
    
            case addressConstant.SUCCESS_DELETE_ADDRESS:
                
                
                return { 
                    loading: false, 
                    address: action.payload
                }
    
    
            case addressConstant.SUCCESS_EDIT_ADDRESS:
                return { 
                    loading: false, 
                    error: action.payload
                }

            case addressConstant.FAIL:
                return { 
                    loading: false, 
                    error: action.payload
                }
                
            default:
                return state;
        }

}


