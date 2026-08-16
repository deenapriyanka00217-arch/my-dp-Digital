import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Youtube,
  Video,
  Image,
  TrendingUp,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Play,
  Film,
  Zap,
  Flame,
  Award,
  BarChart3,
  Clock,
  Eye,
  Sliders,
  Layers,
  FileCheck,
  Headphones,
  Scissors,
  Palette,
  Target,
  Users,
  ShieldCheck,
  Check,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card3DTilt } from '../components/Card3DTilt';
import FAQ from '../components/FAQ';
import PageSEO from '../components/PageSEO';

const WHATSAPP_PHONE = '918148320217';

// Verified Real Client Channels
const CLIENT_CHANNELS = [
  {
    id: 'kaasedhaan',
    name: 'Kaasedhaan Kadavullappa',
    handle: '@Kaasedhaankadavullappa',
    url: 'https://www.youtube.com/@Kaasedhaankadavullappa',
    niche: 'Entertainment & Cultural Media',
    tagline: 'High Engagement Entertainment & Lifestyle Channel',
    bannerGradient: 'from-[#FF2E9A] via-[#B026FF] to-[#0A0710]',
    avatarChar: 'KK',
    stats: {
      contentFormat: 'Long-Form & Viral Shorts',
      retentionBoost: '+145%',
      ctrAvg: '11.8%',
      deliverables: ['Custom Thumbnail Art', 'Dynamic Video Editing', 'Title & Metadata SEO', 'Shorts Automation']
    },
    description:
      'Complete post-production editing, custom stylized thumbnails, and metadata optimization tailored for maximum regional Tamil audience retention and viral shareability.'
  },
  {
    id: 'veritastech',
    name: 'Veritas Tech Pilot Academy',
    handle: '@VeritastechPilotAcademy01',
    url: 'https://www.youtube.com/@VeritastechPilotAcademy01',
    niche: 'Aviation & Pilot Academy Training',
    tagline: 'Aviation Training & Professional Pilot Education',
    bannerGradient: 'from-[#06B6D4] via-[#3B82F6] to-[#0A0710]',
    avatarChar: 'VT',
    stats: {
      contentFormat: 'Masterclasses & Aviation Guides',
      retentionBoost: '+180%',
      ctrAvg: '12.4%',
      deliverables: ['Educational Video Pacing', 'High-Authority Thumbnails', 'Chapter & Tag Silos', 'Student Lead Funnel']
    },
    description:
      'Structured technical video editing, chapter timestamping, high-contrast educational thumbnails, and search ranking for competitive pilot training & aviation keywords.'
  },
  {
    id: 'bachelorboys',
    name: 'Bachelor Boys Vlogz',
    handle: '@bachelor_boys_vlogz',
    url: 'https://youtube.com/@bachelor_boys_vlogz?si=mjOiIKHlf37Hx0nG',
    niche: 'Lifestyle, Travel & Entertainment Vlogs',
    tagline: 'Youth Travel & Daily Entertainment Vlogs',
    bannerGradient: 'from-[#FF8A00] via-[#FF2E9A] to-[#0A0710]',
    avatarChar: 'BB',
    stats: {
      contentFormat: 'Cinematic Vlogs & Travel Stories',
      retentionBoost: '+210%',
      ctrAvg: '13.2%',
      deliverables: ['Fast-Paced Sound Design', 'Click-Magnet Visuals', 'Viral Reels/Shorts', 'Weekly Upload Cadence']
    },
    description:
      'Cinematic color grading, pattern interrupt sound effects, viral short-form micro clips, and click-through optimized thumbnails built to dominate YouTube recommendations.'
  }
];

const ON_PAGE_SEO_CHECKLIST = [
  {
    category: 'Title & Hook Optimization',
    points: [
      'Keyword placement within first 40 characters of the video title',
      'High-curiosity emotional trigger words (e.g. "Step-by-Step", "Proven", "2026 Strategy")',
      'A/B tested Title variants with TubeBuddy & VidIQ scoring 95+'
    ]
  },
  {
    category: 'Semantic Description Architecture',
    points: [
      '250+ word rich topical summary covering LSI semantic search terms',
      'Interactive Chapter Timestamps for Google Search Key Moments indexing',
      'Direct Lead Funnel links & WhatsApp inquiry CTA at line 3 above the fold',
      'Branded Social Profiles & Playlist Authority Silo links'
    ]
  },
  {
    category: 'Thumbnail Psychology & Visual CTR',
    points: [
      '3-4 word high-contrast typography readable on 320px mobile screens',
      'High-saturation expressive facial crops with edge glow separation',
      'Complementary color theory calibrated for YouTube Dark & Light themes'
    ]
  },
  {
    category: 'Retention & Sound Design Hooks',
    points: [
      '0:00 - 0:30 Second Hook with Zero Fluff & visual teasers',
      'Pattern interrupts every 4-7 seconds (B-Roll, zooms, whooshes, popups)',
      'Subtitles & animated kinetic typography for 80%+ silent viewer retention'
    ]
  }
];

export const YouTubeManagementPage: React.FC = () => {
  // SEO Schema for structured search engine visibility
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'YouTube Channel Management & Video Editing',
    provider: {
      '@type': 'LocalBusiness',
      name: 'My DP Digital Growth Agency',
      telephone: '+918148320217',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      }
    },
    description:
      'Professional YouTube Video Editing, High CTR Thumbnail Design, Channel Management, and On-Page YouTube SEO optimization for creators, academies, and brands.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '14999',
      highPrice: '48999'
    }
  };

  return (
    <>
    <PageSEO
      title="YouTube Channel Management & Video Editing | Chennai"
      description="Professional YouTube channel management, video editing, and thumbnail design for creators and brands in Chennai — grow your channel with expert help."
      canonicalPath="/youtube-management"
    />
    <div className="pt-28 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full font-sans">
      {/* Inject Structured Data Schema for Search Engine SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Ambient background lighting */}
      <div className="absolute top-10 left-[-10%] w-[50vw] h-[50vw] bg-[#FF2E9A]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] bg-[#FF0000]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-[20%] w-[40vw] h-[40vw] bg-[#B026FF]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Header Section */}
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto relative z-10 mb-20">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-white/50 mb-6 font-mono">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight size={12} />
          <span className="text-[#FF2E9A] font-bold">YouTube Channel Editing & Management</span>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF0000]/15 border border-[#FF0000]/30 backdrop-blur-xl text-white text-[11px] font-black uppercase tracking-widest">
              <Youtube size={15} className="text-[#FF0000] fill-[#FF0000]" />
              <span>Full-Stack YouTube Production & Growth</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.08] tracking-tight">
              YouTube Video Editing, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] via-[#FF2E9A] to-[#B026FF]">
                High-CTR Thumbnails & Management
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-medium max-w-2xl">
              Turn raw footage into viral, binge-worthy YouTube assets. We handle end-to-end 
              <strong className="text-white"> post-production video editing</strong>, 
              <strong className="text-[#FF7AC6]"> 12%+ CTR thumbnail design</strong>, 
              <strong className="text-[#25D366]"> on-page YouTube SEO</strong>, and 
              <strong className="text-white"> channel upload management</strong> so you can focus purely on creating.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I would like to get a proposal for YouTube Channel Video Editing and Management for my channel.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF0000] via-[#FF2E9A] to-[#B026FF] hover:from-[#FF4D4D] hover:to-[#FF2E9A] text-white font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-[#FF0000]/25 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle size={17} fill="currentColor" />
                <span>Get Free Channel Audit & Quote</span>
              </a>

              <a
                href="#client-showcase"
                className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 backdrop-blur-xl transition-all cursor-pointer"
              >
                <span>View Real Client Channels</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Trust Metric Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 max-w-xl">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-[#FF2E9A]">12.4%</div>
                <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Avg. Video CTR</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-[#25D366]">+185%</div>
                <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Watch Retention</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-[#06B6D4]">48-72h</div>
                <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Turnaround Time</div>
              </div>
            </div>
          </div>

          {/* Hero Visual 3D Card */}
          <div className="lg:col-span-5">
            <Card3DTilt maxTilt={8} depth={30}>
              <div className="p-6 sm:p-8 rounded-[36px] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-[#0A0710] border border-white/20 backdrop-blur-2xl shadow-2xl relative overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF0000]/20 blur-3xl rounded-full pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF0000] text-white flex items-center justify-center shadow-lg shadow-[#FF0000]/30">
                      <Play size={20} fill="white" className="ml-0.5" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white">Full-Funnel YouTube Engine</div>
                      <div className="text-[10px] text-[#25D366] font-bold">● Active 2026 Production Desk</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-bold uppercase">
                    360° Studio
                  </span>
                </div>

                {/* Workflow Stack */}
                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Pacing & Retention Editing', desc: 'Premiere & DaVinci cutdowns, multi-cam sync, hook retention.', icon: Scissors, color: '#FF2E9A' },
                    { step: '02', title: 'High-CTR Psychological Thumbnails', desc: 'Custom Photoshop design, color contrast, A/B variant testing.', icon: Palette, color: '#06B6D4' },
                    { step: '03', title: 'On-Page YouTube SEO & Meta', desc: 'VidIQ 95/100+, chapters, searchable tags & ranking title formulas.', icon: Search, color: '#25D366' },
                    { step: '04', title: 'Viral Shorts Repurposing', desc: 'Auto-captions, vertical 9:16 re-framing, sound effects.', icon: Zap, color: '#FF8A00' }
                  ].map((wf, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0" style={{ color: wf.color }}>
                          <wf.icon size={16} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{wf.title}</div>
                          <div className="text-[10px] text-white/50 leading-tight">{wf.desc}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-white/40">{wf.step}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-black text-white">Direct WhatsApp Consultation</div>
                    <div className="text-[10px] text-[#25D366]">Connect directly with our Lead YouTube Producer</div>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I want to talk about YouTube Video Editing and Channel Management.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#25D366] text-white hover:scale-105 active:scale-95 transition-all shadow-md"
                  >
                    <MessageCircle size={16} fill="white" />
                  </a>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>
      </div>

      {/* ================= REAL CLIENT CHANNELS SHOWCASE SECTION ================= */}
      <section id="client-showcase" className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto relative z-10 mb-24">
        <div className="p-8 sm:p-12 rounded-[40px] bg-white/[0.025] backdrop-blur-2xl border border-white/15 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-[10px] font-black uppercase tracking-wider">
                <Award size={13} /> Verified Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Our Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#25D366]">YouTube Client Channels</span>
              </h2>
              <p className="text-sm text-white/70 max-w-2xl">
                Explore real YouTube channels we actively edit, design thumbnails for, and optimize for audience growth, retention, and conversion.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/15 shrink-0">
              <Youtube size={18} className="text-[#FF0000]" />
              <span className="text-xs font-bold text-white">3 Active Client Showcases</span>
            </div>
          </div>

          {/* 3 Client Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {CLIENT_CHANNELS.map((ch, idx) => (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="rounded-[32px] bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 overflow-hidden shadow-2xl hover:border-white/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Channel Header Banner */}
                  <div className={`h-28 bg-gradient-to-r ${ch.bannerGradient} p-4 flex items-start justify-between relative`}>
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                      Channel #{idx + 1}
                    </span>
                    
                    <a
                      href={ch.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white text-white hover:text-[#0A0710] text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-md cursor-pointer"
                    >
                      <span>Visit Channel</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Channel Profile Header */}
                  <div className="p-6 space-y-5 -mt-10">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#0A0710] border-2 border-white/20 flex items-center justify-center text-white font-black text-lg shadow-xl shrink-0 group-hover:scale-105 transition-transform">
                        {ch.avatarChar}
                      </div>
                      <div>
                        <h3 className="text-base font-black text-white leading-tight group-hover:text-[#FF7AC6] transition-colors">
                          {ch.name}
                        </h3>
                        <div className="text-xs text-[#25D366] font-mono font-bold mt-0.5">
                          {ch.handle}
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-lg bg-white/10 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                      {ch.niche}
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed font-normal">
                      {ch.description}
                    </p>

                    {/* Deliverables Breakdown */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[10px] font-black uppercase tracking-widest text-white/50">
                        Services Provided by DP Digital:
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {ch.stats.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-white/90">
                            <CheckCircle2 size={12} className="text-[#25D366] shrink-0" />
                            <span className="truncate">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="p-5 border-t border-white/10 bg-black/30">
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-[#FF0000] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Youtube size={15} />
                    <span>Open {ch.name} on YouTube</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Direct CTA Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FF2E9A]/20 via-[#B026FF]/20 to-[#0A0710] border border-[#FF2E9A]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-base sm:text-lg font-black text-white">
                Want your YouTube channel edited and managed like these creators?
              </div>
              <p className="text-xs text-white/70">
                Get a tailored editing sample & on-page YouTube SEO audit on WhatsApp within 2 hours.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I saw your client channels (Kaasedhaan Kadavullappa, Veritas Tech, Bachelor Boys Vlogz) and I want to manage and edit my YouTube channel with you.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-[#25D366]/25 shrink-0 active:scale-98 transition-all cursor-pointer"
            >
              <MessageCircle size={16} fill="white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= ON-PAGE YOUTUBE SEO MASTER CHECKLIST ================= */}
      <section className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto relative z-10 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold uppercase tracking-wider text-white">
            <Search size={13} className="text-[#FF7AC6]" /> High-Ranking Search Strategy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our On-Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">YouTube SEO Blueprint</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
            How we rank your videos on both YouTube Search and Google Video Carousel using advanced semantic topic modeling and retention science.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ON_PAGE_SEO_CHECKLIST.map((chk, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.035] backdrop-blur-xl border border-white/10 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#FF7AC6]">0{idx + 1}</span>
                  <FileCheck size={18} className="text-[#25D366]" />
                </div>
                <h3 className="text-base font-black text-white tracking-tight">
                  {chk.category}
                </h3>
                <div className="space-y-2.5">
                  {chk.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-white/80 leading-relaxed">
                      <CheckCircle2 size={13} className="text-[#25D366] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-white/40">
                Audited with TubeBuddy & VidIQ Pro
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto relative z-10">
        <FAQ />
      </div>
    </div>
    </>
  );
};

export default YouTubeManagementPage;
