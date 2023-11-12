import React from 'react';
import SearchSection from './SearchSection';
import EventSection from './EventSection';

const HeroSection = () => {
  return (
    <div className="grid grid-rows-[500px, 1fr] md:grid-rows-[600px,1fr] gap-[13px] h-full md:min-h-screen md:grid-cols-8 pt-[30px] px-[22px]">
      <SearchSection />
      <EventSection />
    </div>
  );
};

export default HeroSection;
