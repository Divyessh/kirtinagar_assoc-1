'use client';

import tick from '../../assets/svg/tick.svg'
import Image from 'next/image';

const pricingCard = () => {

    const data = {
        "Basic": [
            "Shop featured for one week.",
            "Shop logo and description displayed.",
            "One product showcase.",
            "Limited exposure in search results.",
            "Shop featured for one week."
        ],
        "Standard": [
            "Shop featured for one Month.",
            "Shop logo, description, and Banner displayed.",
            "Up to 5 products showcased.",
            "Enhanced Visibility in search results.",
            "Social Media Promotion."
        ],
        "Premium": [
            "Shop featured for 3 Months.",
            "Shop logo, description and banner displayed.",
            "Up to 10 products showcase.",
            "Social media promotion with targeted ads.",
            "priority placement in search results."
        ]
    };

    return (
        <div>
            <div className=" bg-gray-200  flex flex-wrap items-center  justify-center ">
                <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-evenly  py-8">
                    <div className="sm:py-12 md:py-6 lg:py-6 xl:py-6 px-[10px] md:max-w-[400px] md:h-[435px] sm:w-full bg-white rounded-md border-secondary hover:text-white text-black hover:bg-secondary transform sm:scale-1  lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                        <h1 className="font-semibold text-xl ">Standard Plan</h1>
                        <div className="py-4 px-1">
                            <h1 className="text-4xl font-black">INR 1000 <sup className="text-opacity-48 mt-2 text-lg">/Month</sup></h1>
                        </div>
                        <div className="h-px " />
                        <div className="text-start mt-3 ">
                            {data.map((item,index)=>{<li key={index} className="flex text-sm text-opacity-80 list-none"><Image src={tick} width={15} height={10} className="mr-2" />{item.basic}</li> })}
                        </div>
                        <center>
                            <button className=" px-3 mt-6 mb-3 py-2  font-semibold bg-secondary hover:shadow-xl duration-200 rounded-md hover:bg-white hover:text-black ">
                                Choose Plan
                            </button>
                        </center>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default pricingCard;