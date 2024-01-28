import React from 'react';
import Link from 'next/link';

const EventSection = () => {
  return (
    <div className="col-span-6 md:col-span-2 w-full bg-[#E5DFCF] h-[600px] md:h-[658px] rounded-[10px] py-[23px] px-[26px] relative ">
      <h1 className="text-[21px] font-bold text-[#413833] underline">Events and Blogs</h1>
      <div className="flex flex-col justify-between items-stretch gap-5 mt-4 overflow-hidden overflow-y-scroll h-[70vh] scrollbar">
        <Link class="twitter-timeline" href="https://twitter.com/kirtinagarwhs?ref_src=twsrc%5Etfw">
          Tweets by kirtinagarwhs
        </Link>{' '}
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
      </div>
    </div>
  );
};

export default EventSection;
