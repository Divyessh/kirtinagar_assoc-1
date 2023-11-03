/* eslint-disable no-underscore-dangle */

'use client';

import Link from 'next/link';
import Card from '../featuredProviders/card';
import { useGetProvidersQuery } from '../../redux/api/apiSlice';
import SkeletonCard from '../blogs/skeletonCard';

const ServicesCard = () => {
  const { data, isLoading } = useGetProvidersQuery('getProviders');
  // eslint-disable-next-line no-console
  console.log(data);
  const providerData = data?.data;

  return (
    <div className="bg-white text-black flex-col w-full justify-center items-center text-center">
      <h1 className="mb-2 text-black  md:text-2xl text-md py-6">Featured Providers</h1>
      <div className="grid grid-cols-4 gap-[20px] pt-4 pb-12">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          providerData?.map((item) => (
            <div key={item?._id} className="bg-white px-8 col-span-4 md:col-span-1 flex items-center justify-center">
              <Link href={`services/${item?._id}/about`}>
                <Card item={item} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default ServicesCard;
