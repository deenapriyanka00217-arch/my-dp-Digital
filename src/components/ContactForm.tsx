import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { BannerServicesForm } from './BannerServicesForm';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#07050C] text-white relative overflow-hidden w-full border-t border-white/10">
      {/* Ambient subtle glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#FF2E9A]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#B026FF]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1240px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-wider mb-3">
                <Sparkles size={13} className="text-[#FF2E9A]" /> Direct Fast Desk
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 leading-tight tracking-tight text-white">
                Ready to Grow Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#0073AA]">Digital Presence?</span>
              </h2>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                Share your requirements to receive a direct quotation, scope breakdown, and fast turnaround delivery timeline.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white/[0.035] backdrop-blur-xl border border-white/10 flex items-center gap-3.5 group shadow-sm hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shadow-sm shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-white/40 text-[9px] uppercase font-bold tracking-wider">Call or WhatsApp</div>
                  <a href="https://wa.me/918148320217" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-[#25D366] transition-colors block">
                    +91 81483 20217
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.035] backdrop-blur-xl border border-white/10 flex items-center gap-3.5 group shadow-sm hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FF2E9A]/20 border border-[#FF2E9A]/40 flex items-center justify-center text-[#FF2E9A] shadow-sm shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-white/40 text-[9px] uppercase font-bold tracking-wider">Direct Email</div>
                  <div className="text-sm font-bold text-white">growth@mydpdigital.in</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.035] backdrop-blur-xl border border-white/10 flex items-center gap-3.5 group shadow-sm hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#0073AA]/20 border border-[#0073AA]/40 flex items-center justify-center text-[#0073AA] shadow-sm shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-white/40 text-[9px] uppercase font-bold tracking-wider">Office Location</div>
                  <div className="text-sm font-bold text-white">Anna Salai, Chennai, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <BannerServicesForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
