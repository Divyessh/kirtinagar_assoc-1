'use client';

import React from 'react';
import TeamHeader from './TeamHeader';
import styles from '../page.module.css';
import MemberCard from './MemberCard';

const ExecMembers = () => {
  const [membersData, setMembersData] = React.useState([
    {
      "S.NO.": 1,
      "NAME OF THE CANDIDATE": "Sh. Kanti Lal Patel",
      "POST OF THE CANDIDATE": "Chairman",
      "ADDRESS": "1/57A",
      "MOBILE NO.": 9811251020
    },
    {
      "S.NO.": 2,
      "NAME OF THE CANDIDATE": "Sh. Ghanshyam Kushwaha",
      "POST OF THE CANDIDATE": "President",
      "ADDRESS": "A-176/177",
      "MOBILE NO.": 9810008776
    },
    {
      "S.NO.": 3,
      "NAME OF THE CANDIDATE": "Sh. Rajesh Gupta",
      "POST OF THE CANDIDATE": "Sr. Vice-President",
      "ADDRESS": "B-96",
      "MOBILE NO.": 9810054805
    },
    {
      "S.NO.": 4,
      "NAME OF THE CANDIDATE": "Sh. Vijay Patel",
      "POST OF THE CANDIDATE": "Vice-President",
      "ADDRESS": "1/50",
      "MOBILE NO.": 9313563888
    },
    {
      "S.NO.": 5,
      "NAME OF THE CANDIDATE": "Sh. Vikram Verma",
      "POST OF THE CANDIDATE": "General Secretary",
      "ADDRESS": "2/88-1",
      "MOBILE NO.": 9868280789
    },
    {
      "S.NO.": 6,
      "NAME OF THE CANDIDATE": "Sh. Ritesh Jitani",
      "POST OF THE CANDIDATE": "Secretary",
      "ADDRESS": "2/95/4",
      "MOBILE NO.": 9811334172
    },
    {
      "S.NO.": 7,
      "NAME OF THE CANDIDATE": "Sh. Vinod Kuchhal",
      "POST OF THE CANDIDATE": "Treasurer",
      "ADDRESS": "A-39/40",
      "MOBILE NO.": 9899019584
    },
    {
      "S.NO.": 8,
      "NAME OF THE CANDIDATE": "Sh. Dinesh Kumar Bansal",
      "POST OF THE CANDIDATE": "Joint Treasurer",
      "ADDRESS": "B-126",
      "MOBILE NO.": 8444999666
    },
    {
      "S.NO.": 9,
      "NAME OF THE CANDIDATE": "Sardar Rattanjit Singh",
      "POST OF THE CANDIDATE": "Addl. Vice-President",
      "ADDRESS": "B-69",
      "MOBILE NO.": 9999035367
    },
    {
      "S.NO.": 10,
      "NAME OF THE CANDIDATE": "Sh. Arvind Patel",
      "POST OF THE CANDIDATE": "Addl. Vice-President",
      "ADDRESS": "B-2",
      "MOBILE NO.": 9350137699
    },
    {
      "S.NO.": 11,
      "NAME OF THE CANDIDATE": "Sh. Amit Grover",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "A-55",
      "MOBILE NO.": 9810035155
    },
    {
      "S.NO.": 12,
      "NAME OF THE CANDIDATE": "Sh. Vyas Sambi",
      "POST OF THE CANDIDATE": "Addl. Secretary Liasoning",
      "ADDRESS": "2/88/2",
      "MOBILE NO.": 9811171989
    },
    {
      "S.NO.": 13,
      "NAME OF THE CANDIDATE": "Sh. Mayank Gandhi",
      "POST OF THE CANDIDATE": "Addl. Secretary Legal",
      "ADDRESS": "2/9",
      "MOBILE NO.": 9999184240
    },
    {
      "S.NO.": 14,
      "NAME OF THE CANDIDATE": "Sh. Naresh Kumar",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "A-151",
      "MOBILE NO.": 9810243402
    },
    {
      "S.NO.": 15,
      "NAME OF THE CANDIDATE": "Sh. Rakesh Vishwakarma",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "A-146",
      "MOBILE NO.": 9810981051
    },
    {
      "S.NO.": 16,
      "NAME OF THE CANDIDATE": "Sh. Amit Maheshwari",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "A-32",
      "MOBILE NO.": 9810829271
    },
    {
      "S.NO.": 17,
      "NAME OF THE CANDIDATE": "Sh. Pankaj Ahuja",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "A-198 S.No.1",
      "MOBILE NO.": 9811129616
    },
    {
      "S.NO.": 18,
      "NAME OF THE CANDIDATE": "Sh. Naveen Patel",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "A-2/54",
      "MOBILE NO.": 9654235088
    },
    {
      "S.NO.": 19,
      "NAME OF THE CANDIDATE": "Sh. Puneet Mittal",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "B-97",
      "MOBILE NO.": 9818667771
    },
    {
      "S.NO.": 20,
      "NAME OF THE CANDIDATE": "Sh. Lalit Kharbanda",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "B-86",
      "MOBILE NO.": 8447124451
    },
    {
      "S.NO.": 21,
      "NAME OF THE CANDIDATE": "Sh. Umesh Dhawan",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "1/101-C",
      "MOBILE NO.": 9811311911
    },
    {
      "S.NO.": 22,
      "NAME OF THE CANDIDATE": "Sardar T.S. Bawa",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "1/49",
      "MOBILE NO.": 9811211155
    },
    {
      "S.NO.": 23,
      "NAME OF THE CANDIDATE": "Sh. Harish Chawla",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "1/11",
      "MOBILE NO.": 9811008485
    },
    {
      "S.NO.": 24,
      "NAME OF THE CANDIDATE": "Sh. Sandeep Bajaj",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "1/57-B",
      "MOBILE NO.": 9810192558
    },
    {
      "S.NO.": 25,
      "NAME OF THE CANDIDATE": "Sh. Vinay Kapur",
      "POST OF THE CANDIDATE": "Executive",
      "ADDRESS": "1/93",
      "MOBILE NO.": 9810167337
    }
  ]
  );
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.bg_office}>
      <TeamHeader title="MANAGING COMMITTEE" />
      <div className="grid grid-cols-4 md:grid-cols-5 gap-[10px] md:gap-[60px] md:px-6 py-8">
        {membersData.map((member, index) => (
          <MemberCard key={index + 1} name={member['NAME OF THE CANDIDATE']} phone={member['MOBILE NO.']} address={member['ADDRESS']} />
        ))}
      </div>
      
    </div>
  );
};

export default ExecMembers;
