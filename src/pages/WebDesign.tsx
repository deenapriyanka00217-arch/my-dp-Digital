import { motion } from 'framer-motion';
import { Layout, Globe, Code, Zap, Check, ArrowRight, Sparkles, Smartphone, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const webDesignExamples = [
  {
    title: 'Sparkling Purity',
    url: 'https://sparklingpurity.in/',
    caption: 'A single-page lead-generation site for a water purification business — built for fast quote requests and mobile-first browsing.',
  },
  {
    title: 'Chennai Visa Services',
    url: 'https://chennaivisaservices.in/',
    caption: 'A multi-page business website for a visa consultancy, structured around clear service pages and easy inquiry forms.',
  },
];

const WEBDESIGN_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design & Development',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'Custom, fast, SEO-ready website design for clinics, doctors, and growing businesses in Chennai, built with modern frameworks to convert visitors into customers.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mydpdigital.in/services' },
      { '@type': 'ListItem', position: 3, name: 'Web Design & Development', item: 'https://www.mydpdigital.in/services/web-design-development' },
    ],
  },
];

const WebDesignPage = () => {
  return (
    <>
    <PageSEO
      title="Clinic & Business Website Design Company | Chennai"
      description="Custom, fast, SEO-ready websites for clinics, doctors, and growing businesses in Chennai — built to convert visitors into patients and customers."
      canonicalPath="/services/web-design-development"
      jsonLd={WEBDESIGN_JSON_LD}
    />
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      <div className="absolute top-20 right-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[35vw] h-[35vw] bg-[#B026FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> Conversion-First UI
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Websites Built to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Convert, Not Just Look Good.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            Custom, blazing-fast, SEO-ready websites built with modern frameworks and interactive elements. We build digital assets that drive bottom-line results.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          <div className="lg:col-span-6 space-y-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Marketing Sites', desc: 'High-conversion brand portals.', icon: Globe },
                { title: 'Interactive Experience', desc: 'Interactive immersive storefronts.', icon: Layers },
                { title: 'Landing Pages', desc: 'Single-goal conversion machines.', icon: Layout },
                { title: 'Custom Apps', desc: 'Scalable SaaS & dashboard builds.', icon: Code },
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
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Tech Stack & Ethics</h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Performance First', text: 'Sub-second load times via modern build tools and static generation.' },
                  { step: '02', title: 'Conversion Psych', text: 'Layouts designed following proven behavioral principles.' },
                  { step: '03', title: 'Responsive Flow', text: 'Pixel-perfect across mobile, tablet, and ultra-wide.' },
                  { step: '04', title: 'Clean Architecture', text: 'Maintainable, scalable, and secure codebase.' },
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
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FF7AC6]/20 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#FF7AC6]/20 border border-[#FF7AC6]/30 text-[#FF7AC6] text-[10px] font-bold uppercase tracking-widest">
                    Vitals Scoreboard
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">Technical Benchmarks</h3>
                  <div className="space-y-6">
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Google PageSpeed</span>
                      <span className="text-3xl font-black text-[#FF7AC6]">98+</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Load Time (LCP)</span>
                      <span className="text-3xl font-black text-white">0.8s</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Conversion Lift</span>
                      <span className="text-3xl font-black text-emerald-400">+120%</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-[#FF2E9A]/25 hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all"
                  >
                    <span>Request Web Proposal</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Recent Web Design Examples */}
        <div className="mb-32">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-8">
            Recent Website Design Examples
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {webDesignExamples.map((example, idx) => (
              <a
                key={idx}
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all block space-y-2"
              >
                <div className="text-base font-black text-white">{example.title}</div>
                <div className="text-[11px] text-[#06B6D4] font-mono break-all">{example.url}</div>
                <p className="text-xs text-white/60 leading-relaxed font-normal">{example.caption}</p>
              </a>
            ))}
          </div>
          <Link
            to="/our-works"
            className="inline-flex items-center gap-2 mt-6 text-xs font-bold text-[#FF7AC6] hover:underline"
          >
            <span>See all live client work</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <FAQ />
      </div>
    </div>
    </>
  );
};

export default WebDesignPage;
