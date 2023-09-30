import galleryBanner from '../../assets/png/galleryImage.jpeg';
import CardsSection from '../../components/galleryComponents/cardsSection';
import PagesHeader from '../../components/galleryComponents/pagesheader';

const GallerySection = () => {
  return (
    <div className="bg-primary">
      <PagesHeader title="Gallery" bannerImage={galleryBanner} />
      <CardsSection />
    </div>
  );
};
export default GallerySection;
