import React from 'react';

const Heading = ({ title }) => {
  return (
    <div className="flex items-center justify-center mt-[5px] md:mt-[25px] mb-[3px] md:mb-[12px]">
      <h1 className="font-[700] text-[20px] md:text-[40px]">{title}</h1>
    </div>
  );
};

export default Heading;
