import React from 'react';
import Title from '../../../../components/services/title';
import ServiceWrapper from '../../../../components/services/serviceWrapper';
import Nav from '../../../../components/services/nav';
import ServiceContent from '../../../../components/services/about/ServiceContent';
import RelatedProviders from '../../../../components/services/relatedProviders';

const GalleryServices = ({ params }) => {
  const { id } = params;
  return (
    <ServiceWrapper>
      <Title />
      <Nav pageName="Services" id={id} />
      <ServiceContent id={id} />
      <RelatedProviders />
    </ServiceWrapper>
  );
};

export default GalleryServices;
