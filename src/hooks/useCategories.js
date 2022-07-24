import { useContext } from 'react';

import CategoriesContext from '../contexts/CategoriesContext';

function useCategories() {
  return useContext(CategoriesContext);
}

export default useCategories;
