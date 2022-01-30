import React from 'react';
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar}  from './components/Navbar'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Product from './pages/Product';

function App() {
  return (

    <div className="h-full w-full font-custom">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
