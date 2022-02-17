import axios from "axios";
import { products } from "../../constant/productsConstant";

export const listProducts = () => async (dispatch: any) => {

    try {
        
        dispatch({type: products.REQUEST_PRODUCTS})

        const requestData = await axios.get('http://localhost:5000/api/product')
        const productsData = requestData.data.allProducts;

        //console.log(productsData);        
        
        dispatch({
            type: products.SUCCESS_REQUEST_PRODUCTS,
            payload: productsData
        })

    } catch (error) {
        dispatch({
            type: products.FAIL_REQUEST_PRODUCTS,
            payload: error
        })
    }

}