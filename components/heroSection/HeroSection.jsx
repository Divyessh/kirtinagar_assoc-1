import React from 'react';
import Image from 'next/image';
import SearchSection from './SearchSection';
import EventSection from './EventSection';
import doodleBg from '../../assets/png/doodleBg.png';

const HeroSection = () => {
  return (
    <div className="grid grid-rows-[600px,1fr] gap-4 h-[100%] md:h-screen md:grid-cols-8 pt-[30px] px-[22px] mb-3">
      <Image
        src={doodleBg}
        alt="image"
        width="100%"
        height="100%"
        placeholder="empty"
        priority
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          height: '100vh',
          objectFit: 'cover',
        }}
      />
      <SearchSection />
      <EventSection />
    </div>
  );
};

export default HeroSection;
