'use client';

import { useParams } from 'next/navigation'; // Corrected import for useParams
import { useEffect, useState } from 'react'; // Added useState to imports
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'; // Corrected import for useQuery
import PagesHeader from '../../components/galleryComponents/pagesheader';
import galleryBanner from '../../assets/png/galleryImage.jpeg';

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
      <PagesHeader title="Blogs" bannerImage={galleryBanner} />
      {/* <h1>{title}</h1> */}
        
    </main>
  );
};
export default BlogsSection;
