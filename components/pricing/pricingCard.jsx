"use client";

import Image from "next/image";
import tick from "../../assets/svg/tick.svg";
import generateUniqueKey from "../../constants/generateUid";

const pricingCard = ({ title, price, features }) => {
  return (
    <div className="flex flex-wrap items-center justify-center ">
      <div className="sm:py-12 md:py-6 lg:py-6 xl:py-6 px-[40px]  md:max-w-[400px] md:h-[335px] sm:w-full bg-white rounded-md border-secondary  border-2  hover:text-white text-black hover:bg-secondary transform sm:scale-1  lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl z-0">
        <h1 className="pt-2 text-xl font-semibold">{title}</h1>
        <div className="px-1 py-4">
          <h1 className="text-2xl font-black">{price}</h1>
        </div>
        <div className="h-px" />
        <div className="mt-3 text-start">
          {features.map((item) => (
            <li
              key={generateUniqueKey(item)}
              className="flex text-sm list-none text-opacity-80"
            >
              <Image
                src={tick}
                width={15}
                height={10}
                className="mr-2"
                alt="items"
              />
              {item}
            </li>
          ))}
        </div>
        <center className="items-end justify-end flex-cols">
          <button
            type="button"
            className="px-3 py-2 mt-6 mb-3 font-semibold duration-200 rounded-md bg-secondary hover:shadow-xl hover:bg-primary hover:text-black "
          >
            Select
          </button>
        </center>
      </div>
    </div>
  );
};

export default pricingCard;
