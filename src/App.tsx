import React from 'react';
import { FaCashRegister } from 'react-icons/fa';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="app">
      <h2>
        <FaCashRegister />
        Cash Register
      </h2>
      <div className='app-navigation-content'>
        <Routes>
          <Route path='/' element={<Navigate replace to='products' />} />
          <Route path='products' element={<ProductList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
