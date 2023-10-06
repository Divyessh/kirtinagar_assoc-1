'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Heading from './heading';

const ReqQuoteForm = () => {
  const { register, handleSubmit, reset } = useForm();
  // eslint-disable-next-line consistent-return
  const onSubmit = async (data) => {
    try {
      // eslint-disable-next-line no-console
      console.log(data);
      // eslint-disable-next-line no-shadow
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      reset();
    }
  };
  return (
    <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
      <Heading title="Request a quote" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-[10px] md:gap-[20px] my-[20px]">
          <div
            className="col-span-1 py-[8px] md:py-[24px] px-[8px] md:px-[20px] rounded-[10px] relative"
            style={{ border: '2px solid black' }}
          >
            <span className="absolute bg-[white] text-black -top-[10px] md:-top-[19px] px-[4px] left-[10px] md:left-[20px] text-[12px] md:text-[24px] ">
              Name *
            </span>
            <input
              type="text"
              placeholder="Enter Name"
              className="outline-none w-full text-[13px] md:text-[24px] text-black"
              // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
              {...register('name', {
                required: true,
              })}
            />
          </div>
          <div
            className="col-span-1 py-[8px] md:py-[24px] px-[8px] md:px-[20px] rounded-[10px] relative"
            style={{ border: '2px solid black' }}
          >
            <span className="absolute bg-[white] text-black -top-[10px] md:-top-[19px] px-[4px] left-[10px] md:left-[20px] text-[12px] md:text-[24px] ">
              Email *
            </span>
            <input
              type="email"
              placeholder="Enter Email"
              className="outline-none w-full text-[13px] md:text-[24px] text-black"
              // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
              {...register('email', {
                required: true,
              })}
            />
          </div>
          <div
            className="col-span-1 py-[8px] md:py-[24px] px-[8px] md:px-[20px] rounded-[10px] relative"
            style={{ border: '2px solid black' }}
          >
            <span className="absolute bg-[white] text-black -top-[10px] md:-top-[19px] px-[4px] left-[10px] md:left-[20px] text-[12px] md:text-[24px] ">
              Phone *
            </span>
            <input
              type="text"
              placeholder="Enter Phone"
              className="outline-none w-full text-[13px] md:text-[24px] text-black"
              // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
              {...register('phone', {
                required: true,
              })}
            />
          </div>
          <div
            className="col-span-1 py-[8px] md:py-[24px] px-[8px] md:px-[20px] rounded-[10px] relative"
            style={{ border: '2px solid black' }}
          >
            <span className="absolute bg-[white] text-black -top-[10px] md:-top-[19px] px-[4px] left-[10px] md:left-[20px] text-[12px] md:text-[24px] ">
              Message *
            </span>
            <input
              type="text"
              placeholder="Enter Message"
              className="outline-none w-full text-[13px] md:text-[24px]  text-black"
              // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
              {...register('message', {
                required: true,
              })}
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full mb-[10px]">
          <button
            type="submit"
            className="bg-[#FF9800] w-fit py-[5px] text-black px-[20px] md:px-[55px] font-[700] text-[14px] md:text-[28px] rounded-[7px]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReqQuoteForm;
