import React from 'react';
import './styles/index.css'
import {Navbar}  from './components/Navbar'
import { Home } from './pages/Home';

function App() {
  return (
    <div className="h-full w-full font-custom">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
