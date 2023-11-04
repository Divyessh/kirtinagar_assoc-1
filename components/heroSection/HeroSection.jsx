import React from 'react';
import Image from 'next/image';
import SearchSection from './SearchSection';
import EventSection from './EventSection';
import doodleBg from '../../assets/png/doodleBg.png';

const HeroSection = () => {
  return (
    <div className="grid grid-rows-[500px, 1fr] md:grid-rows-[600px,1fr] gap-[13px] h-full md:min-h-screen md:grid-cols-8 pt-[30px] px-[22px]">
      <Image
        src={doodleBg}
        alt="banner"
        placeholder="empty"
        height="100%"
        width="2000px"
        priority
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: 'cover',
        }}
      />
      <SearchSection />
      <EventSection />
    </div>
  );
};

export default HeroSection;
