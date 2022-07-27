import React from 'react';

import useCategoriesProducts from '../hooks/useCategoriesProducts';
import CartInput from './CartInput';

function MenuProductList({ category }) {
  const { products } = useCategoriesProducts();

  return (
    products
      .filter((product) => product.categoria === category)
      .map((product) => (
        <section className="menu-product" key={product.id}>
          <span className="menu-product-photo" />
          <span className="menu-product-info">
            <span className="menu-product-name">{product.nome}</span>
            <span className="menu-product-description">{product.descricao}</span>
          </span>
          <span className="menu-product-price">{`R$${product.preco},00`}</span>
          <CartInput product={product} />
        </section>
      ))
  );
}

export default MenuProductList;
