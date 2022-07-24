/* eslint-disable react/prop-types */
import React from 'react';

function MenuBackgroundPhoto({ bgPhotoURL, className }) {
  return (
    <img
      src={bgPhotoURL}
      alt="Foto da empresa. Adicionar descrição específica."
      className={className}
    />
  );
}

export default MenuBackgroundPhoto;
