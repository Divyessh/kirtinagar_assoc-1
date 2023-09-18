import React from 'react';
import Title from '../../../../components/services/title';
import ServiceWrapper from '../../../../components/services/serviceWrapper';
import Nav from '../../../../components/services/nav';
import AboutContent from '../../../../components/services/about/AboutContent';
import GalleryContent from '../../../../components/services/about/GalleryContent';
import Contact from '../../../../components/services/about/Contact';
import ServiceContent from '../../../../components/services/about/ServiceContent';
import ReqQuoteForm from '../../../../components/services/about/ReqQuoteForm';

const AboutServices = ({ params }) => {
  const { id } = params;
  return (
    <ServiceWrapper>
      <Title />
      <Nav pageName="About" id={id} />
      <AboutContent />
      <GalleryContent id={id} />
      <Contact id={id} />
      <ServiceContent id={id} />
      <ReqQuoteForm id={id} />
    </ServiceWrapper>
  );
};

export default AboutServices;
