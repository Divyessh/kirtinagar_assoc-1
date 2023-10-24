import React from 'react';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import galleryBanner from '../../assets/png/services.png';
import TeamSection from '../../components/ourteam/TeamSection';
import ExecMemebers from '../../components/ourteam/ExecMemebers';
import ImageHr from '../../components/ourteam/ImageHr';
import WebCommitte from '../../components/ourteam/WebCommitte';

const OurTeam = () => {
  return (
    <div>
      <PagesHeader title="OUR TEAM" bannerImage={galleryBanner} />
      <TeamSection />
      <ImageHr />
      <ExecMemebers />
      <ImageHr />
      <WebCommitte />
    </div>
  );
};

export default OurTeam;
