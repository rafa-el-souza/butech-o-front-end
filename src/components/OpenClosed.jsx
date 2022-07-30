/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function OpenClosed({ className }) {
  const [open] = useState(true);

  // useEffect making request to server to setOpen

  return (
    <span className={className}>{open ? 'Aberto' : 'Fechado'}</span>
  );
}

export default OpenClosed;
