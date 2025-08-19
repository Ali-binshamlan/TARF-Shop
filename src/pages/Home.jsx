import Categories from "../components/Categories";
import EndingSoonOffers from "../components/EndingSoonOffers";
import FeatureCards from "../components/FeatureCards";
import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import ProductsGrid from "../components/Products";
import ProductSlider from "../components/ProductSlider";
import PromoSlider from "../components/PromoSlider";
import TestimonialsSwiper from "../components/TestimonialsSwiper";
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <div>
      <Header />
      <PromoSlider />
      <FeaturesSection />
      <ProductsGrid />
      <Categories />
      <EndingSoonOffers />
      <ProductSlider />
      <FeatureCards />
      <ProductsGrid />
      <TestimonialsSwiper />
      <FooterSection />
    </div>
  );
}
