import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import CardImg from '../assets/png/cardimg.png';
import Featured from '../assets/svg/featured.svg';

const Card = () => (
  <div className="card w-96 bg-base-100 shadow-xl ">
    <figure>
      <Image
        src={Featured}
        alt="Featured"
        className="absolute left-0 top-[46px]"
      />
      <Image src={CardImg} alt="Card" />
    </figure>
    <div className="bg-primary text-black text-center">
      <span className=" card-title font-bold text-2xl ">
        WOODMAN FURNITURE INDIA PVT. LTD.
      </span>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
  </div>
);

export default Card;
