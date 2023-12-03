'use client';

import { useSession } from 'next-auth/react';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IoSettings } from 'react-icons/io5';
// import { useUpdateProviderByIdMutation } from '../../../redux/api/apiSlice';
// import retryOperation from '../../../lib/retryOperation';
import Heading from './heading';

const ServiceContent = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['Provider', id],
    queryFn: async () => {
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
  // const [update] = useUpdateProviderByIdMutation();
  // const providerData = data?.data;
  React.useEffect(() => {
    if (!isLoading) {
      setProviderData(data?.services || []);
    }
  }, [data, isLoading]);
  // eslint-disable-next-line no-underscore-dangle
  const isUser = session?.user?._id;
  if (isLoading) return <div className="flex items-center">Loading....</div>;

  const handleAdd = (i) => {
    setProviderData([...providerData, i]);
    setNewProvider('');
  };

  const handleRemove = (i) => {
    const updatedProviderData = [...providerData];
    updatedProviderData.splice(i, 1);
    setProviderData(updatedProviderData);
  };

  // eslint-disable-next-line consistent-return
  // const MAX_RETRIES = 10;
  // const RETRY_DELAY = 300; // 300 milliseconds

  const handleSave = async () => {
    // const result = await retryOperation(() => update({ ...data?.data, services: providerData }), MAX_RETRIES, RETRY_DELAY);
    // return result;
    // Handle the result as needed
    console.log('Clicked');
  };

  return (
    <>
      <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
        <div className="w-full flex justify-center items-center gap-2">
          {isUser === id && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="my_modal_10" aria-label="open modal">
              <FaRegEdit className="text-[20px] md:text-[38px] text-black md:mt-2" />
            </label>
          )}
          <Heading title="Services" />
        </div>
        <div className="flex items-start w-full">
          <div className="w-[10%]">
            <IoSettings className="text-[20px] md:text-[40px] text-black" />
          </div>
          <div className="flex flex-wrap w-[90%] gap-[5px] md:gap-[20px]">
            {providerData?.map((service) => (
              <div
                className="w-[45%] md:w-[30%] rounded-[20px] md:rounded-[50px] md:h-full overflow-hidden px-[6px] py-[5px] text-center bg-[#FBA832]"
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
      <input type="checkbox" id="my_modal_10" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black flex flex-col gap-4">
          <h3 className="text-lg font-bold">Edit Services!</h3>
          {providerData?.map((service, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="flex items-center justify-between">
              <div className="bg-[orange] w-fit p-2 rounded-lg">
                <h1 className="text-black">{service}</h1>
              </div>
              <FaTrash className="text-[black]" onClick={() => handleRemove(i)} />
            </div>
          ))}
          <input
            type="text"
            placeholder="Enter Service Name"
            className="border p-2 rounded-md outline-black"
            value={newProvider}
            onChange={(e) => setNewProvider(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleAdd(newProvider)}
              aria-label="Save Info"
              className="bg-[#FF9800] text-black p-2 rounded-lg w-fit"
            >
              Add
            </button>
            <button type="button" onClick={handleSave} aria-label="Save Info" className="bg-[#FF9800] text-black p-2 rounded-lg w-fit">
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
