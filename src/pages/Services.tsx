import { motion } from 'framer-motion';
import { 
  Zap, 
  Briefcase, 
  Layers, 
  ShoppingCart, 
  Globe, 
  GraduationCap, 
  Search, 
  Megaphone, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  Clock,
  ShieldCheck,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const ALL_SERVICES = [
  {
    id: 'youtube-management',
    title: 'YouTube Channel Editing & Management',
    category: 'Video Production & Viral Growth',
    tag: 'Trending & Viral',
    timeline: 'Monthly Retainer / 48h Turnaround',
    priceGuide: 'From ₹14,999/mo',
    color: '#FF0000', // YouTube Red / Neon
    icon: Youtube,
    description: 'High-pacing video editing, 12%+ CTR thumbnail design, keyword-ranked on-page YouTube SEO, and end-to-end channel upload management.',
    deliverables: [
      'Retention Pacing, SFX & Color Grading',
      'High-CTR Custom Designed Thumbnails (A/B)',
      '100/100 TubeBuddy & VidIQ On-Page SEO',
      'Viral YouTube Shorts / Reels Repurposing'
    ],
    examples: 'Kaasedhaan Kadavullappa, Veritas Tech Pilot Academy, Bachelor Boys Vlogz',
    link: '/youtube-management'
  },
  {
    id: 'single-page',
    title: 'Single Page Websites',
    category: 'Fast Launch & High Conversion',
    tag: 'Quick Launch',
    timeline: '3 - 5 Days',
    priceGuide: 'From ₹12,000',
    color: '#06B6D4', // Cyan
    icon: Zap,
    description: 'Ultra-fast, responsive single-page web experiences engineered with precision storytelling, smooth scroll sections, and embedded WhatsApp lead routing.',
    deliverables: [
      'Custom Responsive UI Layout',
      'Instant WhatsApp Chat Integration',
      'Hero Conversion Lead Form',
      'High-Speed CDN Hosting Setup'
    ],
    examples: 'sparklingpurity.in, skburners.in, eliteexpressenterprises.in'
  },
  {
    id: 'business-site',
    title: 'Corporate Business Websites',
    category: 'Multi-Page Authority Portals',
    tag: 'Most Popular',
    timeline: '7 - 10 Days',
    priceGuide: 'From ₹25,000',
    color: '#3B82F6', // Royal Blue
    icon: Briefcase,
    description: 'Comprehensive 5-10 page corporate websites built to establish credibility, rank on Google, and capture enterprise client inquiries.',
    deliverables: [
      'Dynamic Services & About Pages',
      'On-Page Semantic SEO Structure',
      'Lead Capture & Quote Generator',
      'Mobile-First Google Speed 95+'
    ],
    examples: 'chennaivisaservices.in, sparklecleanings.in, rsnproperties.in'
  },
  {
    id: 'custom-20plus',
    title: 'Custom Websites (20+ Pages)',
    category: 'Scaled Enterprise & Portals',
    tag: 'Enterprise Scale',
    timeline: '14 - 20 Days',
    priceGuide: 'From ₹55,000',
    color: '#FF2E9A', // Neon Pink
    icon: Layers,
    description: 'Massive, content-rich corporate infrastructures for growing companies across India, with specialized silos, programmatic sub-pages, dynamic filters, and extensive technical SEO architecture.',
    deliverables: [
      '20+ Custom Coded Layouts',
      'Deep Programmatic Keyword Silos',
      'Advanced Custom Search & Filter',
      'Multi-Location Landing Architecture'
    ],
    examples: 'maxprohracademy.com, maxprohrsolution.in'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Product Platforms',
    category: 'Revenue & Transactional',
    tag: 'High Revenue',
    timeline: '10 - 15 Days',
    priceGuide: 'From ₹35,000',
    color: '#10B981', // Emerald Green
    icon: ShoppingCart,
    description: 'High-converting online storefronts with streamlined product catalogs, UPI & card payment gateways, automated invoice dispatch, and order tracking.',
    deliverables: [
      'Razorpay/Stripe Instant Checkout',
      'Dynamic Inventory & Order Manager',
      'One-Click WhatsApp Order Alerts',
      'Abandoned Cart Email Sequences'
    ],
    examples: 'lakshminalabagam.com'
  },
  {
    id: 'sales-landing',
    title: 'Sales Landing & Funnel Automation',
    category: 'Webinars & Paid Campaigns',
    tag: 'Max Conversion',
    timeline: '5 - 8 Days',
    priceGuide: 'From ₹20,000',
    color: '#F97316', // Sunset Orange
    icon: Globe,
    description: 'Direct-response sales engines with countdown urgency timers, video embeds, automated CRM lead sync, and instant booking calendar integration.',
    deliverables: [
      'Psychological Direct-Response Layout',
      'Automated Lead Nurturing Webhooks',
      'Webinar & Event Registration Engine',
      'Split Testing & A/B Tracking Ready'
    ],
    examples: 'maxprohracademy.in, veritastechpilotacademy.com/freewebinar01'
  },
  {
    id: 'lms-portal',
    title: 'LMS - Course Management Systems',
    category: 'EdTech & Digital Academies',
    tag: 'EdTech Scalable',
    timeline: '12 - 18 Days',
    priceGuide: 'From ₹45,000',
    color: '#A855F7', // Amethyst Purple
    icon: GraduationCap,
    description: 'Complete student learning environments for coaching institutes and academies across India — featuring locked curriculum modules, video DRM protection, quiz engines, student dashboards, and automated certificates.',
    deliverables: [
      'Student Dashboard & Progress Tracker',
      'Secure DRM-Protected Video Player',
      'Automated Certificate Generator',
      'Subscription & One-Time Payments'
    ],
    examples: 'ambedkaracademytnpsc.in, ejveritastech.com'
  },
  {
    id: 'seo-strategy',
    title: 'Algorithmic SEO & SERP Domination',
    category: 'Organic Compounding Traffic',
    tag: 'Organic Traffic',
    timeline: 'Monthly Retainer',
    priceGuide: 'From ₹18,000/mo',
    color: '#00F5D4', // Mint Green
    icon: Search,
    description: 'Technical audits, Core Web Vitals perfection, semantic topic clusters, and white-hat link acquisition to rank #1 on Google for high-buyer intent keywords.',
    deliverables: [
      'Forensic Technical Architecture Audit',
      'Topical Authority Keyword Matrix',
      'Schema Markup & Rich Snippets',
      'Monthly Keyword Ranking Dashboards'
    ],
    examples: 'Verified +340% Organic Impressions Across Client Network'
  },
  {
    id: 'facebook-ads',
    title: 'Facebook & Meta Product Sales Ads',
    category: 'E-Commerce Product Sales & High ROAS',
    tag: 'Product Sales Ads',
    timeline: 'Monthly Retainer / Continuous Sprints',
    priceGuide: 'From ₹18,000/mo',
    color: '#1877F2', // Meta Blue
    icon: Megaphone,
    description: 'High-converting UGC reels, dynamic product carousels (DPA), Click-to-WhatsApp ads, server-side Conversions API, and CBO scaling generating ₹4.8Cr+ in sales.',
    deliverables: [
      'High-CTR UGC Video Hooks & Ad Copy',
      'Meta Conversions API (CAPI) & Pixel Setup',
      'Dynamic Product Catalog Ads (DPA)',
      'Click-to-WhatsApp Direct Checkout Funnels'
    ],
    examples: 'Verified 4.6x–8.2x Client ROAS & 150K+ Orders',
    link: '/services/facebook-ads'
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Website Development',
    category: 'Custom CMS & WooCommerce Specialists',
    tag: 'Specialist CMS',
    timeline: '5 - 10 Days',
    priceGuide: 'From ₹15,000',
    color: '#0073AA', // WordPress Blue
    icon: Globe,
    description: 'Bespoke, lightweight WordPress & WooCommerce themes, 90+ PageSpeed guarantee, technical on-page SEO, automated backups, and WhatsApp lead routing.',
    deliverables: [
      'Custom Gutenberg / Elementor Theme',
      'Ultra-Fast 90+ Google PageSpeed Score',
      'WooCommerce E-Commerce Engine & Razorpay',
      'Deep On-Page SEO & Schema Architecture'
    ],
    examples: 'Skburners.in, Eliteexpressenterprises.in, Sparklecleanings.in',
    link: '/wordpress-development'
  },
  {
    id: 'paid-ads',
    title: 'Meta & Google Ads Scaling',
    category: 'Paid Acquisition & ROAS',
    tag: 'High ROAS',
    timeline: 'Monthly Retainer',
    priceGuide: 'From ₹22,000/mo',
    color: '#B026FF', // Ultra Violet
    icon: Megaphone,
    description: 'Full-funnel paid media campaigns across Google Search, Shopping, YouTube, Instagram, and Facebook engineered for positive return on ad spend (ROAS).',
    deliverables: [
      'Creative Video & Static Ad Sprints',
      'Algorithmic Smart-Bidding Setup',
      'Conversion API & Pixel Tracking',
      'Multi-Variant Copy & Landing Tests'
    ],
    examples: 'Average 4.8x - 6.5x Client ROAS'
  },
  {
    id: 'content-branding',
    title: 'Content Marketing & Brand Authority',
    category: 'Chennai Digital Branding Agency',
    tag: 'Authority Engine',
    timeline: 'Ongoing Sprints',
    priceGuide: 'From ₹15,000/mo',
    color: '#FF7AC6', // Flamingo Pink
    icon: BookOpen,
    description: 'A Chennai-based digital branding agency handling authoritative technical copywriting, visual brand identity guidelines, thought-leadership blogs, and social content systems that convert readers to advocates.',
    deliverables: [
      'Brand Visual Design Systems',
      'SEO-Optimized Long-Form Articles',
      'Social Graphics & Video Templates',
      'Buyer Persona Voice & Messaging Matrix'
    ],
    examples: 'Over 100+ High-Ranking Longform Strategy Playbooks'
  },
  {
    id: 'ai-chatbots-voice',
    title: 'AI Chatbots & Voice Agents',
    category: 'Automated Lead Response & Support',
    tag: 'AI-Powered',
    timeline: '7 - 12 Days',
    priceGuide: 'From ₹20,000',
    color: '#06B6D4', // Cyan
    icon: MessageCircle,
    description: 'WhatsApp and website AI chatbots, plus voice agents, trained on your services, pricing, and FAQs — answering common questions instantly, qualifying leads around the clock, and handing off to your team only when a real conversation is needed.',
    deliverables: [
      'WhatsApp AI Chatbot Setup & Training',
      'Website Chat Widget / Voice Agent',
      '24/7 Automated Lead Qualification',
      'Human Handoff for Complex Queries'
    ],
    examples: 'Trained on your real services, pricing, and FAQs'
  }
];

const SERVICES_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Digital Marketing Packages',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'Digital marketing, website design, SEO, and Google Ads packages for small and mid-sized businesses in Chennai, with pricing built for real budgets.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mydpdigital.in/services' },
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
    <PageSEO
      title="Digital Marketing Packages for Small Business | Chennai"
      description="Affordable digital marketing packages for small businesses in Chennai — SEO, Google Ads, and website design pricing. Explore services and get a free quote today."
      canonicalPath="/services"
      jsonLd={SERVICES_JSON_LD}
    />
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      {/* Ambient Blurred Colored Glows */}
      <div className="absolute top-[5%] left-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-[#3B82F6]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#10B981]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }}
      />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        {/* Header Title Section */}
        <div className="max-w-4xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> Complete Digital Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Specialized Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">
              Engineered for High-Velocity Growth.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-white/80 leading-relaxed font-normal max-w-3xl">
            From single-page fast launches to enterprise multi-page web infrastructures, e-commerce stores, LMS platforms, and algorithmic SEO scaling — explore our full suite of technical growth capabilities.
          </p>
        </div>

        {/* Affordable Packages Subheading */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Affordable Digital Marketing Packages in Chennai
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
            Every service below is available as a flexible, transparently-priced package sized for small and
            growing Chennai businesses — no bloated enterprise retainers required to get started.
          </p>
        </div>

        {/* Services Grid with Distinct Color Identities and Glass Blur */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-32">
          {ALL_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Card3DTilt key={service.id} maxTilt={6} depth={20} className="h-full">
                <article
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  className="h-full p-8 rounded-[36px] bg-white/[0.035] backdrop-blur-2xl border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
                >
                  {/* Distinct Colored Radial Aura Blur in Background */}
                  <div
                    className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-[70px] opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none"
                    style={{ backgroundColor: service.color }}
                  />

                  <div className="space-y-6 relative z-10">
                    {/* Top Tag & Timeline */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full border shadow-sm backdrop-blur-md"
                        style={{
                          backgroundColor: `${service.color}15`,
                          borderColor: `${service.color}40`,
                          color: service.color,
                        }}
                      >
                        {service.tag}
                      </span>
                      <span className="text-[10px] text-white/60 font-semibold flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5">
                        <Clock size={12} className="text-white/70" />
                        <span>{service.timeline}</span>
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="space-y-3">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${service.color}20`,
                          border: `1px solid ${service.color}50`,
                        }}
                      >
                        <Icon size={26} style={{ color: service.color }} />
                      </div>
                      <h2 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                        {service.title}
                      </h2>
                      <div className="text-xs font-bold uppercase tracking-wider" style={{ color: service.color }}>
                        {service.category}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <div className="text-[10px] font-black uppercase tracking-wider text-white/50 mb-1">
                        Key Architecture Deliverables:
                      </div>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-medium text-white/90">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: service.color }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Example Sites Reference */}
                    {service.examples && (
                      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] text-white/60">
                        <span className="font-bold text-white/80 block mb-0.5">Live Portfolios:</span>
                        <span className="text-white/60 line-clamp-1 italic">{service.examples}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons: WhatsApp Quote + Direct Form Link */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 relative z-10">
                    <a
                      href={`https://wa.me/918148320217?text=${encodeURIComponent(`Hi DP Digital, I am interested in getting a quote for ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#1fbc57] text-white py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-[#25D366]/20 cursor-pointer"
                    >
                      <MessageCircle size={15} fill="white" />
                      <span>WhatsApp Quote</span>
                    </a>

                    {service.link ? (
                      <Link
                        to={service.link}
                        className="px-4 py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#ff2626] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md"
                      >
                        <span>View Hub</span>
                        <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <a
                        href={`https://wa.me/918148320217?text=${encodeURIComponent(`Hi DP Digital, I would like to get a plan and pricing for ${service.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Get Plan</span>
                        <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </article>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Global Guaranteed Architecture Highlights */}
        <div className="mb-32 grid sm:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#06B6D4]/15 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4]">
              <Zap size={22} />
            </div>
            <h3 className="text-xl font-black text-white">Sub-Second Speed</h3>
            <p className="text-white/70 text-xs sm:text-sm font-normal leading-relaxed">
              Every website is engineered for Google Core Web Vitals compliance with 90+ PageSpeed benchmarks on mobile and desktop.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
              <MessageCircle size={22} />
            </div>
            <h3 className="text-xl font-black text-white">Direct WhatsApp Sync</h3>
            <p className="text-white/70 text-xs sm:text-sm font-normal leading-relaxed">
              Eliminate lead friction. Capture inbound clients directly into your WhatsApp inbox within seconds of site visits.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FF2E9A]/15 border border-[#FF2E9A]/30 flex items-center justify-center text-[#FF2E9A]">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-xl font-black text-white">Clean NDA & 100% Security</h3>
            <p className="text-white/70 text-xs sm:text-sm font-normal leading-relaxed">
              Clean, modular, scalable codebases with full intellectual property ownership, zero recurring lock-in, and 256-bit SSL encryption.
            </p>
          </div>
        </div>

        {/* ================= QUICK ANSWER: SMALL BUSINESS PACKAGES ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for digital marketing packages for small business in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We put together SEO, Google Ads, and website design packages sized for small and mid-sized Chennai
            businesses rather than one-size-fits-all enterprise pricing. Message us on WhatsApp with your budget
            and what you're trying to grow, and we'll put together pricing packages that actually fit.
          </p>
        </div>

        {/* ================= QUICK ANSWER: AFFORDABLE MULTI-PAGE WEBSITES ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for affordable website design in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Not every business needs an enterprise build — we also do multi-page business websites at a lower cost
            for Chennai businesses that need a clean, working site fast rather than a six-figure custom platform.
            Message us on WhatsApp with your budget and page count and we'll tell you honestly what's realistic.
          </p>
        </div>

        {/* ================= QUICK ANSWER: DIGITAL MARKETING FOR COACHING CENTERS ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Running a coaching center or institute?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We handle digital marketing for coaching centers and coaching institutes — enrollment-focused websites,
            local SEO so nearby students find you, and Google/Meta ads targeted at parents and students actively
            searching for classes. Message us on WhatsApp with your subjects and location and we'll map out a plan.
          </p>
        </div>

        <FAQ />

        {/* Final CTA Banner */}
        <div className="mt-32 p-10 sm:p-16 rounded-[48px] bg-gradient-to-tr from-[#150A24] via-[#0E0919] to-[#07050C] border border-white/15 text-center relative overflow-hidden backdrop-blur-2xl shadow-2xl">
          <div className="absolute inset-0 bg-[#FF2E9A]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF2E9A]/15 border border-[#FF2E9A]/30 text-[#FF7AC6] text-[10px] font-black uppercase tracking-widest">
              <Sparkles size={14} /> Start Your Project
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready for a Custom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] to-[#06B6D4]">
                Architecture Roadmap?
              </span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg font-normal">
              Speak directly with our chief tech architect to review requirements, scope out deliverables, and launch within days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/918148320217?text=Hi%20DP%20Digital%2C%20I%20would%20like%20to%20consult%20about%20a%20website%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1fbc57] text-white px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm shadow-xl shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle size={18} fill="white" />
                <span>Chat on WhatsApp (+91-8148320217)</span>
              </a>
              <Link
                to="/contact"
                className="bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm transition-all"
              >
                Request Detailed Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;

