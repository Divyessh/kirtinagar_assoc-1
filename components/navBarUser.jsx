'use client';

import React from 'react';
// import { useSession } from 'next-auth/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { CiUser } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import SearchComponent from './searchcomp';
import LoginModal from './auth/loginModal';

const NavBarUser = ({ navItems }) => {
  const { data: session } = useSession();
  const [openDropDown, setOpenDropDown] = React.useState(false);
  return (
    <div className="navbar-end">
      <SearchComponent />
      {session ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={() => setOpenDropDown((prev) => !prev)} className="relative">
          <CiUser className="text-4xl text-center m-2 ml-2 md:block hidden text-black" />
          {openDropDown ? (
            <div
              className="bg-white absolute flex flex-col gap-3 justify-center top-full translate-y-3 -translate-x-1 w-[150px] -left-[100px] rounded-[4px] px-[8px] py-[4px]"
              style={{ border: '1px solid black' }}
            >
              <div className="flex items-center gap-[10px] cursor-pointer border-b pb-2 border-black">
                {/* eslint-disable-next-line no-underscore-dangle */}
                <Link href={`/services/${session?.user?._id}/about`}>
                  <h1 className="text-[18px] text-black flex gap-2 items-center">
                    <span>
                      <CiUser className="text-[18px] text-center text-black" />
                    </span>
                    My Profile
                  </h1>
                </Link>
              </div>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <div className="flex items-center gap-[10px] cursor-pointer" onClick={signOut}>
                <FiLogOut className="text-[red] text-[18px]" />
                <h1 className="text-black">Sign Out</h1>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <LoginModal />
      )}
      <div className="dropdown">
        <button type="button" className="btn btn-ghost lg:hidden " aria-label="Open Menu">
          <GiHamburgerMenu className="text-black object-cover text-4xl" />
        </button>
        <div className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box z-50 bg-primary right-2 text-black">
          {navItems?.map((item) => (
            <Link key={item?.id} href={item?.link} className="w-[190px] text-[14px] my-3 ml-2">
              {item?.name}
            </Link>
          ))}
          <Link href="/membersection" className="w-[190px] text-[14px] my-3 ml-2">
            Memeber Section
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBarUser;
