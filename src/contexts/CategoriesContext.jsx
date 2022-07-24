/* eslint-disable react/prop-types */
import React, {
  createContext, useEffect, useRef, useState,
} from 'react';
import api, { http } from '../helpers/api';

const CategoriesContext = createContext({});

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    (async () => {
      if (firstRender.current) {
        firstRender.current = false;
        try {
          const fetched = await api.get('/categories');
          if (fetched.status === http.OK) setCategories(fetched.data);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);

  return (
    <CategoriesContext.Provider
      value={categories}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export default CategoriesContext;
