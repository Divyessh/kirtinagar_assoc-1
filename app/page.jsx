import React from 'react';
import HeroSection from '../components/heroSection/HeroSection';
import Carousel from '../components/featuredProviders/Carousel';
import FurnitureRangeSection from '../components/furnitureRange/furnitureSection';

export default async function Home() {
  return (
    <main className="bg-primary">
      <HeroSection />
      <Carousel />
      <FurnitureRangeSection />
    </main>
  );
}
