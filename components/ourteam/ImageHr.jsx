import React from 'react';
import Image from 'next/image';
import buildingBg from '../../assets/png/buildings.png';

const ImageHr = () => {
  return <Image alt="imagebreak" src={buildingBg} />;
};

export default ImageHr;
