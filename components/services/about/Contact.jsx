'use client';

import React from 'react';
import axios from 'axios';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaEnvelope, FaRegEdit } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { AiFillClockCircle } from 'react-icons/ai';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Heading from './heading';
import SkeletonCard from '../../blogs/skeletonCard';

const Contact = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['Provider', id],
    queryFn: async () => {
      const res = await axios.get(`/api/provider/${id}`);
      return res?.data?.data;
    },
  });
  const [contactInfo, setContactInfo] = React.useState({
    address: data?.address,
    contactNumber: data?.contactNumber,
    websiteLink: data?.websiteLink,
    email: data?.email,
    location: data?.location,
  });
  const { data: session } = useSession();
  // eslint-disable-next-line no-underscore-dangle
  const isUser = session?.user?._id;
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
      toast.success('Details updated!');
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });

  const handleSave = async () => {
    handleUpdate({ ...data, ...contactInfo });
  };
  return isLoading || data?.length === 0 ? (
    <SkeletonCard />
  ) : (
    <>
      <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
        <div className="flex justify-center items-center gap-2 w-full">
          {isUser === id && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="my_modal_9" aria-label="open modal">
              <FaRegEdit className="md:mt-2 text-[20px] text-black md:text-[38px]" />
            </label>
          )}
          <Heading title="Contact" />
        </div>
        <div className="gap-[80px] grid grid-cols-5 md:grid-cols-12 mt-[40px]">
          <div className="flex flex-col gap-[15px] md:gap-[30px] col-span-3 md:col-span-8">
            <div className="flex justify-center items-start gap-[10px] md:gap-[20px]">
              <div className="mt-[0px] md:mt-[7px] w-[5%] text-[13px] md:text-[30px]">
                <MdLocationOn className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] font-[700] text-[13px] text-black md:text-[28px] leading-[15px] md:leading-[40px]">
                  {data?.address || contactInfo?.address}
                </h1>
                {/* <h1 className="w-[80%] font-[700] text-[13px] text-black md:text-[28px] leading-[15px] md:leading-[40px]">
                  GST No. 1234567890ABCD
                </h1> */}
              </div>
            </div>
            <div className="flex justify-center items-start gap-[10px] md:gap-[20px]">
              <div className="mt-[0px] md:mt-[7px] w-[5%] text-[13px] md:text-[30px]">
                <BsFillTelephoneFill className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] font-[700] text-[13px] text-black md:text-[28px] leading-[15px] md:leading-[40px]">
                  {data?.contactNumber || contactInfo?.contactNumber || 12345677889}
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-start gap-[10px] md:gap-[20px]">
              <div className="mt-[0px] md:mt-[7px] w-[5%] text-[13px] md:text-[30px]">
                <GiEarthAfricaEurope className="text-black" />
              </div>
              <div className="w-[95%]">
                <Link
                  href={data?.websiteLink || contactInfo?.websiteLink || 'https://void-works.netlify.app/'}
                  className="w-[100%] font-[700] text-[13px] text-black md:text-[28px] hover:text-blue-400 leading-[15px] md:leading-[40px]"
                  target="_blank"
                >
                  {data?.websiteLink || contactInfo?.websiteLink}
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-start gap-[10px] md:gap-[20px]">
              <div className="mt-[0px] md:mt-[7px] w-[5%] text-[13px] md:text-[30px]">
                <BsFillTelephoneFill className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] font-[700] text-[13px] text-black md:text-[28px] leading-[15px] md:leading-[40px]">
                  {data?.landlineNumber || contactInfo?.landlineNumber || 12345677889}
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-start gap-[10px] md:gap-[20px] max-md:ml-1">
              <div className="mt-[0px] md:mt-[7px] w-[5%] text-[13px] md:text-[30px]">
                <FaEnvelope className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] font-[700] text-[13px] text-black md:text-[28px] leading-[15px] md:leading-[40px]">
                  {data?.email}
                </h1>
              </div>
            </div>
            <div className="flex justify-center items-start gap-[10px] md:gap-[20px]">
              <div className="mt-[0px] md:mt-[7px] w-[5%] text-[13px] md:text-[30px]">
                <AiFillClockCircle className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] font-[700] text-[13px] text-black md:text-[28px] leading-[15px] md:leading-[40px]">Timings</h1>
                <h1 className="font-[600] text-[15px] text-black md:text-[23px]">9 AM - 9 PM</h1>
              </div>
            </div>
          </div>
          {typeof data?.location === 'string' && data?.location?.startsWith('https') && (
            <div className="col-span-2 md:col-span-4 md:pb-10 font-[700] text-[13px] text-center md:text-[28px] leading-[15px] md:leading-[40px]">
              <h1 className="text-black">LOCATION</h1>
              <iframe
                title="con"
                src={data?.location}
                className="w-full h-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
        {/* <div className="flex justify-start items-center gap-2 pl-12 text-start">
          <h1 className="font-[600] text-[15px] text-black md:text-[23px]">9 AM - 9 PM</h1>
          <button type="button" className="bg-[#382F2A] p-[3px] rounded-full w-fit" aria-label="Time">
            <BsChevronDown className="font-[600] text-[8px] text-white md:text-[16px]" />
          </button>
        </div> */}
      </div>
      <input type="checkbox" id="my_modal_9" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="flex flex-col gap-4 bg-white text-black modal-box">
          <h3 className="font-bold text-lg">Edit Contact Details!</h3>
          <input
            type="text"
            placeholder="Enter Address"
            className="p-2 border rounded-md outline-black"
            defaultValue={contactInfo?.address || data?.address}
            onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Contact Number"
            className="p-2 border rounded-md outline-black"
            defaultValue={contactInfo?.contactNumber || data?.contactNumber}
            onChange={(e) => setContactInfo({ ...contactInfo, contactNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter WebSite Link"
            className="p-2 border rounded-md outline-black"
            defaultValue={contactInfo?.websiteLink || data?.websiteLink}
            onChange={(e) => setContactInfo({ ...contactInfo, websiteLink: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="p-2 border rounded-md outline-black"
            defaultValue={contactInfo?.email || data?.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Google Maps Location"
            className="p-2 border rounded-md outline-black"
            defaultValue={contactInfo?.location || data?.location}
            onChange={(e) => setContactInfo({ ...contactInfo, location: e.target.value })}
          />
          <button type="button" aria-label="Save Info" onClick={handleSave} className="bg-[#FF9800] p-2 rounded-lg w-fit text-black">
            Save
          </button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_9" aria-label="modalClose">
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          Close
        </label>
      </div>
    </>
  );
};

export default Contact;
