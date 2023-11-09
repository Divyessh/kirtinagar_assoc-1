import React from 'react';
import Link from 'next/link';
import Heading from './heading';
import ImageCarousel from './imageCarousel';

const GalleryContent = ({ id }) => {
  return (
    <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <Heading title="Gallery" />
      <div className="grid grid-cols-7 h-[auto] max-h-[500px] rounded-[2px] overflow-hidden relative">
        <ImageCarousel id={id} />
        <Link
          href={`/services/${id}/gallery`}
          className="bg-[#626262]  rounded-sm md:rounded-[11px] px-[6px] md:px-[16px] py-[2px] text-[13px] md:text-[25px] font-[700] text-[#D9D9D9] absolute bottom-1 left-1/2 -translate-x-1/2"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default GalleryContent;
