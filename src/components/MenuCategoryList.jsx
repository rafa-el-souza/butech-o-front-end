import React from 'react';

import useCategoriesProducts from '../hooks/useCategoriesProducts';
import MenuProductList from './MenuProductList';

function MenuCategoryList() {
  const { categories } = useCategoriesProducts();

  return (
    categories.map((category) => (
      <section
        key={category}
      >
        <h1
          className="menu-category-title"
          id={category}
        >
          {category}
        </h1>
        <MenuProductList category={category} />
      </section>
    ))
  );
}

export default MenuCategoryList;
