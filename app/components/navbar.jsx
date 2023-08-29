import React from 'react';
import Link from 'next/link'; // Use Link from next/link
import kirti from '../assets/svg/kirti.svg';
import SearchComponent from './searchcomp';
import { CiUser } from 'react-icons/ci';
import Image from 'next/image'; // Use Image from next/image

function Navbar() {
  const data = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Our Team",
      link: "/ourteam",
    },
    {
      id: 3,
      name: "About Us",
      link: "/aboutus",
    },
    {
      id: 4,
      name: "Gallery",
      link: "/gallery",
    },
    {
      id: 5,
      name: "Pricing",
      link: "/pricing",
    },
    {
      id: 6,
      name: "Services",
      link: "/services",
    },
    {
      id: 7,
      name: "Contact Us",
      link: "/contactus",
    },
  ];

  return (
    <div className="navbar bg-[#F9F8F2] px-4 py-5">
      <div className="flex w-full">
        <Link href="/">
          <Image src={kirti} alt='kirti_timberworks' width={100} height={50} />
        </Link>
      </div>
      <div className="flex-start navbar w-full space-x-4 ">
        {data.map((item) => (
          <Link href={item.link} key={item.id} className="text-xl font-bold text-[#413833] hover:text-[#EC5B2D] mx-4 px-2 whitespace-nowrap">
              {item.name}
          </Link>
        ))}
        <div className='flex w-full  pr-4 mt-0'>
          <SearchComponent />
          <CiUser className='text-5xl text-center border-2 rounded-full m-2 ml-2' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
