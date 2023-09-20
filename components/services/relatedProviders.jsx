import React from 'react';
import Heading from './about/heading';
import Card from '../featuredProviders/card';

const RelatedProviders = () => {
  return (
    <div>
      <Heading title="Related Providers" />
      <div className="flex flex-col md:flex-row justify-between items-center my-[30px]">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default RelatedProviders;
