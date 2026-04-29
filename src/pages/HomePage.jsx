import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import SignatureDishes from '../components/SignatureDishes';
import CuisineCategories from '../components/CuisineCategories';
import Gallery from '../components/Gallery';
import AwardsTicker from '../components/AwardsTicker';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <CuisineCategories />
      <Gallery />
      <AwardsTicker />
      <Testimonials />
      <Footer />
    </>
  );
}
