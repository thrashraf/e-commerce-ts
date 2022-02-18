import {useEffect, useState} from 'react'
import { RootStateOrAny, useSelector } from "react-redux";

export const useCart = () => {
  
    const [cart, setCart] = useState();    
    
    const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
    const { userInfo, userloading } = userDetail;
    
    useEffect(() => {

        //console.log('rerender')

        if (!userloading) {
            console.log(userInfo)
            setCart(userInfo.cart)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userloading])

    return cart;
}