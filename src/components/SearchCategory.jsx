/* eslint-disable react/prop-types */
import React from 'react';

function SearchCategory({ category }) {
  return (
    <button
      className="search-category"
      type="button"
      onClick={() => {
        document.getElementById(`${category}`).scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {category}
    </button>
  );
}

export default SearchCategory;
