'use client';

import Image from 'next/image'; // Use Image from next/image
import deals from '../../assets/svg/dealszone.svg';
import store from '../../assets/svg/store.svg';
import Range from './range';
import './styles.css';

const furnitureSection = () => (
  <div className="bg-[#413833] h-[550px] furniture">
    <div className="md:text-4xl text-xl text-white text-center pt-6 ">
      <u className="">Explore Our Furniture Range</u>
    </div>
    <div className="flex justify-center items-center space-x-14 mt-6">
      <div className="flex-col justify-center items-center">
        <div className="card w-[132px] h-[109px] bg-white rounded-xl flex-col justify-center items-center">
          <figure>
            <Image src={deals} alt="Picture of the author" />
          </figure>
        </div>
        <span
          style={{
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '0.5px',
            textTransform: 'capitalize',
          }}
          className="text-xl md:text-2xl"
        >
          Deal Zone
        </span>
      </div>
      <div className="flex-col justify-center items-center">
        <div className="card w-[132px] h-[109px] bg-white rounded-xl flex-col justify-center items-center">
          <figure>
            <Image src={store} alt="Picture of the author" />
          </figure>
        </div>
        <span
          style={{
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '0.5px',
            textTransform: 'capitalize',
          }}
          className="text-xl md:text-2xl"
        >
          50+ Stores
        </span>
      </div>
    </div>
    <Range />
  </div>
);

export default furnitureSection;
