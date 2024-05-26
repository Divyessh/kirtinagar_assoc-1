'use client';

import React from 'react';
import TeamHeader from './TeamHeader';
import styles from '../page.module.css';
import MemberCard from './MemberCard';

const WebCommitte = () => {
  const [members] = React.useState();
  const membersData = [
    {
      'S.NO.': 11,
      'NAME OF THE CANDIDATE': 'Sh. Amit Grover',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'A-55',
      'MOBILE NO.': 9810035155,
    },
    {
      'S.NO.': 14,
      'NAME OF THE CANDIDATE': 'Sh. Naresh Kumar',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'A-151',
      'MOBILE NO.': 9810243402,
    },
    {
      'S.NO.': 15,
      'NAME OF THE CANDIDATE': 'Sh. Rakesh Vishwakarma',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'A-146',
      'MOBILE NO.': 9810981051,
    },
    {
      'S.NO.': 16,
      'NAME OF THE CANDIDATE': 'Sh. Amit Maheshwari',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'A-32',
      'MOBILE NO.': 9810829271,
    },
    {
      'S.NO.': 17,
      'NAME OF THE CANDIDATE': 'Sh. Pankaj Ahuja',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'A-198 S.No.1',
      'MOBILE NO.': 9811129616,
      img: '/members/pankaj.JPG',
    },
    {
      'S.NO.': 18,
      'NAME OF THE CANDIDATE': 'Sh. Naveen Patel',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'A-2/54',
      'MOBILE NO.': 9654235088,
    },
    {
      'S.NO.': 19,
      'NAME OF THE CANDIDATE': 'Sh. Puneet Mittal',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'B-97',
      'MOBILE NO.': 9818667771,
    },
    {
      'S.NO.': 20,
      'NAME OF THE CANDIDATE': 'Sh. Lalit Kharbanda',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: 'B-86',
      'MOBILE NO.': 8447124451,
    },
    {
      'S.NO.': 21,
      'NAME OF THE CANDIDATE': 'Sh. Umesh Dhawan',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: '1/101-C',
      'MOBILE NO.': 9811311911,
    },
    {
      'S.NO.': 22,
      'NAME OF THE CANDIDATE': 'Sardar T.S. Bawa',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: '1/49',
      'MOBILE NO.': 9811211155,
    },
    {
      'S.NO.': 23,
      'NAME OF THE CANDIDATE': 'Sh. Harish Chawla',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: '1/11',
      'MOBILE NO.': 9811008485,
    },
    {
      'S.NO.': 24,
      'NAME OF THE CANDIDATE': 'Sh. Sandeep Bajaj',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: '1/57-B',
      'MOBILE NO.': 9810192558,
    },
    {
      'S.NO.': 25,
      'NAME OF THE CANDIDATE': 'Sh. Vinay Kapur',
      'POST OF THE CANDIDATE': 'Executive',
      ADDRESS: '1/93',
      'MOBILE NO.': 9810167337,
    },
  ];

  return (
    <div className={styles.bg_office}>
      <TeamHeader title="Executive Committee" />
      <div className="gap-[10px] md:gap-[60px] grid grid-cols-4 md:grid-cols-5 md:px-6 py-8">
        {membersData.slice(0, members)?.map((member) => (
          // eslint-disable-next-line react/no-array-index-key
          <MemberCard
            key={member['S.NO.']}
            name={member['NAME OF THE CANDIDATE']}
            phone={member['MOBILE NO.']}
            address={member.ADDRESS}
            position={member['POST OF THE CANDIDATE']}
            img={member.img}
          />
        ))}
      </div>
    </div>
  );
};

export default WebCommitte;
