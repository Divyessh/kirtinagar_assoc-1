import React from 'react';
import Image from 'next/image';
import eventBanner from '../../assets/png/eventBanner.png';

const EventSection = () => {
  return (
    <div className="col-span-6 md:col-span-2 w-full bg-[#E5DFCF] h-full rounded-[10px] py-[23px] px-[26px]">
      <h1 className="text-[21px] font-bold text-[#413833]">Events and Blogs</h1>
      <Image alt="image" src={eventBanner} width="100%" height="100%" placeholder="blur" priority />
    </div>
  );
};

export default EventSection;
