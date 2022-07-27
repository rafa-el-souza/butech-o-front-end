import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import './index.css';

import { CategoriesProductsProvider } from './contexts/CategoriesProductsContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Global contexts goes inside here */}
      <CategoriesProductsProvider>
        <ShoppingCartProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ShoppingCartProvider>
      </CategoriesProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
