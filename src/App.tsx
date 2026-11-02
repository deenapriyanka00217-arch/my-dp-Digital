import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { CmsProvider } from './context/CmsContext';
import { AnimatePresence } from 'framer-motion';

// Keep page code out of the initial bundle until a visitor opens that route.
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const AboutPage = lazy(() => import('./pages/About'));
const OurWorksPage = lazy(() => import('./pages/OurWorks'));
const BlogPage = lazy(() => import('./pages/Blog'));
const SEOPage = lazy(() => import('./pages/SEO'));
const PaidAdsPage = lazy(() => import('./pages/PaidAds'));
const WebDesignPage = lazy(() => import('./pages/WebDesign'));
const ContentBrandingPage = lazy(() => import('./pages/ContentBranding'));
const YouTubeManagementPage = lazy(() => import('./pages/YouTubeManagement'));
const WordPressPage = lazy(() => import('./pages/WordPressPage'));
const FacebookAdsPage = lazy(() => import('./pages/FacebookAdsPage'));
const TambaramPage = lazy(() => import('./pages/TambaramPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
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

export const AppContent = () => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname === '/admin' || pathname === '/dashboard';

  return (
    <div className="flex flex-col min-h-screen bg-[#07050C] text-white selection:bg-[#FF2E9A] selection:text-white relative font-sans">
      {!isAdminRoute && <Header />}
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="min-h-[50vh] flex items-center justify-center text-white/70" role="status">
              Loading page...
            </div>
          }
        >
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
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/dashboard" element={<AdminDashboardPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <StickyWhatsApp />}
    </div>
  );
};

export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <CmsProvider>
        <AppContent />
      </CmsProvider>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
