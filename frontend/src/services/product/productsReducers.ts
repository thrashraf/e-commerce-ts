import { products } from "../../constant/productsConstant"

export const productsReducers = (state = {products: []}, action:any) => {

    switch (action.type) {
        case products.REQUEST_PRODUCTS:
            return { 
                loading: true, 
                products: []
            }

        case products.SUCCESS_REQUEST_PRODUCTS:
            return { 
                loading: false, 
                products: action.payload
            }


        case products.FAIL_REQUEST_PRODUCTS:
            return { 
                loading: false, 
                error: action.payload
            }
            
        default:
            return state;
    }
}