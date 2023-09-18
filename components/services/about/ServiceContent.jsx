import React from 'react';
import { IoSettings } from 'react-icons/io5';
import Heading from './heading';

const ServiceContent = () => {
  const serviceArray = ['Imported Furniture', 'Import consultant', 'Export consultant', 'Wooden Interior'];
  const ellipsisStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  return (
    <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <Heading title="Services" />
      <div className="flex items-start w-full">
        <div className="w-[10%]">
          <IoSettings className="text-[20px] md:text-[40px] text-black" />
        </div>
        <div className="flex flex-wrap w-[90%] gap-[5px] md:gap-[20px]">
          {serviceArray?.map((service) => (
            <div
              className="w-[45%] md:w-[27%] rounded-[20px] md:rounded-[50px] md:h-full overflow-hidden px-[6px] py-[5px] text-center bg-[#FBA832]"
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
