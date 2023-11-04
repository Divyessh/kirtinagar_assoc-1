import React from 'react';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import MemberDetails from '../../components/memberDetails/memberDetails';
import galleryBanner from '../../assets/png/services.png';

const MemberSection = () => {
  return (
    <div>
      <PagesHeader title="Members Section" bannerImage={galleryBanner} />
      <MemberDetails/>
    </div>
  );
};

export default MemberSection;
