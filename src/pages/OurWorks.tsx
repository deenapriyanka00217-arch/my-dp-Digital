import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  ExternalLink, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Briefcase, 
  ShoppingCart, 
  GraduationCap, 
  Eye, 
  X,
  ArrowRight,
  Filter,
  ShieldCheck,
  Gauge,
  Lock,
  Code2
} from 'lucide-react';
import { OUR_WORKS_DATA, ProjectWork } from '../data/worksData';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../components/StickyWhatsApp';

// 3D WordPress Rotating Showcase Badge
const WordPress3DShowcaseBadge: React.FC = () => (
  <div className="relative flex items-center justify-center">
    <div className="absolute inset-0 rounded-full bg-[#0073AA]/40 blur-xl animate-pulse" />
    <motion.div
      animate={{
        rotateY: [0, 180, 360],
        rotateZ: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#0073AA] via-[#005177] to-[#002233] border-2 border-[#00A0D2]/80 flex items-center justify-center shadow-[0_10px_30px_rgba(0,115,170,0.5)]"
    >
      <svg
        width={38}
        height={38}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-white drop-shadow-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 4.965 3.018 9.227 7.314 11.04L3.109 11.53c-.352-.96-.48-1.728-.48-2.368 0-1.28.704-2.272 1.888-2.272.16 0 .32.032.48.064l6.08 17.024C11.36 23.984 11.68 24 12 24c.736 0 1.44-.08 2.128-.24L20.88 9.2c.16-.032.32-.064.48-.064 1.152 0 1.824.992 1.824 2.272 0 .64-.128 1.408-.48 2.368l-4.144 11.456C20.944 21.192 24 16.944 24 12c0-6.627-5.373-12-12-12zm-3.088 17.888L4.768 6.432C6.736 3.936 9.216 2.4 12 2.4c2.496 0 4.736 1.2 6.64 3.296l-4.144 12.192-2.752-8.32c-.352-1.056-.96-1.568-1.824-1.568-.864 0-1.472.512-1.824 1.568l-2.176 8.32z" />
      </svg>
    </motion.div>
  </div>
);

const CATEGORY_TABS = [
  { key: 'all', label: 'All Works', icon: Globe },
  { key: 'wordpress', label: 'WordPress Specialists', icon: Globe },
  { key: 'single-page', label: 'Single Page Website', icon: Zap },
  { key: 'business', label: 'Business Website', icon: Briefcase },
  { key: 'custom', label: 'Custom Website (20+ Pages)', icon: Layers },
  { key: 'ecommerce', label: 'E-Commerce Website', icon: ShoppingCart },
  { key: 'sales-landing', label: 'Sales Landing Page', icon: Sparkles },
  { key: 'lms', label: 'LMS - Course Management', icon: GraduationCap },
];

const WHATSAPP_PHONE = '918148320217';

export const OurWorksPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPreview, setSelectedPreview] = useState<ProjectWork | null>(null);

  const filteredProjects = useMemo(() => {
    return OUR_WORKS_DATA.filter((project) => {
      let matchesCategory = true;
      if (activeCategory === 'wordpress') {
        matchesCategory = 
          project.title.toLowerCase().includes('wordpress') ||
          project.description.toLowerCase().includes('wordpress') ||
          project.features.some(f => f.toLowerCase().includes('wordpress') || f.toLowerCase().includes('elementor') || f.toLowerCase().includes('woocommerce')) ||
          project.categoryKey === 'business' ||
          project.categoryKey === 'ecommerce';
      } else if (activeCategory !== 'all') {
        matchesCategory = project.categoryKey === activeCategory;
      }

      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.url.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: OUR_WORKS_DATA.length, wordpress: 8 };
    OUR_WORKS_DATA.forEach((p) => {
      counts[p.categoryKey] = (counts[p.categoryKey] || 0) + 1;
    });
    return counts;
  }, []);

  const getWhatsAppProjectInquiryUrl = (project: ProjectWork) => {
    const message = `Hi DP Digital, I saw your live work "${project.title}" (${project.url}) under ${project.category}. I am looking to build a similar website for my business. Please share details and quotation.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-32 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      {/* Background ambient orbs */}
      <div className="absolute top-10 right-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] bg-[#0073AA]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-[10%] w-[35vw] h-[35vw] bg-[#25D366]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-[#FF2E9A]" /> Verified Client Portfolio & Live Deployments
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Our Works & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#0073AA]">Live Client Websites</span>
          </h1>
          
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore our curated showcase of high-speed Single Page Websites, WordPress specialist portals, 20+ Page Custom Hubs, E-Commerce Stores, and Automated Funnels.
          </p>
        </div>

        {/* 3D WordPress Specialist Showcase Area */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B1528] via-[#0E0919] to-[#07050C] border border-[#0073AA]/30 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0073AA]/15 blur-[90px] rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-6 items-center relative z-10">
            <div className="md:col-span-3 flex justify-center">
              <WordPress3DShowcaseBadge />
            </div>

            <div className="md:col-span-6 space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0073AA]/20 text-[#00A0D2] border border-[#0073AA]/40 text-[10px] font-bold">
                <Globe size={12} />
                <span>WordPress Development Specialists</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Custom WordPress Themes, WooCommerce & 90+ PageSpeed
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Looking for a clean, secure, SEO-optimized WordPress website? We develop custom themes, WooCommerce stores, and Gutenberg/Elementor solutions with zero plugin bloat.
              </p>
            </div>

            <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center gap-2">
              <Link
                to="/services/wordpress-development"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-[#0073AA] hover:bg-[#005a87] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                WordPress Services Page
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I want to discuss a WordPress Development project for my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Live Filter Controls & Search */}
        <div className="bg-white/[0.035] backdrop-blur-2xl p-4 sm:p-6 rounded-3xl border border-white/10 shadow-2xl mb-12 space-y-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full lg:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search by client name, industry, or domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.05] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] focus:bg-white/[0.08] transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-white/40 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Result Counter */}
            <div className="flex items-center gap-2 text-xs font-bold text-white/60 w-full lg:w-auto justify-between lg:justify-end">
              <span>Showing {filteredProjects.length} of {OUR_WORKS_DATA.length} Verified Projects</span>
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-white/10 pt-4">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.key;
              const count = categoryCounts[tab.key] || 0;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white shadow-lg shadow-[#FF2E9A]/25 scale-[1.02]'
                      : 'bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/10'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-white/40'} />
                  <span>{tab.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                      isActive ? 'bg-white/25 text-white' : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/[0.035] backdrop-blur-2xl rounded-[32px] border border-white/10 hover:border-white/25 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Mockup Browser Header */}
                <div className="p-5 pb-0">
                  <div className="rounded-2xl bg-[#0E0919] p-4 text-white relative overflow-hidden border border-white/10">
                    {/* Glowing corner gradient */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 opacity-30 blur-2xl rounded-full"
                      style={{ backgroundColor: project.color }}
                    />

                    {/* Browser Dots & Domain Bar */}
                    <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-white/80 max-w-[200px] truncate">
                        <Globe size={11} className="text-white/60 shrink-0" />
                        <span className="truncate">{project.url.replace(/^https?:\/\//, '')}</span>
                      </div>
                    </div>

                    {/* Project Header Info Inside Frame */}
                    <div className="space-y-1 relative z-10">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.category}
                        </span>
                        {project.pagesCount && (
                          <span className="text-[10px] text-white/60 font-semibold">
                            {project.pagesCount}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-black text-white tracking-tight pt-1 group-hover:text-[#FF7AC6] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-white/60 font-medium">
                        {project.industry}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs text-white/70 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[10px] font-black uppercase tracking-wider text-white/40">
                        Engineered Capabilities:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-white/80 font-medium">
                            <CheckCircle2 size={13} className="text-[#25D366] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="flex gap-2">
                      {/* Live Website Link */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] hover:from-[#FF7AC6] hover:to-[#FF2E9A] text-white py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#FF2E9A]/20 cursor-pointer"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink size={14} />
                      </a>

                      {/* Preview Modal Trigger */}
                      <button
                        type="button"
                        onClick={() => setSelectedPreview(project)}
                        className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                        title="Quick View Details"
                      >
                        <Eye size={16} />
                      </button>
                    </div>

                    {/* WhatsApp Inquire For Similar Project */}
                    <a
                      href={getWhatsAppProjectInquiryUrl(project)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <WhatsAppIcon size={14} className="text-current" />
                      <span>Get Similar Website (WhatsApp)</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="bg-white/[0.035] backdrop-blur-2xl rounded-3xl p-12 text-center border border-white/10 max-w-lg mx-auto space-y-4">
            <Globe size={40} className="text-white/20 mx-auto" />
            <h3 className="text-xl font-black text-white">No Projects Found</h3>
            <p className="text-xs text-white/60">
              No websites matched your filter criteria "{searchQuery}". Try selecting another category or resetting the search.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:scale-105 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner for High-Speed Website Inquiries */}
        <div className="mt-20 p-8 sm:p-14 rounded-[40px] bg-gradient-to-tr from-[#160B24] via-[#0E0919] to-[#07050C] text-white relative overflow-hidden border border-white/15 shadow-2xl backdrop-blur-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF2E9A]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#25D366]/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold">
              <Sparkles size={14} className="text-[#FF2E9A]" /> Ready for Your Next Project?
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Let's Build Your High-Velocity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#FF7AC6] to-[#25D366]">
                Website or Sales Funnel Today.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal max-w-xl">
              Get an instant architecture blueprint, SEO audit, and milestone timeline. Connect directly with our lead team on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I want to start a new website project. Let us discuss.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd5d] text-white px-8 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-[#25D366]/30 hover:scale-105 transition-all cursor-pointer"
              >
                <WhatsAppIcon size={18} className="text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Fill Inquiry Form</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Details Modal */}
      <AnimatePresence>
        {selectedPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0E0919] text-white rounded-[32px] max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-white/20 relative overflow-hidden backdrop-blur-2xl"
            >
              <button
                onClick={() => setSelectedPreview(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <span
                    className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white inline-block"
                    style={{ backgroundColor: selectedPreview.color }}
                  >
                    {selectedPreview.category}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">{selectedPreview.title}</h3>
                  <div className="text-xs text-white/50 font-medium">{selectedPreview.industry}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-white">Live Destination:</div>
                  <a
                    href={selectedPreview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#06B6D4] hover:underline font-mono flex items-center gap-1.5 break-all"
                  >
                    <span>{selectedPreview.url}</span>
                    <ExternalLink size={12} className="shrink-0" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {selectedPreview.description}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-black uppercase tracking-wider text-white">Key Specifications:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80">
                    {selectedPreview.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 size={14} className="text-[#25D366] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedPreview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all cursor-pointer"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={getWhatsAppProjectInquiryUrl(selectedPreview)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1ebd5d] transition-all shadow-md shadow-[#25D366]/20 cursor-pointer"
                  >
                    <WhatsAppIcon size={14} className="text-white" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWorksPage;
