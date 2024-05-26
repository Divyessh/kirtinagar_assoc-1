import React from 'react';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import galleryBanner from '../../assets/png/services.png';
import TeamSection from '../../components/ourteam/TeamSection';
import ExecMemebers from '../../components/ourteam/ExecMemebers';
import WebCommitte from '../../components/ourteam/WebCommitte';

const OurTeam = () => {
  return (
    <div>
      <PagesHeader title="OUR TEAM" bannerImage={galleryBanner} />
      <ExecMemebers />
      <TeamSection />
      <WebCommitte />
    </div>
  );
};

export default OurTeam;
