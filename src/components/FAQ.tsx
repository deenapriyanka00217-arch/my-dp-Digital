import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do you decide which marketing work a business needs first?',
    answer: 'We start with your service, target locations, website or landing page, current enquiry route and budget. From there, we identify the most useful next steps—such as improving a service page, running a focused campaign, fixing a tracking gap or creating content. The scope is agreed before work begins.'
  },
  {
    question: 'How do you measure enquiries and campaign performance?',
    answer: 'We separate website form submissions, WhatsApp clicks and phone clicks, and review the available traffic and campaign data. A click is not the same as a qualified lead or sale. Where analytics access and consent allow, we can configure and test conversion events; actual lead counts are reported only after the events are verified.'
  },
  {
    question: 'How long does SEO or digital marketing take to show results?',
    answer: 'There is no reliable fixed timeline for every business. Timing depends on the starting condition of the website or campaign, competition, target locations, content, budget, approvals and follow-up speed. We agree practical milestones and review the data as it matures, but we do not guarantee a ranking position, traffic increase or number of leads.'
  },
  {
    question: 'Can you connect website enquiries or WhatsApp to our CRM?',
    answer: 'We can review options for routing website forms and WhatsApp enquiries into a spreadsheet, CRM or automation tool. The exact setup depends on the CRM, WhatsApp Business/API access, available integrations, permissions and any third-party costs. We confirm what is supported before including it in a proposal.'
  },
  {
    question: 'How are service fees and advertising budgets handled?',
    answer: 'Website projects and ongoing services are quoted according to the agreed pages, deliverables, platforms, content volume, integrations and support. For paid advertising, the media spend paid to the ad platform is separate from the campaign-management fee. You receive an itemised scope before approving the work.'
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
