import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';

export const Growth3DVisualizer: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(60000);
  const [industry, setIndustry] = useState<string>('ecommerce');

  // Multipliers based on industry
  const multipliers: Record<string, { roi: number; leads: number; speed: string; dealValue: string }> = {
    ecommerce: { roi: 4.6, leads: 1450, speed: '2.4x', dealValue: '₹3,200 avg order' },
    services: { roi: 5.8, leads: 520, speed: '3.1x', dealValue: '₹45,000 avg retainer' },
    healthcare: { roi: 4.4, leads: 380, speed: '2.8x', dealValue: '₹12,500 patient LTV' },
    realestate: { roi: 6.5, leads: 240, speed: '4.0x', dealValue: '₹1.8L brokerage/unit' },
  };

  const current = multipliers[industry] || multipliers.ecommerce;
  const projectedRevenue = Math.round(adSpend * current.roi);
  const projectedLeads = Math.round((adSpend / 60000) * current.leads);

  return (
    <section className="py-24 bg-[#07050C] text-white relative overflow-hidden w-full border-t border-white/10">
      {/* Ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF2E9A]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> Interactive Pipeline ROI Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Simulate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Revenue Velocity</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-normal">
            Forecast automated inbound leads, conversion efficiency, and projected monthly returns engineered with DP Digital’s high-performance pipeline framework.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.035] backdrop-blur-2xl p-6 sm:p-8 rounded-[36px] border border-white/10 space-y-6 shadow-2xl">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-[#FF7AC6] block mb-3">
                  Select Business Domain
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'ecommerce', label: 'E-Commerce Stores' },
                    { id: 'services', label: 'B2B & Business Portals' },
                    { id: 'healthcare', label: 'Clinics & Academies' },
                    { id: 'realestate', label: 'Real Estate & Landing' },
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setIndustry(ind.id)}
                      className={`px-4 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all text-left border cursor-pointer ${
                        industry === ind.id
                          ? 'bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-black border-transparent shadow-lg shadow-[#FF2E9A]/20 scale-[1.02]'
                          : 'bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border-white/5'
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/70">
                    Monthly Growth Capital
                  </label>
                  <span className="text-lg font-black text-[#FF7AC6]">
                    ₹{adSpend.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="10000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF2E9A]"
                />
                <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase mt-2">
                  <span>₹20,000</span>
                  <span>₹2,50,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/60">
                <span className="flex items-center gap-2">
                  <Zap size={14} className="text-[#FF2E9A]" /> Pipeline Multiplier:
                </span>
                <span className="text-sm font-black text-white">{current.roi}x Returns</span>
              </div>
            </div>
          </div>

          {/* Holographic Output Column */}
          <div className="lg:col-span-7">
            <Card3DTilt maxTilt={10} depth={35} className="bg-white/[0.035] backdrop-blur-2xl p-6 sm:p-10 border border-white/15 rounded-[40px] shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF7AC6]">
                    Forecasted Output Model
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    Projected Inbound Yield
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FF2E9A]/20 text-[#FF7AC6] border border-[#FF2E9A]/30 text-xs font-bold uppercase tracking-wider">
                  {current.speed} Conversion Speed
                </span>
              </div>

              {/* Projected Revenue Hero */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#FF2E9A]/20 via-[#B026FF]/20 to-cyan-500/10 border border-white/15 mb-6 shadow-inner">
                <div className="text-xs font-bold uppercase tracking-widest text-[#FF7AC6] mb-1">
                  Estimated Gross Pipeline Value
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-2">
                  <span>₹{projectedRevenue.toLocaleString('en-IN')}</span>
                  <span className="text-xs font-bold text-[#FF7AC6] uppercase tracking-widest">/ month</span>
                </div>
              </div>

              {/* Interactive Performance Bars */}
              <div className="grid grid-cols-3 gap-3.5 mb-6 text-center">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#FF2E9A]/20 transition-all duration-500 rounded-b-2xl"
                    style={{ height: `${Math.min(100, (adSpend / 500000) * 100)}%` }}
                  />
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Inbound Leads</div>
                    <div className="text-xl sm:text-2xl font-black text-white">~{projectedLeads}</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#B026FF]/30 transition-all duration-500 rounded-b-2xl"
                    style={{ height: `${Math.min(100, current.roi * 15)}%` }}
                  />
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Target ROAS</div>
                    <div className="text-xl sm:text-2xl font-black text-[#FF7AC6]">{current.roi}x</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-[#06B6D4]/20 transition-all duration-500 rounded-b-2xl"
                    style={{ height: '80%' }}
                  />
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Deployment</div>
                    <div className="text-xl sm:text-2xl font-black text-white">5-10 Days</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <a
                href="#contact"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] hover:from-[#FF7AC6] hover:to-[#FF2E9A] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-xl shadow-[#FF2E9A]/25 hover:scale-[1.01] transition-all cursor-pointer"
              >
                <span>Request Custom Pipeline Proposal</span>
                <ArrowUpRight size={16} />
              </a>
            </Card3DTilt>
          </div>
        </div>
      </div>
    </section>
  );
};
