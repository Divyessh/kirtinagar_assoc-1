import React from 'react';
import Image from 'next/image'; // Use Image from next/image

const Card = ({ blogImage, blogTitle, blogAuthor }) => (
  <div
    className="card w-[300px] mx-auto md:mx-[0px]  md:w-[350px]  bg-[#E5DFCF] shadow-2xl rounded-xl"
    style={{ padding: 0, border: 'none' }}
  >
    <Image src={blogImage} alt="image" className="rounded-xl" width={350} height={300} style={{ height: '300px', width: '350px' }} />
    <div className="bg-[#E5DFCF] text-black text-center p-4 rounded-b-xl shadow-2xl">
      <span className=" font-bold md:text-2xl ">{blogTitle}</span>
      <br />
      <span className="font-semibold text-md">
        Posted By: <span className="text-[#EC5B2D]">{blogAuthor}</span>
      </span>
    </div>
  </div>
);

export default Card;
