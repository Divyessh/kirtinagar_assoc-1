'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Card from './card'; // Assuming Card component is in the same directory

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group absolute bottom-0 flex justify-center items-center w-full space-x-8 mb-2">
      <button type="button" onClick={() => previous()}>
        <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary" />
      </button>
      <button type="button" onClick={() => next()}>
        <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary" />
      </button>
    </div>
  );
};
const MyCarousel = () => {
  return (
    <>
      <span className="flex justify-center items-center">
        <h1 className="text-4xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Featured Providers</h1>
      </span>
      <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive} className="py-6 pb-14">
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </>
  );
};

export default MyCarousel;
