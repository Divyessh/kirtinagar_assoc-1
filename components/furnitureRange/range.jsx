'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import bed from '../../assets/svg/furnitureRange/bed.svg';
import rack from '../../assets/svg/furnitureRange/rack.svg';
import sofa from '../../assets/svg/furnitureRange/sofa.svg';
import Vector from '../../assets/svg/furnitureRange/Vector.svg';
import wardrobe from '../../assets/svg/furnitureRange/wardrobe.svg';
import work from '../../assets/svg/furnitureRange/work_chair.svg';
import home from '../../assets/svg/furnitureRange/home_office.svg';
import dining from '../../assets/svg/furnitureRange/dining_room.svg';

const Range = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 0,
      autoplay: {
        delay: 800, // Set the autoplay speed to 2 seconds (2000 milliseconds)
      },
    },
    [Autoplay()],
  );
  const data = [
    {
      img: sofa,
      title: 'Sofas',
    },
    {
      img: bed,
      title: 'Beds',
    },
    {
      img: wardrobe,
      title: 'Wardrobes',
    },
    {
      img: work,
      title: 'Study',
    },
    {
      img: Vector,
      title: 'Table',
    },
    {
      img: rack,
      title: 'Seating',
    },
    {
      img: Vector,
      title: 'Bookshelves',
    },
    {
      img: home,
      title: 'Recliners',
    },
    {
      img: dining,
      title: 'Dining',
    },
    {
      img: Vector,
      title: 'Table',
    },
  ];
  return (
    <div className="flex justify-center items-center mt-6">
      <div className=" embla" ref={emblaRef}>
        <div className="relative embla__container mt-6">
          {data.map((item) => (
            <div className="mx-6 text-center" key={item.title}>
              <div className="card md:w-[267px] md:h-[220px] w-[200px] h-[180px] bg-white  flex-col justify-center items-center p-4 text-center">
                <figure className="rounded-none">
                  <Image src={item.img} alt={item.title} />
                </figure>
              </div>
              <span
                style={{
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal',
                  letterSpacing: '0.5px',
                  textTransform: 'capitalize',
                }}
                className="mt-8 text-xl md:text-2xl"
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Range;
