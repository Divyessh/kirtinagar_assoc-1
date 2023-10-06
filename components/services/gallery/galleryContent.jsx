import React from 'react';
import Image from 'next/image';
import aboutService from '../../../assets/png/aboutService.png';

const GalleryContent = () => {
  const imageArray = [
    {
      src: aboutService,
      id: 1,
    },
    {
      src: aboutService,
      id: 2,
    },
    {
      src: aboutService,
      id: 3,
    },
    {
      src: aboutService,
      id: 4,
    },
    {
      src: aboutService,
      id: 5,
    },
  ];
  return (
    <div className="flex items-center gap-10 flex-wrap justify-center" style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <div className="w-full flex items-center gap-10 flex-wrap ml-[10px]">
        {imageArray.map((image) => (
          <Image
            key={image?.id}
            alt="gallery"
            placeholder="blur"
            loading="lazy"
            className="w-[100%] md:w-[48%]"
            style={{ objectFit: 'cover' }}
            src={image?.src}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryContent;
