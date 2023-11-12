import React from 'react';

const PaginationButton = () => {
  return (
    <div className="bg-primary flex justify-center items-center p-4 space-x-4 shadow-xl">
      <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow-lg">
        {'<'}
      </button>
      <span className="p-3 bg-secondary text-black font-semibold py-2 px-4  rounded shadow-lg">1</span>
      <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  border rounded shadow-lg">
        {'>'}
      </button>
    </div>
  );
};

export default PaginationButton;
