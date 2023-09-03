import React from 'react';
import CategoryDropdown from './categoryDropdown';
import Socials from './socials';
import BgCarousel from './bgCarousel';

const SearchSection = () => {
  return (
    <div className="col-span-6 pb-[1px] rounded-[10px] h-[600px] px-[9px] flex items-end relative">
      <BgCarousel />
      <CategoryDropdown />
      <Socials />
    </div>
  );
};

export default SearchSection;
