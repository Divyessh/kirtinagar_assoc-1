"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from "embla-carousel-autoplay";
import placeholder from "../../../assets/avif/placeholder.webp";
// eslint-disable-next-line import/no-extraneous-dependencies

const ImageCarousel = ({ imageArray, fixheight }) => {
  const filteredImages = imageArray?.filter((image) => image !== null) || [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 0,
      autoplay: {
        delay: 800, // Set the autoplay speed to 2 seconds (2000 milliseconds)
      },
      dots: true, // Show dots at the bottom
    },
    [Autoplay()]
  );
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="col-span-7 md:rounded-[2px] embla">
      <div className="relative embla__viewport" ref={emblaRef}>
        <div className="relative embla__container">
          {filteredImages?.length > 0
            ? filteredImages.map((image, i) => (
                <Image
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  src={image}
                  alt="image"
                  width={1000}
                  height={1000}
                  placeholder="empty"
                  loading="lazy"
                  style={{
                    borderRadius: "2px",
                    zIndex: 20,
                    objectFit: "contain",
                    // width: '100%',
                    maxHeight: "50vh",
                  }}
                  className={`embla__slide`}
                />
              ))
            : [1, 2].map((i) => (
                <Image
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  src={placeholder}
                  alt="image"
                  width={1000}
                  height={1000}
                  placeholder="empty"
                  loading="lazy"
                  style={{
                    borderRadius: "2px",
                    zIndex: 20,
                    objectFit: "contain",
                    // width: "100%",
                    // height: fixheight && "300px",
                    maxHeight: "50vh",
                  }}
                  className="relative "
                />
              ))}
        </div>
        <button
          type="button"
          className="top-1/2 left-[3%] absolute bg-[#F5F5F5] p-[3px] rounded-full w-fit -translate-y-1/2 embla__prev"
          onClick={scrollPrev}
          aria-label="Prev Scroll"
        >
          <BsChevronLeft className="font-[600] text-[1rem] text-black md:text-[2rem]" />
        </button>
        <button
          type="button"
          className="top-1/2 right-[3%] absolute bg-[#F5F5F5] p-[3px] rounded-full w-fit -translate-y-1/2 embla__next"
          onClick={scrollNext}
          aria-label="Next Scroll"
        >
          <BsChevronRight className="font-[600] text-[1rem] text-black md:text-[2rem]" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
