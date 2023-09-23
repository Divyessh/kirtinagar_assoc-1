import React from 'react';

const SkeletonCard = () => (
  <div className="flex items-center px-[50px] py-[50px] w-full">
    <div className="card  md:w-[350px] w-[200px] bg-gray-300 animate-pulse shadow-2xl rounded-xl" style={{ padding: 0, border: 'none' }}>
      <div className="w-[350px] h-[200px] rounded-xl bg-gray-400" />
      <div className="bg-gray-300 text-black text-center md:p-4 rounded-b-xl shadow-2xl">
        <div className="w-2/3 h-6 bg-gray-400 rounded mb-2" />
        <div className="w-1/2 h-4 bg-gray-400 rounded" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
