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
  serviceType: 'Facebook & Google Ads Management',
  provider: {
    '@type': 'LocalBusiness',
    name: 'My DP Digital',
    url: 'https://www.mydpdigital.in',
    telephone: '+91-81483-20217',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  },
  areaServed: 'Chennai, Tamil Nadu, India',
  description:
    'Facebook Ads and Google Ads management agency in Chennai delivering high-ROAS product sales campaigns, PPC management, and social media ads for e-commerce and D2C brands.',
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
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi DP Digital, I want to discuss Facebook Product Sales Ads: ${topic}`)}`;
  };

  const adFeatures = [
    {
      title: 'High-Converting Product Sales Ads',
      desc: 'We engineer dynamic product ads, direct offer video creatives, single item spotlight carousels, and high-CTR UGC reels engineered to trigger instant buying decisions.',
      icon: ShoppingCart,
      tag: 'E-Com Specialist',
      metric: '5.2x Avg ROAS',
    },
    {
      title: 'Conversions API & Pixel Tracking',
      desc: '100% server-side Meta Conversions API (CAPI) integration ensuring zero signal loss from iOS 14+ updates, ad blockers, and cookie restrictions for accurate attribution.',
      icon: Cpu,
      tag: 'Server CAPI Setup',
      metric: '100% Event Match',
    },
    {
      title: 'Advantage+ & CBO Budget Scaling',
      desc: 'Algorithmic campaign budget optimization (CBO), broad targeting audience testing, lookalike audiences (LAL), and Advantage+ shopping campaigns to scale without ad fatigue.',
      icon: TrendingUp,
      tag: 'Algorithmic Scale',
      metric: '₹4.8Cr+ Revenue',
    },
    {
      title: 'Click-to-WhatsApp Product Ads',
      desc: 'Direct prospective buyers from Facebook and Instagram straight into your WhatsApp sales desk with pre-filled product inquiry templates for instant checkout.',
      icon: Zap,
      tag: 'Instant Orders',
      metric: '3x Lead Velocity',
    },
    {
      title: 'Dynamic Catalog Retargeting (DPA)',
      desc: 'Automatically show abandoned cart visitors the exact product SKUs they viewed with customized limited-time discounts to recover up to 34% of dropped buyers.',
      icon: RefreshCw,
      tag: 'Cart Recovery',
      metric: '34% Cart Recovery',
    },
    {
      title: 'Ad Creative Sprint & Copywriting',
      desc: 'Continuous weekly production of high-converting hooks, persuasive direct-response Tamil/English ad scripts, custom graphic overlays, and A/B thumbnail variations.',
      icon: Layers,
      tag: 'Continuous A/B Sprints',
      metric: '12%+ CTR',
    },
  ];

  const salesMilestones = [
    { number: '₹4.8Cr+', label: 'Verified Product Sales', sub: 'Generated for client brands' },
    { number: '4.6x–8.2x', label: 'Average Campaign ROAS', sub: 'Return on ad spend' },
    { number: '150,000+', label: 'Product Orders Delivered', sub: 'E-commerce & retail sales' },
    { number: '< ₹18', label: 'Cost Per Product Lead / Order', sub: 'Optimized conversion cost' },
  ];

  const salesAdFormats = [
    {
      name: 'Dynamic E-Commerce Product Carousel',
      category: 'Multi-Product Spotlight',
      desc: 'Interactive swiping cards showcasing trending products, bundle discounts, customer reviews, and direct add-to-cart buttons.',
      ctr: '4.8% CTR',
      roas: '6.4x ROAS',
    },
    {
      name: 'High-Paced UGC Product Demo Reels',
      category: 'Viral Social Proof',
      desc: 'Authentic 9:16 vertical short-form reels with problem-solution hooks, before/after reveals, and strong call-to-action overlays.',
      ctr: '6.2% CTR',
      roas: '7.1x ROAS',
    },
    {
      name: 'Click to WhatsApp Instant Checkout Ads',
      category: 'Conversational Sales',
      desc: 'Bypasses slow website funnels by sending hot buyers directly into WhatsApp with automated catalog ordering and UPI payment links.',
      ctr: '5.5% CTR',
      roas: '5.8x ROAS',
    },
    {
      name: 'Advantage+ Shopping Campaigns (ASC)',
      category: 'AI Machine Learning Scaling',
      desc: 'Leverages Meta machine learning to automatically distribute budget across top-performing creative assets and high-intent buyer pools.',
      ctr: '4.2% CTR',
      roas: '8.2x ROAS',
    },
  ];

  return (
    <>
    <PageSEO
      title="Facebook & Google Ads Agency in Chennai | PPC Management"
      description="Facebook Ads and Google Ads management agency in Chennai — high-ROAS product sales campaigns, PPC management, and social media ads for e-commerce brands."
      canonicalPath="/services/facebook-ads"
      jsonLd={FACEBOOKADS_JSON_LD}
    />
    <div className="pt-24 sm:pt-28 pb-20 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full font-sans">
      {/* Dynamic Ambient Neon Glows */}
      <div className="absolute top-10 right-[-5%] w-[45vw] h-[45vw] bg-[#1877F2]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] bg-[#00F2FE]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[35vw] h-[35vw] bg-[#FF2E9A]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* SEO Schema / Keyword Semantic Shell */}
      <div className="hidden" aria-hidden="true">
        <div>Facebook Product Ads Agency - Meta Paid Ads & E-Commerce Sales Scaling</div>
        <p>
          Specialist Meta & Facebook Ads agency delivering high ROAS product sales campaigns, dynamic product catalog ads, Conversions API setup, click-to-WhatsApp sales funnels, and performance scaling for Shopify, WooCommerce, and D2C brands.
        </p>
      </div>

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
                <span>Meta & Facebook Product Sales Ads Agency</span>
              </div>

              {/* Short intro paragraph for on-page SEO */}
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal max-w-xl">
                My DP Digital is a Facebook Ads agency in Chennai helping e-commerce, D2C, and retail businesses
                turn paid social traffic into real product sales, with campaigns managed directly by our team.
              </p>

              {/* Main Display Headline with 3D Neon Facebook Logo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <Facebook3DNeonLoop size={52} className="shrink-0" />
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-[1.08]">
                    Scale Product Sales with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] via-[#00F2FE] to-[#FF2E9A]">
                      High-ROAS Facebook Ads
                    </span>
                  </h1>
                </div>
              </div>

              {/* On-Page SEO Rich Value Proposition */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                We generate direct product sales for e-commerce, D2C brands, and retail businesses. From high-converting UGC video creatives and dynamic catalog carousels to server-side Conversions API (CAPI) tracking and CBO budget scaling — we have generated over <strong className="text-white font-bold">₹4.8 Crore+ in verified client sales</strong> with an average <strong>4.6x to 8.2x ROAS</strong>.
              </p>

              {/* Key Value Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-white/50 font-bold uppercase">Average ROAS</div>
                  <div className="text-sm sm:text-base font-black text-[#00F2FE]">4.6x – 8.2x</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="text-[10px] text-white/50 font-bold uppercase">Product Sales</div>
                  <div className="text-sm sm:text-base font-black text-[#10B981]">₹4.8Cr+ Made</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-white/50 font-bold uppercase">Tracking Accuracy</div>
                  <div className="text-sm sm:text-base font-black text-[#FF7AC6]">100% CAPI Setup</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl('Scale My E-Commerce Product Ads')}
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
                  You are exploring our dedicated <strong>Facebook & Meta Product Sales Ads</strong> workflow. We help e-commerce brands scale with verified 4.6x–8.2x ROAS using high-converting UGC reels and server CAPI tracking.
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
        {/* VERIFIED SALES MILESTONES STRIP */}
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
              <span>Full-Stack Facebook Paid Acquisition</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Engineered Exclusively for <span className="text-[#00F2FE]">Sales & Revenue</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              We do not run vanity awareness campaigns. Every rupee of your ad spend is tracked against direct product purchases, lower customer acquisition cost (CAC), and higher lifetime value.
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
        {/* HIGH-PERFORMING AD FORMATS MATRIX */}
        {/* ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0E0B1A] via-white/[0.02] to-[#07050C] border border-white/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold text-[#00F2FE] uppercase tracking-wider block mb-1">
                Ad Formats & Creatives
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Tested E-Commerce Ad Formats
              </h2>
            </div>
            <p className="text-xs text-white/70 max-w-md">
              We test 10+ creative angles weekly across vertical reels, product carousels, and WhatsApp direct funnels to find your winning scaling asset.
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
              How we scale brand ad budgets from ₹15,000/month to ₹5,00,000+/month with stable ROAS.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { phase: '01', title: 'Pixel & CAPI Audit', desc: 'Flawless server tracking, catalog sync, and custom event definitions setup.' },
              { phase: '02', title: 'Creative Testing', desc: 'Launching 5-10 ad hook variations to identify low-cost conversion winners.' },
              { phase: '03', title: 'Audience Scaling', desc: 'Broad targeting, lookalikes, and interest clustering to expand reach.' },
              { phase: '04', title: 'CBO Budget Push', desc: 'Reallocating 80% of budget into verified top-performing asset silos.' },
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
        {/* ON-PAGE SEO TARGET KEYWORD INDEX CLOUD */}
        {/* ========================================================================= */}
        <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
          <div className="text-xs font-bold text-white/70 uppercase tracking-wider flex items-center gap-2">
            <Award size={14} className="text-[#00F2FE]" />
            <span>Target Meta Paid Ads Competencies & SEO Architecture</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Facebook Product Ads Agency',
              'Meta E-Commerce Sales Ads',
              'High ROAS Facebook Ads',
              'Instagram Shopping Ads',
              'Conversions API (CAPI) Setup',
              'Dynamic Product Ads (DPA)',
              'Click-to-WhatsApp Product Ads',
              'Shopify Facebook Ad Management',
              'WooCommerce Meta Ads Scaling',
              'D2C Brand Performance Marketing',
              'Advantage+ Shopping Campaigns',
              'Direct Response Ad Creative',
              'Cart Abandonment Retargeting',
              'Meta Lead Generation Funnels',
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
        {/* QUICK ANSWER: GOOGLE ADS AGENCY IN CHENNAI */}
        {/* ========================================================================= */}
        <section className="w-full max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Looking for a Google Ads agency near you in Chennai?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Alongside Meta/Facebook Ads, My DP Digital also manages Google Ads (Search, Shopping, and
              Performance Max) for businesses in Chennai — built around the same PPC management and ROAS-focused
              approach as our Facebook campaigns. Message us on WhatsApp with your monthly budget and we'll map
              out a Google Ads plan alongside your Facebook strategy.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* QUICK ANSWER: BEST GOOGLE ADS AGENCY IN CHENNAI */}
        {/* ========================================================================= */}
        <section className="w-full max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Comparing agencies to find the best Google Ads agency in Chennai?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Rather than claim to be "the best," we'll show you our actual campaign structures, bidding
              approach, and reporting before you commit — so you can judge for yourself alongside other agencies
              you're considering. Message us on WhatsApp with your monthly budget and current results and we'll
              give you an honest read.
            </p>
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
              As a Facebook Ads agency for businesses across Chennai, we handle creative production, audience
              targeting, and retargeting on Facebook and Instagram, managed alongside your Google Ads so every
              rupee works as one funnel. Message us on WhatsApp with your monthly budget and we'll map out a plan.
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
              Share your product details and target monthly budget to receive an actionable campaign roadmap and ROAS forecast.
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
