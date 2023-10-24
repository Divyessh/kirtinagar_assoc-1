import GalleryCards from './galleryCard';

const GallerySection = () => {
  return (
    <div className="w-full flex justify-center items-center shadow-2xl shadow-gray-400">
      <div className="bg-white md:grid md:grid-cols-3 md:grid-rows-3 gap-y-2 shadow-lg  py-8 rounded-lg align-center justify-items-center px-12 md:w-[1400px]">
        <GalleryCards />
        <GalleryCards />
        <GalleryCards />
        <GalleryCards />
        <GalleryCards />
        <GalleryCards />
        <GalleryCards />
        <GalleryCards />
        <GalleryCards />
      </div>
    </div>
  );
};

export default GallerySection;
