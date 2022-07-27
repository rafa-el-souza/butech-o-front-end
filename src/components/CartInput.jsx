/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';

import useShoppingCart from '../hooks/useShoppingCart';

function CartInput({ product }) {
  const [quantity, setQuantity] = useState(0);

  const {
    insert, update, remove, getProduct, shoppingCart,
  } = useShoppingCart();

  const insertIntoCart = (_quantity = 1) => {
    setQuantity(_quantity);
    const newProduct = {
      ...product,
      quantity: _quantity,
    };
    insert(newProduct);
  };

  const updateCart = (newQuantity) => {
    const newProduct = {
      ...product,
      quantity: newQuantity,
    };
    setQuantity(newQuantity);
    update(newProduct);
  };

  const removeFromCart = (productId) => {
    remove(productId);
    setQuantity(0);
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
      console.log(shoppingCart[productIndex].quantity);
      if (shoppingCart[productIndex].quantity > 1) {
        const newQuantity = quantity - 1;
        updateCart(newQuantity);
      } else {
        removeFromCart(product._id);
      }
    }
  };

  return (
    <span className="w-16 h-12 relative top-2 right-4 rounded-xl bg-slate-100 border-0 z-2">
      <div className="w-16 h-12 rounded-xl bg-slate-100 border-0">
        <form
          className="w-16 h-12 rounded-xl bg-slate-100 border-0"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="w-16 h-12 rounded-xl bg-slate-100 border-0"
            type="number"
            min="0"
            value={quantity}
            onChange={handleChange}
          />
        </form>
      </div>
      <button
        className="w-5 h-5 relative -top-4 rounded-sm bg-emerald-500 align-middle text-teal-100"
        type="button"
        onClick={handleAdd}
      >
        {'  '}
        <PlusIcon />
      </button>
      <button
        className="w-5 h-5 relative -top-4 -right-6 rounded-sm bg-red-400 align-middle text-teal-100"
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
