import { motion } from 'framer-motion';
import { Sparkles, Users, Target, Rocket, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Card3DTilt } from '../components/Card3DTilt';
import PageSEO from '../components/PageSEO';

const ABOUT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About My DP Digital',
  url: 'https://www.mydpdigital.in/about',
  description:
    'My DP Digital is a Chennai-based digital marketing and web engineering agency helping brands turn data into measurable growth through SEO, ads, and website design.',
  mainEntity: {
    '@type': 'Organization',
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
};

const AboutPage = () => {
  return (
    <>
    <PageSEO
      title="About My DP Digital | Chennai Digital Marketing Agency"
      description="My DP Digital is a Chennai-based digital marketing and web engineering agency — learn how we turn data into measurable growth for brands worldwide."
      canonicalPath="/about"
      jsonLd={ABOUT_JSON_LD}
    />
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      {/* Ambient Orbs */}
      <div className="absolute top-[10%] right-[-5%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[35vw] h-[35vw] bg-[#B026FF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] left-[25%] w-[30vw] h-[30vw] bg-[#06B6D4]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-xs font-bold">
            <Users size={14} className="text-[#FF2E9A]" /> The Agency Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            We're My DP Digital — <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Growth, Engineered.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            A full-service digital marketing and web engineering powerhouse built on one core obsession: turning raw data into measurable market dominance for brands worldwide.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tight">The DP Origin</h2>
            <div className="space-y-4 text-white/70 text-base leading-relaxed font-normal">
              <p>
                Founded in the heart of India's tech corridor, My DP Digital began with a radical hypothesis: that marketing is no longer creative guesswork—it's an engineering problem.
              </p>
              <p>
                By combining technical SEO forensics with high-velocity conversion psychology, we've helped hundreds of founders bridge the gap between "getting traffic" and "capturing recurring revenue."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 space-y-1">
                <div className="text-4xl font-black text-[#FF2E9A]">500+</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">Funnels Scaled</div>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 space-y-1">
                <div className="text-4xl font-black text-[#06B6D4]">Global</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-white/50">Delivery Footprint</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF2E9A]/20 to-[#B026FF]/20 blur-3xl opacity-40" />
            <Card3DTilt>
              <div className="bg-white/[0.035] backdrop-blur-2xl aspect-[16/10] rounded-[48px] border border-white/15 flex items-center justify-center p-12 relative overflow-hidden shadow-2xl">
                <Rocket size={140} className="text-white/5 absolute rotate-12 -right-4 -bottom-4" />
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-[#FF2E9A]/20 border border-[#FF2E9A]/40 flex items-center justify-center mx-auto text-[#FF2E9A] shadow-lg shadow-[#FF2E9A]/30">
                    <Target size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">Our Mission</h3>
                  <p className="text-sm text-white/70 max-w-xs font-normal">To automate client acquisition for high-intent brands via technical precision and rapid execution.</p>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-black text-white tracking-tight mb-12 text-center">Agency Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Radical Candor', icon: ShieldCheck, desc: 'We deliver data-driven truths, not filtered agency promises.', color: '#06B6D4' },
              { title: 'Velocity First', desc: 'Speed to market is our highest-weighted conversion metric.', icon: Zap, color: '#FF2E9A' },
              { title: 'Deep Forensics', desc: 'Every decision is rooted in multi-point data analysis.', icon: Target, color: '#B026FF' },
              { title: 'Revenue Focus', desc: 'We optimize for bank accounts, not vanity impressions.', icon: CheckCircle2, color: '#10B981' },
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-[36px] bg-white/[0.035] backdrop-blur-2xl border border-white/10 space-y-4 hover:border-white/25 transition-all group">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: `${value.color}20`,
                    border: `1px solid ${value.color}40`,
                    color: value.color
                  }}
                >
                  <value.icon size={26} />
                </div>
                <h3 className="text-lg font-black text-white tracking-tight">{value.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-normal">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="p-12 rounded-[48px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B026FF]/15 blur-[100px] rounded-full" />
          <div className="max-w-2xl mb-16 relative z-10">
            <h2 className="text-3xl font-black text-white tracking-tight mb-4">The Execution Loop</h2>
            <p className="text-white/70 font-normal">Our proprietary 4-step framework for predictable scaling.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: '01', title: 'Audit & Diagnose', desc: 'Identifying the technical gaps in your current funnel.' },
              { step: '02', title: 'Strategy Lock', desc: 'Building the multi-channel roadmap to dominance.' },
              { step: '03', title: 'Agile Execution', desc: 'Rapid sprints across SEO, Ads, and Web assets.' },
              { step: '04', title: 'Iterative Scale', desc: 'Using data to multiply what works and cut what doesn\'t.' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <div className="text-4xl font-black text-[#FF2E9A] font-mono">{item.step}</div>
                <h3 className="text-base font-black text-white tracking-tight">{item.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
