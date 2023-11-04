import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import kirti from '../assets/svg/kirti.svg';
import NavBarUser from './navBarUser';

const Navbar = async () => {
  const data = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Our Team',
      link: '/ourteam',
    },
    {
      id: 3,
      name: 'About Us',
      link: '/aboutus',
    },
    {
      id: 4,
      name: 'Gallery',
      link: '/gallery',
    },
    {
      id: 5,
      name: 'Members Section',
      link: '/pricing',
    },
    {
      id: 6,
      name: 'Products & Services',
      link: '/services',
    },
    {
      id: 7,
      name: 'Contact Us',
      link: '/contactus',
    },
  ];

  return (
    <div
      className="sticky top-0 left-0 w-[100%] z-[999] navbar bg-[#F9F8F2] md:h-[95px] overflow px-2"
      style={{ boxShadow: '2px 2px 4px 0px #00000040' }}
    >
      <div className="navbar-start ml-2">
        <Link href="/">
          <Image src={kirti} alt="kirti_timberworks" width={200} height={200} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {data.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="text-[18px] font-bold text-[#413833] hover:text-[#EC5B2D] whitespace-nowrap m-3"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
      <NavBarUser />
    </div>
  );
};

export default Navbar;
