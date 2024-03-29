import React from 'react';
import Image from 'next/image';

const MemberCard = ({ name, phone, address, position, img }) => {
  return (
    <div className="col-span-2 md:col-span-1 card_flip flex justify-center items-center md:ml-2">
      <div className="card_flip-content card_flip-front col-span-1 flex flex-col items-center w-fit rounded-lg">
        <Image
          width={200}
          height={200}
          alt="teamMember"
          src={img || '/members/dummy.jpg'}
          className="w-[200px] h-[180px] rounded-md z-[6]"
        />
        <div className="bg-white w-full min-h-[85px] mx-3 flex flex-col items-center justify-center -translate-y-[5px] z-[5]">
          <h1 className="text-[20px] text-[#EC5B2D] font-[700] text-ellipsis ">{name}</h1>
          <h1 className="text-[20px] text-[#EC5B2D] font-[700] text-ellipsis ">{position}</h1>
        </div>
      </div>
      <div className="card_flip-content card_flip-back col-span-1 flex flex-col bg-white max-w-fit h-[230px] rounded-lg px-4 py-5 gap-[12px]">
        <div>
          <h1 className="text-[#EC5B2D] font-[700] text-[18px]">Address:</h1>
          <p className="text-[#393636] font-[700] text-[18px]">{address}, w.h.s, kirti Nagar, New Delhi-110015</p>
        </div>
        <div>
          <h1 className="text-[#EC5B2D] font-[700] text-[18px]">Phone No:</h1>
          <p className="text-[#393636] font-[700] text-[18px]">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
