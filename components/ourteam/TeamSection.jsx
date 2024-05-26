'use client';

import React from 'react';
import TeamHeader from './TeamHeader';
import styles from '../page.module.css';
import MemberCard from './MemberCard';

const TeamSection = () => {
  const [members] = React.useState();
  const membersData = [
    {
      'S.NO.': 1,
      'NAME OF THE CANDIDATE': 'Sh. Kanti Lal Patel',
      'POST OF THE CANDIDATE': 'Chairman',
      ADDRESS: '1/57A',
      'MOBILE NO.': 9811251020,
    },
  ];
  return (
    <div className={styles.bg_office}>
      <TeamHeader title="Honorary Member" />
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

export default TeamSection;
