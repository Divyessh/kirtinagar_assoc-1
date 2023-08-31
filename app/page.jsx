import React from 'react';
import Navbar from '../components/navbar';
import Card from '../components/card';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className="bg-primary">
      <Navbar />
      <Card />
      <Footer />
    </main>
  );
}
