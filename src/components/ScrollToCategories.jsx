/* eslint-disable react/prop-types */
import React from 'react';

import useCategoriesProducts from '../hooks/useCategoriesProducts';
import ScrollToCategory from './ScrollToCategory';

function ScrollToCategories({ classnames, scrollToCategoriesClassnames }) {
  const { categories } = useCategoriesProducts();

  return (
    <span
      className={classnames[0]}
    >
      {categories.map((category) => (
        <ScrollToCategory
          classnames={scrollToCategoriesClassnames}
          category={category}
          key={category}
        />
      ))}
    </span>
  );
}

export default ScrollToCategories;
