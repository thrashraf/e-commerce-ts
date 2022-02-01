import React, { useEffect } from 'react';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar}  from './components/Navbar'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import Product from './pages/Product';
import axios from 'axios';


function App() {

  useEffect(() => {

    axios.get('http://localhost:5000/api/user', {withCredentials: true})
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
  }, [])

  return (

    <div className="h-full w-full font-custom">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
