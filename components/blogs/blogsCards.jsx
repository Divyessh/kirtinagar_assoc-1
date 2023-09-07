import React from 'react';
import Image from 'next/image'; // Use Image from next/image

const Card = ({blogImage,key,blogTitle,blogAuthor}) => (
<div className="card  md:w-[350px] w-[200px] bg-[#E5DFCF] shadow-2xl rounded-xl">
    <Image src={blogImage} alt="image" className="rounded-xl" />
    <div className="bg-[#E5DFCF] text-black text-center md:p-4 rounded-b-xl shadow-2xl">
      <span className=" font-bold md:text-2xl ">{blogTitle}</span>
      <span className='font-semibold text-md'>Posted By: <span className='text-[#EC5B2D]'>{blogAuthor}</span></span>
    </div>
  </div>
);

export default Card;
