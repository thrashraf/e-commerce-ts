import axios from "axios";
import { productDetail } from "../constant/productDetailConstant";


export const listProductById = (id: any) => async (dispatch: any) => {

    try {
        
        //console.log(id);

        dispatch({type: productDetail.REQUEST_PRODUCT_DETAIL})


        const requestData = await axios.get(`http://localhost:5000/api/product/${id}`)
        const productsData = requestData.data.productById[0];

        //console.log(productsData);        
        
        dispatch({
            type: productDetail.SUCCESS_REQUEST_PRODUCT,
            payload: productsData
        })

    } catch (error) {
        dispatch({
            type: productDetail.FAIL_REQUEST_PRODUCT,
            payload: error
        })
    }

}