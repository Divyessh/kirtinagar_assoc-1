/* eslint-disable no-underscore-dangle */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import shareIcon from '../../assets/png/shareIcon.png';
// import { useUpdateProviderByIdMutation } from '../../redux/api/apiSlice';
// import retryOperation from '../../lib/retryOperation';

const Title = ({ id }) => {
  const { data } = useQuery({
    queryKey: ['Provider', id],
    queryFn: async () => {
      const res = await axios.get(`/api/provider/${id}`);
      return res?.data?.data;
    },
  });
  const queryClient = useQueryClient();
  const { mutate: handleUpdate } = useMutation({
    mutationFn: async (update) => {
      try {
        const response = await axios.put(`/api/provider/${id}`, update);
        return response.data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Something went wrong!', error);
        throw new Error('Failed to add new student');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Provider', id] });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });
  const { data: session } = useSession();
  // eslint-disable-next-line no-underscore-dangle
  const isUser = session?.user?._id;
  const providerData = data;
  const [name, setName] = useState(providerData?.nameOftheFirm);

  const handleSave = async () => {
    handleUpdate({ ...providerData, nameOftheFirm: name });
    // eslint-disable-next-line no-console
    console.log('Clicked');
  };

  return (
    <>
      <div className="text-center">
        <div className="flex justify-center items-center gap-3 w-full">
          <h1 className="font-[700] text-[18px] text-black md:text-[50px] leading-[20px] md:leading-[75px]">{name}</h1>
          {isUser === id && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="my_modal_7" aria-label="open modal">
              <FaRegEdit className="text-[30px] text-black md:text-[38px]" />
            </label>
          )}
        </div>
        <p className="font-[300] text-[#302f2f] text-[15px] md:text-[23px]">New Delhi, India</p>
        <Link
          href={providerData?.websiteLink || 'https://void-works.netlify.app/'}
          target="_blank"
          className="flex justify-center items-center mt-[15px] mb-[20px] text-center"
        >
          <div
            className="flex justify-center items-center gap-[12px] bg-[#FF9800] px-[12px] md:px-[25px] py-[7px] md:py-[10px] rounded-[12px] md:rounded-[20px] w-fit"
            style={{ boxShadow: '6px 4px 4px 0px #00000040' }}
          >
            <h1 className="font-[400] text-[14px] text-black md:text-[20px]">VISIT WEBSITE</h1>
            <Image alt="icons" src={shareIcon} width={20} height={20} />
          </div>
        </Link>
      </div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="flex flex-col gap-4 bg-white text-black modal-box">
          <h3 className="font-bold text-lg">Edit Name!</h3>
          <input
            type="text"
            className="p-2 border rounded-md outline-black"
            defaultValue={name || providerData?.nameOftheFirm}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" aria-label="Save Info" onClick={handleSave} className="bg-[#FF9800] p-2 rounded-lg w-fit text-black">
            Save
          </button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7" aria-label="modalClose">
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          Close
        </label>
      </div>
    </>
  );
};

export default Title;
