import React from 'react';

import useCategoriesProducts from '../hooks/useCategoriesProducts';
import SearchCategory from './SearchCategory';

function SearchByCategory() {
  const { categories } = useCategoriesProducts();

  return (
    <span
      className="search-by-category"
    >
      {categories.map((category) => (
        <SearchCategory category={category} key={category} />
      ))}
    </span>
  );
}

export default SearchByCategory;
