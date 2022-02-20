import { cartConstant } from "../../constant/cartConstant";

export const cartReducer = (state = {cart: [] as any[], cartLoading: true, quantity: 0, id: null}, action:any) => {
    
    switch (action.type) {

            case cartConstant.REQUEST_CART:
                
                return { 
                    cartLoading: true, 
                    cart: null
                    }

            case cartConstant.GET_CART:
                
                return { 
                    cartLoading: false, 
                    cart: action.payload
                    }

            case cartConstant.ADD_PRODUCT:
                
                return { 
                    cartLoading: true, 
                    cart: action.payload 
                    }

            case cartConstant.SUCCESS_ADD:
                
                return { 
                    cartLoading: false, 
                    cart: action.payload
                    }

            case cartConstant.DELETE_PRODUCT:
                
                return { 
                    cartLoading: false, 
                    cart: action.payload
                }
    
            case cartConstant.ADD_QUANTITY:

                const { cart } = action;
                //console.log(cart)
                console.log(state.cart)
                const index = state.cart.findIndex((item: any) => item.id === cart.id)
                state.cart[index].quantity += 1
                return {
                    cart: state.cart
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


