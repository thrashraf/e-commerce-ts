import { cartConstant } from "../../constant/cartConstant";

export const cartReducer = (state = {cart: [], cartLoading: true}, action:any) => {
    
    switch (action.type) {

            case cartConstant.ADD_PRODUCT:
                
                return { 
                    cartLoading: true, 
                        userCart: null
                    }

            case cartConstant.SUCCESS_ADD:
                
                return { 
                    cartLoading: false, 
                        userCart: action.payload
                    }

            case cartConstant.DELETE_PRODUCT:
                
                return { 
                    cartLoading: false, 
                    userCart: action.payload
                }
    
            case cartConstant.ADD_QUANTITY:
                return { 
                    cartLoading: false, 
                    error: action.payload
                }

            case cartConstant.DROP_QUANTITY:
                return { 
                    cartLoading: false, 
                    error: action.payload
                }
                
            default:
                return state;
        }



}


