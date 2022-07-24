import React, { useRef } from 'react';

import useCategories from '../hooks/useCategories';

function SearchByCategory() {
  const categories = useCategories();

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <span>
      {categories.map((category) => (
        <button
          type="button"
          onClick={executeScroll}
        >
          {category.nome}
        </button>
      ))}
    </span>
  );
}

export default SearchByCategory;
