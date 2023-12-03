'use client';

import React from 'react';
import axios from 'axios';
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill, BsChevronDown } from 'react-icons/bs';
import { FaEnvelope, FaRegEdit } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { AiFillFile, AiFillClockCircle } from 'react-icons/ai';
import Heading from './heading';
import { useUpdateProviderByIdMutation } from '../../../redux/api/apiSlice';
// import SkeletonCard from '../../blogs/skeletonCard';
import retryOperation from '../../../lib/retryOperation';
import SkeletonCard from '../../blogs/skeletonCard';

const Contact = ({ id }) => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  // Not mapping cuz contact will not be in array format
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/provider/${id}`);
        setData(res?.data?.data);
        setIsLoading(false);
        return res?.data?.data;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
        setIsLoading(false);
        return error;
      }
    };
    fetchData();
  }, [id]);
  const [contactInfo, setContactInfo] = React.useState({
    address: data?.address,
    contactNumber: data?.contactNumber,
    websiteLink: data?.websiteLink,
    email: data?.email,
  });
  const { data: session } = useSession();
  // eslint-disable-next-line no-underscore-dangle
  const isUser = session?.user?._id;
  const [update] = useUpdateProviderByIdMutation();

  // eslint-disable-next-line consistent-return
  const MAX_RETRIES = 10;
  const RETRY_DELAY = 300; // 300 milliseconds

  const handleSave = async () => {
    const result = await retryOperation(() => update({ ...data, ...contactInfo }), MAX_RETRIES, RETRY_DELAY);
    return result;
    // Handle the result as needed
  };
  return isLoading ? (
    <SkeletonCard />
  ) : (
    <>
      <div style={{ borderBottom: '1px solid #2B1607', paddingBottom: '16px' }}>
        <div className="w-full flex justify-center items-center gap-2">
          {isUser === id && (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="my_modal_9" aria-label="open modal">
              <FaRegEdit className="text-[20px] md:text-[38px] text-black md:mt-2" />
            </label>
          )}
          <Heading title="Contact" />
        </div>
        <div className="grid grid-cols-5 md:grid-cols-12 gap-[80px] mt-[40px]">
          <div className="col-span-3 md:col-span-8 flex flex-col gap-[15px] md:gap-[30px]">
            <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
              <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
                <MdLocationOn className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] text-black text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px]">
                  {data?.address || contactInfo?.address}
                </h1>
                <h1 className="w-[80%] text-[13px] text-black md:text-[28px] font-[700] leading-[15px] md:leading-[40px]">
                  GST No. 1234567890ABCD
                </h1>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
              <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
                <BsFillTelephoneFill className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-black">
                  {data?.contactNumber || contactInfo?.contactNumber}
                </h1>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
              <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
                <GiEarthAfricaEurope className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-black">
                  {data?.websiteLink || contactInfo?.websiteLink}
                </h1>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
              <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
                <FaEnvelope className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-black">
                  Request a quote
                </h1>
              </div>
            </div>
            <div className="max-md:ml-1  flex items-start justify-center gap-[10px] md:gap-[20px]">
              <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
                <AiFillFile className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] text-[13px] text-black md:text-[28px] font-[700] leading-[15px] md:leading-[40px]">
                  {data?.email}
                </h1>
              </div>
            </div>
            <div className="flex items-start justify-center gap-[10px] md:gap-[20px]">
              <div className="w-[5%] text-[13px] md:text-[30px] mt-[0px] md:mt-[7px]">
                <AiFillClockCircle className="text-black" />
              </div>
              <div className="w-[95%]">
                <h1 className="w-[100%] text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-black">Timings</h1>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-4 text-[13px] md:text-[28px] font-[700] leading-[15px] md:leading-[40px] text-center">
            <h1 className="text-black">LOCATION</h1>
          </div>
        </div>
        <div className="text-center flex items-center justify-center gap-2">
          <h1 className="font-[600] text-[15px] md:text-[23px] text-black">9 AM - 9 PM</h1>
          <button type="button" className=" w-fit rounded-full p-[3px] bg-[#382F2A]" aria-label="Time">
            <BsChevronDown className="font-[600] text-[8px] text-white md:text-[16px]" />
          </button>
        </div>
      </div>
      <input type="checkbox" id="my_modal_9" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-black flex flex-col gap-4">
          <h3 className="text-lg font-bold">Edit Contact Details!</h3>
          <input
            type="text"
            placeholder="Enter Address"
            className="border p-2 rounded-md outline-black"
            defaultValue={contactInfo?.address || data?.address}
            onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Contact Number"
            className="border p-2 rounded-md outline-black"
            defaultValue={contactInfo?.contactNumber || data?.contactNumber}
            onChange={(e) => setContactInfo({ ...contactInfo, contactNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter WebSite Link"
            className="border p-2 rounded-md outline-black"
            defaultValue={contactInfo?.websiteLink || data?.websiteLink}
            onChange={(e) => setContactInfo({ ...contactInfo, websiteLink: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="border p-2 rounded-md outline-black"
            defaultValue={contactInfo?.email || data?.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
          />
          <button type="button" aria-label="Save Info" onClick={handleSave} className="bg-[#FF9800] text-black p-2 rounded-lg w-fit">
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
