import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

export default function PageLayout({ children, title }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Update document title
  useEffect(() => {
    document.title = title
      ? `${title} — Rasikas Grand Fusion`
      : 'Rasikas Grand Fusion | A Fusion of Flavours';
  }, [title]);

  return (
    <>
      <Navbar />
      <motion.main
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
