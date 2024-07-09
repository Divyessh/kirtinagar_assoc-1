"use client";

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import useEmblaCarousel from "embla-carousel-react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import heroBanner from "../../assets/png/Frame 1 (1).png";
import heroBanner2 from "../../assets/png/Banner 2 (1).png";
import heroBanner3 from "../../assets/png/Frame 3 (1).png";

const BgCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 0,
      autoplay: {
        delay: 800, // Set the autoplay speed to 2 seconds (2000 milliseconds)
      },
    },
    [Autoplay()]
  );
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
  ];
  return (
    <div
      className="absolute rounded-[10px] top-0 left-0 z-12 w-[100%] embla"
      ref={emblaRef}
    >
      <div className="relative embla__container">
        {imageArray.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt="image"
            height="100%"
            placeholder="blur"
            loading="lazy"
            style={{
              borderRadius: "10px 10px 0 0",
              zIndex: 20,
              objectFit: "contain",
              maxHeight: "60vh",
            }}
            className="embla__slide h-[35vh] md:h-[60vh]"
          />
        ))}
      </div>
    </div>
  );
};

export default BgCarousel;
