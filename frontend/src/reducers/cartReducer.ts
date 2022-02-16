import { cartConstant } from "../constant/cartConstant";
import { useEffect } from "react";




export const cartReducer = (state = {cart: [], loading: true}, action:any) => {
    
    switch (action.type) {

        case cartConstant.ADD_PRODUCT:
            
             return { 
                    loading: true, 
                    userInfo: null
                }
    
            case cartConstant.DELETE_PRODUCT:
                
                return { 
                    loading: false, 
                    userInfo: action.payload
                }
    
            case cartConstant.ADD_QUANTITY:
                return { 
                    loading: false, 
                    error: action.payload
                }

            case cartConstant.DROP_QUANTITY:
                return { 
                    loading: false, 
                    error: action.payload
                }
                
            default:
                return state;
        }



}


