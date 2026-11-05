import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, BarChart3, Globe, Check, ArrowRight, Sparkles, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const WHATSAPP_PHONE = '918148320217';

const PAIDADS_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Social Media & Paid Ads Marketing',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'Google Search and YouTube advertising alongside Facebook and Instagram campaign management for businesses in Chennai, with clear campaign scope and enquiry tracking.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mydpdigital.in/services' },
      { '@type': 'ListItem', position: 3, name: 'Paid & Social Ads', item: 'https://www.mydpdigital.in/services/paid-social-ads' },
    ],
  },
];

const PaidAdsPage = () => {
  return (
    <>
    <PageSEO
      title="Google Ads & Meta Ads Management in Chennai | My DP Digital"
      description="Google Search, YouTube, Facebook and Instagram ads in Chennai, with planning, creative testing, landing-page review and enquiry tracking."
      canonicalPath="/services/paid-social-ads"
      jsonLd={PAIDADS_JSON_LD}
    />
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      <div className="absolute top-20 right-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[35vw] h-[35vw] bg-[#B026FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> High-Yield PPC & Meta
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Google Ads & Social Media <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">Advertising in Chennai.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            We manage Google Search and relevant YouTube campaigns when customers are actively searching, and Facebook and Instagram campaigns when your business needs to reach and qualify new audiences. Every plan is scoped around your offer, service area, budget, landing page and enquiry-tracking setup.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi My DP Digital, I want to discuss Google Ads or Meta Ads management. Business type: __. Target area: __. Monthly ad budget: __.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#20ba59]"
              aria-label="Discuss Google Ads and Meta Ads management on WhatsApp"
            >
              Discuss Your Campaign on WhatsApp <ArrowRight size={14} />
            </a>
            <Link to="/contact" className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/10">
              Request a Campaign Proposal
            </Link>
          </div>
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
                    Clear Campaign Scope
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">What Campaign Management Includes</h3>
                  <div className="space-y-4">
                    {[
                      'Campaign objective, audience and location planning',
                      'Google Search keyword structure or Meta creative testing',
                      'Landing-page and enquiry-form journey review',
                      'Budget pacing and regular performance reporting',
                      'Lead-event and contact-path checks where access allows',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm text-white/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#25D366]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-white/55">
                    Your advertising spend is separate from the campaign-management fee. We confirm the scope, platforms, deliverables and reporting before work begins. Results depend on the offer, market, budget, website and follow-up process; no fixed ROAS or lead-volume outcome is promised.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-[#FF2E9A]/25 hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all"
                  >
                    <span>Request Paid Ads Proposal</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* ================= QUICK ANSWER: GOOGLE ADS AGENCY IN CHENNAI ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Searching for a Google Ads agency near you in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            My DP Digital runs Google PPC — Search, Shopping, and YouTube campaigns — for businesses across
            Chennai, alongside Meta/Facebook Ads, as part of one full-funnel paid acquisition plan. Message us on
            WhatsApp with your monthly budget and we'll map out a Google Ads plan built around smart-bidding and
            weekly performance reallocation.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SOCIAL MEDIA AGENCY CHENNAI ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for a social media agency in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We run paid social media campaigns on Instagram and Facebook for businesses across Chennai — creative
            production, audience targeting, and retargeting, managed alongside your Google Ads so paid social and
            search work as one funnel instead of two disconnected budgets. Message us on WhatsApp to talk through
            what a social media plan would look like for your business.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SOCIAL MEDIA MARKETING COMPANY IN CHENNAI ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Comparing social media marketing companies in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            As a social media marketing company for businesses across Chennai, we run organic content and paid
            promotion as one plan rather than two separate services — so your posts and ad spend reinforce each
            other. Message us on WhatsApp with your industry and we'll show you examples of our work.
          </p>
        </div>

        {/* ================= QUICK ANSWER: GOOGLE ADS EXPERT / PPC AGENCY CHENNAI ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Need a Google Ads expert or PPC ads agency in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Our Google Ads expert works hands-on with your account as part of a full PPC ads agency service for
            Chennai businesses — Search, Shopping, and YouTube campaigns built around smart-bidding and weekly
            performance reallocation, not a set-and-forget setup. Message us on WhatsApp with your monthly budget
            and current results and we'll give you an honest audit.
          </p>
        </div>

        {/* ================= WHAT'S INCLUDED: SOCIAL MEDIA MARKETING ================= */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            What's included in our social media marketing service?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Our social media marketing covers organic content planning alongside paid promotion — monthly content
            calendars, reel and static creative production, audience research, and paid boosting on Instagram and
            Facebook so your organic posts and ad spend reinforce each other instead of running as separate
            efforts. We report on reach, engagement, and lead volume every month so you can see what's actually
            working, not just vanity follower counts.
          </p>
        </div>

        <FAQ />
      </div>
    </div>
    </>
  );
};

export default PaidAdsPage;
