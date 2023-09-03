'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useEmblaCarousel from 'embla-carousel-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import heroBanner from '../../assets/png/heroBanner.png';

const BgCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="absolute rounded-[10px] top-0 left-0 z-1 w-[100%] h-[600px] embla" ref={emblaRef}>
      <div className="relative embla__container">
        <Image
          src={heroBanner}
          alt="image"
          height="100%"
          placeholder="blur"
          priority
          style={{
            position: 'absolute',
            borderRadius: '10px',
            top: 0,
            left: 0,
            zIndex: 1,
            height: '600px',
            objectFit: 'cover',
            width: '100%',
          }}
          className="embla__slide"
        />
        <Image
          className="embla__slide"
          src={heroBanner}
          alt="image"
          height="100%"
          placeholder="blur"
          priority
          style={{
            position: 'absolute',
            borderRadius: '10px',
            top: 0,
            left: 0,
            zIndex: 1,
            height: '600px',
            objectFit: 'cover',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default BgCarousel;
