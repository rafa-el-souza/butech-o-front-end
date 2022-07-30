import React from 'react';

import ProductList from './ProductList';

function CategoryList({
  categories, products, categoryClassnames, productClassnames,
}) {
  return (
    categories.map((category) => (
      <section
        key={category}
      >
        <h1
          className={categoryClassnames[0]}
          id={category}
        >
          {category}
        </h1>
        <ProductList
          products={products}
          category={category}
          classnames={productClassnames}
        />
      </section>
    ))
  );
}

export default CategoryList;
