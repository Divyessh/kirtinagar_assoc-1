import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import Featured from '../../assets/svg/featured.svg';
import services from '../../assets/svg/services.svg';
import quote from '../../assets/svg/quote.svg';
import line from '../../assets/svg/line.svg';
import CardslideShow from './cardSwiper';

const Card = ({ item }) => (
  <div
    className="card  w-[300px] md:w-[350px]  bg-[#E5DFCF] shadow-2xl rounded-xl flex md:justify-center md:items-center"
    style={{ border: 'none', padding: 0 }}
  >
    <CardslideShow gallery={item?.shopgallery} />
    <Image src={Featured} alt="image" className="absolute md:top-6 left-0 top-[80px] w-[80px] md:w-1/4 md:h-1/4" />
    <span className="absolute top-0 flex justify-between border-b-2 border-[#D9D9D9] w-full md:px-16 px-6  items-center">
      <div className="hover:cursor-pointer tooltip " data-tip="Services">
        <Image src={services} alt="image" className="pt-1 " />
      </div>
      <div className="bg-[#E5DFCF]">
        <Image src={line} alt="image" />
      </div>
      <div className="hover:cursor-pointer tooltip " data-tip="Request a Quote">
        <Image src={quote} alt="image" className="pt-1 " />
      </div>
    </span>
    <div className="bg-[#E5DFCF] text-black text-center p-4 rounded-b-xl shadow-2xl w-full">
      <span className=" font-bold md:text-2xl ">{item?.nameOftheFirm || 'WOODMAN FURNITURE INDIA PVT. LTD.'}</span>
      <p>{item?.address || 'New Delhi,India'}</p>
    </div>
  </div>
);

export default Card;
