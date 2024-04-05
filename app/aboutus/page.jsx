"use client";

import React, { useState } from "react";
import Image from "next/image";
import PagesHeader from "../../components/galleryComponents/pagesheader";
import aboutBanner from "../../assets/png/aboutusImage.jpeg";
import aboutImage from "../../assets/png/Mask group (2).png";
import styles from "../../components/page.module.css";

const AboutUsSection = () => {
  return (
    <>
      <PagesHeader title="About Us" bannerImage={aboutBanner} />
      <main className="text-black md:text-xl text-md bg-primary md:px-12 px-6 py-6 flex justify-items-center">
        <span className="md:flex flex-cols">
          <span className="w-[40%] ">
            <Image
              src={aboutImage}
              width={527}
              height={378}
              alt="aboutImage"
              className="md:h-full"
            />
          </span>
          <span className="w-[56%]">
            <h1 className="md:text-2xl text-lg font-black mb-2">About Us</h1>
            <p className="text-start text-md">
              <b>KIRTI NAGAR, NEW DELHI, INDIA</b> <br />
              (Hindi: कीर्ति नगर, Punjabi: विठडी ठगव, Urdu : كيرتى نگر) <br />{" "}
              is an affluent area of West Delhi, India Postal code 110015.
              <br /> Part of the Punjabi Bagh subzone of West Delhi, it
              primarily a residential colony. Kirti Nagar is home to Asia's
              largest Timber and furniture market SatGuru Ram Singh Marg
              commonly known as RAMA ROAD housing showrooms of multi-national
              home remodelling and fittings companies, the most reputed interior
              design boutiques, imported kitchen and bath brands as well as
              traditional carpentry furniture makers. <br /> <br />
              Considered one of the upmarket areas in Delhi, the twin localities
              of Mansarovar Garden Block B, C and Kirti Nagar BLOCK - A, B, 1, 2
              & more indeed one of the posh areas in West Delhi. The colony
              mostly consists of private houses and so called "Kothis", housing
              rich Sikh businessmen and people who migrated from Pakistan after
              partition constitute a significant part of the population. The
              adjacent neighborhood of Rajouri Garden is a popular market,
              comprising the Main Market, Nehru Market and many western style
              indoor shopping malls including TDI Mall, Moments mall, TDI
              Paragon Mall, Shoppers Stop, City Square, West Gate Mall, and
              Paradise Mall. Together, this area is now the largest single
              locality shopping conglomeration in Delhi ahead of South Delhi.
              <br />
            </p>
          </span>
        </span>
      </main>
      <main className="text-black md:text-xl text-md bg-primary md:px-12 px-6  py-6 ">
        <span className="md:flex flex-cols space-x-10">
          <span className="w-[56%]">
            <h1 className="md:text-2xl text-lg font-black mb-2">Demography</h1>
            <p className={`text-start mb-2 space-y-4 text-md`}>
              Kirti Nagar is well connected to the DELHI METRO via the KIRTI
              NAGAR (Delhi Metro) station on PATEL ROAD and MAYAPURI (Delhi
              Metro) station on RING ROAD (Mahatma Gandhi Marg) which are one of
              the few Metro stations with a feeder bus service. Mansarovar
              Garden and Kirti Nagar localities are adjacent to the Ring Road on
              one side and Patel Road on the other which connect to Dhaula Kuan
              and the Central Business District of Connaught Place,
              respectively. Surrounding areas to Kirti Nagar are Mansarovar
              Garden, Rajouri Garden, Punjabi Bagh, Saraswati Garden, Ramesh
              Nagar and Patel Nagar, Loha Mandi NARAINA
            </p>
          </span>
          <span className="w-[40%] md:mt-0 mt-6 pt-2 md:pt-0">
            <Image src={aboutImage} width={527} height={378} alt="aboutImage" />
          </span>
        </span>
      </main>
      <section
        className={`${styles.section3} w-full md:flex flex-cols  hidden justify-center items-center md:space-x-10 `}
      >
        <div className="card rounded-br-full rounded-tl-full bg-white w-[574px] h-[181px] ">
          <text className="px-20 py-8 text-black">
            Our Vision is that this market is developed as an ideal/popular
            market not only of India but of Asia for Timber and allied trade
            while serving the nation with all humility.
          </text>
        </div>
        <div />
        <div className="card rounded-tr-full rounded-bl-full bg-white w-[574px] h-[181px]">
          <text className="px-16 py-8 text-black">
            Our Mission is to take Kirtinagar to be recognized by international
            markets and easily known as all in on place for furniture and needs
          </text>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
