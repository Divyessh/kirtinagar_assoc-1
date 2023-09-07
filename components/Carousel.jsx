"use client";

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card"; // Assuming Card component is in the same directory

 

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide:  3// optional, default to 1.
  }
};

const MyCarousel = ({ deviceType }) => {
  return (
    <>
    <span className="flex justify-center items-center">
    <h1 className="text-4xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Featured Providers</h1>
    </span>
    <Carousel
      arrows={false}
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      itemClass="carousel-item-padding-40-px"
    >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Carousel>
    </>
  );
};

export default MyCarousel;
