import React from 'react';

import CartInput from './CartInput';

function ProductList({ products, category, classnames }) {
  return (
    products
      .filter((product) => product.categoria === category)
      .map((product) => (
        <section className={classnames[0]} key={product.nome}>
          <span className={classnames[1]} />
          <span className={classnames[2]}>
            <span className={classnames[3]}>{product.nome}</span>
            <span className={classnames[4]}>{product.descricao}</span>
          </span>
          <span className={classnames[5]}>{`R$${product.preco},00`}</span>
          <CartInput product={product} />
        </section>
      ))
  );
}

export default ProductList;
