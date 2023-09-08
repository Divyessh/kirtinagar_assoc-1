'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Card from './blogsCards'; // Assuming Card component is in the same directory
import CardImg2 from '../../assets/png/joseph-greve-Xdk7tFHP6kU-unsplash 1.png';
import CardImg from '../../assets/png/julian-hochgesang-4DqsMC4-QQc-unsplash 1 (1).png';

const data = [
  {
    blogImage: CardImg,
    blogTitle: 'WOODMAN FURNITURE INDIA PVT. LTD.',
    blogAuthor: 'Kirtinagar',
  },
  {
    blogImage: CardImg2,
    blogTitle: 'WOODMAN FURNITURE INDIA PVT. LTD.',
    blogAuthor: 'Kirtinagar',
  },
  {
    blogImage: CardImg,
    blogTitle: 'WOODMAN FURNITURE INDIA PVT. LTD.',
    blogAuthor: 'Kirtinaga',
  },
];

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
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group absolute bottom-0 flex justify-center items-center w-full space-x-8 mb-2">
      <button onClick={() => previous()} type="button">
        <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary" />
      </button>
      <button onClick={() => next()} type="button">
        <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary" />
      </button>
    </div>
  );
};
const MyCarousel = () => {
  return (
    <>
      <span className="flex justify-center items-center">
        <h1 className="text-4xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Latest From Blogs</h1>
      </span>
      <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive} className="py-6 pb-14 pl-10">
        {data.map((item,i) => (
          <Card key={i} blogImage={item.blogImage} blogTitle={item.blogTitle} blogAuthor={item.blogAuthor} />
        ))}
      </Carousel>
    </>
  );
};

export default MyCarousel;
