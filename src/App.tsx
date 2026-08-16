import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import OurWorksPage from './pages/OurWorks';
import BlogPage from './pages/Blog';
import SEOPage from './pages/SEO';
import PaidAdsPage from './pages/PaidAds';
import WebDesignPage from './pages/WebDesign';
import ContentBrandingPage from './pages/ContentBranding';
import YouTubeManagementPage from './pages/YouTubeManagement';
import WordPressPage from './pages/WordPressPage';
import FacebookAdsPage from './pages/FacebookAdsPage';
import TambaramPage from './pages/TambaramPage';
import ContactPage from './pages/ContactPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFound from './pages/NotFound';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { CmsProvider } from './context/CmsContext';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname === '/admin' || pathname === '/dashboard';

  return (
    <div className="flex flex-col min-h-screen bg-[#07050C] text-white selection:bg-[#FF2E9A] selection:text-white relative font-sans">
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/paid-social-ads" element={<PaidAdsPage />} />
            <Route path="/services/facebook-ads" element={<FacebookAdsPage />} />
            <Route path="/facebook-ads" element={<FacebookAdsPage />} />
            <Route path="/meta-ads" element={<FacebookAdsPage />} />
            <Route path="/services/web-design-development" element={<WebDesignPage />} />
            <Route path="/services/wordpress-development" element={<WordPressPage />} />
            <Route path="/wordpress-development" element={<WordPressPage />} />
            <Route path="/wordpress" element={<WordPressPage />} />
            <Route path="/services/content-marketing-branding" element={<ContentBrandingPage />} />
            <Route path="/services/youtube-editing-management" element={<YouTubeManagementPage />} />
            <Route path="/youtube-management" element={<YouTubeManagementPage />} />
            <Route path="/youtube" element={<YouTubeManagementPage />} />
            <Route path="/tambaram" element={<TambaramPage />} />
            <Route path="/digital-marketing-agency-tambaram" element={<TambaramPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-works" element={<OurWorksPage />} />
            <Route path="/portfolio" element={<OurWorksPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/dashboard" element={<AdminDashboardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <StickyWhatsApp />}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CmsProvider>
        <AppContent />
      </CmsProvider>
    </Router>
  );
}
