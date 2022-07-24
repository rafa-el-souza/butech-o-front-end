/* eslint-disable react/prop-types */
import React, {
  createContext, useState, useEffect, useRef,
} from 'react';
import api, { http } from '../helpers/api';

const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    (async () => {
      if (firstRender.current) {
        firstRender.current = false;
        try {
          const fetched = await api.get('/products');
          if (fetched.status === http.OK) setProducts(fetched.data);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider
      value={products}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
