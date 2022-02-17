import React, { useEffect, useState } from 'react';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { refreshAction } from './services/auth/refreshAction';
import { closeModal } from './services/modal/modalActions';
import {Navbar}  from './components/Navbar'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Profile } from './pages/Profile';
import Product from './pages/Product';
import { Cart } from './pages/Cart';


function App() {
  
  const dispatch = useDispatch()
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const modalDetail = useSelector((state: RootStateOrAny) => state.modalReducers);

  

  const { user } = userDetail;
  const { modal } = modalDetail;

  useEffect(() => {

    dispatch(refreshAction())
    
  }, [dispatch])

  if (user) {
    console.log(user);
  }

  const closeBackdrop = () => {
    dispatch(closeModal())
  }

  return (

    <div className="h-full w-full font-custom  relative">
      
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
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
