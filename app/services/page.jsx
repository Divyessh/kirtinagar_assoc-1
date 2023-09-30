import ServicesCard from '../../components/services/servicesCard';
import galleryBanner from '../../assets/png/services.png';
import CardsSection from '../../components/galleryComponents/cardsSection';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import CategoryDropdown from '../../components/heroSection/categoryDropdown';
import SearchComponent from '@/components/services/searchComponent';
const GallerySection = () => {
  return (
    <div className="bg-primary">
      <PagesHeader title={"Services"} bannerImage={galleryBanner}/>
      <SearchComponent/>
      <ServicesCard/>
    </div>
  );
};
export default GallerySection;
