'use client';

import Image from 'next/image';
import tick from '../../assets/svg/tick.svg';

const pricingCard=({ title, price, features })=>{
    return (
        <div className=" bg-gray-200  flex flex-wrap items-center  justify-center">
        <div className="sm:py-12 md:py-6 lg:py-6 xl:py-6 px-[10px] md:max-w-[400px] md:h-[435px] sm:w-full bg-white rounded-md border-secondary  border-2  hover:text-white text-black hover:bg-secondary transform sm:scale-1  lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                        <h1 className="font-semibold text-xl">{title}</h1>
                        <div className="py-4 px-1">
                            <h1 className="text-4xl font-black">
                                {price} <sup className="text-opacity-48 mt-2 text-lg">/Month</sup>
                            </h1>
                        </div>
                        <div className="h-px" />
                        <div className="text-start mt-3">
                            {features.map((item, index) => (
                                <li key={index} className="flex text-sm text-opacity-80 list-none">
                                    <Image src={tick} width={15} height={10} className="mr-2" />
                                    {item}
                                </li>
                            ))}
                        </div>
                        <center>
                            <button className="px-3 mt-6 mb-3 py-2 font-semibold bg-secondary hover:shadow-xl duration-200 rounded-md hover:bg-white hover:text-black">
                                Choose Plan
                            </button>
                        </center>
                    </div>
                    </div>
    );
};

export default pricingCard;
