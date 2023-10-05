import GalleryCards from './galleryCard';
import PaginationButton from './paginationButton';

const GallerySection = () => {
  return (
    <div className="bg-white md:grid md:grid-cols-3 md:grid-rows-3 gap-2 gap-x-2 gap-y-3 flex-3 shadow-lg py-4 rounded-lg justify-center items-center pl-6">
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
  );
};

export default GallerySection;
