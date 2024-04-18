import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Heading from './heading';
import ImageCarousel from './imageCarousel';

const GalleryContent = ({ id }) => {
  const { data } = useQuery({
    queryKey: ['Provider', id],
    queryFn: async () => {
      const res = await axios.get(`/api/provider/${id}`);
      return res?.data?.data;
    },
  });
  const providerData = data;
  // console.log(providerData?.shopgallery);
  return (
    <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <Heading title="Gallery" />
      <div className="relative grid grid-cols-7 rounded-[2px] h-[auto] max-h-[500px] overflow-hidden">
        <ImageCarousel imageArray={providerData?.shopgallery} />
        <Link
          href={`/services/${id}/gallery`}
          className="bottom-1 left-1/2 absolute bg-[#626262] px-[6px] md:px-[16px] py-[2px] rounded-sm md:rounded-[11px] font-[700] text-[#D9D9D9] text-[13px] md:text-[25px] -translate-x-1/2"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default GalleryContent;
