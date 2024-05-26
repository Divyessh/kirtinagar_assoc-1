import React from 'react';
import Image from 'next/image';

const MemberCard = ({ name, phone, address, position, img }) => {
  return (
    <div className="flex justify-center items-center col-span-2 md:col-span-1 md:ml-2 card_flip">
      <div className="flex flex-col items-center col-span-1 card_flip-content card_flip-front rounded-lg w-fit">
        <Image
          width={200}
          height={200}
          alt="teamMember"
          src={img || '/members/dummy.jpg'}
          className="z-[6] rounded-md w-[200px] h-[180px]"
        />
        <div className="z-[5] flex flex-col justify-center items-center bg-white mx-3 w-full min-h-[85px] text-center -translate-y-[5px]">
          <h1 className="font-[700] text-[#EC5B2D] text-[20px] text-ellipsis text-sm">{name}</h1>
          <h1 className="font-[700] text-[#EC5B2D] text-[20px] text-ellipsis text-sm">{position}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] col-span-1 bg-white px-4 py-5 card_flip-back card_flip-content rounded-lg max-w-fit h-[230px]">
        <div>
          <h1 className="font-[700] text-[#EC5B2D] text-[18px]">Address:</h1>
          <p className="font-[700] text-[#393636] text-[18px]">{address}, w.h.s, kirti Nagar, New Delhi-110015</p>
        </div>
        <div>
          <h1 className="font-[700] text-[#EC5B2D] text-[18px]">Phone No:</h1>
          <p className="font-[700] text-[#393636] text-[18px]">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
