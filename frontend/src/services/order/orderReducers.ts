import { OrderConstant } from "../../constant/orderConstant"

export const orderReducers = (state = {order: [], success:false, loading: false, id: null}, action:any) => {

    switch (action.type) {

        case OrderConstant.CHECKOUT:
            return { 
                loading: false,
                order: action.payload
            }

        case OrderConstant.REQUEST_CREATE_ORDER:
            return { 
                loading: true, 
                success: false, 
            }

        case OrderConstant.CREATE_ORDER:
            return { 
                loading: false, 
                success: true, 
                id: action.payload
            }

        case OrderConstant.REQUEST_ORDER_DETAIL:
            return { 
                loading: false, 
                success: false, 
            }

        case OrderConstant.SUCCESS_ORDER_DETAIL:
            return { 
                loading: false, 
                success: false, 
                order: action.payload
            }

        case OrderConstant.FAIL:
            return { 
                loading: false,
                success: false,  
                error: action.payload
            }
            
        default:
            return state;
    }
}