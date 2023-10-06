import React from 'react';
import Title from '../../../../components/services/title';
import ServiceWrapper from '../../../../components/services/serviceWrapper';
import Nav from '../../../../components/services/nav';
import GalleryContent from '../../../../components/services/gallery/galleryContent';
import RelatedProviders from '../../../../components/services/relatedProviders';

const GalleryServices = ({ params }) => {
  const { id } = params;
  return (
    <ServiceWrapper>
      <Title />
      <Nav pageName="Gallery" id={id} />
      <GalleryContent />
      <RelatedProviders />
    </ServiceWrapper>
  );
};

export default GalleryServices;
