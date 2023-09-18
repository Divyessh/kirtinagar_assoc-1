import Link from 'next/link';
import React from 'react';

const Nav = ({ pageName, id }) => {
  const navItems = ['About', 'Gallery', 'Contact', 'Services'];
  return (
    <div className="w-full flex items-center justify-center rounded-[4px] overflow-hidden mb-[30px]">
      {navItems?.map((item) => (
        <div
          key={item}
          className={`py-[8px] border-2 border-[#FF9800] w-1/4 text-center ${pageName === item ? 'bg-[#FF9800]' : 'bg-[#FFFFFF]'}`}
        >
          <Link href={`/services/${id}/${item.toLowerCase()}`}>
            <h1 className={`${pageName === item ? 'font-[700]' : 'font-[500]'} text-[12px] md:text-[27px]`}>{item}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Nav;
