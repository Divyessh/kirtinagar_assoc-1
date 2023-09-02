import React from 'react';
import Card from '../components/card';
import HeroSection from '../components/heroSection/heroSection';

export default function Home() {
  return (
    <main className="bg-primary">
      <HeroSection />
      <Card />
    </main>
  );
}
