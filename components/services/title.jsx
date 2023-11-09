'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import shareIcon from '../../assets/png/shareIcon.png';
import { useGetProvidersByIdQuery } from '../../redux/api/apiSlice';

const Title = ({ id }) => {
  const { data } = useGetProvidersByIdQuery(id);
  const providerData = data?.data;
  return (
    <div className="text-center">
      <h1 className="font-[700] text-[18px] text-black leading-[20px] md:text-[50px] md:leading-[75px]">{providerData?.nameOftheFirm}</h1>
      <p className="font-[300] text-[15px] md:text-[23px] text-[#302f2f]">New Delhi, India</p>
      <Link href="/services" className="text-center flex justify-center items-center mt-[15px] mb-[20px]">
        <div
          className="flex justify-center items-center gap-[12px] rounded-[12px] md:rounded-[20px] px-[12px] md:px-[25px] py-[7px] md:py-[10px] bg-[#FF9800] w-fit"
          style={{ boxShadow: '6px 4px 4px 0px #00000040' }}
        >
          <h1 className="font-[400] text-[14px] md:text-[20px] text-black">VISIT WEBSITE</h1>
          <Image alt="icons" src={shareIcon} width={20} height={20} />
        </div>
      </Link>
    </div>
  );
};

export default Title;
