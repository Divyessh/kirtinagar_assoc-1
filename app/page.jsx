import React from 'react';
import HeroSection from '../components/heroSection/HeroSection';
import BlogsSection from '../components/blogs/blogsSection';

export default function Home() {
  return (
    <main className="bg-primary h-full">
      <HeroSection />
      <BlogsSection />
    </main>
  );
}
