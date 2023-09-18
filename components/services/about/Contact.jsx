import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill, BsChevronDown } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { AiFillFile, AiFillClockCircle } from 'react-icons/ai';
import Heading from './heading';

const Contact = () => {
  // Not mapping cuz contact will not be in array format
  return (
    <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <Heading title="Contact" />
      <div className="grid grid-cols-5 md:grid-cols-12 gap-[80px] mt-[40px]">
        <div className="col-span-3 md:col-span-8 flex flex-col gap-[15px] md:gap-[30px]">
          <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
            <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
              <MdLocationOn />
            </div>
            <div className="w-[95%]">
              <h1 className="w-[100%] text-black text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px]">
                123, sample address lines, block random, sab kirti nagar mein
              </h1>
              <h1 className="w-[80%] text-[13px] text-black md:text-[28px] font-[700] leading-[15px] md:leading-[40px]">
                GST No. 1234567890ABCD
              </h1>
            </div>
          </div>
          <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
            <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
              <BsFillTelephoneFill className="text-black" />
            </div>
            <div className="w-[95%]">
              <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px]">1234567890</h1>
            </div>
          </div>
          <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
            <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
              <GiEarthAfricaEurope className="text-black" />
            </div>
            <div className="w-[95%]">
              <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-black">
                www.kirtinagar.com
              </h1>
            </div>
          </div>
          <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
            <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
              <FaEnvelope className="text-black" />
            </div>
            <div className="w-[95%]">
              <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-black">
                Request a quote
              </h1>
            </div>
          </div>
          <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
            <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
              <AiFillFile className="text-black" />
            </div>
            <div className="w-[95%]">
              <h1 className="w-[100%] text-[13px] text-black md:text-[28px] font-[700] leading-[15px] md:leading-[40px]">
                kirtinagar@gmail.com
              </h1>
            </div>
          </div>
          <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
            <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
              <AiFillClockCircle className="text-black" />
            </div>
            <div className="w-[95%]">
              <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-black">Timings</h1>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-4 text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-center">
          <h1 className="text-black">LOCATION</h1>
        </div>
      </div>
      <div className="text-center flex items-center justify-center gap-2">
        <h1 className="font-[600] text-[15px] md:text-[23px] text-black">9 AM - 9 PM</h1>
        <button type="button" className=" w-fit rounded-full p-[3px] bg-[#382F2A]">
          <BsChevronDown className="font-[600] text-[8px] text-white md:text-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
