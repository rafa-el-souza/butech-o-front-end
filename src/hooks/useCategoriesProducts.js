import { useContext } from 'react';

import CategoriesProductsContext from '../contexts/CategoriesProductsContext';

function useCategoriesProducts() {
  return useContext(CategoriesProductsContext);
}

export default useCategoriesProducts;
