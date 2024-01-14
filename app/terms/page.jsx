import galleryBanner from '../../assets/png/galleryImage.jpeg';
import PagesHeader from '../../components/galleryComponents/pagesheader';
import TermsAndConditionsModal from '../../components/additional/termsandcondition';

const TermsSection = () => {
  return (
    <main className="bg-primary">
      <PagesHeader title="Gallery" bannerImage={galleryBanner} />
      <TermsAndConditionsModal />
    </main>
  );
};
export default TermsSection;
