'use client';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import useEmblaCarousel from 'embla-carousel-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import heroBanner from '../../assets/png/heroBanner.png';
import heroBanner2 from '../../assets/jpeg/heroBanner2.jpeg';
import heroBanner3 from '../../assets/jpeg/heroBanner3.jpeg';
import heroBanner4 from '../../assets/jpeg/heroBanner4.jpeg';
import heroBanner5 from '../../assets/jpeg/heroBanner5.jpeg';

const BgCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, startIndex: 0 }, [Autoplay()]);
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
    <div className="absolute rounded-[10px] top-0 left-0 z-12 w-[100%] h-[500px] md:h-[600px] embla" ref={emblaRef}>
      <div className="relative embla__container">
        {imageArray.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt="image"
            height="100%"
            placeholder="blur"
            priority
            style={{
              borderRadius: '10px',
              zIndex: 20,
              objectFit: 'cover',
              width: '100%',
            }}
            className="embla__slide h-[500px] md:h-[600px]"
          />
        ))}
      </div>
    </div>
  );
};

export default BgCarousel;
