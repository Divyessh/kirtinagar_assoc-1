import React from 'react';
import { AiFillSetting, AiFillFile } from 'react-icons/ai';
import ImageCarousel from './imageCarousel';
import aboutService from '../../../assets/png/aboutService.png';

const AboutContent = () => {
  const imageArray = [
    {
      src: aboutService,
      id: 1,
    },
    {
      src: aboutService,
      id: 2,
    },
    {
      src: aboutService,
      id: 3,
    },
    {
      src: aboutService,
      id: 4,
    },
    {
      src: aboutService,
      id: 5,
    },
  ];
  return (
    <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <div className="grid grid-cols-8 gap-2 md:gap-6 h-[auto]">
        <ImageCarousel imageArray={imageArray} />
        <div className="col-span-1 flex flex-col">
          <div
            className="h-[50%] flex items-center justify-center rounded-t-[3px] bg-[#F9F8F2] border-[#FF9800]"
            style={{ borderWidth: 1 }}
          >
            <AiFillSetting className="text-[#3D2502] text-[20px] md:text-[50px]" />
          </div>
          <div
            className="h-[50%] flex items-center justify-center rounded-b-[3px] bg-[#F9F8F2] border-[#FF9800]"
            style={{ borderWidth: 1 }}
          >
            <AiFillFile className="text-[#3D2502] text-[20px] md:text-[50px]" />
          </div>
        </div>
      </div>
      <h1 className="font-[700] text-[13px] md:text-[28px] mt-[5px] text-black">Naveen goyal</h1>
      <p className="font-[700] text-[13px] md:text-[28px] w-[80%] md:w-[60%] text-black">
        123, sample address lines, block random, sab kirti nagar mein GST No. 1234567890ABCD
      </p>
      <button
        type="button"
        className="text-black rounded-[8px] mt-[13px] flex items-center gap-2 py-[3px] px-[10px] w-fit bg-[#FF9800] font-[700] text-[15px] md:text-[30px]"
      >
        <AiFillFile /> Request a quote
      </button>
    </div>
  );
};

export default AboutContent;
