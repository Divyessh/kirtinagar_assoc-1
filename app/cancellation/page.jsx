import galleryBanner from '../../assets/png/galleryImage.jpeg';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import Cancellation from '../../components/additional/cancellation';

const GallerySection = () => {
  return (
    <main className="bg-primary">
      <PagesHeader title="Gallery" bannerImage={galleryBanner} />
      <Cancellation />
    </main>
  );
};
export default GallerySection;
