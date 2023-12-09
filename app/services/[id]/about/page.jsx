'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Title from '../../../../components/services/title';
import ServiceWrapper from '../../../../components/services/serviceWrapper';
import Nav from '../../../../components/services/nav';
// import AboutContent from '../../../../components/services/about/AboutContent';
// import GalleryContent from '../../../../components/services/about/GalleryContent';
import Contact from '../../../../components/services/about/Contact';
import ServiceContent from '../../../../components/services/about/ServiceContent';
import ReqQuoteForm from '../../../../components/services/about/ReqQuoteForm';
// import RelatedProviders from '../../../../components/services/relatedProviders';
import SkeletonCard from '../../../../components/blogs/skeletonCard';

const AboutServices = ({ params }) => {
  const { id } = params;
  const { isLoading } = useQuery({
    queryKey: ['Provider', id],
    queryFn: async () => {
      const res = await axios.get(`/api/provider/${id}`);
      return res?.data?.data;
    },
  });

  return isLoading ? (
    <SkeletonCard />
  ) : (
    <ServiceWrapper>
      <Title id={id} />
      <Nav pageName="About" id={id} />
      {/* <AboutContent id={id} /> */}
      {/* <GalleryContent id={id} /> */}
      <Contact id={id} />
      <ServiceContent id={id} title />
      <ReqQuoteForm id={id} />
      {/* <RelatedProviders /> */}
    </ServiceWrapper>
  );
};

export default AboutServices;
