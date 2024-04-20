/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { BiSearchAlt } from 'react-icons/bi';
// Importing necessary Next.js modules
import { useRouter } from 'next/navigation'; // Correct import statement
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { TbSofaOff } from 'react-icons/tb';

const CategoryDropdown = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const keywordValue = watch('keyword', '');
  const dropdownRef = useRef(null); // Added dropdownRef using useRef

  useEffect(() => {
    const fetchProviders = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/provider');
        const data = await res.json();
        setProviders(data?.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProviders();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilteredProviders([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setFilteredProviders(
      keywordValue?.length >= 3
        ? providers?.filter((provider) => provider?.nameOftheFirm.toLowerCase().includes(keywordValue.toLowerCase()))
        : [],
    );
  }, [keywordValue, providers]);

  const handleSelect = (selectedKeyword) => {
    setValue('keyword', selectedKeyword);
    setFilteredProviders([]);
    router.push(`/services?keyword=${encodeURIComponent(selectedKeyword)}`);
  };

  const onSubmit = (data) => {
    handleSelect(data?.keyword);
    reset();
  };

  return (
    <form className="z-10 w-full" onSubmit={handleSubmit(onSubmit)} ref={dropdownRef}>
      <div
        className="place-items-center md:place-items-stretch gap-3 md:gap-6 grid grid-cols-2 md:grid-cols-5 bg-[#E5DFCF] px-[15px] md:px-[24px] py-[15px] md:py-[30px] w-full"
        style={{ boxShadow: '6px 9px 12px 0px #00000040' }}
      >
        <div className="relative flex items-center col-span-2 md:col-span-4 bg-white px-[18px] py-[8px] md:py-[12px] rounded-[10px] w-[97%] md:w-full text-black">
          <input
            className="w-full text-black outline-none"
            placeholder="Search for services"
            type="text"
            {...register('keyword', { required: true, maxLength: 40 })}
          />
          <div>
            {loading ? (
              <BallTriangle height={50} width={50} color="green" ariaLabel="loading" visible />
            ) : filteredProviders?.length > 0 ? (
              <div className="top-full left-0 absolute z-10 bg-white shadow-md mt-1 rounded-[10px] w-full md:max-h-[20vh] max-h-[40vh] text-black overflow-y-scroll">
                {filteredProviders?.map((provider) => (
                  <button
                    type="button"
                    key={provider.id}
                    className="hover:bg-[#413833] px-[18px] py-[8px] w-full text-[14px] text-left hover:text-white cursor-pointer"
                    onClick={() => handleSelect(provider.nameOftheFirm)}
                  >
                    {provider.nameOftheFirm}
                  </button>
                ))}
              </div>
            ) : (
              <TbSofaOff className="text-secondary text-sm" />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center gap-1 2xl:gap-3 col-span-2 md:col-span-1 bg-[#413833] hover:bg-secondary p-[8px] md:p-[11px] rounded-[10px] w-fit md:w-full text-white btn"
        >
          <BiSearchAlt className="text-xl" /> Submit Now
        </button>
      </div>
    </form>
  );
};

export default CategoryDropdown;
