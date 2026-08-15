import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../components/StickyWhatsApp';
import { BannerServicesForm } from '../components/BannerServicesForm';

const WHATSAPP_PHONE = '918148320217';

const ContactPage = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full">
      {/* Subtle ambient glows */}
      <div className="absolute top-[10%] right-[-5%] w-[35vw] h-[35vw] bg-[#FF2E9A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] bg-[#B026FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1240px] mx-auto relative z-10">
        {/* Compact Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-wider">
            <Sparkles size={12} className="text-[#FF2E9A]" />
            <span>Fast Consultation & Quote Desk</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#0073AA]">Project</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/70 font-normal">
            Choose your required service, share your details, and get an instant quotation and project roadmap.
          </p>
        </div>

        {/* 2-Column Responsive Layout for Laptop and Desktop */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Direct Agency Channels & Guarantees */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct WhatsApp Callout Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#25D366]/15 via-white/[0.03] to-white/[0.01] border border-[#25D366]/30 backdrop-blur-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-[#25D366]/30 shrink-0">
                  <WhatsAppIcon size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#25D366]">Direct WhatsApp Desk</div>
                  <div className="text-sm font-bold text-white">+91 81483 20217</div>
                </div>
              </div>
              <p className="text-xs text-white/70">
                Need an immediate answer or custom estimate? Chat with our team in real-time.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I want to consult about a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
              >
                <WhatsAppIcon size={16} className="text-white" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            {/* Email & Location Mini Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.035] border border-white/10 flex items-center gap-3 backdrop-blur-xl">
                <div className="w-9 h-9 rounded-xl bg-[#FF2E9A]/20 border border-[#FF2E9A]/30 flex items-center justify-center text-[#FF2E9A] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">Email</div>
                  <div className="text-xs font-semibold text-white truncate">growth@mydpdigital.in</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.035] border border-white/10 flex items-center gap-3 backdrop-blur-xl">
                <div className="w-9 h-9 rounded-xl bg-[#0073AA]/20 border border-[#0073AA]/30 flex items-center justify-center text-[#0073AA] shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">Office Location</div>
                  <div className="text-xs font-semibold text-white">Anna Salai, Chennai, TN</div>
                </div>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                <Clock size={14} className="text-[#FF7AC6]" />
                <span>3–7 Days Standard Project Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                <ShieldCheck size={14} className="text-[#10B981]" />
                <span>100% Free Consultation & Transparent Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Homepage Quote Form */}
          <div className="lg:col-span-7">
            <BannerServicesForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
