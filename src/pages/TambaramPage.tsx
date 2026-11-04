import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Megaphone,
  Globe,
  Palette,
  Wallet,
  Image as ImageIcon,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
  Video,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/StickyWhatsApp';
import PageSEO from '../components/PageSEO';

const WHATSAPP_PHONE = '918148320217';
const DISPLAY_PHONE = '+91 81483 20217';
const TEL_HREF = 'tel:+918148320217';

const getWhatsAppUrl = (topic: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi My DP Digital, I am looking for ${topic} in Tambaram, Chennai.`)}`;

const tambaramServices = [
  {
    title: 'SEO Services in Tambaram, Chennai',
    desc: 'Local and organic SEO support for Tambaram businesses — on-page improvements, eligible Google Business Profile guidance, and content planned around relevant local search intent.',
    icon: Search,
    href: '/services/seo',
  },
  {
    title: 'Google Ads Management for Tambaram Businesses',
    desc: 'Google Search and paid-search campaign planning for Tambaram businesses, with targeting, budget, conversion tracking, and reporting agreed before launch.',
    icon: Megaphone,
    href: '/services/paid-social-ads',
  },
  {
    title: 'Facebook & Instagram Ads Management in Tambaram',
    desc: 'Meta Ads campaigns for coaching centres, clinics, shops, and local service providers seeking relevant enquiries or sales. Choose a WhatsApp, instant-form, or landing-page route, with ad spend and management fees explained separately.',
    icon: Megaphone,
    href: '/services/facebook-ads',
  },
  {
    title: 'Website Design for Tambaram Businesses',
    desc: 'Mobile-friendly business websites and landing pages for Tambaram and South Chennai businesses, with delivery timelines based on the agreed scope.',
    icon: Globe,
    href: '/services/web-design-development',
  },
  {
    title: 'Branding Support for Tambaram Businesses',
    desc: 'Logo design, brand identity, and visual systems that help Tambaram businesses look established and trustworthy from the very first impression.',
    icon: Palette,
    href: '/services/content-marketing-branding',
  },
  {
    title: 'Graphic Design Services in Tambaram, Chennai',
    desc: 'Graphic design support for Tambaram businesses, including social media creatives, print, packaging, and marketing collateral, with direct phone access.',
    icon: ImageIcon,
    href: '/services/content-marketing-branding',
  },
  {
    title: 'Affordable Digital Marketing Services in Tambaram',
    desc: 'Flexible monthly packages built for small and mid-sized Tambaram businesses, so you get real SEO, ads, and design support without agency-sized budgets.',
    icon: Wallet,
    href: '/services',
  },
  {
    title: 'Video Marketing & YouTube Support for Tambaram Businesses',
    desc: 'YouTube channel management, video editing, and thumbnail design for Tambaram businesses looking to build a consistent video presence.',
    icon: Video,
    href: '/youtube-management',
  },
];

const faqs = [
  {
    question: 'What digital marketing services do you offer to Tambaram businesses?',
    answer: `We provide SEO, Google Ads, Meta (Facebook and Instagram) advertising, website design, branding, graphic design, video editing, and YouTube channel support. Call or WhatsApp ${DISPLAY_PHONE} to discuss what fits your business.`,
  },
  {
    question: 'Can you manage Facebook and Instagram Ads for a Tambaram business?',
    answer: 'Yes. Meta Ads campaigns can be planned for coaching centres, academies, clinics, shops, and local service providers. Depending on the goal, enquiries can go to WhatsApp, an instant form, or a landing page. Campaign scope, ad budget, and management fees are discussed separately before launch.',
  },
  {
    question: 'Which areas around Tambaram do you serve?',
    answer: 'We work with businesses in Tambaram East and West, as well as nearby areas including Chromepet, Selaiyur, and Pallavaram. Contact us to confirm coverage for your location.',
  },
  {
    question: 'Can a project be managed remotely?',
    answer: `Yes. Communication, planning, content reviews, and reporting can be handled by phone, WhatsApp, and email. You do not need to visit an office to discuss or manage a project. Reach us at ${DISPLAY_PHONE}.`,
  },
  {
    question: 'How much do digital marketing services cost?',
    answer: `Pricing depends on the services, project scope, competition, and level of ongoing support required. We discuss your goals and requirements before preparing a quote. Call ${DISPLAY_PHONE} to start the conversation.`,
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Paid campaigns can begin reaching audiences after launch and approval, but enquiries and sales are not guaranteed. SEO and local organic visibility generally take longer to develop. Timelines depend on your website, competition, budget, and offer.',
  },
  {
    question: 'What should I prepare before requesting a consultation?',
    answer: 'It helps to have your website or social media links, a short description of your services, the areas you want to reach, and your main marketing goal. An indicative monthly budget is also useful when discussing paid advertising.',
  },
];

const TambaramPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const jsonLd = useMemo(
    () => [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Digital Marketing Services',
        name: 'Digital Marketing Services in Tambaram',
        url: 'https://www.mydpdigital.in/tambaram',
        provider: {
          '@type': 'Organization',
          name: 'My DP Digital',
          url: 'https://www.mydpdigital.in',
          telephone: '+91-81483-20217',
          email: 'growth@mydpdigital.in',
        },
        areaServed: [
          { '@type': 'Place', name: 'Tambaram, Chennai' },
          { '@type': 'Place', name: 'Chromepet, Chennai' },
          { '@type': 'Place', name: 'Selaiyur, Chennai' },
          { '@type': 'Place', name: 'Pallavaram, Chennai' },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
    []
  );

  return (
    <div className="w-full min-h-screen bg-[#07050C] text-white pt-24 pb-20">
      <PageSEO
        title="Digital Marketing Agency in Tambaram | My DP Digital"
        description="SEO, Google Ads, Meta Ads and website design for small businesses in Tambaram, Chennai. Contact My DP Digital to discuss your goals and project scope."
        canonicalPath="/tambaram"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#2B0B28] via-[#0D091B] to-[#07050C] border border-[#FF2E9A]/30 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF2E9A]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B026FF]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF2E9A]/20 border border-[#FF2E9A]/40 text-[#FF7AC6] text-xs font-bold">
              <MapPin size={14} />
              <span>Serving Tambaram &amp; South Chennai</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Digital Marketing Agency in Tambaram, Chennai
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              My DP Digital helps small businesses, clinics, coaching centres, and service providers in
              Tambaram with SEO, Google Ads, Meta Ads, website design, and branding. Speak directly with us
              by phone or WhatsApp to discuss your goals, service area, and project scope.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={TEL_HREF}
                className="bg-[#FF2E9A] hover:bg-[#e0227f] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#FF2E9A]/25 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <Phone size={16} />
                <span>Call {DISPLAY_PHONE}</span>
              </a>

              <a
                href={getWhatsAppUrl('digital marketing services')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#25D366]/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <WhatsAppIcon size={18} className="text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/services"
                className="border border-white/20 hover:border-[#FF2E9A] bg-white/[0.05] hover:bg-white/[0.08] text-white px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <span>View All Services</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Our Digital Marketing Services in Tambaram
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2">
            Everything a growing Tambaram business needs, from search visibility to a website that converts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tambaramServices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF2E9A]/60 transition-all group backdrop-blur-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF2E9A]/20 border border-[#FF2E9A]/40 flex items-center justify-center text-[#FF7AC6]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-[#FF7AC6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-normal">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#FF7AC6] font-semibold hover:underline"
                  >
                    Explore service
                    <ArrowRight size={13} />
                  </Link>
                  <a
                    href={getWhatsAppUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-white/70 font-semibold hover:text-white hover:underline"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs sm:text-sm text-white/60 mt-6">
          Looking specifically for paid social lead generation? Explore our{' '}
          <Link to="/services/facebook-ads" className="text-[#FF7AC6] font-semibold hover:underline">
            Facebook and Instagram Ads management service
          </Link>{' '}
          for campaign details.
        </p>
      </div>

      {/* Local marketing approach */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Local Digital Marketing That Connects Search to Enquiries
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-3">
            For a Tambaram business, visibility is only useful when people can understand what you offer,
            confirm that you serve their area, and contact you easily. We plan the website, search and
            advertising work around that customer journey rather than treating each activity in isolation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-bold text-base text-white mb-2">Be discoverable locally</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Build useful service and location information, improve on-page SEO, and review Google Business
              Profile options for businesses that meet Google's eligibility rules.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-bold text-base text-white mb-2">Make it easy to enquire</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Give mobile visitors clear service details, transparent next steps, and simple call or WhatsApp
              contact options so they know how to start a conversation.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="font-bold text-base text-white mb-2">Measure and improve</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Agree on useful measures before work begins, such as relevant search visibility, website
              enquiries, calls, or campaign performance where tracking is available.
            </p>
          </div>
        </div>
        <p className="text-center text-[11px] text-white/50 mt-5">
          Search rankings, enquiry volume, and advertising results depend on competition, budget, website
          quality, and the offer. No fixed position or number of leads is promised.
        </p>
      </div>

      {/* Digital Marketing Services Near Tambaram — Neighboring Areas */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Digital Marketing Services Near Tambaram
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">
            We serve businesses in Tambaram and across the wider South Chennai belt — including
            Chromepet, Selaiyur, and Pallavaram — who want a digital marketing team they can reach directly by
            phone rather than a call centre. Whichever of these areas your business is in, the same direct
            SEO, Google Ads, website design, and branding support applies. We also run{' '}
            <Link to="/youtube-management" className="text-[#FF7AC6] font-semibold hover:underline">
              video marketing and YouTube channel management
            </Link>{' '}
            for Tambaram businesses looking to grow beyond search and ads.
          </p>
        </div>
      </div>

      {/* Why Us */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Digital Marketing Support for Tambaram Businesses
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl mb-6">
            We work with shop owners, clinics, coaching centers, and service businesses in Tambaram and nearby areas. You can contact the team directly by phone or WhatsApp to discuss your requirements.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Direct phone &amp; WhatsApp access to the team working on your account',
              'Google Business Profile guidance for eligible businesses, with no promise of a specific Maps position',
              'Transparent monthly reporting on rankings, traffic, and ad spend',
              'Service options that can be scoped around your business goals',
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: point }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-xs font-bold uppercase tracking-widest">
            <HelpCircle size={14} className="text-[#FF2E9A]" /> Tambaram FAQs
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Common Questions from Tambaram Businesses</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-[28px] overflow-hidden transition-all duration-300 border backdrop-blur-xl ${
                openFaq === idx ? 'bg-white/[0.06] border-white/25 shadow-2xl' : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors cursor-pointer"
              >
                <span className="font-bold text-white tracking-tight text-sm sm:text-base pr-4">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                    openFaq === idx ? 'bg-[#FF2E9A] text-white' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/70 leading-relaxed text-xs sm:text-sm border-t border-white/10 mt-2 font-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FF2E9A]/30 via-[#0D091B] to-[#B026FF]/20 border border-[#FF2E9A]/40 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Ready to Grow Your Tambaram Business?</h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            Call, WhatsApp, or send us a message — we'll get back to you the same day with a straightforward plan
            and pricing.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={TEL_HREF}
              className="inline-flex items-center gap-2 bg-[#FF2E9A] hover:bg-[#e0227f] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-[#FF2E9A]/25 transition-all hover:scale-[1.02]"
            >
              <Phone size={16} />
              <span>Call {DISPLAY_PHONE}</span>
            </a>
            <a
              href={getWhatsAppUrl('a free consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-[#25D366]/25 transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon size={18} className="text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambaramPage;
