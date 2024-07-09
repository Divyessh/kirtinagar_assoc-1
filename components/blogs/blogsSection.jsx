/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./blogsCards";
import SkeletonCard from "./skeletonCard";

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
    <div className="right-0 bottom-0 left-0 absolute flex justify-center gap-5 mb-2 carousel-button-group">
      <button
        onClick={() => previous()}
        type="button"
        aria-label="Previous Slide"
      >
        <MdArrowBackIos className="bg-primary shadow-md m-auto p-3 rounded-full text-4xl text-black" />
      </button>
      <button onClick={() => next()} type="button" aria-label="Next Slide">
        <MdArrowForwardIos className="bg-primary shadow-md m-auto p-3 rounded-full text-4xl text-black" />
      </button>
    </div>
  );
};

const CarouselComponent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["blogData"],
    queryFn: async () => {
      const res = await axios.get(`/api/blog`);
      return res;
    },
  });
  const blogData = data?.data?.data;
  return isLoading ? (
    <SkeletonCard />
  ) : (
    <Carousel
      arrows={false}
      customButtonGroup={<ButtonGroup />}
      responsive={responsive}
      className="z-0 py-6 pb-14 px-2 md:px-[110px]"
    >
      {blogData?.map((item) => (
        // eslint-disable-next-line no-underscore-dangle
        <Card
          key={item?._id}
          id={item?._id}
          blogImage={item?.image}
          blogTitle={item?.title}
          blogAuthor={item?.postedBy}
        />
      ))}
    </Carousel>
  );
};

const MyCarousel = () => {
  return (
    <>
      <span className="flex justify-center items-center mt-4 md:mt-[56px]">
        <h1 className="border-b-2 border-b-black text-black text-center text-xl md:text-4xl">
          Latest From Blogs
        </h1>
      </span>
      <CarouselComponent />
    </>
  );
};

export default MyCarousel;
