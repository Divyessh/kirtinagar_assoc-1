'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-multi-carousel/lib/styles.css';
import Card from './card';
import { ButtonGroup, responsive } from '../blogs/blogsSection';

const MyCarousel = () => {
  return (
    <>
      <span className="flex justify-center items-center">
        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Featured Providers</h1>
      </span>
      <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive} className="pb-14 md:pl-14 pl-2 py-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </>
  );
};

export default MyCarousel;
