import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import members from '../assets/svg/Group 41members.svg';
import welfare from '../assets/svg/Group 42.svg';
import business from '../assets/svg/Group 43.svg';
import location from '../assets/svg/location.svg';

const Footer = () => {
  const data = [
    {
      id: 1,
      title: 'Members Directory',
      subtitle: 'This section provides information about individuals or entities in our directory. Find the right Taskers for your job based on their skills and expertise.',
      icon: members,
    },
    {
      id: 2,
      title: 'Members Welfare',
      subtitle: 'Explore the well-being of our members. Learn about programs and initiatives designed to support the welfare of our community.',
      icon: welfare,
    },
    {
      id: 3,
      title: 'Members Business',
      subtitle: 'Discover businesses associated with our members. Find the right services or products offered by businesses within our community.',
      icon: business,
    },
  ];

  return (
    <div className="bg-[#413833] ">
      <h1 className="text-white text-4xl font-bold text-center py-2 border-b-1 tracking-4">New Timber Market Dealer</h1>
      <div className="md:flex ">
        {data.map((item) => (
          <div className="card p-8 text-white" key={item.id}>
            <div className="flex items-center justify-center">
              <span className="flex items-center justify-center bg-stone-200 w-[94px] h-[92px] rounded-full">
                <Image src={item.icon} alt="members" className="object-cover" />
              </span>
            </div>
            <div className="card-body flex-col justify-center items-center">
              <h1 className="text-xl text-white">{item.title}</h1>
              <p className="text-md text-[#DDC5C5] text-center px-8">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex flex-2 justify-evenly text-center items-center border-b-2 border-white space-y-2">
        <div>
          <span className="text-xl uppercase text-white text-center">Service Provider</span>
          <ul className="text-[#DDC5C5] text-center text-lg ">
            <li>
              <Link className="hover:border-b-2 hover:text-white " href="/">
                Branding
              </Link>
            </li>
            <li>
              <Link className="hover:border-b-2 hover:text-white" href="/">
                Design
              </Link>
            </li>
            <li>
              <Link className="hover:border-b-2 hover:text-white" href="/">
                Marketing
              </Link>
            </li>
            <li>
              <Link className="hover:border-b-2 hover:text-white" href="/">
                Advertisement
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-xl text-white">USEFUL LINKS</span>
          <ul className="text-[#DDC5C5] text-lg  text-center">
            <li>
              <Link className="hover:border-b-2 hover:text-white" href="/">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:border-b-2 hover:text-white" href="/">
                Member Section
              </Link>
            </li>
            <li>
              <Link className="hover:border-b-2 hover:text-white" href="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl text-center uppercase text-white ">Location</h1>
          <Image src={location} alt="members" className="object-cover p-3 w-full flex justify-center items-center" />
        </div>
        <div className="space-y-3 text-white">
          <span className="text-xl text-center uppercase">SHOP LISTING</span>
          <h1 className="text-2xl">
            Want the shop to be
            <br />
            listed?
          </h1>
          <button type="button" className="btn btn-primary rounded-full ">
            See Pricing
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="mx-2 text-center text-white">
        Made with 🌌 by <Link href="$">VOID</Link>
      </div>
    </div>
  );
};

export default Footer;
