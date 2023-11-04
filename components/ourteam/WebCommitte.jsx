'use client';

import React from 'react';
import TeamHeader from './TeamHeader';
import styles from '../page.module.css';
import MemberCard from './MemberCard';

const WebCommitte = () => {
  const [members, setMembers] = React.useState(5);
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={styles.bg_office}>
      <TeamHeader title="WEBSITE COMMITTE" />
      <div className="grid grid-cols-4 md:grid-cols-5 gap-[10px] md:gap-[60px] px-2 py-8">
        {dummy.slice(0, members)?.map((item) => (
          <MemberCard key={item} />
        ))}
      </div>
      <div className="flex items-center justify-center pb-4">
        <button
          type="button"
          onClick={() => setMembers(dummy.length - 1)}
          className="bg-[#413833] text-white p-2 rounded-lg"
          style={{ display: members === dummy.length - 1 ? 'none' : 'block' }}
        >
          {'View All >'}
        </button>
      </div>
    </div>
  );
};

export default WebCommitte;
