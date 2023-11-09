'use client';

import React from 'react';
import Image from 'next/image';
import { BiError } from 'react-icons/bi';
import { useGetProvidersByIdQuery } from '../../../redux/api/apiSlice';
import SkeletonCard from '../../blogs/skeletonCard';

const GalleryContent = ({ id }) => {
  const { data, isLoading } = useGetProvidersByIdQuery(id);
  const imageArray = data?.data?.shopgallery;

  if (isLoading) return <SkeletonCard />;
  return (
    <div className="flex items-center gap-10 flex-wrap justify-center" style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <div className="w-full flex items-center gap-10 flex-wrap ml-[10px]">
        {imageArray?.length === 0 ? (
          <div className="w-full flex items-center justify-center">
            <h1 className="bg-[#ff2600] flex items-center justify-center gap-2 text-black p-2 rounded-lg">
              <BiError /> No Image in Gallery
            </h1>
          </div>
        ) : (
          imageArray?.map((image) => (
            <Image
              key={image?.id}
              alt="gallery"
              placeholder="empty"
              width={300}
              height={300}
              loading="lazy"
              className="w-[100%] md:w-[48%] rounded-[8px]"
              style={{ objectFit: 'cover', height: '300px' }}
              src={image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GalleryContent;
