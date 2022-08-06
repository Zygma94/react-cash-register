import React from 'react';
import { FaCashRegister } from 'react-icons/fa';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SaleForm from './components/SaleForm';
import SaleList from './components/SaleList';

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
          <Route path='products/product/new' element={<ProductForm />} />
          <Route path='products/product/:id' element={<ProductForm />} />
          <Route path='sales' element={<SaleList />} />
          <Route path='sales/sale/new' element={<SaleForm />} />
          <Route path='sales/sale/:id' element={<SaleForm />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
