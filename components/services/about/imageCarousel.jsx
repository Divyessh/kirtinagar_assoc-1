'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import useEmblaCarousel from 'embla-carousel-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from 'embla-carousel-autoplay';
// eslint-disable-next-line import/no-extraneous-dependencies

const ImageCarousel = ({ imageArray }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 0,
      autoplay: {
        delay: 800, // Set the autoplay speed to 2 seconds (2000 milliseconds)
        stopOnInteraction: true, // Stop autoplay on user interaction (optional)
      },
    },
    [Autoplay()],
  );
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="col-span-7 md:rounded-[2px] embla">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="relative embla__container">
          {imageArray.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="image"
              height="auto"
              placeholder="blur"
              loading="lazy"
              style={{
                borderRadius: '2px',
                zIndex: 20,
                objectFit: 'cover',
                width: '100%',
              }}
              className="embla__slide"
            />
          ))}
        </div>
        <button
          type="button"
          className="embla__prev absolute top-1/2 left-[3%] -translate-y-1/2 w-fit rounded-full p-[3px] bg-[#F5F5F5]"
          onClick={scrollPrev}
        >
          <BsChevronLeft className="font-[600] text-[1rem] md:text-[2rem]" />
        </button>
        <button
          type="button"
          className="embla__next absolute top-1/2 right-[3%] -translate-y-1/2 w-fit rounded-full p-[3px] bg-[#F5F5F5]"
          onClick={scrollNext}
        >
          <BsChevronRight className="font-[600] text-[1rem] md:text-[2rem]" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
