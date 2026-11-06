import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShoppingCart, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Target, 
  BarChart3, 
  Zap, 
  Layers, 
  Cpu, 
  RefreshCw, 
  Eye, 
  Calculator, 
  Coins, 
  Award, 
  ChevronRight,
  Flame,
  MousePointerClick
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/StickyWhatsApp';
import { BannerServicesForm } from '../components/BannerServicesForm';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const WHATSAPP_PHONE = '918148320217';

const FACEBOOKADS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Facebook & Instagram Ads Management',
  provider: {
    '@type': 'Organization',
    name: 'My DP Digital',
    url: 'https://www.mydpdigital.in',
    telephone: '+91-81483-20217',
  },
  areaServed: 'Chennai and Tambaram, Tamil Nadu, India',
  description:
    'Meta Ads management for Chennai and Tambaram businesses, including lead forms, WhatsApp campaigns, creative testing, retargeting and conversion tracking.',
};

// 3D Neon Animated Facebook / Meta Logo Emblem with Glowing Laser Halo
export const Facebook3DNeonLoop: React.FC<{ size?: number; className?: string }> = ({ size = 80, className = '' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Outer neon cyan-blue pulsing aura */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1877F2] via-[#0866FF] to-[#00F2FE] blur-2xl opacity-70 animate-pulse" />
    <div className="absolute -inset-2 rounded-full border border-[#00F2FE]/40 animate-ping opacity-25" />

    <motion.div
      animate={{
        rotateY: [0, 180, 360],
        rotateX: [0, 12, 0, -12, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className="relative flex items-center justify-center p-3.5 rounded-full bg-gradient-to-tr from-[#0866FF] via-[#1877F2] to-[#002244] border-2 border-[#00F2FE]/70 shadow-[0_10px_40px_rgba(24,119,242,0.6)]"
    >
      {/* 3D Facebook 'f' Vector */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </motion.div>
  </div>
);

// Small Size Facebook Ad Sales & ROAS Calculator Component (Right-Hand Side)
const FacebookAdSalesCalculator: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(30000); // Current Marketing Expenses
  const [aov, setAov] = useState<number>(1500); // Product Price / Size
  const [cpc, setCpc] = useState<number>(25); // Average Cost Per Click (₹)
  const [convRate, setConvRate] = useState<number>(2.5); // Conversion Rate (%)

  // Calculate clicks, orders, revenue, and ROI
  const estimatedClicks = Math.round(adSpend / (cpc || 1));
  const estimatedOrders = Math.round(estimatedClicks * (convRate / 100));
  const projectedSales = Math.round(estimatedOrders * aov);
  const calculatedRoas = adSpend > 0 ? Number((projectedSales / adSpend).toFixed(1)) : 0;
  const estimatedNetProfit = Math.round(projectedSales - adSpend - (estimatedOrders * aov * 0.40));

  const getCalcWhatsAppUrl = () => {
    const text = `Hi DP Digital, I used your Facebook Ads Product ROI Calculator:
- Current Marketing Expenses (Ad Spend): ₹${adSpend.toLocaleString('en-IN')}
- Product Price (AOV): ₹${aov.toLocaleString('en-IN')}
- Avg Cost Per Click (CPC): ₹${cpc}
- Conversion Rate: ${convRate}%
- Projected Sales Revenue: ₹${projectedSales.toLocaleString('en-IN')} (${estimatedOrders} Orders / ${calculatedRoas}x ROAS)
I want to scale our Facebook & Meta product ads. Please share a custom strategy.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#0E0B1A]/95 backdrop-blur-2xl rounded-3xl border border-[#1877F2]/40 p-5 sm:p-6 shadow-[0_15px_45px_rgba(24,119,242,0.3)] relative overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#1877F2]/20 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00F2FE]/15 blur-[50px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1877F2]/20 border border-[#1877F2]/40 flex items-center justify-center text-[#00F2FE]">
            <Calculator size={16} />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-black text-white leading-tight">Product ROI & ROAS Calculator</h3>
            <p className="text-[10px] text-white/60">Simulate clicks, orders & revenue</p>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1877F2]/20 text-[#00F2FE] border border-[#1877F2]/30">
          Meta Model
        </span>
      </div>

      {/* Sliders & Inputs */}
      <div className="space-y-3 relative z-10 text-xs">
        {/* Current Marketing Expenses */}
        <div>
          <div className="flex justify-between font-bold text-white/90 mb-1">
            <span className="text-[11px]">Current Marketing Expenses:</span>
            <span className="text-[#00F2FE] font-mono">₹{adSpend.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min={10000}
            max={300000}
            step={5000}
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#1877F2]"
          />
        </div>

        {/* Product Price / AOV */}
        <div>
          <div className="flex justify-between font-bold text-white/90 mb-1">
            <span className="text-[11px]">Product Price (AOV / Size):</span>
            <span className="text-white font-mono">₹{aov.toLocaleString('en-IN')}</span>
          </div>
          <input
            type="range"
            min={300}
            max={10000}
            step={100}
            value={aov}
            onChange={(e) => setAov(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#0866FF]"
          />
        </div>

        {/* Average Cost Per Click (CPC) */}
        <div>
          <div className="flex justify-between font-bold text-white/90 mb-1">
            <span className="text-[11px]">Avg Cost Per Click (CPC):</span>
            <span className="text-[#FF7AC6] font-mono">₹{cpc} / click</span>
          </div>
          <input
            type="range"
            min={10}
            max={120}
            step={5}
            value={cpc}
            onChange={(e) => setCpc(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF7AC6]"
          />
        </div>

        {/* Conversion Rate (%) */}
        <div>
          <div className="flex justify-between font-bold text-white/90 mb-1">
            <span className="text-[11px]">Store Conversion Rate:</span>
            <span className="text-[#10B981] font-mono">{convRate}%</span>
          </div>
          <input
            type="range"
            min={1.0}
            max={8.0}
            step={0.5}
            value={convRate}
            onChange={(e) => setConvRate(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
          />
        </div>

        {/* Results Matrix */}
        <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2 mt-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/70">Projected Sales Revenue:</span>
            <span className="text-base sm:text-lg font-black text-[#00F2FE] font-mono">
              ₹{projectedSales.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs pt-1 border-t border-white/5">
            <span className="text-white/70">Estimated ROAS Multiplier:</span>
            <span className="font-bold text-[#FF2E9A] font-mono">{calculatedRoas > 0 ? `${calculatedRoas}x ROAS` : '0x'}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-white/70">Estimated Orders / Month:</span>
            <span className="font-bold text-white font-mono">{estimatedOrders.toLocaleString('en-IN')} units</span>
          </div>
        </div>
        <p className="text-[10px] text-white/50 leading-relaxed">Illustrative estimates only, not a forecast or guarantee. Actual campaign results depend on the product, margin, offer, audience, creative, landing page, tracking, and auction conditions.</p>

        {/* Action Button */}
        <div className="pt-1">
          <a
            href={getCalcWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-[#1877F2] via-[#0866FF] to-[#00F2FE] hover:opacity-95 text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-lg shadow-[#1877F2]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
          >
            <WhatsAppIcon size={16} className="text-white" />
            <span>Launch This ROI Model on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const FacebookAdsPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getWhatsAppUrl = (topic: string) => {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi DP Digital, I want to discuss Facebook and Instagram (Meta) Ads for my business: ${topic}`)}`;
  };

  const adFeatures = [
    {
      title: 'Lead Generation & Product Sales Ads',
      desc: 'Plan Facebook and Instagram campaigns for enquiries or purchases using lead forms, click-to-WhatsApp, offer-led creatives, product ads, and retargeting based on the business goal.',
      icon: Target,
      tag: 'Lead & Sales Campaigns',
      metric: 'Campaign Objectives',
    },
    {
      title: 'Conversions API & Pixel Tracking',
      desc: 'Set up Meta Pixel and Conversions API (CAPI) where appropriate, with event configuration and deduplication to improve campaign measurement.',
      icon: Cpu,
      tag: 'Server CAPI Setup',
      metric: 'Event Measurement',
    },
    {
      title: 'Advantage+ & CBO Budget Scaling',
      desc: 'Use campaign budget optimization, audience testing, lookalike audiences where appropriate, and Advantage+ options based on the account and campaign objective.',
      icon: TrendingUp,
      tag: 'Algorithmic Scale',
      metric: 'Audience Testing',
    },
    {
      title: 'Click-to-WhatsApp & Lead Form Campaigns',
      desc: 'Route interested prospects from Facebook and Instagram to WhatsApp conversations or Meta instant forms, with a follow-up process agreed before launch.',
      icon: Zap,
      tag: 'Enquiry Routes',
      metric: 'WhatsApp & Forms',
    },
    {
      title: 'Dynamic Catalog Retargeting (DPA)',
      desc: 'Reconnect with people who viewed products or engaged with your brand using relevant catalog and retargeting campaigns.',
      icon: RefreshCw,
      tag: 'Cart Recovery',
      metric: 'Retargeting Setup',
    },
    {
      title: 'Ad Creative Planning & Copywriting',
      desc: 'Prepare Tamil and English ad copy, short-form video concepts, static creatives, and variations based on the agreed campaign objective and production scope.',
      icon: Layers,
      tag: 'Creative Variations',
      metric: 'Creative Testing',
    },
  ];

  const salesMilestones = [
    { number: '01', label: 'Audience Strategy', sub: 'Define campaign structure and targeting.' },
    { number: '02', label: 'Creative Testing', sub: 'Test ad formats, messages, and offers.' },
    { number: '03', label: 'Conversion Tracking', sub: 'Measure leads, purchases, and key actions.' },
    { number: '04', label: 'Campaign Review', sub: 'Review results and refine campaigns.' },
  ];

  const salesAdFormats = [
    {
      name: 'Dynamic E-Commerce Product Carousel',
      category: 'Multi-Product Spotlight',
      desc: 'Interactive swiping cards showcasing trending products, bundle discounts, customer reviews, and direct add-to-cart buttons.',
      ctr: 'Creative testing',
      roas: 'Product catalogue',
    },
    {
      name: 'High-Paced UGC Product Demo Reels',
      category: 'Viral Social Proof',
      desc: 'Authentic 9:16 vertical short-form reels with problem-solution hooks, before/after reveals, and strong call-to-action overlays.',
      ctr: 'Video creative',
      roas: 'Audience testing',
    },
    {
      name: 'Click to WhatsApp Instant Checkout Ads',
      category: 'Conversational Sales',
      desc: 'Bypasses slow website funnels by sending hot buyers directly into WhatsApp with automated catalog ordering and UPI payment links.',
      ctr: 'WhatsApp enquiries',
      roas: 'Lead follow-up',
    },
    {
      name: 'Advantage+ Shopping Campaigns (ASC)',
      category: 'AI Machine Learning Scaling',
      desc: 'Leverages Meta machine learning to automatically distribute budget across top-performing creative assets and high-intent buyer pools.',
      ctr: 'Automated delivery',
      roas: 'Ongoing optimization',
    },
  ];

  return (
    <>
    <PageSEO
      title="Facebook Ads Agency in Chennai | Meta Ads Management"
      description="Meta Ads management in Chennai for coaching centres, clinics and local businesses. Lead forms, WhatsApp campaigns, creative testing and retargeting."
      canonicalPath="/services/facebook-ads"
      jsonLd={FACEBOOKADS_JSON_LD}
    />
    <div className="pt-24 sm:pt-28 pb-20 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full font-sans">
      {/* Dynamic Ambient Neon Glows */}
      <div className="absolute top-10 right-[-5%] w-[45vw] h-[45vw] bg-[#1877F2]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] bg-[#00F2FE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[35vw] h-[35vw] bg-[#FF2E9A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1280px] mx-auto relative z-10 space-y-16 sm:space-y-20">
        {/* ========================================================================= */}
        {/* HERO BANNER SECTION: 3D NEON FACEBOOK LOGO, COPY & ROAS CALCULATOR */}
        {/* ========================================================================= */}
        <section className="relative pt-2 sm:pt-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content: Headlines, 3D Neon Emblem & Sales Proof */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#00F2FE] text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-xl">
                <Sparkles size={14} className="text-[#00F2FE]" />
                <span>Facebook, Instagram & Meta Ads Management</span>
              </div>

              {/* Short intro paragraph for on-page SEO */}
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal max-w-xl">
                My DP Digital manages Facebook and Instagram Ads for businesses in Chennai and Tambaram, including coaching centres, clinics, local service providers, retailers, and D2C brands. Campaigns are planned around the enquiry or sales goal, service area, budget, creative, and follow-up process.
              </p>

              {/* Main Display Headline with 3D Neon Facebook Logo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Facebook3DNeonLoop size={52} className="shrink-0" />
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.08]">
                    Generate Leads & Sales with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] via-[#00F2FE] to-[#FF2E9A]">
                      Facebook & Instagram Ads
                    </span>
                  </h1>
                </div>
              </div>

              {/* On-Page SEO Rich Value Proposition */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                We plan Facebook and Instagram campaigns for lead generation and product sales. Depending on the business, this can include WhatsApp enquiries, lead forms, local-area targeting, product catalog ads, retargeting, creative testing, and conversion tracking.
              </p>

              {/* Key Value Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-white/50 font-bold uppercase">Campaign Strategy</div>
                  <div className="text-sm sm:text-base font-black text-[#00F2FE]">Audience & Creative Testing</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-white/50 font-bold uppercase">Product Campaigns</div>
                  <div className="text-sm sm:text-base font-black text-[#10B981]">Catalog & Offer Ads</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-white/50 font-bold uppercase">Measurement</div>
                  <div className="text-sm sm:text-base font-black text-[#FF7AC6]">Pixel & CAPI Setup</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl('Plan My Facebook and Instagram Ads Campaign')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#1877F2] via-[#0866FF] to-[#00F2FE] hover:opacity-95 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#1877F2]/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <WhatsAppIcon size={18} className="text-white" />
                  <span>Get Custom Ad Strategy on WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="px-5 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles size={16} className="text-[#00F2FE]" />
                  <span>Facebook Ad Strategy Pop-up</span>
                </button>
              </div>
            </div>

            {/* Right Side: Small Size Interactive Facebook Ads ROAS Calculator */}
            <div className="lg:col-span-5">
              <FacebookAdSalesCalculator />
            </div>
          </div>
        </section>

        {/* Facebook Ad Strategy Modal Pop-up */}
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="w-full max-w-lg bg-[#0E0B1A] border border-[#1877F2]/50 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(24,119,242,0.4)] relative text-white space-y-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Facebook3DNeonLoop size={36} />
                  <div>
                    <h3 className="text-lg font-black text-white">Meta & Facebook Ad Strategy Pop-up</h3>
                    <p className="text-xs text-[#00F2FE]">Direct WhatsApp & E-Commerce Sales Desk</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center text-sm font-bold transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs text-white/80">
                <p>
                  You are exploring our dedicated <strong>Facebook & Meta Product Sales Ads</strong> workflow. We help e-commerce brands plan product campaigns with creative testing, conversion measurement, and retargeting.
                </p>
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="font-bold text-white">What we analyze in your free strategy session:</div>
                  <ul className="space-y-1 text-white/70 list-disc list-inside">
                    <li>Your current marketing expenses & store AOV</li>
                    <li>Cost-per-click (CPC) & checkout drop-off points</li>
                    <li>Custom Meta Conversions API (CAPI) configuration</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={getWhatsAppUrl('Strategy Pop-up Consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-[#1877F2] via-[#0866FF] to-[#00F2FE] hover:opacity-95 text-white py-3 px-4 rounded-xl font-bold text-xs shadow-lg shadow-[#1877F2]/30 flex items-center justify-center gap-2 transition-all"
                >
                  <WhatsAppIcon size={16} className="text-white" />
                  <span>Connect with Ad Expert on WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}


        {/* ========================================================================= */}
        {/* CAMPAIGN STRATEGY WORKFLOW */}
        {/* ========================================================================= */}
        <section className="py-6 px-6 sm:px-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {salesMilestones.map((item, idx) => (
              <div key={idx} className={`${idx > 0 ? 'md:border-l border-white/10' : ''} px-2`}>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#1877F2] tracking-tight">
                  {item.number}
                </div>
                <div className="text-xs font-bold text-white/90 mt-1">{item.label}</div>
                <div className="text-[10px] text-white/50 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CORE SPECIALIST META & FACEBOOK AD CAPABILITIES */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#00F2FE] text-[10px] font-bold uppercase tracking-wider">
              <Target size={12} />
              <span>Meta Ads Campaign Planning & Management</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Campaigns Planned for <span className="text-[#00F2FE]">Leads & Sales</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              We align campaign objectives, audience, creative, budget, landing page or WhatsApp journey, and tracking with the outcome your business needs. Product-sales campaigns remain available alongside enquiry-generation campaigns for local service businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {adFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.035] border border-white/10 hover:border-[#1877F2]/50 hover:bg-white/[0.05] transition-all duration-300 space-y-3.5 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1877F2]/20 to-[#00F2FE]/20 border border-[#1877F2]/40 flex items-center justify-center text-[#00F2FE] group-hover:scale-110 transition-transform">
                    <feat.icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white/80 border border-white/10">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {feat.desc}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/50 text-[11px]">Benchmark:</span>
                  <span className="font-bold text-[#10B981] font-mono">{feat.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LOCAL BUSINESS LEAD GENERATION */}
        {/* ========================================================================= */}
        <section
          aria-labelledby="local-meta-lead-campaigns"
          className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6"
        >
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-bold text-[#00F2FE] uppercase tracking-wider">
              For Chennai & Tambaram Businesses
            </span>
            <h2 id="local-meta-lead-campaigns" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Facebook & Instagram lead generation for coaching centres, clinics and local businesses
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Need more relevant enquiries for a course, appointment, or local service? We plan Meta Ads around
              your service area, offer, audience, monthly ad budget, and the way your team follows up with leads.
              The campaign route may use WhatsApp, an instant form, or a dedicated landing page depending on
              your sales process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <h3 className="font-bold text-white">Coaching centres & academies</h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Promote course enquiries, demo classes, admissions information, and workshop registrations
                with a clear follow-up path.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <h3 className="font-bold text-white">Clinics & appointment businesses</h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Structure local campaigns around service information and appointment enquiries, with careful
                attention to platform policies and responsible claims.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
              <h3 className="font-bold text-white">Shops & local service providers</h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Reach people in your chosen service area with offer-led creatives, WhatsApp conversations,
                or a landing page designed for enquiries.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
            <p className="text-xs text-white/60 leading-relaxed max-w-2xl">
              Before launch, we review the offer, target locations, ad budget, lead destination, and tracking.
              Ad spend is separate from management fees; results depend on the market, creative, offer, and
              follow-up process.
            </p>
            <a
              href={getWhatsAppUrl('Plan a local lead-generation campaign for my business in Chennai or Tambaram')}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1877F2] hover:bg-[#0866FF] text-white text-xs font-bold transition-colors"
            >
              <WhatsAppIcon size={16} className="text-white" />
              Discuss a Lead Campaign
            </a>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Need wider local marketing support around Tambaram? Visit our{' '}
            <Link to="/tambaram" className="text-[#7DD3FC] font-semibold hover:underline">
              digital marketing services in Tambaram and South Chennai
            </Link>{' '}
            page for the area-specific SEO, website, and service information.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* HIGH-PERFORMING AD FORMATS MATRIX */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0E0B1A] via-white/[0.02] to-[#07050C] border border-white/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold text-[#00F2FE] uppercase tracking-wider block mb-1">
                Ad Formats & Creatives
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Product-Sales Creative Formats
              </h2>
            </div>
            <p className="text-xs text-white/70 max-w-md">
              For product campaigns, we select formats such as vertical video, product carousels, and click-to-WhatsApp ads based on the offer, audience, and available creative assets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {salesAdFormats.map((format, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#FF7AC6] tracking-wider">{format.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1877F2]/20 text-[#00F2FE] border border-[#1877F2]/30">
                      {format.ctr}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                      {format.roas}
                    </span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-white">{format.name}</h4>
                <p className="text-xs text-white/70 leading-relaxed font-normal">{format.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5-PHASE SCALING FUNNEL BLUEPRINT */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-bold text-[#00F2FE] uppercase tracking-wider">
              Systematic Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Our 5-Phase Meta Scaling Funnel
            </h2>
            <p className="text-xs text-white/70">
              A structured process for reviewing campaign setup, testing creative, expanding audiences, and improving performance over time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { phase: '01', title: 'Pixel & CAPI Audit', desc: 'Configure server-side event tracking, catalog connections, and custom conversion events where appropriate.' },
              { phase: '02', title: 'Creative Testing', desc: 'Test multiple ad hooks and creative variations to compare audience response and conversion quality.' },
              { phase: '03', title: 'Audience Scaling', desc: 'Broad targeting, lookalikes, and interest clustering to expand reach.' },
              { phase: '04', title: 'CBO Budget Push', desc: 'Shift budget toward campaigns and creatives that show stronger results in the agreed measurement window.' },
              { phase: '05', title: 'DPA Retargeting', desc: 'Automated dynamic cart recovery and post-purchase upsell campaigns.' },
            ].map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 relative">
                <div className="text-2xl font-black text-[#00F2FE] font-mono">{step.phase}</div>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* META ADS CAMPAIGN SCOPE */}
        {/* ========================================================================= */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-2">
            <Award size={14} className="text-[#00F2FE]" />
            <span>Meta Ads Campaign Capabilities</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Lead Generation Campaigns',
              'Meta Instant Forms',
              'Click-to-WhatsApp Campaigns',
              'Facebook & Instagram Placements',
              'Local-Area Audience Planning',
              'Tamil / English Ad Copy',
              'Creative Testing & Reporting',
              'Meta Pixel & CAPI Setup',
              'Retargeting & Custom Audiences',
              'Product Catalogue Ads',
            ].map((kw, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-medium text-white/80"
              >
                {kw}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* QUICK ANSWER: FACEBOOK ADS AGENCY IN CHENNAI */}
        {/* ========================================================================= */}
        <section className="w-full max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Looking for a Facebook Ads agency in Chennai?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              My DP Digital plans and manages Facebook and Instagram (Meta) campaigns for Chennai businesses,
              including lead forms, click-to-WhatsApp campaigns, local audience planning, creative testing, and
              retargeting. We agree the objective, target area, ad budget, and follow-up route before launch.
              Message us with your business type and target area to discuss a campaign.
            </p>
            <p className="text-xs text-white/55 leading-relaxed mt-3">
              Need Google Search, Shopping, or Performance Max campaigns? Explore our{' '}
              <Link to="/services/paid-social-ads" className="text-[#00F2FE] underline underline-offset-4">
                Google Ads management service
              </Link>.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FAQ SECTION */}
        {/* ========================================================================= */}
        <FAQ />

        {/* ========================================================================= */}
        {/* FAST CONSULTATION & QUOTE FORM */}
        {/* ========================================================================= */}
        <section className="pt-4">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#00F2FE] text-[10px] font-bold uppercase tracking-wider">
              <Sparkles size={12} />
              <span>Get Your Ad Campaign Started</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Request Your Meta Ads Strategy
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Share your business type, campaign goal, target area, and approximate monthly ad budget so we can discuss a scoped Meta Ads plan.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <BannerServicesForm />
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default FacebookAdsPage;
