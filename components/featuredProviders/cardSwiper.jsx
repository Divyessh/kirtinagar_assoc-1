'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import CardImg from '../assets/png/cardimg.png';
import Featured from '../assets/svg/featured.svg';

const CardslideShow = () => (
  <Swiper
    spaceBetween={30}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    Pagination
    scrollbar={{ draggable: true }}
    modules={[Autoplay, Pagination, Navigation]}
    className=""
  >
    <SwiperSlide className="">
      <Image src={Featured} alt="image" className="absolute top-12 left-0 " />
      <Image src={CardImg} alt="image" />
    </SwiperSlide>
    <SwiperSlide className="">
      <Image src={Featured} alt="image" className="absolute top-12 left-0 " />
      <Image src={CardImg} alt="image" />
    </SwiperSlide>
    <SwiperSlide className="">
      <Image src={Featured} alt="image" className="absolute top-12 left-0 " />
      <Image src={CardImg} alt="image" />
    </SwiperSlide>
    <SwiperSlide className="">
      <Image src={Featured} alt="image" className="absolute top-12 left-0 " />
      <Image src={CardImg} alt="image" />
    </SwiperSlide>
  </Swiper>
);

export default CardslideShow;
