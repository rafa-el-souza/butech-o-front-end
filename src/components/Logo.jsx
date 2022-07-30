/* eslint-disable react/prop-types */
import React from 'react';

function Logo({ logoURL, className, alt }) {
  return (
    <img
      src={logoURL}
      alt={alt}
      className={className}
    />
  );
}

export default Logo;
