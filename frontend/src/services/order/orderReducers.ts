import { OrderConstant } from "../../constant/orderConstant"

export const orderReducers = (state = {order: []}, action:any) => {

    switch (action.type) {

        case OrderConstant.CHECKOUT:
            return { 
                loading: false, 
                order: action.payload
            }

        case OrderConstant.REQUEST_CREATE_ORDER:
            return { 
                loading: true, 
                order: []
            }

        case OrderConstant.CREATE_ORDER:
            return { 
                loading: false, 
                order: action.payload
            }


        case OrderConstant.FAIL:
            return { 
                loading: false, 
                error: action.payload
            }
            
        default:
            return state;
    }
}