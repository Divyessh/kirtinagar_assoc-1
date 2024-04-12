/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
/* eslint-disable no-underscore-dangle */

'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import Card from '../featuredProviders/card';
import SkeletonCard from '../blogs/skeletonCard';
import SearchedProvider from './SearchedProvider';
import axios from 'axios';
// import { useMemo } from 'react';

const ServicesCard = () => {
  const queryParams = useSearchParams();
  const searchEle = queryParams.get('keyword');
  const { data, isLoading } = useQuery({
    queryKey: ['providers'],
    queryFn: async () => {
      const res = await axios.get(`/api/provider`);
      return res;
    },
  });
  const providerData = data?.data?.data?.filter((item) => item?.isFeatured === true);
  function getRandomElements() {
    const shuffledArray = providerData?.slice().sort(() => Math.random() - 0.5);
    return shuffledArray?.slice(0, 4);
  }
  const randomEle = getRandomElements();

  return (
    <div className="bg-primary text-black flex-col w-full justify-center items-center text-center pt-[20px] hero-bg">
      <div className="grid grid-cols-4 gap-[20px] pt-4 pb-12">
        {isLoading && !Array.isArray(randomEle) ? (
          <SkeletonCard />
        ) : (
          randomEle?.map((item) => (
            <div key={item?._id} className="bg-transparent px-8 md:px-0 col-span-4 md:col-span-1 flex items-center justify-center">
              <Card item={item} />
            </div>
          ))
        )}
      </div>
      {searchEle && <SearchedProvider searchEle={searchEle} />}
    </div>
  );
};
export default ServicesCard;
