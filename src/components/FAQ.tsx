import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do your 3D sales funnels accelerate lead conversions?',
    answer: 'By replacing static forms with interactive, immersive WebGL experiences and instant zero-second WhatsApp bot routing, prospect engagement increases by 320% and drop-off friction is virtually eliminated.'
  },
  {
    question: 'How fast do 3D WebGL interfaces load on mobile devices?',
    answer: 'Our 3D elements use hardware-accelerated shaders and adaptive geometry level-of-detail (LOD) to maintain flawless 60fps performance and sub-1.2 second loading times across all iOS and Android devices.'
  },
  {
    question: 'How quickly can we expect measurable SEO & lead growth?',
    answer: 'While technical Core Web Vitals fixes and 3D funnel landing page optimizations trigger immediate conversion increases within 7-14 days, algorithmic organic search authority compounds strongly over 60-90 days.'
  },
  {
    question: 'Can you integrate autonomous WhatsApp bots with our existing CRM?',
    answer: 'Yes! We build custom webhook automations across Zapier, Make, and WhatsApp Business Cloud API to sync leads directly into Salesforce, HubSpot, Zoho, LeadSquared, or Google Sheets with instant real-time notifications.'
  },
  {
    question: 'What is your investment and engagement model?',
    answer: 'We offer performance-oriented monthly growth partnerships as well as bespoke project sprints for custom 3D web development, brand funnels, and enterprise automation pipelines.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#07050C] text-white relative overflow-hidden w-full border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2E9A]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-widest">
            <HelpCircle size={14} className="text-[#FF2E9A]" /> Clarity &amp; Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Answered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Queries</span>
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-[32px] overflow-hidden transition-all duration-300 border backdrop-blur-xl ${
                openIndex === idx
                  ? 'bg-white/[0.06] border-white/25 shadow-2xl'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-7 text-left transition-colors cursor-pointer"
              >
                <span className="font-bold text-white tracking-tight text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === idx ? 'bg-[#FF2E9A] text-white' : 'bg-white/10 text-white/50'
                }`}>
                  {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-7 pt-0 text-white/70 leading-relaxed text-sm border-t border-white/10 mt-2 font-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
