import React, { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import { listProducts } from '../services/product/productsActions';
import { resetProductDetail } from '../services/product/productById/productDetailActions';
import Card from '../components/Card';
import { Spinner } from '../components/Spinner/Spinner';
import { getCartItem } from '../services/cart/cartAction';


type Props = {};

export const Home = (props: Props) => {

  const dispatch = useDispatch()
  const productList = useSelector((state: RootStateOrAny) => state.productsReducers);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(getCartItem())
    dispatch(listProducts())
    dispatch(resetProductDetail())
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  //console.log(products);

  return <div className=' max-w-7xl px-10 m-auto'>
    
      {/* carousel */}
      {/* Search */}
    
    <div>
      {loading
       ? <Spinner /> 
       : error 
       ? <h1>{error}</h1>
       :<Card data={products}/> 
      }
    </div>
  </div>;
};
