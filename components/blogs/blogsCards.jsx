import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import Link from 'next/link';

const Card = ({ blogImage, blogTitle, blogAuthor, id }) => (
  <Link href={`/blogs/${id}`}>
    <div
      className="bg-[#E5DFCF] shadow-2xl mx-auto md:mx-[0px] rounded-xl w-[300px] md:w-[350px] card"
      style={{ padding: 0, border: 'none', maxHeight: '400px', overflow: 'hidden' }}
    >
      <Image src={blogImage} alt="image" className="rounded-xl" width={350} height={300} style={{ height: '300px', width: '350px' }} />
      <div className="bg-[#E5DFCF] shadow-2xl p-4 rounded-b-xl text-black text-center">
        <span className="font-bold md:text-2xl">{blogTitle.length > 20 ? `${blogTitle.substring(0, 20)}...` : blogTitle}</span>
        <br />
        <span className="font-semibold text-md">
          Posted By: <span className="text-[#EC5B2D]">{blogAuthor}</span>
        </span>
      </div>
    </div>
  </Link>
);

export default Card;
