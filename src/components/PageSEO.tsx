import { useEffect } from 'react';

const SITE_URL = 'https://www.mydpdigital.in';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd?: object | object[];
}

/**
 * Lightweight per-page SEO helper (no extra dependency like react-helmet-async
 * required). Sets a unique <title>, meta description, canonical link, basic
 * Open Graph / Twitter tags, and optional JSON-LD structured data while this
 * page is mounted, then restores the previous title on unmount.
 */
const PageSEO: React.FC<PageSEOProps> = ({ title, description, canonicalPath, jsonLd }) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', `${SITE_URL}${canonicalPath}`);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${canonicalPath}`);

    const injectedScripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      entries.forEach((data) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
        injectedScripts.push(script);
      });
    }

    return () => {
      document.title = previousTitle;
      injectedScripts.forEach((script) => script.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonicalPath, jsonLd]);

  return null;
};

export default PageSEO;
