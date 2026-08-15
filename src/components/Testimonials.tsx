import { Quote, Star } from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Arun Kumar',
    role: 'Founder & CEO, TechSolutions India',
    content: 'DP Digital transformed our entire lead engine with their 3D web experience and SEO dominance. Our monthly qualified pipeline surged by 280% in 90 days.',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Head of Growth, FashionHub Retail',
    content: 'Their automated WhatsApp & CRM pipelines eliminate lead response friction. The 3D product landing pages converted at an astonishing 14.8% rate.',
  },
  {
    id: '3',
    name: 'Rajesh V.',
    role: 'Managing Director, LocalEats Chain',
    content: 'Hands down the highest ROI digital partner in India. Zero vanity metrics, just pure bottom-line scalability and relentless optimization.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#07050C] text-white relative overflow-hidden w-full border-t border-white/10">
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#FF2E9A]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-widest">
            Verified Partner Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Client Success &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Growth Proof</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-normal">
            Real feedback from enterprise leaders and high-growth founders who accelerated revenue with DP Digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <Card3DTilt key={t.id} maxTilt={8} depth={20} className="h-full">
              <div className="bg-white/[0.035] backdrop-blur-2xl p-8 sm:p-10 rounded-[40px] relative group border border-white/10 hover:border-white/25 transition-all h-full flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#FF2E9A]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <div className="text-white/10 group-hover:text-[#FF2E9A]/30 transition-colors">
                      <Quote size={36} />
                    </div>
                  </div>

                  <p className="text-white/80 text-base leading-relaxed mb-8 relative z-10 font-normal">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF2E9A] to-[#B026FF] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#FF2E9A]/20">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-base tracking-tight">{t.name}</div>
                    <div className="text-xs text-[#FF7AC6] font-semibold tracking-wide">{t.role}</div>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
