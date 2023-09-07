import React from 'react';
import Card from '../components/card';
import HeroSection from '../components/heroSection/HeroSection';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <main className="bg-primary">
      <HeroSection />
      <Carousel  deviceType="desktop"/>
      
    </main>
  );
}
