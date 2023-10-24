import React from "react";
import PagesHeader from "../../components/galleryComponents/pagesheader";
import aboutBanner from "../../assets/png/aboutusImage.jpeg";
import Image from "next/image";
import aboutImage from "../../assets/png/Mask group (2).png";
import sectionImage from '../../assets/png/pexels-charlotte-may-5824519 1.png';
import styles from '../../components/page.module.css';
const AboutUsSection = () => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <PagesHeader title="About Us" bannerImage={aboutBanner} />
      <div className="text-black text-xl bg-primary px-12 py-6 flex  justify-items-center">
        <span className="flex space-x-5">
          <span className="w-[40%] ">
            <Image src={aboutImage} width={527} height={378} alt="aboutImage"/>
          </span>
          <span className="w-[56%]">
            <h1 className="text-2xl font-bold mb-2">About Us</h1>
            <p className="text-start">Wood has been used as a building material for thousands of years. The chemical properties of wood are inherently complex, but even in spite of this challenge, human beings have successfully harnessed the unique characteristics of wood to build a seemingly unlimited variety of structures. Besides using this exceptionally versatile material for housing, it is used extensively in furniture, home decor, handicrafts as well. It is remarkably strong in relation to its weight and highly machinable. Wood is also the perfect example of an environmentally sustainable product, it is biodegradable and renewable and carries the lowest carbon footprint in comparison to other available material. In addition, no high-energy fossil fuels are required to produce wood, unlike other common materials such as steel or plastic.
            </p>
          </span>
        </span>
      </div>
      <div className="text-black text-xl bg-primary px-12 py-6 ">
        <span className="flex space-x-5">
        <span className="w-[56%]">
        <h1 className="text-2xl font-bold mb-2">Our Legacy</h1>
        <p className="text-start">Delhi is a unique historical city that has gone through Sea changes. Founded in the 11th century by Rajput Tomars, Muslim Ruled from the 17th Century to 1857 and the British ruled from 1857 to 1947 when India achieved independence thereby Delhi emerged as the National Capital of India. Delhi and New Delhi is a unique blend of tradition and modernity. Forts, Palaces, Heritage Buildings, Tombs, etc. are the evidence of its roots in history. Skyscrapers, Malls, Metro Rail, flyovers, etc are spread over all the corners of Delhi which have changed the face of Delhi. Another shot in the arm of Delhi was the Commonwealth Games held in October 2010 which had benefited Delhi i.e. vast improvement of infrastructure, very wide roads, integrated rails, bus transport, hospitality section, medical services, two new power plants, tourism, technologically advanced buses.
        </p>
        <button className=" btn bg-primary border-2  text-black hover:text-white rounded-lg" >Read more {">"}</button>
        </span>
        <span className="w-[40%] ">
          <Image src={aboutImage} width={527} height={378} alt="aboutImage"/>
        </span>
        </span>
      </div>
      <section className={`${styles.section3} w-full flex justify-center items-center md:space-x-10 `}>
      <div className="card rounded-br-full rounded-tl-full bg-white w-[574px] h-[181px] ">
          <text className="px-20 py-8">
              Our Vision is that this market is developed as an ideal/popular market not only of India but of Asia for Timber and allied trade while serving the nation with all humility.
              </text>
          </div>
        <div></div>
        <div className="card rounded-tr-full rounded-bl-full bg-white w-[574px] h-[181px]">
          <text className="px-16 py-8">
              Our Vision is that this market is developed as an ideal/popular market not only of India but of Asia for Timber and allied trade while serving the nation with all humility.
              </text>
          </div>
        <div>
        wordl
        </div>
      </section>
      <section>
        <div>
          ACTIVITIES
        </div>
        <div>
        1. To carry out day-to-day work. 2. To discuss various matters/issues in the managing committee meeting. 3. To ensure effective and efficient implementation of decisions/ programmes of the managing committee. 4. Shall utilize the funds judiciously in the interest of members of the Association. 5. Share the audited accounts with the members. 6. To arrange for get-together & cultural programmes. 7. To look into all legal possibilities for the welfare of its members.
        </div>
      </section>

    </>
  );
};
export default AboutUsSection;
