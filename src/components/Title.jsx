/* eslint-disable react/prop-types */
import React from 'react';

function Title({ title, className }) {
  return (
    <h1 className={className}>{title}</h1>
  );
}

export default Title;
