'use client';

/* eslint-disable no-underscore-dangle */
import React from 'react';
import Link from 'next/link';
import Heading from './about/heading';
import Card from '../featuredProviders/card';
import { useGetProvidersQuery } from '../../redux/api/apiSlice';
import SkeletonCard from '../blogs/skeletonCard';

const RelatedProviders = () => {
  const { data, isLoading } = useGetProvidersQuery('getProviders');
  const providerData = data?.data;
  const slices = providerData?.length >= 3 ? 3 : providerData?.length;
  return (
    <div>
      <Heading title="Related Providers" />
      <div className="flex flex-col md:flex-row justify-between items-center my-[30px] gap-[50px]">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          providerData?.slice(0, slices)?.map((item) => (
            <div key={item?._id} className="bg-white px-8 col-span-4 md:col-span-1 flex items-center justify-center">
              <Link href={`/services/${item?._id}/about`}>
                <Card item={item} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedProviders;
