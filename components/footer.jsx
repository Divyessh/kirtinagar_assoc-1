import React from 'react';
import Image from 'next/image'; // Use Image from next/image
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import members from '../assets/svg/Group 41members.svg';
import welfare from '../assets/svg/Group 42.svg';
import business from '../assets/svg/Group 43.svg';

const Footer = () => {
  const data = [
    {
      id: 1,
      title: 'Members Directory',
      subtitle:
        'This section provides information about individuals or entities in our directory. Find the right Taskers for your job based on their skills and expertise.',
      icon: members,
    },
    {
      id: 2,
      title: 'Members Welfare',
      subtitle:
        'Explore the well-being of our members. Learn about programs and initiatives designed to support the welfare of our community.',
      icon: welfare,
    },
    {
      id: 3,
      title: 'Members Business',
      subtitle:
        'Discover businesses associated with our members. Find the right services or products offered by businesses within our community.',
      icon: business,
    },
  ];

  return (
    <div className="relative  bg-white z-0">
      <div className="w-full flex space-between ">
        <Image src="/footer.svg" alt="footer" width={233} height={215} className="absolute z-0 -top-14" />
        <Image src="/footerright.svg" alt="footer" width={260} height={215} className="absolute  z-0 -top-16 right-0" />
      </div>

      <div className="bg-[#413833]  absolute">
        <h1 className="text-white text-4xl font-bold text-center py-2 border-b-1 tracking-4">New Timber Market Dealer</h1>
        <div className="md:flex ">
          {data.map((item) => (
            <div className="card p-8 text-white" key={item.id}>
              <div className="flex items-center justify-center">
                <span className="flex items-center justify-center bg-stone-200 w-[94px] h-[92px] rounded-full">
                  <Image src={item.icon} alt="members" className="object-cover" />
                </span>
              </div>
              <div className="card-body flex-col justify-center items-center">
                <h1 className="text-xl text-white">{item.title}</h1>
                <p className="text-md text-[#DDC5C5] text-center px-8">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex flex-2 justify-evenly text-center items-center border-b-2 border-white space-y-2">
          <div>
            <span className="text-xl text-white">USEFUL LINKS</span>
            <ul className="text-[#DDC5C5] text-lg  text-center">
              <li>
                <Link className="hover:border-b-2 hover:text-white" href="/aboutus">
                  About us
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-2 hover:text-white" href="/pricing">
                  Member Section
                </Link>
              </li>
              <li>
                <Link className="hover:border-b-2 hover:text-white" href="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl text-center uppercase text-white ">Location</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.909523688018!2d77.14124300000002!3d28.64542155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0304934fb67d%3A0x232534e44837b1bf!2sKirti%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1712821987844!5m2!1sen!2sin"
              width="400"
              height="230"
              allowfullscreen=""
              loading="lazy"
              title="footermaps"
              className="p-4"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-3 text-white">
            <span className="text-xl text-center uppercase">SHOP LISTING</span>
            <h1 className="text-2xl">
              Want the shop to be
              <br />
              listed?
            </h1>
            <button type="button" className="btn btn-primary rounded-full ">
              <Link href="/pricing">See Pricing</Link>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="mx-2 text-center text-white">
          Made with 🌌 by <Link href="https://void-works.netlify.app/">VOID</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
