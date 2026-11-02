import { useEffect } from 'react';

const SITE_URL = 'https://www.mydpdigital.in';
const BRAND_LOGO_URL = `${SITE_URL}/apple-touch-icon.png`;

const enrichOrganizationLogo = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(enrichOrganizationLogo);
  if (!value || typeof value !== 'object') return value;

  const source = value as Record<string, unknown>;
  const result: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(source)) {
    result[key] = key === 'logo' ? child : enrichOrganizationLogo(child);
  }

  const type = result['@type'];
  const isOrganization =
    type === 'Organization' || (Array.isArray(type) && type.includes('Organization'));
  if (isOrganization && !result.logo) {
    result.logo = { '@type': 'ImageObject', url: BRAND_LOGO_URL };
  }

  return result;
};

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

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonicalPath]);

  // Keep structured data in the rendered document so crawlers that inspect
  // the initial HTML can read it without waiting for JavaScript effects.
  const entries = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const structuredEntries = entries.map((entry) => enrichOrganizationLogo(entry));

  return (
    <>
      {structuredEntries.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(entry).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
};

export default PageSEO;
