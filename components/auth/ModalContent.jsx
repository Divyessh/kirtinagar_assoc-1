import React from 'react';
import Image from 'next/image';
import signmodalBg from '../../assets/jpeg/signmodalBg.jpeg';

const ModalContent = ({ btnName, modalContent, setisLoginModal, setisForgotPassword }) => {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-[23px] col-span-11 md:col-span-4 py-10 md:p-0"
      style={{
        background: 'linear-gradient(180deg, rgba(57, 28, 8, 0.73) 0%, rgba(69, 33, 7, 0.56) 100%)',
      }}
    >
      <Image alt="image" src={signmodalBg} className="top-0 left-0 -z-[1] absolute w-[100%] h-[100%]" />
      <h1 className="font-extrabold text-[#FAFAFA] text-[17px]">{modalContent}</h1>
      <button
        type="button"
        onClick={() => {
          setisLoginModal((prev) => !prev);
          setisForgotPassword(false);
        }}
        className="bg-[#FBBC05] px-[33px] py-[8px] rounded-[4px] font-[500] text-[#00000080] text-[17px] cursor-pointer"
      >
        {btnName}
      </button>
    </div>
  );
};

export default ModalContent;
