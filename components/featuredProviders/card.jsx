/* eslint-disable no-underscore-dangle */
import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import Link from 'next/link';
import Featured from '../../assets/svg/featured.svg';
import services from '../../assets/svg/services.svg';
import quote from '../../assets/svg/quote.svg';
import line from '../../assets/svg/line.svg';
// import placeholder from '../../assets/avif/placeholder.webp';
import ImageCarousel from '../services/about/imageCarousel';

const Card = ({ item }) => {
  // console.log(item?.shopgallery, 'item');
  return (
    <div
      className="relative flex md:justify-center md:items-center bg-[#E5DFCF] shadow-2xl hover:shadow-primary rounded-xl w-[330px] md:w-[300px] transition-all duration-300 card ease-in-out"
      style={{ border: 'none', padding: 0 }}
    >
      {/* eslint-disable-next-line no-underscore-dangle */}
      {item?.shopgallery === null || item?.shopgallery?.length === 0 || item?.shopgallery[0] === null || item?.shopgallery[0] === '' ? (
        <ImageCarousel imageArray={[]} fixheight={380} />
      ) : (
        <ImageCarousel imageArray={item?.shopgallery} fixheight={380} />
      )}
      {item?.isFeatured === true ? (
        <Image src={Featured} alt="image" className="top-[80px] md:top-6 left-0 absolute w-[80px] md:w-1/4 md:h-1/4" />
      ) : null}

      <span className="top-0 absolute flex justify-between items-center border-[#D9D9D9] px-6 md:px-16 border-b-2 w-full">
        <div className="hover:cursor-pointer tooltip" data-tip="Services">
          <Image src={services} alt="image" className="pt-1" />
        </div>
        <div className="bg-[#E5DFCF]">
          <Image src={line} alt="image" />
        </div>
        <div className="hover:cursor-pointer tooltip" data-tip="Request a Quote">
          <Image src={quote} alt="image" className="pt-1" />
        </div>
      </span>

      <div className="relative bg-[#E5DFCF] shadow-2xl p-4 rounded-b-xl w-full text-black text-center hover:text-secondary transition-all duration-300 ease-in-out">
        <Link href={`/services/${item?._id}/about`}>
          <span className="w-full font-bold md:text-2xl">{item?.nameOftheFirm || 'WOODMAN FURNITURE INDIA PVT. LTD.'}</span>
          <p className="text-wrap">
            {item?.address?.length > 30 ? `${item?.address.substring(0, 30)}...` : item?.address || 'New Delhi, India'}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
