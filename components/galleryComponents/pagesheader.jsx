import Image from "next/image";
import React from "react";
const PagesHeader=({title,bannerImage})=>{
    return (
        <>
        <header className="flex items-center justify-center md:justify-between md:items-center w-full md:h-[60vh] px-2 pt-5">
        <div className="text-black md:text-4xl text-start h-full p-5 flex-col justify-start items-start space-y-4 ">
          <h1 className="mb-2 text-bold">{title}</h1>
          <div className="border-spacing-1 border-black border-2 " />
          <h1 className="text-semibold md:text-4xl pt-8 text-black">
            KIRTI NAGAR TIMBER AND <br /> FURNITURE MARKET
          </h1>
        </div>
        <div className="h-[700px]">
          <Image
            src={bannerImage}
            alt="galleryBanner"
            height={380}
            width={800}
            className="md:rounded-bl-[400px] md:block hidden "
            responsive
          />
        </div>
      </header>
      </>
    )
}
export default PagesHeader;