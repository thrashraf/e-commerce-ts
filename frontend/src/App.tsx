import React, { useEffect } from 'react';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { refreshAction } from './services/auth/refreshAction';
import { getCartItem } from './services/cart/cartAction';
import { closeModal } from './services/modal/modalActions';
import {Navbar}  from './components/Navbar'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Profile } from './pages/Profile';
import Product from './pages/Product';
import { Cart } from './pages/Cart';
import { Shipping } from './pages/Shipping';
import { Payment } from './pages/Payment';


function App() {
  
  const dispatch = useDispatch()
  const modalDetail = useSelector((state: RootStateOrAny) => state.modalReducers);

  const { modal } = modalDetail;

  useEffect(() => {

    const setup = async() => {
      dispatch(refreshAction())
      dispatch(getCartItem())
    }
    setup()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const closeBackdrop = () => {
    dispatch(closeModal())
  }

  return (

    <div className="h-full w-full font-custom relative">
      
      {/* Backdrop */}
      <div  onClick={closeBackdrop} className={`w-full h-full bg-[#00000070] z-10 absolute m-0 p-0 left-0 top-0 ${modal ? 'block' : 'hidden'} `}  /> 
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/payment/:id' element={<Payment />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
