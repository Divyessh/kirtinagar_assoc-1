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
      <div className="flex items-center gap-[20px] pt-4 pb-12">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          providerData?.map((item) => (
            <div key={item?._id} className="bg-white px-8 ">
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
