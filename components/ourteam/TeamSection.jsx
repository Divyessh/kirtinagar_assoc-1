"use client";

import React from "react";
import TeamHeader from "./TeamHeader";
import styles from "../page.module.css";
import MemberCard from "./MemberCard";

const TeamSection = () => {
  const [members] = React.useState();
  const membersData = [
    {
      "S.NO.": 1,
      "NAME OF THE CANDIDATE": "Sh. Kanti Lal Patel",
      "POST OF THE CANDIDATE": "Chairman",
      ADDRESS: "1/57A",
      "MOBILE NO.": 9811251020,
    },
    {
      "S.NO.": 2,
      "NAME OF THE CANDIDATE": "Sardar Rattanjit Singh",
      "POST OF THE CANDIDATE": "Addl. Vice-President",
      ADDRESS: "B-69",
      "MOBILE NO.": 9999035367,
    },
    {
      "S.NO.": 10,
      "NAME OF THE CANDIDATE": "Sh. Arvind Patel",
      "POST OF THE CANDIDATE": "Addl. Vice-President",
      ADDRESS: "B-2",
      "MOBILE NO.": 9350137699,
      img: "/members/arvind.jpg",
    },
    {
      "S.NO.": 12,
      "NAME OF THE CANDIDATE": "Sh. Vyas Sambi",
      "POST OF THE CANDIDATE": "Addl. Secretary Liasoning",
      ADDRESS: "2/88/2",
      "MOBILE NO.": 9811171989,
    },
    {
      "S.NO.": 13,
      "NAME OF THE CANDIDATE": "Sh. Mayank Gandhi",
      "POST OF THE CANDIDATE": "Addl. Secretary Legal",
      ADDRESS: "2/9",
      "MOBILE NO.": 9999184240,
    },
  ];
  return (
    <div className={styles.bg_office}>
      <TeamHeader title="Honorary Member" />
      <div className="gap-[10px] md:gap-[60px] grid grid-cols-4 md:grid-cols-5 md:px-6 py-8">
        {membersData.slice(0, members)?.map((member) => (
          // eslint-disable-next-line react/no-array-index-key
          <MemberCard
            key={member["S.NO."]}
            name={member["NAME OF THE CANDIDATE"]}
            phone={member["MOBILE NO."]}
            address={member.ADDRESS}
            position={member["POST OF THE CANDIDATE"]}
            img={member.img}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
