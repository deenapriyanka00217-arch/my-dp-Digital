import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check, BookOpen, PenTool, Layout, Palette, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const CONTENTBRANDING_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Graphic Design & Content Writing',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'Graphic design and content writing services in Chennai, covering brand identity, SEO copywriting, and visual design for growing businesses.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mydpdigital.in/services' },
      { '@type': 'ListItem', position: 3, name: 'Content & Branding', item: 'https://www.mydpdigital.in/services/content-marketing-branding' },
    ],
  },
];

const ContentBrandingPage = () => {
  return (
    <>
    <PageSEO
      title="Graphic Design & Content Writing Services in Chennai"
      description="Graphic design and content writing services in Chennai — branding, SEO copywriting, and visual design that builds authority and drives traffic."
      canonicalPath="/services/content-marketing-branding"
      jsonLd={CONTENTBRANDING_JSON_LD}
    />
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      <div className="absolute top-20 right-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[35vw] h-[35vw] bg-[#B026FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> Authority Engines
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Content That Builds <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Authority (and Traffic).</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            We fuse data-driven SEO content strategy with world-class brand identity. From technical blogging to high-impact design systems, we build the voice that dominates niches.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          <div className="lg:col-span-6 space-y-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Content Strategy', desc: 'Keyword-led authority roadmaps.', icon: BookOpen },
                { title: 'Brand Identity', desc: 'Design systems & visual language.', icon: Palette },
                { title: 'SEO Copywriting', desc: 'Engaging, rankable blog assets.', icon: PenTool },
                { title: 'Social Content', desc: 'Platform-native organic growth.', icon: MessageSquare },
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
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Content Methodology</h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Persona Mapping', text: 'We define exactly who your content is for and why they buy.' },
                  { step: '02', title: 'Topical Graph', text: 'Building clusters that establish site-wide topical authority.' },
                  { step: '03', title: 'Premium Production', text: 'High-tier writing and custom visual assets.' },
                  { step: '04', title: 'Distribution', text: 'Ensuring your content reaches high-value intent pools.' },
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
                <div className="absolute top-0 left-0 w-48 h-48 bg-[#FF2E9A]/20 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#FF2E9A]/20 border border-[#FF2E9A]/30 text-[#FF7AC6] text-[10px] font-bold uppercase tracking-widest">
                    Authority Matrix
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">Engagement Impacts</h3>
                  <div className="space-y-6">
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Organic Impressions</span>
                      <span className="text-3xl font-black text-[#FF7AC6]">+420%</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Inbound Lead Quality</span>
                      <span className="text-3xl font-black text-white">Tier-1</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Brand Recall Lift</span>
                      <span className="text-3xl font-black text-emerald-400">+75%</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-[#FF2E9A]/25 hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all"
                  >
                    <span>Request Content Strategy</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* ================= QUICK ANSWER: CONTENT WRITING SERVICES IN CHENNAI ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for content writing services in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Alongside brand identity and design, My DP Digital offers digital content writing services for
            businesses across Chennai — SEO-led blog content, website copy, and social content built around
            keyword research and persona mapping rather than generic filler. Message us on WhatsApp with your
            industry and content needs and we'll scope out a content plan for you.
          </p>
        </div>

        {/* ================= QUICK ANSWER: GRAPHIC DESIGN SERVICES IN CHENNAI ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for a graphic design studio or designer in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We handle graphic design as part of our brand identity work — logos, social creatives, print, and
            marketing collateral for businesses across Chennai, kept consistent with your overall brand system
            rather than done as one-off freelance pieces. Message us on WhatsApp with what you need designed and
            we'll get back to you with examples and pricing.
          </p>
        </div>

        <FAQ />
      </div>
    </div>
    </>
  );
};

export default ContentBrandingPage;
