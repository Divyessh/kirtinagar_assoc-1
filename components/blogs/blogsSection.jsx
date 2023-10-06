
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useGetBlogsQuery } from '../../redux/api/apiSlice';
import Card from './blogsCards';
import SkeletonCard from './skeletonCard';

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="carousel-button-group absolute bottom-0 left-1/2 -translate-x-1/2 space-x-8 mb-2 mr-8">
      <button onClick={() => previous()} type="button">
        <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
      <button onClick={() => next()} type="button">
        <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
    </div>
  );
};

const CarouselComponent = () => {
  const { data, isLoading } = useGetBlogsQuery('getBlogs');
  // eslint-disable-next-line no-console
  console.log(data);
  const blogData = data?.data;
  return isLoading ? (
    <SkeletonCard />
  ) : (
    <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive} className="pb-14 md:pl-14 pl-2 py-6">
      {blogData?.map((item) => (
        // eslint-disable-next-line no-underscore-dangle
        <Card key={item._id} blogImage={item.image} blogTitle={item.title} blogAuthor={item.postedBy} />
      ))}
    </Carousel>
  );
};

const MyCarousel = () => {
  return (
    <>
      <span className="flex justify-center items-center">
        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Latest From Blogs</h1>
      </span>
      <CarouselComponent />
    </>
  );
};

export default MyCarousel;
