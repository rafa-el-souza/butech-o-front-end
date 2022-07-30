import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';

import { useNavigate } from 'react-router-dom';
import useShoppingCart from '../hooks/useShoppingCart';

function CartTotal() {
  const { getTotal } = useShoppingCart();

  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="fixed h-[80px] w-24 bottom-10 right-10 opacity-80 bg-teal-300 rounded-3xl drop-shadow-lg"
      onClick={() => navigate('/cart', { replace: true })}
    >
      <ShoppingCartIcon className="w-12 absolute top-[6px] left-[22px] text-indigo-500 drop-shadow-lg opacity-90" />
      <span className="absolute bottom-[6px] left-[19px] text-indigo-800 text-center text-md font-bold">{`R$${getTotal()},00`}</span>
    </button>
  );
}

export default CartTotal;
