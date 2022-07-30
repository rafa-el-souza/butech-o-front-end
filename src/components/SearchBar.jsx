/* eslint-disable react/prop-types */
import React from 'react';

function SearchBar({ children, classnames }) {
  return (
    <section className={classnames[0]}>{children}</section>
  );
}

export default SearchBar;
