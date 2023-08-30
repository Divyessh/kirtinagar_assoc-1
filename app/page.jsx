import Image from 'next/image'
import Navbar from '@/app/components/navbar'
import Card from './components/card';

export default function Home() {
  return (
    <main className="" >
        <Navbar />
        <Card/>
    </main>
  );
}
