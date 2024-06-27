import React, { useState, useEffect } from 'react';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Favs from './pages/Favs';
import ProductDetail from './components/products/ProductDetail';

const App = () => {
  const [blackTheme, setBlackTheme] = useState(() => {
    const savedTheme = localStorage.getItem('blackTheme');
    return savedTheme ? savedTheme : false
  });
  useEffect(() => {
    localStorage.setItem('blackTheme', blackTheme);
  }, [blackTheme]);

  return (
    <div className={`global ${blackTheme ? 'withTheme' : ''}`}>
      <Routes>
        <Route path='/' element={<Home blackTheme={blackTheme} setBlackTheme={setBlackTheme} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/favourites' element={<Favs />} />
        <Route path='/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
