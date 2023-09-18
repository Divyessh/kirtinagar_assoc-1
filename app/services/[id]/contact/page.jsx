import React from 'react';
import Title from '../../../../components/services/title';
import ServiceWrapper from '../../../../components/services/serviceWrapper';
import Nav from '../../../../components/services/nav';

const GalleryServices = ({ params }) => {
  const { id } = params;
  return (
    <ServiceWrapper>
      <Title />
      <Nav pageName="Contact" id={id} />
    </ServiceWrapper>
  );
};

export default GalleryServices;
