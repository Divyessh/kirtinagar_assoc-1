import Image from 'next/image'
import Navbar from '@/app/components/navbar'
import Card from './components/card';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="bg-primary" >
        <Navbar />
        <Card />
        <Footer/>
    </main>
  );
}
