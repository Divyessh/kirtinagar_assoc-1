import React from 'react';
import Link from 'next/link'; // Use Link from next/link
import kirti from '../assets/svg/kirti.svg';
import SearchComponent from './searchcomp';
import { CiUser } from 'react-icons/ci';
import Image from 'next/image'; // Use Image from next/image
import {GiHamburgerMenu} from 'react-icons/gi'
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
    <div className="navbar bg-primary md:h-[130px] overflow px-2">
  <div className="navbar-start ml-2">
    <Link href="/">
    <Image src={kirti} alt='kirti_timberworks'  />
  </Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {data.map((item) => (
      <Link href={item.link} key={item.id} className="text-xl font-bold text-[#413833] hover:text-[#EC5B2D] whitespace-nowrap m-3">
          {item.name}
      </Link>
    ))}
    </ul>
  </div>
  <div className="navbar-end">
    <SearchComponent />
    <CiUser className='text-4xl text-center m-2 ml-2 md:block hidden text-black' />
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
      <GiHamburgerMenu className='text-black object-cover text-4xl'/>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box z-50 bg-primary right-2 text-black">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>

        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>
</div>  
  );
}

export default Navbar;


