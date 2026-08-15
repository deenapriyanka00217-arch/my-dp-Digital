import { motion } from 'framer-motion';
import { 
  Zap, 
  Briefcase, 
  Layers, 
  ShoppingCart, 
  Globe, 
  GraduationCap, 
  Search, 
  Megaphone, 
  ArrowRight, 
  Sparkles,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { Card3DTilt } from './Card3DTilt';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '1',
    title: 'Single Page Fast Sites',
    category: 'Rapid Launch',
    description: 'High-speed, responsive single-page platforms engineered with smooth scrolling, direct WhatsApp CTA integration, and frictionless lead forms.',
    icon: Zap,
    tag: '3-5 Days Launch',
    color: '#06B6D4',
    features: ['Instant WhatsApp Integration', 'Sub-second Load Times', 'Conversion Hero Layout'],
  },
  {
    id: '2',
    title: 'Multi-Page Business Portals',
    category: 'Corporate Authority',
    description: 'Authority business websites structured to convert enterprise clients, establish topical dominance, and rank high on Google search.',
    icon: Briefcase,
    tag: 'Authority Grade',
    color: '#3B82F6',
    features: ['Semantic On-Page SEO', 'Dynamic Case Studies', 'Enterprise Quote Funnel'],
  },
  {
    id: '3',
    title: 'Custom Scaled 20+ Pages',
    category: 'Enterprise Scale',
    description: 'Extensive web architectures with deep keyword silos, programmatic location hubs, custom filters, and advanced schema markup.',
    icon: Layers,
    tag: 'Enterprise Scaled',
    color: '#FF2E9A',
    features: ['Programmatic SEO Silos', 'Deep Directory Logic', '20+ Custom Coded Layouts'],
  },
  {
    id: '4',
    title: 'E-Commerce & Storefronts',
    category: 'Product Selling',
    description: 'High-converting online shops with Razorpay/Stripe checkout, catalog filters, automated WhatsApp order alerts, and inventory sync.',
    icon: ShoppingCart,
    tag: 'Transactional',
    color: '#10B981',
    features: ['UPI & Card Gateways', 'One-Click WhatsApp Alert', 'Abandoned Cart Automation'],
  },
  {
    id: '5',
    title: 'Sales Landing & Funnel Engines',
    category: 'Webinar & Automation',
    description: 'Direct-response sales engines with countdown urgency triggers, video embeds, automated CRM webhooks, and webinar workflows.',
    icon: Globe,
    tag: 'Max Conversion',
    color: '#F97316',
    features: ['Direct-Response Copy', 'CRM Lead Webhook Sync', 'Webinar Lead Pipelines'],
  },
  {
    id: '6',
    title: 'LMS Course Management',
    category: 'EdTech Academy',
    description: 'Complete student learning environments featuring locked curriculum modules, DRM protected video player, student dashboard & auto-certificates.',
    icon: GraduationCap,
    tag: 'EdTech Scalable',
    color: '#A855F7',
    features: ['DRM Video Protection', 'Automated Certificates', 'Student Progress Analytics'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#07050C] text-white relative overflow-hidden w-full border-t border-white/10">
      {/* Background Ambient Colored Glow Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#FF2E9A]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-[#06B6D4]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl text-white text-xs font-bold">
              <Sparkles size={14} className="text-[#FF2E9A]" /> Specialized Capabilities & Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Engineered For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#06B6D4]">High-Impact Growth</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg font-normal">
              We fuse cutting-edge UI design, sub-second speeds, and autonomous revenue pipelines to turn clicks into paying clients.
            </p>
          </div>

          <Link
            to="/services"
            className="self-start md:self-auto px-8 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-xl backdrop-blur-xl"
          >
            <span>Explore All 9 Capabilities</span>
            <ArrowRight size={14} className="text-[#FF2E9A]" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card3DTilt key={service.id} maxTilt={8} depth={20} className="h-full">
                <div className="h-full p-8 rounded-[36px] bg-white/[0.035] backdrop-blur-2xl border border-white/10 flex flex-col justify-between group hover:border-white/30 transition-all duration-300 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                  {/* Distinct Colored Ambient Glow */}
                  <div
                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[60px] opacity-20 group-hover:opacity-60 transition-opacity pointer-events-none"
                    style={{ backgroundColor: service.color }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-all group-hover:scale-110"
                        style={{
                          backgroundColor: `${service.color}20`,
                          border: `1px solid ${service.color}50`,
                          color: service.color,
                        }}
                      >
                        <Icon size={26} />
                      </div>
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border shadow-sm backdrop-blur-md"
                        style={{
                          backgroundColor: `${service.color}15`,
                          borderColor: `${service.color}40`,
                          color: service.color,
                        }}
                      >
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                      {service.title}
                    </h3>

                    <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: service.color }}>
                      {service.category}
                    </div>

                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-white/90">
                          <CheckCircle2 size={13} style={{ color: service.color }} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 font-bold text-xs text-white/80 hover:text-white transition-colors"
                    >
                      <span>Explore Specs</span>
                      <ArrowRight size={13} style={{ color: service.color }} />
                    </Link>

                    <a
                      href={`https://wa.me/918148320217?text=${encodeURIComponent(`Hi DP Digital, I am interested in ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1"
                    >
                      <MessageCircle size={13} fill="#25D366" />
                      <span>Quote</span>
                    </a>
                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
