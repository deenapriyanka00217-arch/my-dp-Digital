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
    desc: 'Local and organic SEO that gets your Tambaram business found first — on-page fixes, Google Business Profile optimization, and content built around real local search demand.',
    icon: Search,
  },
  {
    title: 'Google Ads Agency in Tambaram',
    desc: 'Performance-driven Google Ads and Meta advertising campaigns for Tambaram businesses, with transparent budgets and weekly reporting — no long lock-in contracts.',
    icon: Megaphone,
  },
  {
    title: 'Website Design Company in Tambaram',
    desc: 'Fast, mobile-first business websites and landing pages designed and hosted for Tambaram and South Chennai businesses, live in days, not months.',
    icon: Globe,
  },
  {
    title: 'Branding Agency in Tambaram',
    desc: 'Logo design, brand identity, and visual systems that help Tambaram businesses look established and trustworthy from the very first impression.',
    icon: Palette,
  },
  {
    title: 'Graphic Design Services in Tambaram, Chennai',
    desc: 'A dedicated graphic designer in Tambaram, Chennai for social creatives, print, packaging, and marketing collateral — reachable directly by phone.',
    icon: ImageIcon,
  },
  {
    title: 'Affordable Digital Marketing Services in Tambaram',
    desc: 'Flexible monthly packages built for small and mid-sized Tambaram businesses, so you get real SEO, ads, and design support without agency-sized budgets.',
    icon: Wallet,
  },
  {
    title: 'Video Marketing Agency in Tambaram',
    desc: 'YouTube channel management, video editing, and thumbnail design for Tambaram businesses looking to grow on video — handled by the same team managing real, active client channels.',
    icon: Video,
  },
];

const faqs = [
  {
    question: 'Who offers digital marketing in Tambaram?',
    answer: `My DP Digital offers digital marketing in Tambaram, Chennai — SEO, Google Ads, website design, and branding — for local shop owners, clinics, and service businesses. Call or WhatsApp ${DISPLAY_PHONE} to talk to the team directly.`,
  },
  {
    question: 'Is there a digital marketing service in Tambaram, Chennai with a phone number I can call directly?',
    answer: `Yes. My DP Digital is a digital marketing agency in Tambaram, Chennai, and you can call or WhatsApp our team directly at ${DISPLAY_PHONE} for a free consultation — no forms or waiting required.`,
  },
  {
    question: 'Do you have a graphic designer in Tambaram, Chennai with a phone number?',
    answer: `Yes. Our in-house design team serves Tambaram and the surrounding Chennai suburbs for logo, branding, and print design work. Reach us directly at ${DISPLAY_PHONE}.`,
  },
  {
    question: 'What Tambaram, Chennai advertising services do you offer with a phone number to call?',
    answer: `We run Google Ads and Meta (Facebook/Instagram) advertising campaigns for businesses in and around Tambaram. Call ${DISPLAY_PHONE} for a free ad account review.`,
  },
  {
    question: 'Are there affordable digital marketing services in Tambaram?',
    answer: 'Yes — we offer flexible monthly packages for small and mid-sized Tambaram businesses covering SEO, ads, affordable website design, and branding, priced for local budgets rather than big-agency retainers.',
  },
  {
    question: 'Do you serve businesses near Tambaram, Chennai as well as within it?',
    answer: 'Yes. As a digital marketing agency near Tambaram, Chennai, we also serve Chromepet, Selaiyur, Pallavaram, and the wider South Chennai belt.',
  },
  {
    question: 'I searched "digital marketing near me" from Tambaram — is that you?',
    answer: `Yes, most likely. My DP Digital shows up for digital marketing near me searches across Tambaram and the surrounding South Chennai suburbs, and unlike a call centre, you'll reach the actual team working on your account. Call or WhatsApp ${DISPLAY_PHONE} to confirm we cover your area.`,
  },
  {
    question: 'Is there a video marketing agency in Tambaram?',
    answer: `Yes. My DP Digital also runs YouTube channel management, video editing, and thumbnail design for Tambaram businesses — the same team already manages real, active YouTube channels. Call or WhatsApp ${DISPLAY_PHONE} to see examples of our work.`,
  },
  {
    question: 'Is there an SEO company or advertising agency in Tambaram?',
    answer: `Yes. My DP Digital works as both an SEO company and advertising agency in Tambaram — ranking your business on Google search and Maps while also running Google and Meta ad campaigns, so organic and paid growth work together instead of separately. Call or WhatsApp ${DISPLAY_PHONE} for a free review.`,
  },
  {
    question: 'Do you cover Tambaram West and Tambaram East?',
    answer: 'Yes — we work with businesses across both Tambaram West and Tambaram East, along with the surrounding Chromepet, Selaiyur, and Pallavaram areas, as one digital marketing agency serving the whole belt.',
  },
  {
    question: 'How do I choose the right digital marketing agency in Tambaram?',
    answer: `Look for an agency that works directly with the people doing the work (not an account manager relaying messages), shows you real examples from Tambaram-area businesses, and is upfront about realistic timelines rather than guaranteeing overnight results. Call or WhatsApp ${DISPLAY_PHONE} and we'll answer any questions honestly before you decide.`,
  },
  {
    question: 'How much does digital marketing cost for a small business in Tambaram?',
    answer: `Costs depend on which services you need — SEO, ads, or a website — and your monthly budget. We build flexible packages sized for local Tambaram businesses rather than one fixed retainer for everyone. Call ${DISPLAY_PHONE} and we'll give you a straightforward quote based on your actual goals.`,
  },
  {
    question: 'How soon can a Tambaram business start seeing results?',
    answer: 'It depends on the service. Google Ads can bring in leads within days of launch. SEO and organic Google Business Profile growth for Tambaram searches typically take a few months to build momentum, since that is how search engines work — we will be upfront with you about realistic timelines for your specific business.',
  },
  {
    question: 'Do I need to visit an office, or can everything be handled remotely for a Tambaram business?',
    answer: `Everything can be handled over phone, WhatsApp, and email — you do not need to visit an office. We share drafts, reports, and updates directly with you at ${DISPLAY_PHONE} so you always know what's happening with your account.`,
  },
];

const TambaramPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const jsonLd = useMemo(
    () => [
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'My DP Digital',
        url: 'https://www.mydpdigital.in/tambaram',
        telephone: '+91-81483-20217',
        email: 'growth@mydpdigital.in',
        areaServed: [
          { '@type': 'Place', name: 'Tambaram, Chennai' },
          { '@type': 'Place', name: 'Chromepet, Chennai' },
          { '@type': 'Place', name: 'Selaiyur, Chennai' },
          { '@type': 'Place', name: 'Pallavaram, Chennai' },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tambaram',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
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
        title="Digital Marketing Agency in Tambaram, Chennai | My DP Digital"
        description={`Looking for a digital marketing agency in Tambaram, Chennai, or advertising services in Tambaram Chennai? My DP Digital offers SEO, Google Ads, website design and branding. Call ${DISPLAY_PHONE}.`}
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
              My DP Digital is a digital marketing company in Tambaram helping local businesses grow with SEO,
              Google Ads, website design, and branding — with a real phone number you can call, not just a
              contact form.
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
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#FF7AC6] font-semibold hover:underline"
                  >
                    Ask about this
                  </a>
                  <CheckCircle2 size={14} className="text-[#10B981]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Digital Marketing Services Near Tambaram — Neighboring Areas */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Digital Marketing Services Near Tambaram
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">
            Based in Tambaram, we also work with businesses across the wider South Chennai belt — including
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

      {/* Digital Marketing Company in Tambaram */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Digital Marketing Company in Tambaram
          </h2>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl">
            My DP Digital is a digital marketing company in Tambaram that also runs advertising services in
            Tambaram, Chennai — Google Ads, Meta Ads, and organic SEO — for local shop owners, clinics, and
            service businesses. If you're searching "digital marketing agency near me" from Tambaram or the
            surrounding South Chennai suburbs, this is the team you'll actually reach on the phone.
          </p>
        </div>
      </div>

      {/* Why Us */}
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto mt-16">
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Why Tambaram Businesses Choose My DP Digital
          </h2>
          <h3 className="text-sm sm:text-base font-bold text-[#FF7AC6] mb-4">
            A Digital Marketing Agency in Tambaram, Built for Direct Access
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-3xl mb-6">
            As a digital marketing agency near Tambaram, Chennai, we work with shop owners, clinics, coaching
            centers, and service businesses who need real results without big-agency overhead. We are also an
            advertising service in Tambaram, Chennai you can reach by phone — no ticketing systems, no account
            managers you never meet.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Direct phone &amp; WhatsApp access to the team working on your account',
              'Local Google Business Profile setup so you show up in the Tambaram map pack',
              'Transparent monthly reporting on rankings, traffic, and ad spend',
              'Flexible, affordable packages sized for local Tambaram businesses',
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
