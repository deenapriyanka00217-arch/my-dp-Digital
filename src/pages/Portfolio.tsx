import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, BarChart3, TrendingUp, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';

const portfolioItems = [
  {
    client: 'EcoDrive Global',
    industry: 'EV Mobility',
    challenge: 'Stagnant organic leads and high CAC on legacy search terms.',
    solution: 'Topical authority matrix + 3D funnel redesign.',
    result: '+340% Lead Velocity',
    metricLabel: 'Growth Metric',
    color: '#FF2E9A',
  },
  {
    client: 'Nexus Fintech',
    industry: 'Digital Banking',
    challenge: 'Low trust signals and poor mobile conversion rates.',
    solution: 'Hardware-accelerated landing page + Meta scaling.',
    result: '12.4x ROAS',
    metricLabel: 'Ad Efficiency',
    color: '#B026FF',
  },
  {
    client: 'SkyLine SaaS',
    industry: 'Enterprise CRM',
    challenge: 'High churn and poor product-market visibility.',
    solution: 'Programmatic SEO clusters + LinkedIn Ads engine.',
    result: '400k+ Monthly Visits',
    metricLabel: 'Organic Traffic',
    color: '#FF7AC6',
  },
];

const PortfolioPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden w-full">
      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[35vw] h-[35vw] bg-[#FF2E9A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] bg-[#B026FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF2E9A]/10 border border-[#FF2E9A]/20 text-[#FF2E9A] text-xs font-bold">
            <Sparkles size={14} /> The Performance Log
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0A0710] leading-tight tracking-tight">
            Results, Not Just <br /> <span className="text-[#FF2E9A]">Promises.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#0A0710]/60 leading-relaxed font-medium">
            Real-world forensic data from the brands we've engineered for high-velocity global growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-32">
          {portfolioItems.map((item, idx) => (
            <Card3DTilt key={idx} maxTilt={3} depth={10}>
              <article className="p-8 sm:p-12 rounded-[48px] bg-[#F8F9FB] border border-black/5 hover:border-[#FF2E9A]/30 transition-all flex flex-col lg:flex-row gap-10 items-center hover:shadow-2xl hover:shadow-black/5">
                <div className="flex-1 space-y-8">
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-[#FF2E9A] uppercase tracking-[0.2em]">{item.industry}</div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0A0710] tracking-tight">{item.client}</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-[#0A0710]/30 uppercase tracking-widest border-l-2 border-[#FF2E9A] pl-3">The Challenge</div>
                      <p className="text-sm text-[#0A0710]/60 leading-relaxed font-medium">{item.challenge}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-[#0A0710]/30 uppercase tracking-widest border-l-2 border-[#B026FF] pl-3">The Solution</div>
                      <p className="text-sm text-[#0A0710]/60 leading-relaxed font-medium">{item.solution}</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-black/5">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#FF2E9A] font-bold text-xs hover:text-[#0A0710] transition-colors">
                      <span>View Case Forensic</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col items-center justify-center p-12 rounded-[36px] bg-white border border-black/5 shadow-sm relative overflow-hidden group">
                  <div 
                    className="absolute inset-0 opacity-10 blur-3xl rounded-full translate-y-1/2"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="relative z-10 text-center space-y-2">
                    <div className="text-5xl sm:text-6xl font-black text-[#0A0710] tracking-tighter group-hover:scale-110 transition-transform duration-500">{item.result}</div>
                    <div className="text-[11px] font-bold text-[#0A0710]/40 uppercase tracking-[0.3em]">{item.metricLabel}</div>
                  </div>
                </div>
              </article>
            </Card3DTilt>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-black text-[#0A0710] tracking-tight">Your Brand Is Next.</h2>
          <Link
            to="/contact"
            className="inline-flex bg-[#0A0710] text-white px-12 py-5 rounded-2xl font-bold text-sm hover:bg-[#FF2E9A] transition-all hover:scale-105 shadow-xl shadow-black/10"
          >
            Start Your Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
