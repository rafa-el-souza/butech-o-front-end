/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';

import useShoppingCart from '../hooks/useShoppingCart';

function CartInput({ product }) {
  const [quantity, setQuantity] = useState(0);

  const {
    insert, update, remove, getProduct, shoppingCart,
  } = useShoppingCart();

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      const { product: _product } = getProduct(product._id);
      if (_product) setQuantity(_product.quantity);
    }
  }, []);

  const insertIntoCart = (_quantity = 1) => {
    setQuantity(_quantity);
    insert(product, _quantity);
  };

  const updateCart = (newQuantity) => {
    setQuantity(newQuantity);
    update(product, newQuantity);
  };

  const removeFromCart = (productId) => {
    setQuantity(0);
    remove(productId);
  };

  const handleChange = ({ target }) => {
    const inputValue = +target.value;
    const { product: _product } = getProduct(product._id);

    if (_product) {
      if (inputValue === 0) removeFromCart(product._id);
      else updateCart(inputValue);
    } else insertIntoCart(inputValue);
  };

  const handleAdd = () => {
    const { product: _product } = getProduct(product._id);
    if (_product) {
      const newQuantity = quantity + 1;
      updateCart(newQuantity);
    } else {
      insertIntoCart();
    }
  };

  const handleRemove = () => {
    const { product: _product, productIndex } = getProduct(product._id);
    if (_product) {
      if (shoppingCart[productIndex].quantity > 1 && quantity > 0) {
        const newQuantity = quantity - 1;
        updateCart(newQuantity);
      } else {
        removeFromCart(product._id);
      }
    }
  };

  return (
    <span className="w-10 h-12 relative top-1 right-6 rounded-xl bg-slate-100 border-0">
      <form
        className="w-10 h-12 rounded-xl bg-slate-100 border-0"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="w-10 h-12 relative left-[8px] rounded-xl bg-slate-100 border-0 antialiased"
          type="number"
          min="0"
          value={quantity}
          onChange={handleChange}
        />
      </form>
      <button
        className="w-5 h-5 relative -top-3 rounded-sm bg-emerald-500 align-middle text-teal-100"
        type="button"
        onClick={handleAdd}
      >
        {'  '}
        <PlusIcon />
      </button>
      <button
        className="w-5 h-5 relative -top-3 -right-2 rounded-sm bg-red-400 align-middle text-teal-100"
        type="button"
        onClick={handleRemove}
      >
        {' '}
        <MinusIcon />
      </button>
    </span>
  );
}

export default CartInput;
