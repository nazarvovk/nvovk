import React from 'react';
import { useRef } from 'react';

const DotsCanvas = () => {
  const ref = useRef();

  return <canvas ref={ref}></canvas>;
};

export default DotsCanvas;
