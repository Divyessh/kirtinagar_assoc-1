'use client';

/* eslint-disable no-underscore-dangle */

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import SkeletonCard from '../blogs/skeletonCard';
import Card from '../featuredProviders/card';

const SearchedProvider = ({ searchEle }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['providers'],
    queryFn: async () => {
      const res = await axios.get(`/api/provider`);
      return res;
    },
  });
  const providerData = data?.data?.data;
  const newArr = providerData?.map((item) => {
    return item?.services.some((service) => service.toLowerCase().includes(searchEle.toLowerCase())) ? item : null;
  });
  const newArr2 = providerData?.map((item) => {
    return item?.nameOftheFirm.toLowerCase().includes(searchEle.toLowerCase()) ? item : null;
  });
  // eslint-disable-next-line no-nested-ternary
  const searchedArr = newArr && newArr2 ? [...newArr, ...newArr2] : newArr && !newArr2 ? [...newArr] : newArr2 || [];
  /* eslint-disable no-console */
  console.log(searchEle, isLoading, newArr);
  return (
    <div>
      <span className="flex justify-center items-center">
        <h1 className="md:text-4xl text-xl text-black text-center border-b-2 border-b-black mb-3 mt-6">Search Result</h1>
      </span>
      <div className="grid grid-cols-4 gap-[20px] pt-4 pb-12">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          searchedArr?.map(
            (item) =>
              item !== null && (
                <div key={item?._id} className="bg-white px-8 col-span-4 md:col-span-1 flex items-center justify-center">
                  <Link href={`/services/${item?._id}/about`}>
                    <Card item={item} />
                  </Link>
                </div>
              ),
          )
        )}
      </div>
    </div>
  );
};

export default SearchedProvider;
