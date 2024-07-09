import React from "react";
import SearchSection from "./SearchSection";
import EventSection from "./EventSection";

const HeroSection = () => {
  return (
    <div className="grid gap-[13px] h-full md:grid-cols-8 pt-[30px] px-[22px]">
      <SearchSection />
      <EventSection />
    </div>
  );
};

export default HeroSection;
