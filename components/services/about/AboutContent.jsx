'use client';

import React, { useState } from 'react';
import { AiFillSetting, AiFillFile } from 'react-icons/ai';
// import { useSession } from 'next-auth/react';
import { FaRegEdit } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import ImageCarousel from './imageCarousel';
import retryOperation from '../../../lib/retryOperation';
// import aboutService from '../../../assets/png/aboutService.png';
import { useGetProvidersByIdQuery, useUpdateProviderByIdMutation } from '../../../redux/api/apiSlice';
import SkeletonCard from '../../blogs/skeletonCard';

const AboutContent = ({ id }) => {
  const { data, isLoading } = useGetProvidersByIdQuery(id);
  const providerData = data?.data;
  const { data: session } = useSession();
  // eslint-disable-next-line no-underscore-dangle
  const isUser = session?.user?._id;
  const [info, setInfo] = useState({
    name: providerData?.ownerName,
    location: providerData?.address,
  });
  const [update] = useUpdateProviderByIdMutation();

  // eslint-disable-next-line consistent-return
  const MAX_RETRIES = 10;
  const RETRY_DELAY = 300; // 300 milliseconds

  const handleSave = async () => {
    const result = await retryOperation(
      () => update({ ...providerData, ownerName: info?.name, address: info?.location }),
      MAX_RETRIES,
      RETRY_DELAY,
    );
    return result;
    // Handle the result as needed
  };
  return isLoading ? (
    <SkeletonCard />
  ) : (
    <>
      <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
        <div className="grid grid-cols-8 gap-2 md:gap-6 h-[auto]">
          <ImageCarousel id={id} />
          <div className="col-span-1 flex flex-col">
            <div
              className="h-[50%] flex items-center justify-center rounded-t-[3px] bg-[#F9F8F2] border-[#FF9800]"
              style={{ borderWidth: 1 }}
            >
              <AiFillSetting className="text-[#3D2502] text-[20px] md:text-[50px]" />
            </div>
            <div
              className="h-[50%] flex items-center justify-center rounded-b-[3px] bg-[#F9F8F2] border-[#FF9800]"
              style={{ borderWidth: 1 }}
            >
              <AiFillFile className="text-[#3D2502] text-[20px] md:text-[50px]" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-start w-full">
          {isUser === id && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="my_modal_8" aria-label="open modal">
              <FaRegEdit className="text-[30px] md:text-[38px] text-black mt-2" />
            </label>
          )}
          <div className="w-full">
            <h1 className="font-[700] text-[13px] md:text-[28px] mt-[5px] text-black">{providerData?.ownerName}</h1>
            <p className="font-[700] text-[13px] md:text-[28px] w-[80%] md:w-[60%] text-black">{providerData?.address}</p>
          </div>
        </div>
        <button
          type="button"
          className="text-black rounded-[8px] mt-[13px] flex items-center gap-2 py-[3px] px-[10px] w-fit bg-[#FF9800] font-[700] text-[15px] md:text-[30px]"
        >
          <AiFillFile /> Request a quote
        </button>
      </div>
      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black flex flex-col gap-4">
          <h3 className="text-lg font-bold">Edit Details!</h3>
          <input
            type="text"
            placeholder="Enter Name"
            className="border p-2 rounded-md outline-black"
            defaultValue={info?.name || providerData?.ownerName}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Address"
            className="border p-2 rounded-md outline-black"
            defaultValue={info?.location || providerData?.address}
            onChange={(e) => setInfo({ ...info, location: e.target.value })}
          />
          <button type="button" aria-label="Save Info" onClick={handleSave} className="bg-[#FF9800] text-black p-2 rounded-lg w-fit">
            Save
          </button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_8" aria-label="modalClose">
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          Close
        </label>
      </div>
    </>
  );
};

export default AboutContent;
