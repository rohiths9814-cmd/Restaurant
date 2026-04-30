import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmokeCanvas from './components/SmokeCanvas';
import InstallPrompt from './components/InstallPrompt';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotosPage from './pages/PhotosPage';
import VideoPage from './pages/VideoPage';
import AwardsPage from './pages/AwardsPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './components/BookingPage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Smoke particles canvas — global, follows mouse on food images */}
      <SmokeCanvas />
      <InstallPrompt />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
