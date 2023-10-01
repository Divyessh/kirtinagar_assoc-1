import ServicesCard from '../../components/services/servicesCard';
import galleryBanner from '../../assets/png/services.png';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import PricingCards from '../../components/pricing/pricingCard';

const PricingComponent = () => {
  return (
    <div className="bg-primary">
      <PagesHeader title="Pricing" bannerImage={galleryBanner} />
      <PricingCards/>
    </div>
  );
};
export default PricingComponent;
