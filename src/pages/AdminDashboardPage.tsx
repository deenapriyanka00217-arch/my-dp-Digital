import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { 
  Home, 
  Globe, 
  Megaphone, 
  Code, 
  Youtube, 
  Info, 
  Send, 
  Users, 
  Settings, 
  Save, 
  CheckCircle, 
  Trash2, 
  ExternalLink, 
  Phone, 
  Sparkles,
  Briefcase,
  FileText,
  LayoutGrid,
  Zap,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboardPage() {
  const { content, updateContent, leads, updateLeadStatus, deleteLead } = useCms();
  const [activeTab, setActiveTab] = useState<
    'home' | 'revenue' | 'services' | 'seo' | 'paidads' | 'fbads' | 'webdesign' | 'wordpress' | 'branding' | 'youtube' | 'about' | 'works' | 'blog' | 'contact' | 'metaseo' | 'leads' | 'settings'
  >('home');
  const [formData, setFormData] = useState(content);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateContent(formData);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3500);
  };

  const totalLeads = leads.length;

  return (
    <div className="min-h-screen bg-[#07050C] text-white font-sans flex flex-col selection:bg-[#FF2E9A] selection:text-white">
      
      {/* Top Glossy Matte Header */}
      <header className="h-20 bg-[#0A0714]/80 backdrop-blur-xl border-b border-white/10 px-6 flex items-center justify-between shrink-0 sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#1877F2] via-[#FF2E9A] to-[#00F2FE] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#FF2E9A]/30">
            DP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black bg-gradient-to-r from-white via-[#00F2FE] to-[#FF2E9A] bg-clip-text text-transparent">DP Digital Admin Dashboard</h1>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FF2E9A]/20 text-[#FF2E9A] border border-[#FF2E9A]/30 font-bold shadow-sm">100% Editable CMS</span>
            </div>
            <p className="text-[11px] text-white/60">Full Backend Content Management • Edit Homepage, Banners, Metrics, Revenue Velocity, Blogs & All Pages</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/15 hover:bg-white/10 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md"
          >
            <ExternalLink size={14} className="text-[#00F2FE]" />
            <span>View Live Website</span>
          </Link>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#1877F2] via-[#FF2E9A] to-[#00F2FE] hover:opacity-90 text-white font-black text-xs flex items-center gap-1.5 shadow-lg shadow-[#FF2E9A]/30 transition-all cursor-pointer"
          >
            <Save size={14} />
            <span>Save All Changes</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Glossy Matte Sidebar Navigation */}
        <aside className="w-80 bg-[#0A0714]/90 backdrop-blur-xl border-r border-white/10 p-5 space-y-6 overflow-y-auto shrink-0 hidden md:block">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#00F2FE] mb-3 px-3 flex items-center gap-1.5">
              <Sparkles size={12} />
              <span>Homepage & Core Sections</span>
            </div>
            <nav className="space-y-1">
              {[
                { id: 'home', label: '1. Homepage Hero & Metrics', icon: Home },
                { id: 'revenue', label: '2. Revenue Velocity & Steps', icon: Zap },
                { id: 'services', label: '3. Services Index Section', icon: LayoutGrid },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${isActive ? 'bg-gradient-to-r from-[#1877F2]/20 via-[#FF2E9A]/20 to-[#00F2FE]/10 text-white border border-[#FF2E9A]/40 shadow-lg shadow-[#FF2E9A]/20' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                  >
                    <Icon size={16} className={isActive ? 'text-[#00F2FE]' : 'text-white/50'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF2E9A] mb-3 px-3 flex items-center gap-1.5">
              <Sparkles size={12} />
              <span>Website Service Pages</span>
            </div>
            <nav className="space-y-1">
              {[
                { id: 'seo', label: '4. Technical SEO', icon: Globe },
                { id: 'paidads', label: '5. Paid Social Ads', icon: Megaphone },
                { id: 'fbads', label: '6. Facebook & Meta Ads', icon: Megaphone },
                { id: 'webdesign', label: '7. Web Design & UI/UX', icon: Code },
                { id: 'wordpress', label: '8. WordPress & WooCommerce', icon: Code },
                { id: 'branding', label: '9. Content & Branding', icon: FileText },
                { id: 'youtube', label: '10. YouTube Management', icon: Youtube },
                { id: 'about', label: '11. About Us', icon: Info },
                { id: 'works', label: '12. Our Works / Portfolio', icon: Briefcase },
                { id: 'blog', label: '13. Blog & Playbooks', icon: FileText },
                { id: 'contact', label: '14. Contact & Forms', icon: Send },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${isActive ? 'bg-gradient-to-r from-[#1877F2]/20 via-[#FF2E9A]/20 to-[#00F2FE]/10 text-white border border-[#FF2E9A]/40 shadow-lg shadow-[#FF2E9A]/20' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                  >
                    <Icon size={16} className={isActive ? 'text-[#00F2FE]' : 'text-white/50'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF2E9A] mb-3 px-3">System & Leads</div>
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('metaseo')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'metaseo' ? 'bg-[#FF2E9A]/20 text-white border border-[#FF2E9A]/40 shadow-md' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <Globe size={16} className="text-[#FF2E9A]" />
                <span>Global SEO & Pixels</span>
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'leads' ? 'bg-[#FF2E9A]/20 text-white border border-[#FF2E9A]/40 shadow-md' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <Users size={16} className="text-[#00F2FE]" />
                <span>Leads & SMTP Alerts ({totalLeads})</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'settings' ? 'bg-[#FF2E9A]/20 text-white border border-[#FF2E9A]/40 shadow-md' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <Settings size={16} className="text-[#1877F2]" />
                <span>Database & Media Storage</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Glossy Matte Content Area */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#07050C]">
          
          {savedMessage && (
            <div className="mb-6 p-4 rounded-2xl bg-[#FF2E9A]/20 border border-[#FF2E9A]/40 text-white flex items-center gap-3 animate-fade-in shadow-2xl backdrop-blur-xl">
              <CheckCircle size={20} className="text-[#00F2FE]" />
              <span className="text-sm font-extrabold">All website content, banners, blogs, and metrics successfully saved!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="max-w-4xl space-y-8">
            
            {/* 1. HOMEPAGE HERO & METRICS */}
            {activeTab === 'home' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Home size={20} className="text-[#00F2FE]" />
                    <span>1. Homepage Hero Banner & Metrics Strip</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit the primary headline, hero subtitle, badges, CTA buttons, and agency metrics strip.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Hero Main Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.homeHeroHeading}
                      onChange={(e) => setFormData({ ...formData, homeHeroHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#00F2FE]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Hero Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.homeHeroSubheading}
                      onChange={(e) => setFormData({ ...formData, homeHeroSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#00F2FE]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Hero Banner Badge</label>
                      <input
                        type="text"
                        value={formData.homeHeroBadge}
                        onChange={(e) => setFormData({ ...formData, homeHeroBadge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#00F2FE]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Primary CTA Button</label>
                      <input
                        type="text"
                        value={formData.homePrimaryCta}
                        onChange={(e) => setFormData({ ...formData, homePrimaryCta: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#00F2FE]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Secondary CTA Button</label>
                      <input
                        type="text"
                        value={formData.homeSecondaryCta}
                        onChange={(e) => setFormData({ ...formData, homeSecondaryCta: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#00F2FE]"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-sm font-extrabold text-[#00F2FE] mb-3">Agency Metrics Strip (4 Stat Blocks)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-white/70">Metric 1</div>
                        <input
                          type="text"
                          value={formData.metric1Stat}
                          onChange={(e) => setFormData({ ...formData, metric1Stat: e.target.value })}
                          placeholder="Stat e.g. 22+"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={formData.metric1Label}
                          onChange={(e) => setFormData({ ...formData, metric1Label: e.target.value })}
                          placeholder="Label e.g. Websites Built"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-white/70">Metric 2</div>
                        <input
                          type="text"
                          value={formData.metric2Stat}
                          onChange={(e) => setFormData({ ...formData, metric2Stat: e.target.value })}
                          placeholder="Stat e.g. 90+"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={formData.metric2Label}
                          onChange={(e) => setFormData({ ...formData, metric2Label: e.target.value })}
                          placeholder="Label e.g. PageSpeed Score"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-white/70">Metric 3</div>
                        <input
                          type="text"
                          value={formData.metric3Stat}
                          onChange={(e) => setFormData({ ...formData, metric3Stat: e.target.value })}
                          placeholder="Stat e.g. 3-7 Days"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={formData.metric3Label}
                          onChange={(e) => setFormData({ ...formData, metric3Label: e.target.value })}
                          placeholder="Label e.g. Average Delivery"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-white/70">Metric 4</div>
                        <input
                          type="text"
                          value={formData.metric4Stat}
                          onChange={(e) => setFormData({ ...formData, metric4Stat: e.target.value })}
                          placeholder="Stat e.g. 100%"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                        <input
                          type="text"
                          value={formData.metric4Label}
                          onChange={(e) => setFormData({ ...formData, metric4Label: e.target.value })}
                          placeholder="Label e.g. Direct Support"
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. REVENUE VELOCITY & ARCHITECTURE SECTION */}
            {activeTab === 'revenue' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Zap size={20} className="text-[#FF2E9A]" />
                    <span>2. Revenue Velocity & Agency Architecture Section</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit the specialized revenue velocity content, framework titles, and 4-step scaling methodology on the homepage.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Section Badge</label>
                    <input
                      type="text"
                      value={formData.revenueBadge}
                      onChange={(e) => setFormData({ ...formData, revenueBadge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#FF2E9A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Section Heading (H2)</label>
                    <input
                      type="text"
                      value={formData.revenueHeading}
                      onChange={(e) => setFormData({ ...formData, revenueHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#FF2E9A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Section Subheading</label>
                    <textarea
                      rows={2}
                      value={formData.revenueSubheading}
                      onChange={(e) => setFormData({ ...formData, revenueSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#FF2E9A]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Card Title ("Growth, Quantified")</label>
                      <input
                        type="text"
                        value={formData.revenueCardTitle}
                        onChange={(e) => setFormData({ ...formData, revenueCardTitle: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Card Description</label>
                      <textarea
                        rows={2}
                        value={formData.revenueCardDesc}
                        onChange={(e) => setFormData({ ...formData, revenueCardDesc: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <h3 className="text-sm font-extrabold text-[#FF2E9A]">4-Step Acceleration Framework</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-[#FF2E9A]">Step 01</div>
                        <input
                          type="text"
                          value={formData.step1Title}
                          onChange={(e) => setFormData({ ...formData, step1Title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white font-bold"
                        />
                        <textarea
                          rows={2}
                          value={formData.step1Desc}
                          onChange={(e) => setFormData({ ...formData, step1Desc: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-[#FF2E9A]">Step 02</div>
                        <input
                          type="text"
                          value={formData.step2Title}
                          onChange={(e) => setFormData({ ...formData, step2Title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white font-bold"
                        />
                        <textarea
                          rows={2}
                          value={formData.step2Desc}
                          onChange={(e) => setFormData({ ...formData, step2Desc: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-[#FF2E9A]">Step 03</div>
                        <input
                          type="text"
                          value={formData.step3Title}
                          onChange={(e) => setFormData({ ...formData, step3Title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white font-bold"
                        />
                        <textarea
                          rows={2}
                          value={formData.step3Desc}
                          onChange={(e) => setFormData({ ...formData, step3Desc: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-[#FF2E9A]">Step 04</div>
                        <input
                          type="text"
                          value={formData.step4Title}
                          onChange={(e) => setFormData({ ...formData, step4Title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white font-bold"
                        />
                        <textarea
                          rows={2}
                          value={formData.step4Desc}
                          onChange={(e) => setFormData({ ...formData, step4Desc: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/20 text-xs text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SERVICES INDEX SECTION */}
            {activeTab === 'services' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <LayoutGrid size={20} className="text-[#FF2E9A]" />
                    <span>3. Services Index Section</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit headings and body overview for the services section on the homepage and services index page.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Services Section Heading (H2)</label>
                    <input
                      type="text"
                      value={formData.servicesHeading}
                      onChange={(e) => setFormData({ ...formData, servicesHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#FF2E9A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Services Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.servicesSubheading}
                      onChange={(e) => setFormData({ ...formData, servicesSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs focus:outline-none focus:border-[#FF2E9A]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 4. TECHNICAL SEO PAGE */}
            {activeTab === 'seo' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Globe size={20} className="text-[#00F2FE]" />
                    <span>4. Technical SEO Page</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit SEO service banner, body section, and badge.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">SEO Page Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.seoHeading}
                      onChange={(e) => setFormData({ ...formData, seoHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">SEO Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.seoSubheading}
                      onChange={(e) => setFormData({ ...formData, seoSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">SEO Banner Badge</label>
                    <input
                      type="text"
                      value={formData.seoBadge}
                      onChange={(e) => setFormData({ ...formData, seoBadge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 5. PAID SOCIAL ADS PAGE */}
            {activeTab === 'paidads' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Megaphone size={20} className="text-[#1877F2]" />
                    <span>5. Paid Social Ads Page</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit Paid Social Ads page headline, banner section, and body.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Paid Ads Page Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.paidAdsHeading}
                      onChange={(e) => setFormData({ ...formData, paidAdsHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Paid Ads Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.paidAdsSubheading}
                      onChange={(e) => setFormData({ ...formData, paidAdsSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Paid Ads Badge</label>
                    <input
                      type="text"
                      value={formData.paidAdsBadge}
                      onChange={(e) => setFormData({ ...formData, paidAdsBadge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 6. FACEBOOK & META ADS PAGE */}
            {activeTab === 'fbads' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Megaphone size={20} className="text-[#FF2E9A]" />
                    <span>6. Facebook & Meta Ads Section & Banner</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit Facebook Ads banner headline, body text, ROAS guarantee, and management fees.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Facebook Ads Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.fbAdsHeading}
                      onChange={(e) => setFormData({ ...formData, fbAdsHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Facebook Ads Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.fbAdsSubheading}
                      onChange={(e) => setFormData({ ...formData, fbAdsSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Agency Management Fee (₹)</label>
                      <input
                        type="number"
                        value={formData.serviceManagementFee}
                        onChange={(e) => setFormData({ ...formData, serviceManagementFee: Number(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Facebook Ads Badge</label>
                      <input
                        type="text"
                        value={formData.fbAdsBadge}
                        onChange={(e) => setFormData({ ...formData, fbAdsBadge: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. WEB DESIGN & UI/UX PAGE */}
            {activeTab === 'webdesign' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Code size={20} className="text-[#00F2FE]" />
                    <span>7. Web Design & UI/UX Page</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit Web Design banner, body copy, and UI/UX features.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Web Design Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.webDesignHeading}
                      onChange={(e) => setFormData({ ...formData, webDesignHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Web Design Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.webDesignSubheading}
                      onChange={(e) => setFormData({ ...formData, webDesignSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Badge</label>
                    <input
                      type="text"
                      value={formData.webDesignBadge}
                      onChange={(e) => setFormData({ ...formData, webDesignBadge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 8. WORDPRESS & WOOCOMMERCE PAGE */}
            {activeTab === 'wordpress' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Code size={20} className="text-[#21759B]" />
                    <span>8. WordPress & WooCommerce Section & Banner</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit WordPress banner headline, store development body text, and badges.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">WordPress Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.wpHeading}
                      onChange={(e) => setFormData({ ...formData, wpHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">WordPress Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.wpSubheading}
                      onChange={(e) => setFormData({ ...formData, wpSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">WordPress Badge</label>
                    <input
                      type="text"
                      value={formData.wpBadge}
                      onChange={(e) => setFormData({ ...formData, wpBadge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 9. CONTENT & BRANDING PAGE */}
            {activeTab === 'branding' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <FileText size={20} className="text-[#FF2E9A]" />
                    <span>9. Content Marketing & Branding Page</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit branding banner headline, body copy, and social media kits.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Branding Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.brandingHeading}
                      onChange={(e) => setFormData({ ...formData, brandingHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Branding Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.brandingSubheading}
                      onChange={(e) => setFormData({ ...formData, brandingSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Badge</label>
                    <input
                      type="text"
                      value={formData.brandingBadge}
                      onChange={(e) => setFormData({ ...formData, brandingBadge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 10. YOUTUBE MANAGEMENT PAGE */}
            {activeTab === 'youtube' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Youtube size={20} className="text-red-500" />
                    <span>10. YouTube Management & Editing Section & Banner</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit YouTube video editing banner, body copy, retention metrics, and badges.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">YouTube Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.ytHeading}
                      onChange={(e) => setFormData({ ...formData, ytHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">YouTube Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.ytSubheading}
                      onChange={(e) => setFormData({ ...formData, ytSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">YouTube Badge</label>
                    <input
                      type="text"
                      value={formData.ytBadge}
                      onChange={(e) => setFormData({ ...formData, ytBadge: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 11. ABOUT US PAGE */}
            {activeTab === 'about' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Info size={20} className="text-[#00F2FE]" />
                    <span>11. About Us Section & Banner</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit About Us banner headline, agency story, and body paragraphs.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">About Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.aboutHeading}
                      onChange={(e) => setFormData({ ...formData, aboutHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">About Subheading</label>
                    <input
                      type="text"
                      value={formData.aboutSubheading}
                      onChange={(e) => setFormData({ ...formData, aboutSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Agency Story & Mission Body Text</label>
                    <textarea
                      rows={4}
                      value={formData.aboutStory}
                      onChange={(e) => setFormData({ ...formData, aboutStory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 12. OUR WORKS / PORTFOLIO PAGE */}
            {activeTab === 'works' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Briefcase size={20} className="text-[#10B981]" />
                    <span>12. Our Works / Portfolio Section & Banner</span>
                  </h2>
                  <p className="text-xs text-white/60">Edit case studies banner headline and body overview.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Works Page Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.worksHeading}
                      onChange={(e) => setFormData({ ...formData, worksHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Works Subheading Body Text</label>
                    <textarea
                      rows={3}
                      value={formData.worksSubheading}
                      onChange={(e) => setFormData({ ...formData, worksSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 13. BLOG & INSIGHTS PAGE & POSTS */}
            {activeTab === 'blog' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">
                      <FileText size={20} className="text-[#00F2FE]" />
                      <span>13. Blog & Playbooks Section (Every Blog Editable)</span>
                    </h2>
                    <p className="text-xs text-white/60">Edit blog section headers and every individual blog article title, excerpt, and content.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const newBlog = {
                        id: `blog-${Date.now()}`,
                        title: 'New Growth Playbook Title',
                        excerpt: 'Write a short excerpt of the blog post here...',
                        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                        readTime: '5 min read',
                        category: 'Strategy',
                        content: 'Write the full detailed blog article content here...'
                      };
                      setFormData({ ...formData, blogPosts: [newBlog, ...formData.blogPosts] });
                    }}
                    className="px-3 py-2 rounded-xl bg-[#00F2FE]/20 text-[#00F2FE] border border-[#00F2FE]/30 text-xs font-bold flex items-center gap-1 hover:bg-[#00F2FE]/30 transition-all cursor-pointer"
                  >
                    <Plus size={14} /> Add New Blog Post
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Blog Section Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.blogHeading}
                      onChange={(e) => setFormData({ ...formData, blogHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Blog Section Subheading</label>
                    <textarea
                      rows={2}
                      value={formData.blogSubheading}
                      onChange={(e) => setFormData({ ...formData, blogSubheading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <h3 className="text-sm font-extrabold text-[#00F2FE]">Individual Blog Articles ({formData.blogPosts.length})</h3>
                    {formData.blogPosts.map((post, idx) => (
                      <div key={post.id} className="p-5 rounded-2xl bg-black/50 border border-white/15 space-y-3 relative group">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#00F2FE]/20 text-[#00F2FE] font-bold">Blog #{idx + 1}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updated = formData.blogPosts.filter(p => p.id !== post.id);
                              setFormData({ ...formData, blogPosts: updated });
                            }}
                            className="text-red-400 hover:text-red-300 p-1 rounded-lg hover:bg-red-500/10 transition-colors cursor-pointer"
                            title="Delete Blog"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="sm:col-span-2">
                            <label className="block text-[10px] font-bold text-white/70 mb-1">Blog Title</label>
                            <input
                              type="text"
                              value={post.title}
                              onChange={(e) => {
                                const updated = [...formData.blogPosts];
                                updated[idx].title = e.target.value;
                                setFormData({ ...formData, blogPosts: updated });
                              }}
                              className="w-full px-3 py-2 rounded-lg bg-black/70 border border-white/20 text-xs text-white font-bold"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-white/70 mb-1">Category</label>
                            <input
                              type="text"
                              value={post.category}
                              onChange={(e) => {
                                const updated = [...formData.blogPosts];
                                updated[idx].category = e.target.value;
                                setFormData({ ...formData, blogPosts: updated });
                              }}
                              className="w-full px-3 py-2 rounded-lg bg-black/70 border border-white/20 text-xs text-white"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-bold text-white/70 mb-1">Date</label>
                            <input
                              type="text"
                              value={post.date}
                              onChange={(e) => {
                                const updated = [...formData.blogPosts];
                                updated[idx].date = e.target.value;
                                setFormData({ ...formData, blogPosts: updated });
                              }}
                              className="w-full px-3 py-2 rounded-lg bg-black/70 border border-white/20 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-white/70 mb-1">Read Time</label>
                            <input
                              type="text"
                              value={post.readTime}
                              onChange={(e) => {
                                const updated = [...formData.blogPosts];
                                updated[idx].readTime = e.target.value;
                                setFormData({ ...formData, blogPosts: updated });
                              }}
                              className="w-full px-3 py-2 rounded-lg bg-black/70 border border-white/20 text-xs text-white"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-white/70 mb-1">Short Excerpt</label>
                          <textarea
                            rows={2}
                            value={post.excerpt}
                            onChange={(e) => {
                              const updated = [...formData.blogPosts];
                              updated[idx].excerpt = e.target.value;
                              setFormData({ ...formData, blogPosts: updated });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-black/70 border border-white/20 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-white/70 mb-1">Featured Image URL (Unsplash / Direct Image Link)</label>
                          <input
                            type="text"
                            value={post.imageUrl || ''}
                            placeholder="https://images.unsplash.com/photo-..."
                            onChange={(e) => {
                              const updated = [...formData.blogPosts];
                              updated[idx].imageUrl = e.target.value;
                              setFormData({ ...formData, blogPosts: updated });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-black/70 border border-white/20 text-xs text-[#00F2FE] font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-white/70 mb-1">Full Article Content</label>
                          <textarea
                            rows={3}
                            value={post.content}
                            onChange={(e) => {
                              const updated = [...formData.blogPosts];
                              updated[idx].content = e.target.value;
                              setFormData({ ...formData, blogPosts: updated });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-black/70 border border-white/20 text-xs text-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 14. CONTACT & FORM */}
            {activeTab === 'contact' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Send size={20} className="text-[#10B981]" />
                    <span>14. Contact & Form Page</span>
                  </h2>
                  <p className="text-xs text-white/60">Update contact numbers, WhatsApp numbers, email, address, and form titles.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Contact Page Heading (H1)</label>
                    <input
                      type="text"
                      value={formData.contactHeading}
                      onChange={(e) => setFormData({ ...formData, contactHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Contact Form Heading Title</label>
                    <input
                      type="text"
                      value={formData.contactFormHeading}
                      onChange={(e) => setFormData({ ...formData, contactFormHeading: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Phone Number</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">WhatsApp Number</label>
                      <input
                        type="text"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Email</label>
                      <input
                        type="text"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Office Address</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GLOBAL SEO & PIXELS */}
            {activeTab === 'metaseo' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Globe size={20} className="text-[#FF2E9A]" />
                    <span>Global SEO & Meta Pixels</span>
                  </h2>
                  <p className="text-xs text-white/60">Configure global title tags, meta descriptions, and Facebook Pixel IDs.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Global Meta Title Tag</label>
                    <input
                      type="text"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Meta Description</label>
                    <textarea
                      rows={2}
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Meta Keywords</label>
                    <input
                      type="text"
                      value={formData.metaKeywords}
                      onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Facebook / Meta Pixel ID & CAPI Token</label>
                    <input
                      type="text"
                      value={formData.fbPixelId}
                      onChange={(e) => setFormData({ ...formData, fbPixelId: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-xs font-mono text-[#00F2FE]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* LEADS & SMTP */}
            {activeTab === 'leads' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Users size={20} className="text-[#00F2FE]" />
                    <span>Leads & SMTP Email Center</span>
                  </h2>
                  <p className="text-xs text-white/60">Incoming customer inquiries with automated SMTP email status tracking.</p>
                </div>
                <div className="space-y-3">
                  {leads.length === 0 ? (
                    <p className="text-xs text-white/50 py-12 text-center">No leads recorded yet.</p>
                  ) : (
                    leads.map((lead) => (
                      <div key={lead.id} className="p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">{lead.name}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF2E9A]/20 text-[#FF2E9A] border border-[#FF2E9A]/30 font-bold">{lead.service}</span>
                            <span className="text-[10px] text-white/40">{new Date(lead.timestamp).toLocaleDateString()}</span>
                          </div>
                          <div className="text-xs text-white/80 font-mono flex items-center gap-2">
                            <Phone size={12} className="text-[#00F2FE]" /> {lead.phone}
                          </div>
                          <p className="text-xs text-white/70 italic bg-black/40 p-2 rounded-lg mt-1">"{lead.message}"</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                            className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/20 text-xs text-white font-bold cursor-pointer"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed</option>
                          </select>
                          <button
                            type="button"
                            onClick={() => deleteLead(lead.id)}
                            className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* SETTINGS */}
            {activeTab === 'settings' && (
              <div className="space-y-6 bg-[#0E0B1A]/80 backdrop-blur-2xl border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-[#FF2E9A]/5">
                <div className="border-b border-white/10 pb-4">
                  <h2 className="text-lg font-black text-white flex items-center gap-2">
                    <Settings size={20} className="text-[#1877F2]" />
                    <span>Database & Media Storage Settings</span>
                  </h2>
                  <p className="text-xs text-white/60">Persistent local storage and cloud database sync configurations.</p>
                </div>
                <div className="p-5 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span>LocalStorage Persistence Active</span>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    All website edits, blog posts, metrics, revenue velocity text, and incoming leads are automatically synchronized to browser LocalStorage and rendered in real-time across all pages.
                  </p>
                </div>
              </div>
            )}

            {/* Save Button Bar */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#1877F2] via-[#FF2E9A] to-[#00F2FE] hover:opacity-90 text-white font-black text-sm flex items-center gap-2 shadow-xl shadow-[#FF2E9A]/30 transition-all cursor-pointer"
              >
                <Save size={18} />
                <span>Save All Changes to Website</span>
              </button>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}
