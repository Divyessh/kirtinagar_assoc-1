"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import kirti from "../assets/svg/kirti.svg";
import NavBarUser from "./navBarUser";

const Navbar = () => {
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
      children: true,
    },
    {
      id: 3,
      name: "About Us",
      link: "/aboutus",
    },
    // {
    //   id: 4,
    //   name: 'Gallery',
    //   link: '/gallery',
    // },
    {
      id: 5,
      name: "Members Section",
      link: "/pricing",
    },
    {
      id: 6,
      name: "Products & Services",
      link: "/services",
    },
    {
      id: 7,
      name: "Contact Us",
      link: "/contactus",
    },
  ];

  return (
    <div
      className="top-0 left-0 z-[999] sticky bg-[#F9F8F2] px-2 w-[100%] md:h-[95px] navbar overflow"
      style={{ boxShadow: "2px 2px 4px 0px #00000040" }}
    >
      <div className="ml-2 navbar-start">
        <Link href="/">
          <Image src={kirti} alt="kirti_timberworks" width={200} height={200} />
        </Link>
      </div>
      <div className="lg:flex hidden navbar-center">
        <ul className="px-1 menu menu-horizontal">
          {data.map((item) => {
            return item?.children ? (
              <div
                className="flex items-center h-[40px] translate-y-[2px]"
                key={item.id}
              >
                <Link
                  href={item.link}
                  className="m-3 mr-1 font-bold text-[#413833] text-[18px] hover:text-[#EC5B2D] whitespace-nowrap"
                >
                  {item.name}
                </Link>
                <div className="dropdown dropdown-end">
                  <button
                    type="button"
                    tabIndex={0}
                    className="w-fit btn"
                    aria-label="open team"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      margin: "none",
                    }}
                  >
                    <IoIosArrowDropdownCircle className="text-[20px] text-black hover:text-[#EC5B2D]" />
                  </button>
                  <div
                    className="z-[3] bg-[#F9F8F2] shadow p-4 rounded-box w-52 dropdown-content menu"
                    style={{
                      boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
                    }}
                  >
                    <Link
                      href="/membersection"
                      className="font-bold text-[#413833] text-[14px] hover:text-[#EC5B2D] whitespace-nowrap"
                    >
                      Members Listing
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href={item.link}
                key={item.id}
                className="m-3 font-bold text-[#413833] text-[18px] hover:text-[#EC5B2D] whitespace-nowrap"
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <NavBarUser navItems={data} />
    </div>
  );
};

export default Navbar;
