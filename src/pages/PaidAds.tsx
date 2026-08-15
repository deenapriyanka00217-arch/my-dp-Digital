import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, BarChart3, Globe, Check, ArrowRight, Sparkles, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';

const PaidAdsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      <div className="absolute top-20 right-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[35vw] h-[35vw] bg-[#B026FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> High-Yield PPC & Meta
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Ads and Social <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Engineered for ROI.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            We turn ad spend into measurable revenue. From Google Shopping dominance to high-converting Meta creative, we manage every layer of your paid acquisition funnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          <div className="lg:col-span-6 space-y-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Google PPC', desc: 'Search, Shopping & YouTube dominance.', icon: Target },
                { title: 'Meta Ads', desc: 'Instagram & Facebook creative scaling.', icon: Megaphone },
                { title: 'Retargeting', desc: 'Full-funnel behavioral re-engagement.', icon: Zap },
                { title: 'Analytics', desc: 'Attribution modeling & ROAS tracking.', icon: BarChart3 },
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

            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#1877F2]/20 via-[#0866FF]/10 to-transparent border border-[#1877F2]/30 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00F2FE] block mb-1">
                  Specialist E-Commerce Sales Ads
                </span>
                <h4 className="text-base font-black text-white">Facebook & Meta Product Sales Ads</h4>
                <p className="text-xs text-white/70 mt-0.5">Explore our dedicated Meta scaling framework with live ROAS Calculator.</p>
              </div>
              <Link
                to="/services/facebook-ads"
                className="px-4 py-2 rounded-xl bg-[#1877F2] hover:bg-[#0866FF] text-white text-xs font-bold transition-all shadow-md shadow-[#1877F2]/30 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>View Meta Ads</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Deployment Workflow</h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Funnel Mapping', text: 'We identify where your highest-intent buyers are lurking.' },
                  { step: '02', title: 'Creative Sprints', text: 'Rapid production of high-impact ad visuals and copy.' },
                  { step: '03', title: 'Algorithmic Bidding', text: 'Smart-bidding strategies optimized for conversion value.' },
                  { step: '04', title: 'Scaling Phase', text: 'Weekly budget reallocations to highest-performing assets.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-lg border border-white/10 items-start">
                    <span className="text-xl font-black text-[#B026FF] leading-none">{item.step}</span>
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
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#B026FF]/20 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#B026FF]/20 border border-[#B026FF]/30 text-[#FF7AC6] text-[10px] font-bold uppercase tracking-widest">
                    Performance Stats
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">Campaign Benchmarks</h3>
                  <div className="space-y-6">
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Avg ROAS Achieved</span>
                      <span className="text-3xl font-black text-[#FF7AC6]">5.8x</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">CPC Reduction</span>
                      <span className="text-3xl font-black text-white">-35%</span>
                    </div>
                    <div className="flex items-end justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Lead Volume Lift</span>
                      <span className="text-3xl font-black text-emerald-400">+180%</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-[#FF2E9A]/25 hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all"
                  >
                    <span>Launch Paid Scaling</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        <FAQ />
      </div>
    </div>
  );
};

export default PaidAdsPage;
