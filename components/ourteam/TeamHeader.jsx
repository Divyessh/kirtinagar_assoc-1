import React from 'react';

const TeamHeader = ({ title }) => {
  return (
    <div className="bg-[#000000bf] text-center py-5 flex items-center justify-center">
      <div>
        <h1 className="text-white font-600 text-[30px] py-2">{title}</h1>
        <hr className="w-[80%] mx-auto" />
      </div>
    </div>
  );
};

export default TeamHeader;
