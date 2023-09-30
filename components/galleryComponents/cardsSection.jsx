import GalleryCards from './galleryCard';

const GallerySection = () => {
  return (
    <div className="bg-white md:grid md:grid-cols-3 md:grid-rows-3 gap-2 gap-x-4 flex-4 px-8 ">
      <GalleryCards/>
      <GalleryCards/>
      <GalleryCards/>
      <GalleryCards/>
      <GalleryCards/>
      <GalleryCards/>
      <GalleryCards/>
      <GalleryCards/>
      <GalleryCards/>
    </div>
  );
};
export default GallerySection;
