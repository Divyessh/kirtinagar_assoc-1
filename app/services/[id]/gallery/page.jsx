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
      <Title id={id} />
      <Nav pageName="Gallery" id={id} />
      <GalleryContent id={id} />
      <RelatedProviders />
    </ServiceWrapper>
  );
};

export default GalleryServices;
