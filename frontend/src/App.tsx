import React, { useEffect } from 'react';
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


function App() {
  
  const dispatch = useDispatch()
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);

  const { user } = userDetail;

  useEffect(() => {

    dispatch(refreshAction())
    
  }, [dispatch])

  if (user) {
    console.log(user);
  }

  return (

    <div className="h-full w-full font-custom">
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
