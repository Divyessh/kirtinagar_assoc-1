import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import Featured from '../assets/svg/featured.svg';
import CardImg from '../assets/png/cardimg.png';
import Carousel from './Carousel';
import CardslideShow from './cardSwiper'; 

const Card = () => (
  <div className="card  md:w-[400px] w-[100px] bg-primary shadow-2xl rounded-xl  ">
    <Image src={Featured} alt="image" className="absolute top-12 left-0 " />
    <Image src={CardImg} alt="image" className="rounded-xl" />
    <div className="bg-primary text-black text-center md:p-4">
      <span className=" font-bold md:text-2xl ">WOODMAN FURNITURE INDIA PVT. LTD.</span>
      <p>If a dog chews shoes, whose shoes does he choose?</p>
    </div>
  </div>
);

export default Card;
