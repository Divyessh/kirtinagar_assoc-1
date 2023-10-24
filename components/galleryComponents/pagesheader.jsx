import Image from 'next/image';
import React from 'react';
import styles from '../page.module.css';

const PagesHeader = ({ title, bannerImage }) => {
  return (
    <header
      className={`${styles.header} flex items-center justify-center md:justify-between md:items-center w-full md:h-[46vh] md:px-2 md:pt-5 bg-primary `}
    >
      <div className={` text-black md:text-4xl text-start h-full md:p-5 px-3 flex-col justify-start items-start space-y-4`}>
        <h1 className="mb-2 text-bold">{title}</h1>
        <div className="border-spacing-1 border-black border-2 md:block hidden " />
        <h1 className="text-semibold md:text-4xl md:pt-8 text-black">
          KIRTI NAGAR TIMBER AND <br className="md:block hidden" /> FURNITURE MARKET
        </h1>
      </div>
      <div className="md:h-[700px] w-[300px] md:w-[700px] mt-3">
        <Image
          src={bannerImage}
          alt="galleryBanner"
          height={380}
          width={800}
          className="md:rounded-bl-[400px] md:block rounded-bl-[1200px]"
          responsive
        />
      </div>
    </header>
  );
};
export default PagesHeader;
