import Link from 'next/link';
import Card from '../featuredProviders/card';

const ServicesCard = () => {
  return (
    <div className="bg-white text-black flex-col w-full justify-center items-center text-center">
      <h1 className="mb-2 text-black  md:text-2xl text-md py-6">Featured Providers</h1>
      <div className="bg-white md:grid md:grid-cols-3 md:grid-rows-3 gap-2 gap-x-4 flex-4 px-8 ">
        <Link href="services/absd/about">
          <Card />
        </Link>
      </div>
    </div>
  );
};
export default ServicesCard;
