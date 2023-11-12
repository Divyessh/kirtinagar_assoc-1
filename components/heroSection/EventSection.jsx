import Image from 'next/image';
import React from 'react';
import heroBanner5 from '../../assets/jpeg/heroBanner5.jpeg';

const EventSection = () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="col-span-6 md:col-span-2 w-full bg-[#E5DFCF] h-[600px] md:h-[658px] rounded-[10px] py-[23px] px-[26px] relative">
      <h1 className="text-[21px] font-bold text-[#413833] underline">Events and Blogs</h1>
      <div className="flex flex-col justify-between items-stretch gap-5 mt-4 overflow-hidden overflow-y-clip">
        {dummyData?.slice(0, 6).map((item) => (
          <div className="mt-2 flex gap-3 items-center" key={item}>
            <Image src={heroBanner5} alt="galleryItem" width={110} height={110} className="rounded-lg" />
            <div className="flex flex-col h-full justify-between">
              <h1 className="font-semibold text-[14px] text-black">FELICITATION OF DIGNITORIES AND PATRONS</h1>
              <h1 className="font-semibold text-[12px] text-black">Some other details</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
