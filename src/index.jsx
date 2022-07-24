import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import './index.css';

import { ProductsProvider } from './contexts/ProductsContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Global contexts goes inside here */}
      <ShoppingCartProvider>
        <ProductsProvider>
          <CategoriesProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </CategoriesProvider>
        </ProductsProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
