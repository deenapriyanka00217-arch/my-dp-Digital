import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Globe, 
  Layers, 
  Zap, 
  Briefcase, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Code,
  TrendingUp,
  Cpu,
  Search,
  ShoppingCart,
  Youtube
} from 'lucide-react';
import { WhatsAppIcon } from './StickyWhatsApp';
import { trackAnalyticsEvent } from '../utils/analytics';

const WHATSAPP_PHONE = '918148320217';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  timeline: string;
  color: string;
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'wordpress-dev',
    name: 'WordPress Website Development',
    category: 'Specialist Custom Theme, Speed & SEO',
    icon: Globe,
    timeline: '3 - 7 Days',
    color: '#0073AA',
  },
  {
    id: 'single-page',
    name: 'Single Page Website',
    category: 'Fast Launch & High Conversion',
    icon: Zap,
    timeline: '3 - 5 Days',
    color: '#06B6D4',
  },
  {
    id: 'business-site',
    name: 'Business Website',
    category: 'Corporate & Multi-Page Portals',
    icon: Briefcase,
    timeline: '5 - 10 Days',
    color: '#2563EB',
  },
  {
    id: 'custom-web-app',
    name: 'Custom Website & App Development',
    category: 'React, Node, 20+ Pages & Scalable Apps',
    icon: Code,
    timeline: '10 - 18 Days',
    color: '#FF2E9A',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Online Store',
    category: 'WooCommerce, Shopify & Payment Setup',
    icon: ShoppingCart,
    timeline: '7 - 12 Days',
    color: '#DC2626',
  },
  {
    id: 'automation-crm',
    name: 'Business & Workflow Automation',
    category: 'WhatsApp, CRM & Funnel Automations',
    icon: Cpu,
    timeline: '3 - 7 Days',
    color: '#10B981',
  },
  {
    id: 'performance-ads',
    name: 'Digital Marketing (FB, Google & Sales Ads)',
    category: 'Performance Ads, YouTube & ROI Growth',
    icon: TrendingUp,
    timeline: 'Live in 48h',
    color: '#F59E0B',
  },
  {
    id: 'seo-services',
    name: 'SEO: On-Page & Off-Page Ranking',
    category: 'Search Engine Rank, Backlinks & Audit',
    icon: Search,
    timeline: 'Continuous Growth',
    color: '#8B5CF6',
  },
  {
    id: 'youtube-management',
    name: 'YouTube Video & Channel Mgmt',
    category: 'Full-Stack Editing, Thumbnails & SEO',
    icon: Youtube,
    timeline: '48h Per Video',
    color: '#EF4444',
  },
  {
    id: 'other-service',
    name: 'Other Custom Development',
    category: 'Tailored Digital Solutions & Consulting',
    icon: Layers,
    timeline: 'Custom',
    color: '#6B7280',
  },
];

export const BannerServicesForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessArea, setBusinessArea] = useState('');
  const [selectedService, setSelectedService] = useState<string>('wordpress-dev');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailSubmissionStatus, setEmailSubmissionStatus] = useState<'sent' | 'failed' | null>(null);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  const activeService = ALL_SERVICES.find((s) => s.id === selectedService) || ALL_SERVICES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your Name and Mobile Number.');
      return;
    }

    const normalizedPhone = phone.replace(/\D/g, '');
    if (!/^(?:91)?[6-9]\d{9}$/.test(normalizedPhone)) {
      alert('Please enter a valid 10-digit Indian mobile number, with or without +91.');
      return;
    }

    const message = `*New Service Inquiry from Website*
-----------------------------------
*Client Name:* ${name.trim()}
*Mobile / WhatsApp:* ${phone.trim()}
*Business / Website:* ${businessName.trim() || 'Not provided'}
*Business Location:* ${businessArea.trim() || 'Not provided'}
*Required Service:* ${activeService.name}
*Category:* ${activeService.category}
*Estimated Timeline:* ${activeService.timeline}
*Notes / Specifics:* ${note.trim() || 'Standard Inquiry'}
-----------------------------------
_Sent via My DP Digital Fast Desk_`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    setSubmittedWhatsAppUrl(whatsappUrl);

    // Open WhatsApp synchronously during the submit click. Opening it only
    // after the email request completes can be blocked by browser popup protection.
    const whatsappWindow = window.open(whatsappUrl, '_blank');
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      trackAnalyticsEvent('whatsapp_click', {
        contact_method: 'whatsapp',
        cta_location: 'service_inquiry_form',
        service_name: activeService.name,
        page_path: window.location.pathname,
      });
    }
    // If the popup is blocked, the visible fallback link is the actual
    // WhatsApp click and is tracked by the site-wide anchor listener.

    setIsSending(true);
    setEmailSubmissionStatus(null);
    let emailAccepted = false;

    try {
      const response = await fetch('https://formsubmit.co/ajax/deenapriyanka00217@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Lead: ${name.trim()} - ${activeService.name}`,
          name: name.trim(),
          phone: phone.trim(),
          business_name: businessName.trim(),
          business_area: businessArea.trim(),
          service: activeService.name,
          category: activeService.category,
          timeline: activeService.timeline,
          notes: note.trim() || 'Standard Inquiry',
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        let submissionAccepted = true;
        try {
          const result: unknown = await response.json();
          if (typeof result === 'object' && result !== null && 'success' in result) {
            const success = (result as { success?: unknown }).success;
            submissionAccepted = success === true || success === 'true';
          }
        } catch {
          // Some FormSubmit responses may not include a JSON body; HTTP success is the fallback.
        }

        if (submissionAccepted) {
          emailAccepted = true;
          trackAnalyticsEvent('generate_lead', {
            method: 'website_form',
            service_name: activeService.name,
            service_category: activeService.category,
          });
        }
      }

      if (!emailAccepted) {
        console.error('Service inquiry was not confirmed by FormSubmit', response.status);
      }
    } catch (error) {
      console.error('Email submission failed', error);
    }

    setEmailSubmissionStatus(emailAccepted ? 'sent' : 'failed');
    setIsSending(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#0E0919]/95 rounded-3xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-5 sm:p-6 relative overflow-hidden backdrop-blur-2xl text-white">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF2E9A]/15 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#0073AA]/15 blur-[60px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10 relative z-10">
        <div>
          <h3 className="text-base sm:text-lg font-black text-white tracking-tight flex items-center gap-2">
            <span>Get Quick Quote & Strategy</span>
          </h3>
          <p className="text-[11px] text-white/60 font-medium mt-0.5">
            Share your service requirement and business location for a relevant quote
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-[10px] font-bold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>Active</span>
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
            {/* Step 1 & 2: Name and Mobile Number FIRST */}
            <div className="space-y-2.5">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-white/90 block mb-1">
                  1. Your Name <span className="text-[#FF2E9A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] focus:bg-white/[0.1] transition-all font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-white/90 block mb-1">
                  2. Mobile Number (WhatsApp) <span className="text-[#FF2E9A]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 Mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] focus:bg-white/[0.1] transition-all font-medium"
                />
              </div>
            </div>

            {/* Step 3: Service Selection */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-white/90">
                  3. What Service Do You Want? <span className="text-[#FF2E9A]">*</span>
                </label>
                <span className="text-[9px] font-bold text-[#FF7AC6]">{activeService.timeline}</span>
              </div>

              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#140E24] border border-white/20 text-xs text-white focus:outline-none focus:border-[#FF2E9A] transition-all font-semibold cursor-pointer"
              >
                {ALL_SERVICES.map((service) => (
                  <option key={service.id} value={service.id} className="bg-[#140E24] text-white py-1">
                    {service.name} — ({service.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Optional business context helps qualify the enquiry without adding required steps */}
            <div className="grid sm:grid-cols-2 gap-2.5">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                  Business / Website (optional)
                </label>
                <input
                  type="text"
                  placeholder="Business name or website"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] transition-all font-medium"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                  Business Location (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tambaram, Chennai"
                  value={businessArea}
                  onChange={(e) => setBusinessArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] transition-all font-medium"
                />
              </div>
            </div>

            {/* Step 4: Optional Note / Requirement */}
            <div>
              <input
                type="text"
                placeholder="What would you like help with? (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] transition-all font-medium"
              />
            </div>

            {/* Clean, High-Converting Submit Button */}
            <div className="pt-1.5">
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#0073AA] hover:opacity-95 text-white py-3 px-5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-[#FF2E9A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                <WhatsAppIcon size={18} className="text-white" />
                <span>{isSending ? 'Sending enquiry...' : 'Send Enquiry & Open WhatsApp'}</span>
                <ArrowRight size={15} />
              </button>

              <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-[#10B981]" /> 100% Free Consultation
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-[#FF7AC6]" /> Quick Response
                </span>
              </div>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6 text-center space-y-4 relative z-10"
          >
            <div className="w-12 h-12 bg-[#10B981]/20 text-[#10B981] rounded-2xl flex items-center justify-center mx-auto border border-[#10B981]/30">
              <CheckCircle2 size={28} />
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-black text-white">Thank You, {name}!</h4>
              <p className="text-xs text-white/70 max-w-xs mx-auto">
                {emailSubmissionStatus === 'sent'
                  ? <>Your details were submitted for <strong className="text-white">{activeService.name}</strong>. WhatsApp should also be open with your message ready. Tap Send in WhatsApp to complete the direct enquiry.</>
                  : <>We could not confirm the email submission for <strong className="text-white">{activeService.name}</strong>. Please use the button below to send your enquiry directly on WhatsApp.</>}
              </p>
              {submittedWhatsAppUrl && (
                <a
                  href={submittedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 text-xs font-bold shadow-md shadow-[#25D366]/20 transition-all"
                >
                  <WhatsAppIcon size={16} className="text-white" />
                  <span>Open WhatsApp & Send Enquiry</span>
                </a>
              )}
            </div>

            <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-left max-w-xs mx-auto space-y-1">
              <div className="flex justify-between text-white/70">
                <span>Selected Service:</span>
                <span className="font-bold text-white truncate max-w-[160px]">{activeService.name}</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>Contact:</span>
                <span className="font-bold text-[#25D366]">{phone}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all border border-white/10 cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
