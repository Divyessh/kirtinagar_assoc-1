'use client';

import React from 'react';
import { IoSettings } from 'react-icons/io5';
import Heading from './heading';
import { useGetProvidersByIdQuery } from '../../../redux/api/apiSlice';

const ServiceContent = ({ title, id }) => {
  const { data, isLoading } = useGetProvidersByIdQuery(id);
  const ellipsisStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  if (isLoading) return <div className="flex items-center">Loading....</div>;
  return (
    <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      {title && <Heading title="Services" />}
      <div className="flex items-start w-full">
        <div className="w-[10%]">
          <IoSettings className="text-[20px] md:text-[40px] text-black" />
        </div>
        <div className="flex flex-wrap w-[90%] gap-[5px] md:gap-[20px]">
          {data?.data?.services?.map((service) => (
            <div
              className="w-[45%] md:w-[30%] rounded-[20px] md:rounded-[50px] md:h-full overflow-hidden px-[6px] py-[5px] text-center bg-[#FBA832]"
              key={service}
            >
              <h1 className="text-[10px] text-black md:text-[24px] font-[600]" style={ellipsisStyle}>
                {service}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
