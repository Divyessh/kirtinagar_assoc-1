'use client';

import React, { useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useEmblaCarousel from 'embla-carousel-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import placeholder from '../../assets/avif/placeholder.webp';

const BgCarousel = ({ gallery, feature }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 0,
      autoplay: {
        delay: 800, // Set the autoplay speed to 2 seconds (2000 milliseconds)
        // stopOnInteraction: true, // Stop autoplay on user interaction (optional)
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
      src: placeholder,
      id: 1,
    },
  ];
  return (
    <div className=" embla" ref={emblaRef}>
      <div className="relative h-[80%] embla__container">
        {gallery?.length > 0 && gallery[0] !== null
          ? gallery.map((image, i) => (
              <Image
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                src={image}
                alt="image"
                placeholder="blur"
                blurDataURL="L6E.FODh00_403tS%0r;00?Hb_D$"
                loading="lazy"
                width={419}
                height={392}
                style={{
                  borderRadius: '10px',
                  zIndex: 20,
                  objectFit: 'cover',
                  width: '419px',
                  height: feature ? '280px' : '392px',
                  position: 'relative',
                }}
                className="embla__slide h-[500px] md:h-[600px]"
              />
            ))
          : imageArray.map((image) => (
              <Image
                key={image.id}
                src={image?.src}
                alt="image"
                placeholder="blur"
                blurDataURL="L6E.FODh00_403tS%0r;00?Hb_D$"
                loading="lazy"
                width={419}
                height={392}
                style={{
                  borderRadius: '10px',
                  zIndex: 20,
                  objectFit: 'cover',
                  width: '419px',
                  height: feature ? '280px' : '392px',
                  position: 'relative',
                }}
                className="embla__slide h-[500px] md:h-[600px]"
              />
            ))}
      </div>
      <div className="absolute flex justify-between top-[180px] w-full px-2">
        <button className="embla__prev" onClick={scrollPrev} type="button" aria-label="Prev Image">
          <MdArrowBackIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary backdrop-blur-md " />
        </button>
        <button className="embla__next" onClick={scrollNext} type="button" aria-label="Next Image">
          <MdArrowForwardIos className="text-black text-4xl shadow-md rounded-full p-2 bg-primary backdrop-blur-md" />
        </button>
      </div>
    </div>
  );
};

export default BgCarousel;
