import React from 'react';
import Image from 'next/image';
import CategoryDropdown from './categoryDropdown';
import Socials from './socials';
import heroBanner from '../../assets/png/heroBanner.png';

const SearchSection = () => {
  return (
    <div className="col-span-6 pb-[1px] rounded-[10px] h-[600px] px-[9px] flex items-end relative">
      <Image
        src={heroBanner}
        alt="image"
        width="100%"
        height="100%"
        placeholder="blur"
        priority
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, height: '600px', objectFit: 'cover' }}
      />
      <CategoryDropdown />
      <Socials />
    </div>
  );
};

export default SearchSection;
