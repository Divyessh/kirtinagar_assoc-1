import React from "react";
import Image from "next/image"; // Use Image from next/image
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import members from "../assets/svg/Group 41members.svg";
import welfare from "../assets/svg/Group 42.svg";
import business from "../assets/svg/Group 43.svg";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Members Directory",
      link: "/membersection",
      subtitle:
        "This section provides information about individuals or entities in our directory. Find the right Taskers for your job based on their skills and expertise.",
      icon: members,
    },
    {
      id: 2,
      title: "Members Welfare",
      link: "#",
      subtitle:
        "Explore the well-being of our members. Learn about programs and initiatives designed to support the welfare of our community.",
      icon: welfare,
    },
    {
      id: 3,
      title: "Members Business",
      link: "#",
      subtitle:
        "Discover businesses associated with our members. Find the right services or products offered by businesses within our community.",
      icon: business,
    },
  ];

  return (
    <div className="z-0 bg-white">
      {/* <div className="flex w-full space-between">
        <Image src="/footer.svg" alt="footer" width={233} height={215} className="-top-14 z-0 absolute" />
        <Image src="/footerright.svg" alt="footer" width={260} height={215} className="-top-16 right-0 z-0 absolute" />
      </div> */}

      <div className="bg-[#413833]">
        <h1 className="py-2 border-b-1 font-bold text-4xl text-center text-white tracking-4">
          KIRTI NAGAR TIMBER AND FURNITURE DEALERS ASSOCIATION
        </h1>
        <div className="md:flex">
          {data.map((item) => (
            <div className="p-8 text-white card" key={item.id}>
              <a href={item.link}>
                <div className="flex justify-center items-center">
                  <span className="flex justify-center items-center bg-stone-200 rounded-full w-[94px] h-[92px]">
                    <Image
                      src={item.icon}
                      alt="members"
                      className="object-cover"
                    />
                  </span>
                </div>
                <div className="flex-col justify-center items-center card-body">
                  <h1 className="text-white text-xl">{item.title}</h1>
                  <p className="text-[#DDC5C5] text-center text-md">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="md:flex flex-2 justify-evenly items-center space-y-2 border-white border-b-2 text-center">
          <div>
            <span className="text-white text-xl">USEFUL LINKS</span>
            <ul className="text-[#DDC5C5] text-center text-lg">
              <li>
                <Link
                  className="hover:border-b-2 hover:text-white"
                  href="/aboutus"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 hover:text-white"
                  href="/pricing"
                >
                  Member Section
                </Link>
              </li>
              <li>
                <Link
                  className="hover:border-b-2 hover:text-white"
                  href="/contactus"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-white text-xl uppercase">
              Location
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.909523688018!2d77.14124300000002!3d28.64542155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0304934fb67d%3A0x232534e44837b1bf!2sKirti%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1712821987844!5m2!1sen!2sin"
              allowFullScreen=""
              preconnect
              loading="lazy"
              title="footermaps"
              className="p-4"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-3 text-white">
            <span className="text-center text-xl uppercase">SHOP LISTING</span>
            <h1 className="text-2xl">
              Want the shop to be
              <br />
              listed?
            </h1>
            <button type="button" className="rounded-full btn btn-primary">
              <Link href="/contactus">Contact Us</Link>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="mx-2 text-center text-white">
          Made with 🌌 by{" "}
          <Link href="https://void-works.netlify.app/">VOID</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
