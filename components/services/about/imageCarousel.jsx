'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import useEmblaCarousel from 'embla-carousel-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from 'embla-carousel-autoplay';
import { useGetProvidersByIdQuery } from '../../../redux/api/apiSlice';
import SkeletonCard from '../../blogs/skeletonCard';
import placeholder from '../../../assets/avif/placeholder.webp';
// eslint-disable-next-line import/no-extraneous-dependencies

const ImageCarousel = ({ id }) => {
  const { data, isLoading } = useGetProvidersByIdQuery(id);
  const [imageArray, setImageArray] = React.useState([placeholder, placeholder]);
  // console.log(imageArray, data?.data?.shopgallery);
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
  React.useEffect(() => {
    setImageArray(data?.data?.shopgallery);
    // console.log(data?.data?.shopgallery?.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  if (isLoading) return <SkeletonCard />;
  return (
    <div className="col-span-7 md:rounded-[2px] embla">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="relative embla__container">
          {imageArray?.length > 0
            ? imageArray.map((image, i) => (
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
                    borderRadius: '2px',
                    zIndex: 20,
                    objectFit: 'cover',
                    width: '100%',
                    // height: '500px',
                  }}
                  className="embla__slide h-auto md:h-[500px]"
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
                    borderRadius: '2px',
                    zIndex: 20,
                    objectFit: 'cover',
                    width: '100%',
                    // height: '500px',
                  }}
                  className="embla__slide h-auto md:h-[500px]"
                />
              ))}
        </div>
        <button
          type="button"
          className="embla__prev absolute top-1/2 left-[3%] -translate-y-1/2 w-fit rounded-full p-[3px] bg-[#F5F5F5]"
          onClick={scrollPrev}
          aria-label="Prev Scroll"
        >
          <BsChevronLeft className="font-[600] text-black text-[1rem] md:text-[2rem]" />
        </button>
        <button
          type="button"
          className="embla__next absolute top-1/2 right-[3%] -translate-y-1/2 w-fit rounded-full p-[3px] bg-[#F5F5F5]"
          onClick={scrollNext}
          aria-label="Next Scroll"
        >
          <BsChevronRight className="font-[600] text-black text-[1rem] md:text-[2rem]" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
