'use client';

import React from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import { BiSearchAlt } from 'react-icons/bi';
import dropdownIcon from '../../assets/svg/dropdownIcon.svg';

const CategoryDropdown = () => {
  const keyword = ['Sofa', 'Plywood', 'Wardrobe', 'Table', 'Diwaan', 'Dinning tables'];
  const category = [
    'Doors and windows',
    'Furniture | Furnishing | Mattress & Pillows',
    'Interior accessories',
    'Paints Hardware Fittings',
    'Timber | Plywood',
    'Laminates | Veneers | MDF',
  ];
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };
  const keywordValue = watch('keyword', '');
  const [categoryItem, showCategoryItem] = React.useState(false);
  return (
    <form className="w-full z-10" onSubmit={handleSubmit(onSubmit)}>
      <div
        className="grid grid-cols-2 md:grid-cols-5 gap-3 place-items-center md:place-items-stretch md:gap-6 w-full bg-[#E5DFCF] py-[10px] md:py-[30px] px-[5px] md:px-[24px]"
        style={{ boxShadow: '6px 9px 12px 0px #00000040' }}
      >
        <div className="bg-white py-[8px] md:py-[12px] px-[18px] col-span-1 md:col-span-2 rounded-[10px] flex items-center relative">
          <input
            className="outline-none w-full"
            placeholder="Keyword"
            type="text"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('keyword', { required: true, maxLength: 20 })}
          />
          <div>
            {keywordValue.length > 0 && (
              <div className="absolute top-full left-0 w-full h-[150px] md:h-[200px] overflow-y-scroll bg-white rounded-[10px] rounded-tl-none rounded-tr-none py-[10px] shadow-md">
                {keyword.map((item) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                  <p
                    key={item}
                    className="py-[5px] text-[10px] md:text-[16px] px-[18px] cursor-pointer hover:bg-[#413833] hover:text-white"
                    onClick={() => setValue('keyword', item)}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-white py-[8px] md:py-[12px] px-[18px] col-span-1 md:col-span-2 rounded-[10px] relative flex items-center">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input placeholder="Category" type="text" className="w-full outline-none pr-4" {...register('category', { required: true })} />
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => showCategoryItem((prev) => !prev)}>
            <Image alt="image" src={dropdownIcon} />
          </span>
          <div>
            {category.length > 0 && categoryItem && (
              <div className="absolute top-full left-0 w-full h-[150px] md:h-[200px] overflow-y-scroll bg-white rounded-[10px] rounded-tl-none rounded-tr-none py-[10px] shadow-md">
                {category.map((item) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                  <p
                    key={item}
                    className="py-[5px] text-[10px] md:text-[16px] px-[18px] cursor-pointer hover:bg-[#413833] hover:text-white"
                    onClick={() => {
                      setValue('category', item);
                      showCategoryItem(false);
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="col-span-2 md:col-span-1 text-white p-[8px] md:p-[11px] bg-[#413833] rounded-[10px] flex items-center justify-center gap-1 2xl:gap-3 w-fit md:w-full"
        >
          <BiSearchAlt className="text-xl" /> Submit Now
        </button>
      </div>
    </form>
  );
};

export default CategoryDropdown;
