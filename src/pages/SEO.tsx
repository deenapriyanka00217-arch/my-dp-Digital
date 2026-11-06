import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Globe, Check, ArrowRight, Sparkles, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const WHATSAPP_PHONE = '918148320217';

const SEO_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Local SEO Services',
    provider: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
      telephone: '+91-81483-20217',
    },
    areaServed: 'Chennai, Tamil Nadu, India',
    description:
      'SEO services in Chennai covering technical reviews, on-page improvements, keyword mapping, local search content and organic performance reporting.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mydpdigital.in/services' },
      { '@type': 'ListItem', position: 3, name: 'SEO', item: 'https://www.mydpdigital.in/services/seo' },
    ],
  },
];

const SEOPage = () => {
  return (
    <>
    <PageSEO
      title="SEO Services in Chennai | Local & Technical SEO"
      description="Chennai SEO services for technical checks, on-page improvements, keyword mapping, local search content and organic performance reporting."
      canonicalPath="/services/seo"
      jsonLd={SEO_JSON_LD}
    />
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      {/* Ambient Orbs */}
      <div className="absolute top-20 right-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[35vw] h-[35vw] bg-[#B026FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="max-w-3xl mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> Organic Dominance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            SEO Services in Chennai <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">That Help Customers Find You.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal">
            Practical SEO planning and implementation for Chennai businesses: technical checks, keyword-to-page mapping, useful service content, internal links and Search Console reporting. Work is prioritised around your site, target areas and commercial goals — without ranking guarantees.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi My DP Digital, I would like an SEO review. Website: __. Business type: __. Target area: __. Main service to promote: __.')}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#20ba59]"
              aria-label="Request an SEO review on WhatsApp">
              <MessageCircle size={15} /> Request an SEO Review
            </a>
            <Link to="/contact" className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/10">Request an SEO Proposal</Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          <div className="lg:col-span-6 space-y-10">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Technical Review', desc: 'Indexability, crawl paths, redirects and performance checks.', icon: Zap },
                { title: 'Keyword Mapping', desc: 'Match commercial search intent to the right service page.', icon: Search },
                { title: 'Local Search Content', desc: 'Useful Chennai-area service information without doorway pages.', icon: Globe },
                { title: 'Search Reporting', desc: 'Review clicks, impressions, CTR and average position in Search Console.', icon: BarChart3 },
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
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">The Growth Process</h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Baseline Review', text: 'Review indexability, page structure, current search data and the enquiries the site needs to generate.' },
                  { step: '02', title: 'Keyword-to-Page Plan', text: 'Assign one clear search-intent cluster to each relevant service or location page.' },
                  { step: '03', title: 'On-Page Improvements', text: 'Improve titles, headings, useful content, internal links and technical issues identified in the audit.' },
                  { step: '04', title: 'Measure & Refine', text: 'Use settled Search Console data to decide what to improve next; ranking movement is an outcome, not a promise.' },
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
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2E9A]/20 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#FF2E9A]/20 border border-[#FF2E9A]/30 text-[#FF7AC6] text-[10px] font-bold uppercase tracking-widest">
                    Practical SEO Scope
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">What an SEO Engagement Can Include</h3>
                  <div className="space-y-4">
                    {[
                      'Technical and indexability checks',
                      'Commercial keyword research and page mapping',
                      'Service-page titles, headings and content improvements',
                      'Internal linking and local-intent content planning',
                      'Monthly Search Console review and next-step priorities',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm text-white/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#25D366]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-white/55">
                    The agreed scope depends on the website, competition, available content and access. Search visibility and enquiry results vary; no fixed ranking, traffic increase or lead volume is guaranteed.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-[#FF2E9A]/25 hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all"
                  >
                    <span>Request SEO Roadmap</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>

        {/* Quick SEO Timeline FAQ */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">How long does SEO take to rank?</h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            SEO is not an instant channel. The time needed to see measurable movement depends on your site's history,
            technical condition, competition, target pages, content quality and how consistently improvements are made.
            We review the starting position and agree realistic milestones, but no agency can guarantee a specific
            ranking date or position.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SEO FOR LOCAL SEARCH ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking for SEO that gets you found in local search?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We help Chennai businesses align service pages with the areas and services customers search for. Work can
            include local-intent keyword mapping, useful service-area content, clear business information on the site,
            internal links and indexability checks. Google Maps or Local Pack placement is not guaranteed. Message us
            with your website, business type and target area to discuss a realistic plan.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed">
            Serving customers around Tambaram and South Chennai? See our{' '}
            <Link to="/tambaram" className="text-[#FF7AC6] font-semibold hover:underline">
              digital marketing services in Tambaram
            </Link>{' '}
            page for the local service-area details.
          </p>
        </div>

        {/* ================= QUICK ANSWER: LOCAL SEO SERVICES IN CHENNAI ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Comparing local SEO services or local SEO companies in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            We plan local search improvements around the services you sell, the areas you serve and the pages you
            already have. The first step is to review your website and current Search Console visibility, then agree
            the work that is worth doing. Share your site and target area to request an initial review.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SEO AGENCY NEAR ME ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Searching for an SEO agency near you in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            My DP Digital works with businesses across Chennai and the Tambaram / South Chennai area. We can review
            your existing pages, search visibility and target services remotely, then explain which improvements are
            relevant before preparing a proposal.
          </p>
        </div>

        {/* ================= QUICK ANSWER: HIRE AN SEO EXPERT ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            Looking to hire an SEO expert in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Instead of a single freelancer, you get our full team's technical audits, content, and link work as
            one engagement — with direct access to whoever is actually working on your site. Message us on
            WhatsApp with your website and current rankings and we'll give you an honest read on what hiring us
            would look like.
          </p>
        </div>

        {/* ================= QUICK ANSWER: SEO COST IN CHENNAI ================= */}
        <div className="mb-16 max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">
            What does SEO cost in Chennai?
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            SEO cost in Chennai varies a lot depending on your industry, competition, and how much on-page and
            content work your site currently needs — so we don't quote a fixed number until we've actually looked
            at your site. Message us on WhatsApp with your website and we'll give you a clear, honest cost
            estimate for your specific goals, not a generic package price.
          </p>
        </div>

        <FAQ />
      </div>
    </div>
    </>
  );
};

export default SEOPage;
