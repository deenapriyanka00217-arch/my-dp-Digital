import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ShieldCheck,
  Search,
  ShoppingCart,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Code2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/StickyWhatsApp';
import PageSEO from '../components/PageSEO';

const WHATSAPP_PHONE = '918148320217';

const WORDPRESS_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'WordPress Website Development',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'WordPress website development and maintenance support for businesses in Chennai and Tambaram, including business websites, Elementor pages, and WooCommerce stores.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'WordPress Development', item: 'https://www.mydpdigital.in/wordpress-development' },
    ],
  },
];

// 3D WordPress Rotating Showcase Badge
export const WordPress3DLoop: React.FC<{ size?: number; className?: string }> = ({ size = 80, className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Outer glowing pulsing rings */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0073AA] to-[#00A0D2] blur-xl opacity-60 animate-pulse" />
    <motion.div
      animate={{
        rotateY: [0, 180, 360],
        rotateX: [0, 15, 0, -15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className="relative flex items-center justify-center p-3 rounded-full bg-gradient-to-tr from-[#0073AA] via-[#005177] to-[#002233] border-2 border-[#00A0D2]/60 shadow-[0_10px_35px_rgba(0,115,170,0.5)]"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 4.965 3.018 9.227 7.314 11.04L3.109 11.53c-.352-.96-.48-1.728-.48-2.368 0-1.28.704-2.272 1.888-2.272.16 0 .32.032.48.064l6.08 17.024C11.36 23.984 11.68 24 12 24c.736 0 1.44-.08 2.128-.24L20.88 9.2c.16-.032.32-.064.48-.064 1.152 0 1.824.992 1.824 2.272 0 .64-.128 1.408-.48 2.368l-4.144 11.456C20.944 21.192 24 16.944 24 12c0-6.627-5.373-12-12-12zm-3.088 17.888L4.768 6.432C6.736 3.936 9.216 2.4 12 2.4c2.496 0 4.736 1.2 6.64 3.296l-4.144 12.192-2.752-8.32c-.352-1.056-.96-1.568-1.824-1.568-.864 0-1.472.512-1.824 1.568l-2.176 8.32z" />
      </svg>
    </motion.div>
  </div>
);

export const WordPressPage: React.FC = () => {
  const getWhatsAppUrl = (topic: string) => {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi DP Digital, I want to discuss WordPress Specialist services: ${topic}`)}`;
  };

  const wpSpecialties = [
    {
      title: 'Custom WordPress Websites',
      desc: 'Business websites and landing pages built around your services, content, page structure, and preferred editing workflow using WordPress, Gutenberg, or Elementor.',
      icon: Code2,
      tag: 'Built to Scope',
    },
    {
      title: 'Website Performance Optimisation',
      desc: 'Review hosting, caching, images, themes, plugins, and scripts, then prioritise practical improvements. Actual speed results depend on the hosting plan, site features, and third-party tools.',
      icon: Gauge,
      tag: 'Measured Improvements',
    },
    {
      title: 'WooCommerce Store Setup',
      desc: 'Product catalogues, product variations, checkout configuration, and payment options such as Razorpay or UPI where supported by the chosen gateway and hosting setup.',
      icon: ShoppingCart,
      tag: 'Online Store',
    },
    {
      title: 'Search-ready WordPress Setup',
      desc: 'Page titles, meta descriptions, canonical URLs, XML sitemaps, and relevant structured data to give search engines clear technical information. Rankings are not guaranteed.',
      icon: Search,
      tag: 'Technical SEO',
    },
    {
      title: 'Security, Updates & Backups',
      desc: "Plan WordPress core and plugin updates, backup routines, SSL configuration, and security checks around your site's hosting, plugins, and maintenance requirements.",
      icon: ShieldCheck,
      tag: 'Ongoing Care',
    },
    {
      title: 'Forms & Lead Integrations',
      desc: 'Connect suitable WordPress forms with email, WhatsApp, Google Sheets, or CRM tools. Available integrations depend on the selected plugins, accounts, and API access.',
      icon: Cpu,
      tag: 'Lead Workflow',
    },
  ];

  return (
    <>
    <PageSEO
      title="WordPress Development in Chennai & Tambaram"
      description="WordPress website development, Elementor pages, WooCommerce setup and maintenance support for businesses in Chennai and Tambaram."
      canonicalPath="/wordpress-development"
      jsonLd={WORDPRESS_JSON_LD}
    />
    <div className="w-full min-h-screen bg-[#07050C] text-white pt-24 pb-20">
      {/* Hero Banner with 3D WordPress Loop */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0B1528] via-[#0D091B] to-[#07050C] border border-[#0073AA]/30 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
          {/* Ambient WordPress blue glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0073AA]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A0D2]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0073AA]/20 border border-[#0073AA]/40 text-[#00A0D2] text-xs font-bold">
                <Globe size={14} />
                <span>WordPress Website Development & Support</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                WordPress Website Development in Chennai <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0D2] via-[#0073AA] to-[#25D366]">
                  Built Around Your Business.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                We plan, build, and support WordPress business websites, Elementor pages, and WooCommerce stores for businesses across Chennai, Tambaram, and South Chennai. Each project is scoped around the pages, features, content, integrations, and ongoing support you need.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl('New Custom WordPress Site')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#25D366]/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
                >
                  <WhatsAppIcon size={18} className="text-white" />
                  <span>Get WordPress Quote on WhatsApp</span>
                </a>

                <Link
                  to="/our-works"
                  className="border border-white/20 hover:border-[#0073AA] bg-white/[0.05] hover:bg-white/[0.08] text-white px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <span>View Live Works</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] sm:text-xs text-white/60">
                <span>Working with businesses across Chennai and South Chennai.</span>
                <span>Tambaram, Chromepet, Selaiyur, and nearby areas.</span>
                <a href="tel:+918148320217" className="flex items-center gap-1.5 text-[#00A0D2] hover:underline">
                  +91 81483 20217
                </a>
              </div>
            </div>

            {/* Right Side: 3D WordPress Visual Element */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
              <WordPress3DLoop size={72} className="mb-4" />
              <h3 className="font-black text-lg text-white">WordPress Toolkit</h3>
              <p className="text-xs text-white/60 mt-1 max-w-[240px]">
                WordPress • Gutenberg • Elementor • WooCommerce • Hosting & Integrations
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-[#10B981]">
                <CheckCircle2 size={13} />
                <span>Scope-led build and support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialist Features Grid */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Why Choose DP Digital For WordPress?
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2">
            Practical WordPress builds with a clear scope, maintainable setup, and support options that fit the way your business works.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {wpSpecialties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#0073AA]/60 transition-all group backdrop-blur-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0073AA]/20 border border-[#0073AA]/40 flex items-center justify-center text-[#00A0D2]">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-white/90">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-white group-hover:text-[#00A0D2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-[#00A0D2] font-semibold">Specialist Standard</span>
                  <CheckCircle2 size={14} className="text-[#10B981]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* WordPress project examples */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white">See Website Examples & Project Types</h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-3">
              Explore the published website and creative work in our portfolio. Each project page shows the available details and links, so you can review examples before discussing a similar WordPress or WooCommerce build.
            </p>
            <Link
              to="/our-works"
              className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-[#00A0D2] hover:underline"
            >
              <span>Browse the project portfolio</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= QUICK ANSWER: WORDPRESS & WOOCOMMERCE DEVELOPMENT IN CHENNAI ================= */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for a WordPress development company in Chennai, or WooCommerce website development in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            My DP Digital builds custom WordPress business portals and WooCommerce stores for businesses across
            Chennai, Tambaram, and nearby South Chennai areas. Depending on the project, we can configure product
            catalogues, payment gateway options such as Razorpay/UPI, and WhatsApp contact paths. Share your
            requirements to discuss the right platform, integrations, delivery scope, and support options.
          </p>
        </div>
      </div>

      {/* ================= QUICK ANSWER: WORDPRESS DEVELOPMENT COMPANY TAMBARAM ================= */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for a WordPress development company in Tambaram?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            As a WordPress development company serving Tambaram and the wider South Chennai belt, we build and
            support WordPress and WooCommerce sites for local businesses directly — no agency middleman relaying
            requests. Message us on WhatsApp with your business and area and we'll give you a free scope and
            timeline.
          </p>
        </div>
      </div>

      {/* ================= QUICK ANSWER: WORDPRESS WEBSITE MAINTENANCE SERVICES IN INDIA ================= */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Need WordPress website maintenance in Chennai or Tambaram?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Maintenance can include WordPress core and plugin updates, backup checks, security reviews, and help
            investigating site or performance issues. The exact tasks and response arrangements are agreed in
            advance based on your website, hosting, and support needs. Share your website link and the issue you
            need help with to discuss a suitable maintenance scope.
          </p>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0073AA]/30 via-[#0D091B] to-[#25D366]/20 border border-[#0073AA]/40 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Planning a WordPress Website for Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Discuss your page requirements, design, content, integrations, hosting, and preferred launch timeline. We will help define a practical project scope before work begins.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Full WordPress Project Consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-[#25D366]/25 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} className="text-white" />
              <span>Discuss Your WordPress Project</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WordPressPage;
