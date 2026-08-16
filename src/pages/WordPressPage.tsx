import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Zap, 
  ShieldCheck, 
  Search, 
  ShoppingCart, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Gauge, 
  Lock, 
  RefreshCw,
  Code2,
  Database,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/StickyWhatsApp';
import PageSEO from '../components/PageSEO';

const WHATSAPP_PHONE = '918148320217';

const WORDPRESS_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'WordPress Website Maintenance',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'India',
    description:
      'WordPress website development and maintenance services in India, covering updates, security, backups, speed optimization, and ongoing support plans.',
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
      title: 'Custom Theme & Block Engineering',
      desc: 'Bespoke, lightweight WordPress themes crafted with clean PHP, modern CSS, and tailored Gutenberg blocks or Elementor Pro without bloated third-party plugins.',
      icon: Code2,
      tag: 'Zero Bloat',
    },
    {
      title: 'Ultra-Fast 90+ PageSpeed Score',
      desc: 'Advanced server-side caching (LiteSpeed/Redis), WebP image compression, script deferment, and Cloudflare CDN configuration to guarantee A+ performance.',
      icon: Gauge,
      tag: '< 1.2s Load Time',
    },
    {
      title: 'WooCommerce E-Commerce Engines',
      desc: 'Seamless product catalogs, one-click checkout funnels, Razorpay/Stripe/UPI integration, WhatsApp order tracking, and inventory automation.',
      icon: ShoppingCart,
      tag: 'High Conversion',
    },
    {
      title: 'On-Page & Off-Page SEO Setup',
      desc: 'Deep technical SEO architecture, structured Schema markup, XML sitemaps, RankMath/Yoast setup, instant Google Indexing, and search ranking velocity.',
      icon: Search,
      tag: 'Top Google Rank',
    },
    {
      title: 'Enterprise Security & Shielding',
      desc: 'Automated malware scanning, Cloudflare WAF firewall rules, brute-force defense, SSL hardening, and automated off-site daily cloud backups.',
      icon: Lock,
      tag: '100% Secure',
    },
    {
      title: 'WhatsApp & Lead Automation',
      desc: 'Connect WordPress forms (Contact Form 7, Elementor, WPForms) directly to WhatsApp, CRM systems, Google Sheets, and email marketing sequences.',
      icon: Cpu,
      tag: 'Instant Sync',
    },
  ];

  const wpProjects = [
    {
      title: 'Viraat Healthcare Corporate Portal',
      type: 'WordPress Multi-Specialty Clinic',
      speed: '96/100 PageSpeed',
      features: ['Doctor Appointment Booking', 'Live WhatsApp Chat', 'Schema SEO'],
    },
    {
      title: 'Elite Furnishings E-Commerce Store',
      type: 'WooCommerce Custom Store',
      speed: '94/100 PageSpeed',
      features: ['UPI / Razorpay Checkout', 'Product Variants', 'WhatsApp Order Ping'],
    },
    {
      title: 'Apex Law & Consulting Firm',
      type: 'Bespoke Elementor Pro Business Site',
      speed: '98/100 PageSpeed',
      features: ['Case Study Showcase', 'Client Lead Funnel', 'Dynamic Blog System'],
    },
    {
      title: 'EduPro Learning Academy LMS',
      type: 'WordPress Learndash LMS Portal',
      speed: '92/100 PageSpeed',
      features: ['Video Streaming', 'Student Quizzes', 'Certificate Generation'],
    },
  ];

  return (
    <>
    <PageSEO
      title="WordPress Maintenance Services in India | My DP Digital"
      description="WordPress website maintenance services in India — updates, security, backups, and support plans built for speed, SEO, and reliability."
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
                <span>Specialist WordPress Engineering Studio</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                WordPress Website Development <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A0D2] via-[#0073AA] to-[#25D366]">
                  Built for Speed, SEO & High Sales.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
                We are dedicated WordPress specialists. We develop custom WordPress business portals, WooCommerce stores, and high-performance landing pages optimized for 90+ Google PageSpeed, unbreakable security, and effortless content management.
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
            </div>

            {/* Right Side: 3D WordPress Visual Element */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
              <WordPress3DLoop size={72} className="mb-4" />
              <h3 className="font-black text-lg text-white">Official WordPress Stack</h3>
              <p className="text-xs text-white/60 mt-1 max-w-[240px]">
                Theme Development • Elementor Pro • WooCommerce • LiteSpeed • REST API
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-[#10B981]">
                <CheckCircle2 size={13} />
                <span>PageSpeed Score Guarantee</span>
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
            No cookie-cutter templates or bloated page builders. We build lean, high-velocity WordPress platforms.
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

      {/* Featured WordPress Case Studies */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Recent WordPress Builds</h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1">Live customer projects delivered with custom WordPress architecture.</p>
          </div>
          <Link
            to="/our-works"
            className="text-xs font-bold text-[#00A0D2] hover:underline flex items-center gap-1.5"
          >
            <span>View All 22+ Works</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {wpProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#0073AA]/20 text-[#00A0D2] border border-[#0073AA]/30">
                    WordPress
                  </span>
                  <span className="text-[10px] font-bold text-[#10B981]">{project.speed}</span>
                </div>

                <h4 className="font-bold text-sm text-white">{project.title}</h4>
                <p className="text-[11px] text-white/60">{project.type}</p>

                <div className="space-y-1 pt-1">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="text-[10px] text-white/70 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#00A0D2]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5">
                <a
                  href={getWhatsAppUrl(`Inquiry about ${project.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-[#25D366] hover:text-white text-white/80 text-[11px] font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <WhatsAppIcon size={14} />
                  <span>Build Similar Site</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0073AA]/30 via-[#0D091B] to-[#25D366]/20 border border-[#0073AA]/40 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Need a High-Performance WordPress Website?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Get your business online in 3 to 7 days with custom design, mobile responsiveness, fast hosting configuration, and full WhatsApp integration.
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
