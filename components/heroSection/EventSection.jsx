import React from 'react';
import Link from 'next/link';

const EventSection = () => {
  return (
    <div className="col-span-6 md:col-span-2 w-full bg-[#E5DFCF] h-[400px] md:h-[658px] rounded-[10px] py-[23px] px-[26px] relative z-0">
      <h1 className="text-[21px] font-bold text-[#413833] underline">Events and Blogs</h1>
      <div className="flex flex-col justify-between items-stretch gap-5 mt-4 overflow-hidden overflow-y-scroll md:max-h-[60vh] max-h-[50vh] scrollbar">
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
        <button type="button" className="btn btn-primary ">
          {' '}
          <Link class="twitter-timeline" href="https://twitter.com/kirtinagarwhs?ref_src=twsrc%5Etfw">
            Tweets by kirtinagarwhs
          </Link>{' '}
        </button>
      </div>
    </div>
  );
};

export default EventSection;
