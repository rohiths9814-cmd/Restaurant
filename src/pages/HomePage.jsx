import PageLayout from '../layouts/PageLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import SignatureDishes from '../components/SignatureDishes';
import CuisineCategories from '../components/CuisineCategories';
import Gallery from '../components/Gallery';
import AwardsTicker from '../components/AwardsTicker';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <SignatureDishes />
      <CuisineCategories />
      <Gallery />
      <AwardsTicker />
      <Testimonials />
    </PageLayout>
  );
}
