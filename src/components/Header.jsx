/* eslint-disable react/prop-types */
import React from 'react';

function Header({ children, classnames }) {
  return (
    <header
      className={classnames[0]}
    >
      {children}
    </header>
  );
}

export default Header;
