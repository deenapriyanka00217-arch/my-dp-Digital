import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const WHATSAPP_PHONE = '918148320217';

// Authentic Official WhatsApp SVG Icon
export const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const StickyWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: '🚀 Get Quote for Website', text: 'Hi DP Digital, I need a quote for a new website. Can you share packages and pricing?' },
    { label: '🌐 WordPress Website Development', text: 'Hi DP Digital, I want to build a custom WordPress website with high speed and SEO.' },
    { label: '🏢 Business / 20+ Page Custom Site', text: 'Hi DP Digital, I want to build a comprehensive Business / 20+ Page Custom Website. Let us discuss.' },
    { label: '🤖 Business & Lead Automation', text: 'Hi DP Digital, I am interested in Workflow & CRM Automation for my business.' },
    { label: '📈 Digital Marketing & Ads', text: 'Hi DP Digital, I want to run Meta / Google / Performance Ads and SEO for my brand.' },
    { label: '🛒 E-Commerce Product Store', text: 'Hi DP Digital, I need an E-commerce product selling website with payment gateway and WhatsApp checkout.' },
    { label: '🎬 YouTube Video & Channel Mgmt', text: 'Hi DP Digital, I want to discuss YouTube video editing, thumbnail design, and channel growth.' },
  ];

  const getWhatsAppUrl = (customText?: string) => {
    const defaultText = 'Hi DP Digital, I am interested in your Web Design, WordPress & Automation services. Please share details.';
    const text = encodeURIComponent(customText || defaultText);
    return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-auto max-w-[calc(100vw-32px)]">
      {/* Interactive Expandable WhatsApp Quick Chat Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-4 w-[calc(100vw-32px)] max-w-[360px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-black/10 overflow-hidden text-[#0A0710]"
          >
            {/* Popover Header */}
            <div className="bg-[#25D366] p-4 text-white relative shadow-sm">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 text-white/80 hover:text-white p-1 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat popup"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-md">
                    <WhatsAppIcon size={22} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-white border-2 border-[#25D366] rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight leading-none text-white">DP Digital Live Desk</h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span className="text-[10px] font-medium text-white/90">Online Now • Instant WhatsApp Reply</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Body & Quick Starters */}
            <div className="p-4 space-y-3.5 bg-[#F8F9FA]">
              <div className="bg-white p-3 rounded-xl border border-black/5 shadow-sm space-y-0.5">
                <p className="text-xs text-[#0A0710]/80 font-medium leading-relaxed">
                  👋 Hello! Welcome to <strong className="text-[#0A0710]">My DP Digital</strong>.
                </p>
                <p className="text-[10px] text-[#0A0710]/50">Tap any quick topic below to start chatting directly on WhatsApp:</p>
              </div>

              {/* Quick Template Chips */}
              <div className="space-y-1.5">
                <div className="text-[9px] uppercase font-bold text-[#0A0710]/40 tracking-wider">Choose a Topic:</div>
                <div className="flex flex-col gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {quickMessages.map((item, idx) => (
                    <a
                      key={idx}
                      href={getWhatsAppUrl(item.text)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-2 rounded-lg bg-white border border-black/5 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all text-[11px] font-semibold text-[#0A0710]/80 hover:text-[#0A0710]"
                    >
                      <span className="truncate">{item.label}</span>
                      <ArrowRight size={12} className="text-[#0A0710]/30 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <WhatsAppIcon size={16} className="text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Sticky WhatsApp Button */}
      <div className="relative group">
        {/* Pulsing Emerald Aura Waves */}
        <span className="absolute -inset-1 bg-[#25D366]/40 rounded-full blur-md group-hover:bg-[#25D366]/60 transition-all animate-pulse" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="sticky-whatsapp-button"
          aria-label="Chat on WhatsApp"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] border-2 border-white/50 hover:scale-105 active:scale-95 transition-all duration-300 group-hover:shadow-[0_12px_35px_rgba(37,211,102,0.65)] cursor-pointer"
        >
          <WhatsAppIcon size={28} className="text-white" />
          
          {/* Notification Badge */}
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FF2E9A] text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-md">
            1
          </span>
        </button>
      </div>
    </div>
  );
};
