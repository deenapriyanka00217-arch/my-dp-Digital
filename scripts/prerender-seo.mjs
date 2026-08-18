// Post-build step: bakes the correct <title>, <meta name="description">,
// canonical link, and basic Open Graph / Twitter tags into a static
// index.html for every real route, using the exact same values the
// PageSEO component already sets client-side (see src/components/PageSEO.tsx).
//
// Why this exists: this is a client-side-rendered React SPA. Without this
// step, EVERY route (including the homepage) serves the same generic
// fallback <title>/<meta> from index.html until React mounts and PageSEO's
// useEffect runs. Search engine crawlers and social-media link previews
// that don't fully execute JavaScript (or that time out before it runs)
// see identical, generic metadata for every single page.
//
// This script does NOT change routing, does NOT touch vercel.json, and does
// NOT add any new runtime dependency (no headless browser). It just clones
// the already-built dist/index.html (which has the correct, current,
// content-hashed <script>/<link> asset tags for this exact build) into a
// small static file per route, with the <head> swapped for that route's
// real metadata. Vercel serves a matching static file ahead of the SPA
// catch-all rewrite, so requests to e.g. /about get this pre-filled HTML
// instead of the generic one — and once the JS bundle loads, PageSEO's
// useEffect sets the identical values again (harmless no-op), so normal
// client-side navigation between pages is completely unaffected.
//
// Safe to re-run on every build: it only ever reads dist/index.html and
// writes new files under dist/, never modifies source files.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_URL = 'https://www.mydpdigital.in';

// --- Static route metadata -------------------------------------------------
// Keep these in sync with each page's <PageSEO title=... description=...>
// props. This is a deliberate, simple, reviewable list rather than trying
// to statically evaluate the .tsx files.
const STATIC_ROUTES = [
  {
    route: '/',
    title: 'Digital Marketing Agency Near Me in Chennai | My DP Digital',
    description:
      "My DP Digital is a digital marketing agency near you in Chennai — SEO, Google Ads, website design, and branding for local businesses. Get a free quote.",
  },
  {
    route: '/services',
    title: 'Digital Marketing Packages for Small Business | Chennai',
    description:
      'Affordable digital marketing packages for small businesses in Chennai — SEO, Google Ads, and website design pricing. Explore services and get a free quote today.',
  },
  {
    route: '/services/seo',
    title: 'Local SEO Services in Chennai | My DP Digital',
    description:
      'Local SEO services in Chennai to rank higher on Google Maps and search results — Google Business Profile optimization, local citations, and more.',
  },
  {
    route: '/services/paid-social-ads',
    title: 'Social Media Marketing Agency in Chennai | My DP Digital',
    description:
      'Social media marketing agency in Chennai driving real engagement and ROI — Google & Facebook Ads managed by data-driven paid media specialists.',
  },
  {
    route: '/services/facebook-ads',
    title: 'Facebook & Google Ads Agency in Chennai | PPC Management',
    description:
      'Facebook Ads and Google Ads management agency in Chennai — high-ROAS product sales campaigns, PPC management, and social media ads for e-commerce brands.',
  },
  {
    route: '/services/web-design-development',
    title: 'Clinic & Business Website Design Company | Chennai',
    description:
      'Custom, fast, SEO-ready websites for clinics, doctors, and growing businesses in Chennai — built to convert visitors into patients and customers.',
  },
  {
    route: '/wordpress-development',
    title: 'WordPress Maintenance Services in India | My DP Digital',
    description:
      'WordPress website maintenance services in India — updates, security, backups, and support plans built for speed, SEO, and reliability.',
  },
  {
    route: '/services/content-marketing-branding',
    title: 'Graphic Design & Content Writing Services in Chennai',
    description:
      'Graphic design and content writing services in Chennai — branding, SEO copywriting, and visual design that builds authority and drives traffic.',
  },
  {
    route: '/youtube-management',
    title: 'YouTube Channel Management & Video Editing | Chennai',
    description:
      'Professional YouTube channel management, video editing, and thumbnail design for creators and brands in Chennai — grow your channel with expert help.',
  },
  {
    route: '/tambaram',
    title: 'Digital Marketing Agency in Tambaram, Chennai | My DP Digital',
    description:
      'Looking for a digital marketing agency in Tambaram, Chennai? My DP Digital offers SEO, Google Ads, website design and branding. Call +91 81483 20217.',
  },
  {
    route: '/about',
    title: 'About My DP Digital | Chennai Digital Marketing Agency',
    description:
      'My DP Digital is a Chennai-based digital marketing and web engineering agency — learn how we turn data into measurable growth for brands worldwide.',
  },
  {
    route: '/our-works',
    title: 'Our Works & Live Client Websites | My DP Digital',
    description:
      'Explore our verified client portfolio — live websites, e-commerce stores, and digital marketing deployments built by My DP Digital in Chennai.',
  },
  {
    route: '/blog',
    title: 'Digital Marketing Blog & Insights | My DP Digital',
    description:
      'Digital marketing insights, SEO tips, and web design trends — practical advice on Google Ads, agencies, and growing your business online.',
  },
  {
    route: '/contact',
    title: 'Contact My DP Digital | Chennai Digital Marketing Agency',
    description:
      'Get in touch with My DP Digital in Chennai — request a free consultation and instant quote for SEO, ads, and website design projects.',
  },
];

// --- Blog post routes, extracted from src/data/blogPosts.ts ----------------
function getBlogRoutes() {
  const srcPath = path.join(ROOT, 'src', 'data', 'blogPosts.ts');
  const src = fs.readFileSync(srcPath, 'utf8');

  // Anchor on every `id: "..."` / `id: '...'` occurrence (each post object
  // starts with one), then look at the text up to the NEXT id: occurrence
  // (or end of file) for that same post's slug/title/excerpt. This avoids
  // depending on consistent object-boundary whitespace/quote style, which
  // has varied between posts added by different tools/sessions.
  const idMatches = [...src.matchAll(/\bid:\s*['"]([^'"]+)['"]/g)];

  const field = (text, name) => {
    // Matches: name: "value"   or   name: 'value'   or   name:\n   "value"
    // The quote character is captured so content containing the OTHER
    // quote type (e.g. an apostrophe inside a double-quoted string) isn't
    // mistaken for the closing quote.
    const re = new RegExp(`\\b${name}:\\s*\\n?\\s*(['"])((?:(?!\\1)[^\\\\]|\\\\.)*)\\1`);
    const m = text.match(re);
    return m ? m[2] : null;
  };

  const routes = [];
  for (let i = 0; i < idMatches.length; i++) {
    const start = idMatches[i].index;
    const end = i + 1 < idMatches.length ? idMatches[i + 1].index : src.length;
    const block = src.slice(start, end);

    const slug = field(block, 'slug');
    const title = field(block, 'title');
    const description = field(block, 'excerpt');
    if (!slug || !title || !description) continue;

    routes.push({ route: `/blog/${slug}`, title: `${title} | My DP Digital Blog`, description });
  }
  return routes;
}

// --- HTML helpers ------------------------------------------------------------
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHead(baseHtml, { route, title, description }) {
  const url = `${SITE_URL}${route}`;
  let html = baseHtml;

  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);

  // meta description
  if (/<meta name="description"[^>]*>/.test(html)) {
    html = html.replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeHtml(description)}" />`
    );
  } else {
    html = html.replace('</title>', `</title>\n    <meta name="description" content="${escapeHtml(description)}" />`);
  }

  // canonical + OG/Twitter — insert right before </head>
  const extraTags = `
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
  </head>`;
  html = html.replace('</head>', extraTags);

  return html;
}

function main() {
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('[prerender-seo] dist/index.html not found — skipping (did the build actually run?)');
    process.exit(1);
  }
  const baseHtml = fs.readFileSync(indexPath, 'utf8');

  const allRoutes = [...STATIC_ROUTES, ...getBlogRoutes()];
  let written = 0;

  for (const meta of allRoutes) {
    const html = buildHead(baseHtml, meta);
    if (meta.route === '/') {
      fs.writeFileSync(indexPath, html);
    } else {
      const outDir = path.join(DIST, meta.route.replace(/^\//, ''));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
    }
    written += 1;
  }

  console.log(`[prerender-seo] wrote per-route <head> metadata for ${written} routes.`);
}

main();
