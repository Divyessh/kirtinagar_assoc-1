import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="absolute -left-[12px] top-1/2 -translate-y-1/2 z-16">
      <div className="flex flex-col gap-5">
        <Link href="https://www.kirtinagarwood.in/">
          <FaFacebookF className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
        </Link>
        <Link href="https://whatsapp.com/channel/0029VaM9LaBBKfi4swlQSA3P" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
        </Link>
        <Link href="https://www.instagram.com/kirtinagarwhs?igsh=MWkyZjgyMHJoMGlyaQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
        </Link>
        <Link href="https://twitter.com/kirtinagarwhs?t=ewJp3rEQgCPEi-vPRPF3Mg&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl text-[#F9E9E9] bg-[#413833] cursor-pointer py-[5px]" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
