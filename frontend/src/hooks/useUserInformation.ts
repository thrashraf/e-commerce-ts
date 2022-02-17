import {useEffect, useState} from 'react'
import { RootStateOrAny, useSelector } from "react-redux";

export const useUserInformation = () => {
  
    const [cart, setCart] = useState();    
    
    const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
    const { userInfo, loading } = userDetail;

    //console.log(userInfo, loading)

    useEffect(() => {

        if (!loading) {
            if (userInfo.cart === null) return
            setCart(userInfo.cart)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    return cart;
}