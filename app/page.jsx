import React from 'react';
import HeroSection from '../components/heroSection/HeroSection';
import Carousel from '../components/featuredProviders/Carousel';
import BlogsSection from '../components/blogs/blogsSection';

export default function Home() {
  return (
    <main className="bg-primary">
      <HeroSection />
      <Carousel deviceType="desktop" />
      <BlogsSection />
    </main>
  );
}
