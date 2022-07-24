/* eslint-disable react/prop-types */
import React from 'react';

function MenuLogo({ logoURL, className }) {
  return (
    <img
      src={logoURL}
      alt="Logomarca da empresa. Adicionar descrição específica."
      className={className}
    />
  );
}

export default MenuLogo;
