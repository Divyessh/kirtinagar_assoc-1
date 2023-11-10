/* eslint-disable no-underscore-dangle */

'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Card from '../featuredProviders/card';
import { useGetProvidersQuery } from '../../redux/api/apiSlice';
import SkeletonCard from '../blogs/skeletonCard';
import SearchedProvider from './SearchedProvider';

const ServicesCard = () => {
  const queryParams = useSearchParams();
  const searchEle = queryParams.get('keyword');
  const { data, isLoading } = useGetProvidersQuery('getProviders');
  const providerData = data?.data;

  return (
    <div className="bg-white text-black flex-col w-full justify-center items-center text-center pt-[50px]">
      <div className="grid grid-cols-4 gap-[20px] pt-4 pb-12">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          providerData?.map((item) => (
            <div key={item?._id} className="bg-white px-8 col-span-4 md:col-span-1 flex items-center justify-center">
              <Link href={`/services/${item?._id}/about`}>
                <Card item={item} />
              </Link>
            </div>
          ))
        )}
      </div>
      {searchEle && <SearchedProvider searchEle={searchEle} />}
    </div>
  );
};
export default ServicesCard;
