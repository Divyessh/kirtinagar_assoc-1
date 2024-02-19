import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Card from './blogsCards'; // Assuming Card component is in the same directory

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
      <button onClick={() => previous()} type="button" aria-label="Previous Slide">
        <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
      <button onClick={() => next()} type="button" aria-label="Next Slide">
        <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-3 bg-primary" />
      </button>
    </div>
  );
};

const MyCarousel = () => {
  const blogData = [
    { id: 'C0QuQdbPTax', title: 'C0QuQdbPTax' },
    { id: 'Cv6waBHN4Et', title: 'Cv6waBHN4Et' },
    { id: 'Cl8c86bveE5', title: 'Cl8c86bveE5' },
  ];

  return (
    <>
      <span className="flex justify-center items-center">
        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Latest From Blogs</h1>
      </span>
      <Carousel
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        className="flex justify-center items-center md:pl-14 pl-2 py-6"
      >
        {blogData.map((item) => (
          <Card key={item.id} blogTitle={item.id} />
        ))}
      </Carousel>
    </>
  );
};

export default MyCarousel;
