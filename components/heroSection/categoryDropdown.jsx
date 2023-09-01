import React from 'react';
import Image from 'next/image';
import { BiSearchAlt } from 'react-icons/bi';
import dropdownIcon from '../../assets/svg/dropdownIcon.svg';

const CategoryDropdown = () => {
  return (
    <form className="w-full">
      <div
        className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:place-items-center md:place-items-stretch md:gap-6 w-full bg-[#E5DFCF] py-[10px] md:py-[30px] px-[5px] md:px-[24px]"
        style={{ boxShadow: '6px 9px 12px 0px #00000040' }}
      >
        <div className="bg-white py-[12px] px-[18px] col-span-1 md:col-span-2 rounded-[10px] flex items-center">
          <input className="outline-none w-full" placeholder="Keyword" type="text" />
        </div>
        <div className="bg-white py-[12px] px-[18px] col-span-1 md:col-span-2 rounded-[10px] relative flex items-center">
          <input placeholder="Category" type="text" className="w-full outline-none pr-4" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            <Image alt="image" src={dropdownIcon} />
          </span>
        </div>
        <button
          type="submit"
          className="col-span-2 md:col-span-1 text-white p-[11px] bg-[#413833] rounded-[10px] flex items-center justify-center gap-1 2xl:gap-3"
        >
          <BiSearchAlt className="text-xl" /> Submit Now
        </button>
      </div>
    </form>
  );
};

export default CategoryDropdown;
