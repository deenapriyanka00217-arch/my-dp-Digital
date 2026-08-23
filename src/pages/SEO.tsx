import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Globe, Check, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const SEO_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local SEO Services',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'Local SEO services in Chennai to help businesses rank higher on Google Maps and local search, including Google Business Profile optimization and local citations.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mydpdigital.in/services' },
      { '@type': 'ListItem', position: 3, name: 'SEO', item: 'https://www.mydpdigital.in/services/seo' },
    ],
  },
];

const SEOPage = () => {
  return (
    <>
    <PageSEO
      title="Local SEO Services in Chennai | My DP Digital"
      description="Local SEO services in Chennai to rank higher on Google Maps and search results — Google Business Profile optimization, local citations, and more."
      canonicalPath="/services/seo"
      jsonLd={SEO_JSON_LD}
    />
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      {/* Ambient Orbs */}
      <div className="absolute top-20 right-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[35vw] h-[35vw] bg-[#B026FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> Organic Dominance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            SEO That <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Compounds Your Growth.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            Data-driven technical SEO, topical semantic authority, and global search optimization engineered to turn search traffic into a permanent competitive advantage.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          <div className="lg:col-span-6 space-y-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Technical Audit', desc: 'Core Web Vitals & architecture optimization.', icon: Zap },
                { title: 'Semantic Authority', desc: 'Topical graph & keyword cluster strategy.', icon: Search },
                { title: 'Global Scaling', desc: 'Rank globally with localized intent capture.', icon: Globe },
                { title: 'Data Dashboards', desc: 'Real-time ROI & keyword tracking.', icon: BarChart3 },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 space-y-3 shadow-2xl hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#FF7AC6]">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-lg font-black text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">The Growth Process</h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Deep Forensic Audit', text: 'We diagnose every technical hurdle and competitor blind spot.' },
                  { step: '02', title: 'Topical Roadmap', text: 'We build the semantic structure required for authority.' },
                  { step: '03', title: 'Precision Execution', text: 'On-page, technical, and link acquisition sprints.' },
                  { step: '04', title: 'Continuous Scaling', text: 'Monthly data-led iteration to maintain leadership.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-lg border border-white/10 items-start">
                    <span className="text-xl font-black text-[#FF7AC6] leading-none">{item.step}</span>
                    <div className="space-y-1">
                      <div className="text-[13px] font-bold text-white uppercase tracking-wider">{item.title}</div>
                      <div className="text-xs text-white/50 leading-relaxed font-normal">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Card3DTilt maxTilt={8} depth={30}>
              <div className="bg-white/[0.035] backdrop-blur-2xl p-8 sm:p-12 rounded-[48px] border border-white/15 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2E9A]/20 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#FF2E9A]/20 border border-[#FF2E9A]/30 text-[#FF7AC6] text-[10px] font-bold uppercase tracking-widest">
                    Verified ROI Matrix
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">Typical Engagement Outcomes</h3>
                  <div className="space-y-6">
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Organic Visibility</span>
                      <span className="text-3xl font-black text-[#FF7AC6]">+240%</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Customer LTV Growth</span>
                      <span className="text-3xl font-black text-white">4.2x</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Core Web Vitals Pass</span>
                      <span className="text-3xl font-black text-emerald-400">100%</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-[#FF2E9A]/25 hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all"
                  >
                    <span>Request SEO Roadmap</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Quick SEO Timeline FAQ */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">How long does SEO take to rank?</h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Most Chennai businesses start seeing meaningful ranking movement within 60–90 days of technical fixes
            and content work beginning, with stronger, more stable gains building over 4–6 months. Highly
            competitive keywords can take longer, while local, lower-competition terms often move faster —
            we'll give you a realistic timeline for your specific keywords before you commit to anything.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SEO FOR LOCAL SEARCH ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for SEO that gets you found in local search?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            My DP Digital handles local SEO for businesses across Chennai — Google Business Profile optimization,
            local citations, and on-page fixes aimed at getting you visible on Google Maps and in local search
            results when nearby customers are searching. Message us on WhatsApp with your business type and area,
            and we'll walk you through what a local search plan would look like for you.
          </p>
        </div>

        {/* ================= QUICK ANSWER: LOCAL SEO SERVICES IN CHENNAI ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Comparing local SEO services or local SEO companies in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We work as a local SEO company for businesses across Chennai — not a generic package, but a plan built
            around your specific industry, competitors, and area. Message us on WhatsApp with your business and
            we'll audit your current local presence and tell you honestly where you stand before recommending
            anything.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SEO AGENCY NEAR ME ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Searching for an SEO agency near you in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We work as an SEO agency for businesses across Chennai and the wider Tambaram / South Chennai belt,
            meeting in person where useful and running everything else over WhatsApp and calls. Message us on
            WhatsApp with your business and area and we'll audit where you currently stand before recommending
            anything.
          </p>
        </div>

        {/* ================= QUICK ANSWER: HIRE AN SEO EXPERT ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking to hire an SEO expert in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Instead of a single freelancer, you get our full team's technical audits, content, and link work as
            one engagement — with direct access to whoever is actually working on your site. Message us on
            WhatsApp with your website and current rankings and we'll give you an honest read on what hiring us
            would look like.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SEO COST IN CHENNAI ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            What does SEO cost in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            SEO cost in Chennai varies a lot depending on your industry, competition, and how much on-page and
            content work your site currently needs — so we don't quote a fixed number until we've actually looked
            at your site. Message us on WhatsApp with your website and we'll give you a clear, honest cost
            estimate for your specific goals, not a generic package price.
          </p>
        </div>

        <FAQ />
      </div>
    </div>
    </>
  );
};

export default SEOPage;
