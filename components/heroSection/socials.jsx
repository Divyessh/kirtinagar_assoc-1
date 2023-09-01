import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="absolute -left-[12px] top-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-5">
        <FaFacebookF className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
        <FaWhatsapp className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
        <FaInstagram className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
        <FaTwitter className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
      </div>
    </div>
  );
};

export default Socials;
