import React, { useEffect, useState } from 'react';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { refreshAction } from './actions/refreshAction';
import {Navbar}  from './components/Navbar'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Profile } from './pages/Profile';
import Product from './pages/Product';
import { Modal } from './components/Modal'
import Module from 'module';


function App() {
  
  const dispatch = useDispatch()
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);

  const [modal, setModal] = useState<boolean>(false);

  const { user } = userDetail;

  useEffect(() => {

    dispatch(refreshAction())
    
  }, [dispatch])

  if (user) {
    console.log(user);
  }

  return (

    <div className="h-full w-full font-custom">
      
      {/* Backdrop */}
      <div className={`w-full h-full bg-[#00000070] z-10 absolute m-0 p-0 ${modal ? 'block' : 'hidden'} `}  />
      
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
