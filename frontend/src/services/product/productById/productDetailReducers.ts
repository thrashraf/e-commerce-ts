import { productDetail } from "../../../constant/productDetailConstant"

export const productDetailReducers = (state = {productById: []}, action:any) => {

    switch (action.type) {
        case productDetail.REQUEST_PRODUCT_DETAIL:
            return { 
                loading: true, 
                productById: []
            }

        case productDetail.SUCCESS_REQUEST_PRODUCT:
            return { 
                loading: false, 
                productById: action.payload
            }


        case productDetail.FAIL_REQUEST_PRODUCT:
            return { 
                loading: false, 
                error: action.payload
            }

        case productDetail.RESET:
            return {
                loading: false,
                productById: []
            }
            
        default:
            return state;
    }
}