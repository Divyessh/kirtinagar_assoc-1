'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Card from './card';
// Assuming Card component is in the same directory
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group absolute bottom-0 flex justify-center items-center w-full space-x-8 mb-2 mr-8">
      <button onClick={() => previous()} type="button">
        <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
      <button onClick={() => next()} type="button">
        <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
    </div>
  );
};
const MyCarousel = () => {
  return (
    <>
      <span className="flex justify-center items-center">
        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Featured Providers</h1>
      </span>
      <Carousel
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            slidesToSlide: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
            slidesToSlide: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        swipeable
        infinite
        className="pb-14 flex justify-center items-center  justify-self-center md:pl-0 pl-10 py-6"
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </>
  );
};

export default MyCarousel;
