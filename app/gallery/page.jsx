
import galleryBanner from '../../assets/png/galleryImage.jpeg';
import CardsSection from '../../components/galleryComponents/cardsSection';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import PagitnationButton from '../../components/galleryComponents/paginationButton';
import galleryBanner from '../../assets/png/galleryImage.jpeg';

const GallerySection = () => {
  return (
    <div className="bg-primary">
      <PagesHeader title="Gallery" bannerImage={galleryBanner} />
      <CardsSection />
      <PagitnationButton />
    </div>
  );
};
export default GallerySection;
