"use client";

import React from "react";
import TeamHeader from "./TeamHeader";
import styles from "../page.module.css";
import MemberCard from "./MemberCard";

const ExecMembers = () => {
  const [members] = React.useState();
  const membersData = [
    {
      "S.NO.": 2,
      "NAME OF THE CANDIDATE": "Sh. Ghanshyam Kushwaha",
      "POST OF THE CANDIDATE": "President",
      ADDRESS: "A-176/177",
      "MOBILE NO.": 9810008776,
    },
    {
      "S.NO.": 3,
      "NAME OF THE CANDIDATE": "Sh. Rajesh Gupta",
      "POST OF THE CANDIDATE": "Sr. Vice-President",
      ADDRESS: "B-96",
      "MOBILE NO.": 9810054805,
    },
    {
      "S.NO.": 4,
      "NAME OF THE CANDIDATE": "Sh. Vijay Patel",
      "POST OF THE CANDIDATE": "Vice-President",
      ADDRESS: "1/50",
      "MOBILE NO.": 9313563888,
    },
    {
      "S.NO.": 5,
      "NAME OF THE CANDIDATE": "Sh. Vikram Verma",
      "POST OF THE CANDIDATE": "General Secretary",
      ADDRESS: "2/88-1",
      "MOBILE NO.": 9868280789,
    },
    {
      "S.NO.": 6,
      "NAME OF THE CANDIDATE": "Sh. Ritesh Jitani",
      "POST OF THE CANDIDATE": "Secretary",
      ADDRESS: "2/95/4",
      "MOBILE NO.": 9811334172,
    },
    {
      "S.NO.": 7,
      "NAME OF THE CANDIDATE": "Sh. Vinod Kuchhal",
      "POST OF THE CANDIDATE": "Treasurer",
      ADDRESS: "A-39/40",
      "MOBILE NO.": 9899019584,
    },
    {
      "S.NO.": 8,
      "NAME OF THE CANDIDATE": "Sh. Dinesh Kumar Bansal",
      "POST OF THE CANDIDATE": "Joint Treasurer",
      ADDRESS: "B-126",
      "MOBILE NO.": 8444999666,
    },
  ];

  return (
    <div className={styles.bg_office}>
      <TeamHeader title="OFFICE BEARERS" />
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

export default ExecMembers;
