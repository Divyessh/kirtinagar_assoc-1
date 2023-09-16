'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Card from './blogsCards'; // Assuming Card component is in the same directory
import { getBlog } from '@/lib/blog/blog';

// const data = [
//   {
//     blogImage: CardImg,
//     blogTitle: 'WOODMAN FURNITURE INDIA PVT. LTD.',
//     blogAuthor: 'Kirtinagar',
//   },
//   {
//     blogImage: CardImg2,
//     blogTitle: 'WOODMAN FURNITURE INDIA PVT. LTD.',
//     blogAuthor: 'Kirtinagar',
//   },
//   {
//     blogImage: CardImg,
//     blogTitle: 'WOODMAN FURNITURE INDIA PVT. LTD.',
//     blogAuthor: 'Kirtinaga',
//   },
// ];

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
    <div className="carousel-button-group absolute bottom-0 flex justify-center items-center w-full space-x-8 mb-2 mr-12">
      <button onClick={() => previous()} type="button">
        <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
      <button onClick={() => next()} type="button">
        <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
    </div>
  );
};
const MyCarousel = (props) => {
  const { blogData } = props;
  return (
    <>
      <span className="flex justify-center items-center">
        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Latest From Blogs</h1>
      </span>
      <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive} className="pb-14  md:pl-14 pl-2 py-6">
        {blogData.map((item) => (
          <Card key={item._id} blogImage={item.image} blogTitle={item.title} blogAuthor={item.postedBy} />
        ))}
      </Carousel>
    </>
  );
};

export default MyCarousel;
