/* eslint-disable react/prop-types */
import React from 'react';

function BackgroundPhoto({ className, bgPhotoURL }) {
  return (
    <img
      className={className}
      src={bgPhotoURL}
      alt="Foto da empresa. Adicionar descrição específica."
    />
  );
}

export default BackgroundPhoto;
