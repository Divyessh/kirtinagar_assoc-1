'use client';

import Image from 'next/image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import aboutBanner from '../../../assets/png/aboutBanner.png';

const BlogsSection = ({ params }) => {
  const { id } = params;
  const { data, isLoading } = useQuery({
    queryKey: ['blogData'],
    queryFn: async () => {
      const res = await axios.get(`/api/blog/${id}`);
      return res?.data?.data;
    },
  });
  if (isLoading) return <div className="flex justify-center items-center w-full h-screen">Loading...</div>; // Added loading state handling
  return (
    <main className="bg-primary">
      {/* <PagesHeader title="Blogs" bannerImage={galleryBanner} /> */}
      <div className="flex-col justify-center items-center px-0 md:px-12 w-full">
        <div className="flex justify-center items-center">
          <span className="py-4 border-b-2 border-black font-semibold text-4xl text-black">BLOGS</span>
        </div>
        <div className="flex justify-center items-center p-8 w-full">
          <div className="shadow-xl rounded-sm">
            <div>
              <h1 className="bg-secondary py-2 rounded-t-md font-bold text-black text-center text-xl md:text-3xl">
                {data?.postedBy || 'Title'}
              </h1>
            </div>
            <div className="px-5 py-2 pt-4">
              <Image
                src={data?.image || aboutBanner}
                alt="aboutBanner"
                className="rounded-md w-full h-[500px] object-cover"
                width={1000}
                height={400}
              />
            </div>
            <h1 className="px-4 py-2 rounded-t-md font-bold text-black text-xl md:text-3xl">{data?.title || 'Title'}</h1>
            <span className="px-5 py-2 font-semibold text-gray-800 text-md text-start md:text-lg">
              <p className="px-5 text-break">{data?.description}</p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default BlogsSection;
