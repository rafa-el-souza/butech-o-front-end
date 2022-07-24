/* eslint-disable react/prop-types */
import React, {
  createContext, useState, useEffect, useRef,
} from 'react';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';

const ShoppingCartContext = createContext([]);

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      const cartInLocalStore = getLocalStorage('shoppingCart');
      if (cartInLocalStore) {
        setShoppingCart(cartInLocalStore);
      }
    }
  }, []);

  const insertIntoCart = (product, quantity = 1) => {
    const newProduct = {
      ...product,
      quantity,
    };

    const newShoppingCart = [
      ...shoppingCart,
      newProduct,
    ];

    setLocalStorage('shoppingCart', newShoppingCart);

    setShoppingCart(newShoppingCart);
  };

  const updateCart = (product, newQuantity) => {
    const newProduct = {
      ...product,
      quantity: newQuantity,
    };

    const newShoppingCart = shoppingCart.map((item) => {
      if (item._id === newProduct._id) return newProduct;
      return item;
    });

    setLocalStorage('shoppingCart', newShoppingCart);

    setShoppingCart(newShoppingCart);
  };

  const removeFromCart = (productId) => {
    const newShoppingCart = shoppingCart.filter((item) => item._id !== productId);

    setLocalStorage('shoppingCart', newShoppingCart);

    setShoppingCart(newShoppingCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        insertIntoCart,
        updateCart,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
