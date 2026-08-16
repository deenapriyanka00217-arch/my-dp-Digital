import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

/**
 * Catch-all page for unmatched routes. Since this is a client-rendered SPA on
 * Vercel (all paths rewrite to index.html so deep links work), the server
 * always returns HTTP 200 - there is no way to send a real 404 status code
 * here. To stop search engines treating unknown URLs as indexable content,
 * this page injects a <meta name="robots" content="noindex, follow"> tag
 * while mounted, on top of the normal PageSEO tags.
 */
const NotFound = () => {
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const hadExisting = !!meta;
    const previousContent = meta?.getAttribute('content') ?? null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex, follow');

    return () => {
      if (!meta) return;
      if (hadExisting && previousContent !== null) {
        meta.setAttribute('content', previousContent);
      } else {
        meta.remove();
      }
    };
  }, []);

  return (
    <>
      <PageSEO
        title="Page Not Found | My DP Digital"
        description="The page you're looking for doesn't exist. Explore My DP Digital's SEO, ads, and web design services in Chennai instead."
        canonicalPath="/404"
      />
      <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full flex items-center justify-center">
        <div className="absolute top-[10%] right-[-5%] w-[35vw] h-[35vw] bg-[#FF2E9A]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] bg-[#B026FF]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="text-center max-w-xl mx-auto px-4 relative z-10 space-y-6">
          <div className="text-7xl sm:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#0073AA]">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-white/70">
            The page you're looking for doesn't exist or may have moved. Head back home or explore our services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white py-2.5 px-6 rounded-xl text-sm font-bold transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="border border-white/20 text-white py-2.5 px-6 rounded-xl text-sm font-bold transition-all hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
