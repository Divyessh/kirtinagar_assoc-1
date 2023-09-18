import React from 'react';
import HeroSection from '../components/heroSection/HeroSection';
import Carousel from '../components/featuredProviders/Carousel';
import BlogsSection from '../components/blogs/blogsSection';
import FurnitureRangeSection from '../components/furnitureRange/furnitureSection';
import { getBlog } from '../lib/blog/blog';

export default async function Home() {
  const res = await getBlog();
  return (
    <main className="bg-primary">
      <HeroSection />
      <Carousel />
      <FurnitureRangeSection />
      <BlogsSection blogData={res.data} />
    </main>
  );
}
