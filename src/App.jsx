import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Delivery from './pages/Delivery';
import Menu from './pages/Menu';

import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Menu />} />
        <Route path="details/:id" element={<ProductDetails />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="*" element={<Menu />} />
      </Route>
      <Route path="*" element={<Layout />}>
        <Route path="*" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;
