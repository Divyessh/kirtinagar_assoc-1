import React from 'react';
import Image from 'next/image';
import signmodalBg from '../../assets/jpeg/signmodalBg.jpeg';

const ModalContent = () => {
  return (
    <div
      className="col-span-5 relative flex items-center justify-center flex-col gap-[23px]"
      style={{
        background: 'linear-gradient(180deg, rgba(57, 28, 8, 0.73) 0%, rgba(69, 33, 7, 0.56) 100%)',
      }}
    >
      <Image alt="image" src={signmodalBg} className="absolute top-0 left-0 w-[100%] h-[100%] -z-[1] " />
      <h1 className="font-extrabold text-[17px] text-[#FAFAFA]">New here?</h1>
      <button
        type="button"
        className="font-[500] text-[#00000080] text-[17px] py-[8px] px-[33px] bg-[#FBBC05] rounded-[4px] cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  );
};

export default ModalContent;
