import React from 'react';
import Image from 'next/image';
import memberImg from '../../assets/png/teamMember.png';

const MemberCard = () => {
  return (
    <div className="card_flip">
      <div className="card_flip-content card_flip-front col-span-1 flex flex-col items-center w-fit rounded-lg">
        <Image width={220} height={200} alt="teamMember" src={memberImg} className="rounded-md z-[6]" />
        <div className="bg-white w-full p-3 pb-[14px] flex items-center justify-center -translate-y-[5px] z-[5]">
          <h1 className="text-[20px] text-[#EC5B2D] font-[700]">KANTI PATEL</h1>
        </div>
      </div>
      <div className="card_flip-content card_flip-back col-span-1 flex flex-col bg-white w-fit h-[230px] rounded-lg px-4 py-5 gap-[12px]">
        <div>
          <h1 className="text-[#EC5B2D] font-[700] text-[18px]">Address:</h1>
          <p className="text-[#393636] font-[700] text-[18px]">1/57-a, w.h.s, kirti Nagar, New Delhi-110015</p>
        </div>
        <div>
          <h1 className="text-[#EC5B2D] font-[700] text-[18px]">Phone No:</h1>
          <p className="text-[#393636] font-[700] text-[18px]">9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
