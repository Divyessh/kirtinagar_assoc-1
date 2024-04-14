/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
    <div className="carousel-button-group absolute bottom-0 left-0 right-0 flex justify-center gap-5 mb-2">
      <button onClick={() => previous()} type="button" aria-label="Previous Slide">
        <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary m-auto" />
      </button>
      <button onClick={() => next()} type="button" aria-label="Next Slide">
        <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary m-auto" />
      </button>
    </div>
  );
};

const CarouselComponent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['blogData'],
    queryFn: async () => {
      const res = await axios.get(`/api/blog`);
      return res;
    },
  });
  const blogData = data?.data?.data;
  return isLoading ? (
    <SkeletonCard />
  ) : (
    <Carousel arrows={false} customButtonGroup={<ButtonGroup />} responsive={responsive} className="pb-14 md:pl-[110px] pl-2 py-6 z-0">
      {blogData?.map((item) => (
        // eslint-disable-next-line no-underscore-dangle
        <Card key={item?._id} blogImage={item?.image} blogTitle={item?.title} blogAuthor={item?.postedBy} />
      ))}
    </Carousel>
  );
};

const MyCarousel = () => {
  return (
    <>
      <span className="flex justify-center items-center md:mt-[56px] mt-4">
        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black  ">Latest From Blogs</h1>
      </span>
      <CarouselComponent />
    </>
  );
};

export default MyCarousel;
