"use client";

import Image from "next/image";

import aboutBanner from "../../assets/png/aboutBanner.png";

const BlogsSection = () => {
  //   const { title } = useParams();
  //   const { data, isLoading } = useQuery(['blogData'], async () => {
  //     const res = await axios.get(`/api/blog`);
  //     return res.data;
  //   });

  //   const [filteredBlog, setFilteredBlog] = useState([]);

  //   useEffect(() => {
  //     if (!isLoading) {
  //       setFilteredBlog(data.filter((blog) => blog.title === title)); // Corrected filtering logic and state update
  //     }
  //   }, [data, isLoading, title]); // Added dependencies to useEffect

  //   if (isLoading) return <div>Loading...</div>; // Added loading state handling
  return (
    <main className="bg-primary">
      {/* <PagesHeader title="Blogs" bannerImage={galleryBanner} /> */}
      <div className="w-full flex-col justify-center items-center md:px-12 px-0">
        <div className="flex justify-center items-center">
          <span className="border-b-2 border-black text-black text-4xl font-semibold py-4">
            BLOGS
          </span>
        </div>
        <div className="flex p-8 justify-center items-center w-full">
          <div className="rounded-sm shadow-xl">
            <div>
              <h1 className="bg-secondary text-black text-center md:text-3xl text-xl font-bold py-2 rounded-t-md">
                SOLID WOOD FURNITURE – KIRTI NAGAR IN NEW ERA
              </h1>
            </div>
            <div className="px-5 py-2 pt-4">
              <Image
                src={aboutBanner}
                alt="aboutBanner"
                className="w-full h-[500px] object-cover rounded-md"
                width={1000}
                height={400}
              />
            </div>
            <span className="text-gray-800 md:text-lg text-md font-semibold px-5 py-2 text-start ">
              <p className="text-break px-5 ">
                <p className=" md:text-4xl text-2xl">
                  SOLID WOOD FURNITURE <br /> <br />
                </p>
                Wood has been used as a building material for thousands of
                years. The chemical properties of wood are inherently complex,
                but even inspite of this challenge, human beings have
                successfully harnessed the unique characteristics of wood to
                build a seemingly unlimited variety of structures. Besides using
                this exceptionally versatile material for housing, it is used
                extensively in furniture, home décor, handicrafts as well. It is
                remarkably strong in relation to its weight and highly
                machinable. Wood is also the perfect example of an
                environmentally sustainable product, it is biodegradable and
                renewable and carries the lowest carbon footprint in comparison
                to other available material. In addition, no high-energy fossil
                fuels are required to produce wood, unlike other common
                materials such as steel or plastic. <br />
                <br />
                Kirti Nagar Timber and Furniture Market having more than 1000
                establishments has become Biggest Timber, Plywood and Furniture
                market probably of Asia, a result of consolidation of various
                markets from Motia Khan, Pul Mithai, Raja Garden, Monga Market,
                Shastri Nagar etc. Primarily our market deals in various species
                of Timber, Indian as well as imported furniture, solid wood
                furniture, handicrafts etc. Manufacturing of Solid wood
                furniture and other products such as handicraft items etc. have
                spread over the entire market employing large number of labour
                catering the requirements of local trade/ customers as well as
                other states of the country besides exports. <br /> <br />
                Traditionally, furniture has been made of wood. With the
                industrial revolution, furniture manufactured from materials
                such as steel, aluminum, glass and plastic, began to appear.
                These materials may have revolutionized the furniture industry,
                but wood is undeniably a staple material in furniture
                manufacturing. Not only is wood everlasting, but it is timeless
                as well. Whether it is an armoire in the family room or a chair
                in the dining room, wood furniture manufacturers manage to
                combine eternal beauty and robust practically along with a
                contemporary or country style.
                <br />
                The advantages of wooden furniture are undeniable. Combine a
                piece of wood furniture to furniture made from steel or glass
                and the natural beauty of the wood will add warmth and character
                to any room.
                <br />
                <br />
                <span>
                  <b>Strength and durability</b>
                  <br />
                </span>
                <br />
                Wood furniture is extremely resilient and requires very little
                maintenance. Wood is a long-lasting natural material that can
                stand constant abuse, whether it is spills in the kitchen or
                scratches in the dining room. Solid wood furniture can last for
                generations with minimum care.
                <br />
                <br />
                <span>
                  <b>Ease of maintenance</b>
                  <br />
                </span>
                <br /> Wood furniture is nearly effortless to maintain. Simply
                wipe the surface of the wood chair parts with a wood cleaner on
                a regular basis. Do not allow water or dust to settle on your
                tables, chairs or armoires for extended periods. <br />
                <br />
                <span>
                  <b>A decor staple</b>
                  <br />
                </span>
                <br />
                Adding a piece of wood furniture to a room will completely
                change its look and feel. Wood furniture offers elegance, charm
                and sophistication to any room. <br />
                <br />
                <span>
                  <b>Value</b>
                  <br />
                </span>
                <br /> Although you might pay more to begin with for a piece of
                solid wood furniture, wood is more valuable than other material
                used in furniture manufacturing. Wood’s natural grain guarantees
                that each piece of furniture is unique. The initial cost of wood
                furniture may be higher than lower end materials, but you will
                reap the benefits for years to come. Depending on your budget,
                you can select furniture that is manufactured using wood
                furniture parts in softwood such as pine, or you can opt for
                furniture that is manufactured using harder, more exotic woods
                such as teak.
                <br />
                <br />
                <span>
                  <b>Modifiable</b>
                  <br />
                </span>
                <br />
                The beauty of wood furniture is that it can be changed over time
                to give it a second, third or fourth life. By sanding and
                staining, or painting, you can refinish wood furniture and give
                it an entirely new look. <br /> <br />
                Solid wood furniture is built on a large scale keeping in mind
                the traditions, artistic way of carving, beauty of wood, its
                durability and aesthetic appearance of furniture. Tables,
                chairs, bed frames, shelves, chests of drawers, cupboards,
                handicrafts and even ornaments—the advantages of wooden
                furniture in the home cannot be overstated. Most of all, wood
                offers a unique combination of aesthetic appeal and peerless
                structural integrity that other materials cannot reflect. Solid
                wood furniture is strong enough to easily satisfy all furniture
                applications, and it can last for centuries. Society is still
                questioning whether furniture made of plywood can do the same.
                <br />
                <br />
                <span>
                  <b>
                    Vikram Verma <br />
                    Co Chairman, Trade Relations Committee;
                    <br />
                    AND
                    <br />
                    General Secretary
                    <br /> New Timber Market Dealers Association(Regd.)
                    <br /> B-96, Kirti Nagar, WHS, New Delhi – 110015.
                  </b>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );

  // return (

  // );
};
export default BlogsSection;
