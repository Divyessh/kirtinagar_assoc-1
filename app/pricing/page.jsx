'use client';

import React from 'react';
import Link from 'next/link';
import galleryBanner from '../../assets/png/services.png';
import PricingCard from '../../components/pricing/pricingCard';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import generateUniqueKey from '../../constants/generateUid';

const PricingComponent = () => {
  const data = {
    Basic: {
      title: 'Annual Membership',
      features: [
        'Shop featured for one week.',
        'Shop logo and description displayed.',
        'One product showcase.',
        'Limited exposure in search results.',
        'Shop featured for one week.',
      ],
      price: 'Free',
    },
    Standard: {
      title: 'Ads On Landing Page',
      features: [
        'Shop featured for one Month.',
        'Shop logo, description, and Banner displayed.',
        'Up to 5 products showcased.',
        'Enhanced Visibility in search results.',
        'Social Media Promotion.',
      ],
      price: 'INR 1000',
    },
    Premium: {
      title: 'Featured Providers',
      features: [
        'Shop featured for 3 Months.',
        'Shop logo, description and banner displayed.',
        'Up to 10 products showcase.',
        'Social media promotion with targeted ads.',
        'Priority placement in search results.',
      ],
      price: 'INR 3000',
    },
  };

  return (
    <main className="bg-primary z-0">
      {/* Render the header component */}
      <PagesHeader title="Membership" bannerImage={galleryBanner} />
      <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-evenly space-y-4 md:space-y-0 py-8 ">
        {Object.keys(data).map((plan) => (
          <PricingCard key={generateUniqueKey(plan)} title={data[plan].title} price={data[plan].price} features={data[plan].features}/>
        ))}
      </div>
      <span className="text-md flex w-full justify-center items-center text-black ">
        <button type="button" className="btn btn-primary hover:bg-secondary">
          <Link href="/terms">Terms</Link>
        </button>
        <button type="button" className="btn btn-primary hover:bg-secondary">
          <Link href="/cancellation">Our Cancellation Policy</Link>
        </button>
      </span>
    </main>
  );
};

export default PricingComponent;
