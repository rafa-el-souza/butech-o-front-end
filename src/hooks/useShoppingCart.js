import { useContext } from 'react';

import ShoppingCartContext from '../contexts/ShoppingCartContext';

function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default useShoppingCart;
