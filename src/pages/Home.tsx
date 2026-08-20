import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Growth3DVisualizer } from '../components/Growth3DVisualizer';
import { Card3DTilt } from '../components/Card3DTilt';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import { Trophy, BarChart3, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useCms } from '../context/CmsContext';
import PageSEO from '../components/PageSEO';

const HOME_JSON_LD = [
  {
    '@context': 'https://schema.org',
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
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'My DP Digital is a digital marketing agency near you in Chennai, offering SEO, Google Ads, website design, and branding for local businesses.',
  },
];

const Home = () => {
  const { content } = useCms();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#07050C] text-white w-full overflow-hidden"
    >
      <PageSEO
        title="My DP Digital – DP Digital Marketing Agency in Chennai"
        description="My DP Digital (DP Digital Marketing) is a digital marketing agency near you in Chennai — SEO, Google Ads, website design, and branding for local businesses. Get a free quote."
        canonicalPath="/"
        jsonLd={HOME_JSON_LD}
      />
      <Hero />

      {/* Realistic Agency Metrics Strip */}
      <section className="py-6 sm:py-7 bg-white/[0.02] border-y border-white/10 relative overflow-hidden w-full backdrop-blur-xl">
        <div className="w-full px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { stat: content.metric1Stat, label: content.metric1Label, sub: content.metric1Sub },
              { stat: content.metric2Stat, label: content.metric2Label, sub: content.metric2Sub },
              { stat: content.metric3Stat, label: content.metric3Label, sub: content.metric3Sub },
              { stat: content.metric4Stat, label: content.metric4Label, sub: content.metric4Sub },
            ].map((item, idx) => (
              <div key={idx} className={`text-center ${idx > 0 ? 'md:border-l border-white/10' : ''} px-2 sm:px-3`}>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <span className="text-[#FF2E9A]">{item.stat}</span>
                </div>
                <div className="text-xs font-semibold text-white/80 mt-0.5">{item.label}</div>
                <div className="text-[10px] text-white/50">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <Services />

      {/* Interactive 3D Growth ROI Calculator */}
      <Growth3DVisualizer />

      {/* Agency Architecture & Revenue Velocity Section */}
      <section className="py-24 bg-[#07050C] relative overflow-hidden w-full border-t border-white/10">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#B026FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column 3D Showcase Card */}
          <div className="lg:col-span-5 relative">
            <Card3DTilt maxTilt={8} depth={30} className="bg-white/[0.035] backdrop-blur-2xl p-10 sm:p-14 border border-white/15 rounded-[56px] shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF2E9A] to-[#B026FF] flex items-center justify-center text-white shadow-lg shadow-[#FF2E9A]/30 mb-8">
                <Trophy size={32} />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2E9A]/15 border border-[#FF2E9A]/30 text-[#FF7AC6] text-[10px] font-bold mb-5">
                {content.revenueBadge}
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
                {((content.revenueCardTitle || 'Growth, Quantified').split(',')[0])}, <span className="text-[#FF2E9A]">{((content.revenueCardTitle || 'Growth, Quantified').split(',')[1] || 'Quantified.')}</span>
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-10 font-normal">
                {content.revenueCardDesc}
              </p>

              <div className="grid grid-cols-2 gap-5">
                <div className="p-5 rounded-3xl bg-white/[0.04] border border-white/10 shadow-sm backdrop-blur-md">
                  <BarChart3 className="text-[#FF2E9A] mb-3" size={24} />
                  <div className="text-white font-black text-[12px]">Data Supremacy</div>
                  <div className="text-[9px] text-white/50 uppercase font-bold tracking-widest mt-1">Forensic Analytics</div>
                </div>
                <div className="p-5 rounded-3xl bg-white/[0.04] border border-white/10 shadow-sm backdrop-blur-md">
                  <ShieldCheck className="text-[#06B6D4] mb-3" size={24} />
                  <div className="text-white font-black text-[12px]">Market Defense</div>
                  <div className="text-[9px] text-white/50 uppercase font-bold tracking-widest mt-1">Topical Dominance</div>
                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Process Steps */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[11px] font-bold">
                <Sparkles size={14} className="text-[#FF2E9A]" /> Global Acceleration Framework
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {content.revenueHeading}
              </h2>
              <p className="text-white/80 text-lg sm:text-xl max-w-xl font-normal leading-relaxed">
                {content.revenueSubheading}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { step: '01', title: content.step1Title, desc: content.step1Desc },
                { step: '02', title: content.step2Title, desc: content.step2Desc },
                { step: '03', title: content.step3Title, desc: content.step3Desc },
                { step: '04', title: content.step4Title, desc: content.step4Desc },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[36px] bg-white/[0.035] backdrop-blur-2xl border border-white/10 hover:border-white/25 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 group-hover:bg-[#FF2E9A]/20 transition-colors" />
                  
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <span className="text-3xl font-black text-[#FF2E9A] font-mono group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-white/40 group-hover:text-[#FF2E9A] group-hover:bg-[#FF2E9A]/20 transition-all">
                      <Zap size={18} />
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-white mb-3 tracking-tight group-hover:text-[#FF7AC6] transition-colors relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-[13px] leading-relaxed relative z-10 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK ANSWER: DIGITAL MARKETING AGENCY NEAR ME ================= */}
      <section className="py-16 bg-[#07050C] w-full">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto">
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Looking for a digital marketing agency near you?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              My DP Digital is based on Anna Salai, Chennai, and works with businesses across the city and the
              wider Tambaram / South Chennai belt — in person where useful, and over WhatsApp and calls for
              everything else. Whether you're searching for a digital marketing agency near you or around me,
              message us on WhatsApp with your business and what you need help with, and we'll get back to you
              directly.
            </p>
          </div>

          {/* ================= QUICK ANSWER: DP DIGITAL / DP DIGITAL MARKETING ================= */}
          <div className="max-w-3xl mx-auto mt-6 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Searching for DP Digital or DP Digital Marketing?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              My DP Digital (also searched as "DP Digital" or "DP Digital Marketing") is the digital marketing
              agency behind this site — run directly by our Chennai-based team, not a call centre. If you found us
              searching for DP Digital, you're in the right place. Message us on WhatsApp with your business and
              what you need, and we'll get back to you directly.
            </p>
          </div>

          {/* ================= QUICK ANSWER: HIRE A DIGITAL MARKETING AGENCY ================= */}
          <div className="max-w-3xl mx-auto mt-6 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              Ready to hire a digital marketing agency in Chennai?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Hiring us means working directly with the team doing the work — no account manager relaying
              messages to someone else. Message us on WhatsApp with your business and budget and we'll tell you
              honestly whether we're a good fit before you commit to anything.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Contact Section */}
      <ContactForm />
    </motion.div>
  );
};

export default Home;
