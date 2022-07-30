/* eslint-disable react/prop-types */
import React from 'react';

function ScrollToCategory({ category, classnames }) {
  return (
    <button
      className={classnames[0]}
      type="button"
      onClick={() => {
        document.getElementById(`${category}`).scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {category}
    </button>
  );
}

export default ScrollToCategory;
