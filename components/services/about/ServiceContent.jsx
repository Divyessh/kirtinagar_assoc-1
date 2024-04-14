/* eslint-disable consistent-return */

'use client';

import { useSession } from 'next-auth/react';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import React from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IoSettings } from 'react-icons/io5';
import Heading from './heading';

const ServiceContent = ({ id }) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ['Provider', id],
    queryFn: async () => {
      if (!id) return; // Prevent API call if id is empty or null
      const res = await axios.get(`/api/provider/${id}`);
      return res?.data?.data;
    },
  });
  const ellipsisStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  const { data: session } = useSession();
  const [providerData, setProviderData] = React.useState([]);
  const [newProvider, setNewProvider] = React.useState('');
  const { mutate: handleUpdate } = useMutation({
    mutationFn: async (update) => {
      if (!id) return; // Prevent API call if id is empty or null
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
  React.useEffect(() => {
    if (!isLoading && data) {
      setProviderData(data?.services || []);
    }
  }, [data, isLoading]);
  // eslint-disable-next-line no-underscore-dangle
  const isUser = session?.user?._id;
  if (isLoading || !id) return <div className="flex items-center">Loading....</div>;

  const handleAdd = (i) => {
    if (!i) return; // Prevent adding if input is empty or null
    setProviderData([...providerData, i]);
    setNewProvider('');
  };

  const handleRemove = (i) => {
    const updatedProviderData = [...providerData];
    updatedProviderData.splice(i, 1);
    setProviderData(updatedProviderData);
  };

  const handleSave = async () => {
    if (!providerData.length) return; // Prevent API call if providerData is empty
    handleUpdate({ ...data?.data, services: providerData });
  };

  return (
    <>
      <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
        <div className="flex justify-center items-center gap-2 w-full">
          {isUser === id && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="my_modal_10" aria-label="open modal">
              <FaRegEdit className="md:mt-2 text-[20px] text-black md:text-[38px]" />
            </label>
          )}
          <Heading title="Services" />
        </div>
        <div className="flex items-start w-full">
          <div className="w-[10%]">
            <IoSettings className="text-[20px] text-black md:text-[40px]" />
          </div>
          <div className="flex flex-wrap gap-[5px] md:gap-[20px] w-[90%]">
            {providerData?.map((service) => (
              <div
                className="bg-[#FBA832] px-[6px] py-[5px] rounded-[20px] md:rounded-[50px] w-[45%] md:w-[30%] md:h-full text-center overflow-hidden"
                key={service}
              >
                <h1 className="font-[600] text-[10px] text-black md:text-[24px]" style={ellipsisStyle}>
                  {service}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <input type="checkbox" id="my_modal_10" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="flex flex-col gap-4 bg-white text-black modal-box">
          <h3 className="font-bold text-lg">Edit Services!</h3>
          {providerData?.map((service, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="flex justify-between items-center">
              <div className="bg-[orange] p-2 rounded-lg w-fit">
                <h1 className="text-black">{service}</h1>
              </div>
              <FaTrash className="text-[black]" onClick={() => handleRemove(i)} />
            </div>
          ))}
          <input
            type="text"
            placeholder="Enter Service Name"
            className="p-2 border rounded-md outline-black"
            value={newProvider}
            maxLength={20}
            onChange={(e) => setNewProvider(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleAdd(newProvider)}
              aria-label="Save Info"
              className="bg-[#FF9800] p-2 rounded-lg w-fit text-black"
            >
              Add
            </button>
            <button type="button" onClick={handleSave} aria-label="Save Info" className="bg-[#FF9800] p-2 rounded-lg w-fit text-black">
              Save
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_10" aria-label="modalClose">
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          Close
        </label>
      </div>
    </>
  );
};

export default ServiceContent;
