'use client';

import React, { useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useEmblaCarousel from 'embla-carousel-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import heroBanner from '../../assets/png/heroBanner.png';
import heroBanner2 from '../../assets/jpeg/heroBanner2.jpeg';
import heroBanner3 from '../../assets/jpeg/heroBanner3.jpeg';
import heroBanner4 from '../../assets/jpeg/heroBanner4.jpeg';
import heroBanner5 from '../../assets/jpeg/heroBanner5.jpeg';

const BgCarousel = () => {
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
  const imageArray = [
    {
      src: heroBanner,
      id: 1,
    },
    {
      src: heroBanner2,
      id: 2,
    },
    {
      src: heroBanner3,
      id: 3,
    },
    {
      src: heroBanner4,
      id: 4,
    },
    {
      src: heroBanner5,
      id: 5,
    },
  ];
  return (
    <div className=" embla" ref={emblaRef}>
      <div className="relative h-[80%] embla__container">
        {imageArray.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt="image"
            placeholder="blur"
            loading="lazy"
            style={{
              borderRadius: '10px',
              zIndex: 20,
              objectFit: 'cover',
              width: '419px',
              height: '392px',
              position: 'relative',
            }}
            className="embla__slide h-[500px] md:h-[600px]"
          />
        ))}
      </div>
      <div className="absolute flex justify-between top-[180px] w-full px-2">
        <button className="embla__prev" onClick={scrollPrev} type="button">
          <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary backdrop-blur-md " />
        </button>
        <button className="embla__next" onClick={scrollNext} type="button">
          <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary backdrop-blur-md" />
        </button>
      </div>
    </div>
  );
};

export default BgCarousel;
