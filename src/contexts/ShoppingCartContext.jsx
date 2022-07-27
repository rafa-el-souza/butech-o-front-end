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

  const getProduct = (productId) => {
    let productIndex;
    const _product = shoppingCart.find((item, index) => {
      productIndex = index;
      return item._id === productId;
    });

    return {
      productIndex,
      product: _product,
    };
  };

  const insert = (newProduct) => {
    const newShoppingCart = [
      ...shoppingCart,
      newProduct,
    ];

    setLocalStorage('shoppingCart', newShoppingCart);

    setShoppingCart(newShoppingCart);
  };

  const update = (newProduct) => {
    const newShoppingCart = shoppingCart.map((item) => {
      if (item._id === newProduct._id) return newProduct;
      return item;
    });

    setLocalStorage('shoppingCart', newShoppingCart);

    setShoppingCart(newShoppingCart);
  };

  const remove = (productId) => {
    const newShoppingCart = shoppingCart.filter((item) => item._id !== productId);

    setLocalStorage('shoppingCart', newShoppingCart);

    setShoppingCart(newShoppingCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        getProduct,
        insert,
        update,
        remove,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
