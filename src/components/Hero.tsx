import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BannerServicesForm } from './BannerServicesForm';
import { useCms } from '../context/CmsContext';

const Hero: React.FC = () => {
  const { content } = useCms();

  return (
    <section className="relative flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#07050C] text-white w-full">
      {/* Floating Blurred Gradient Glass Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[38vw] h-[38vw] bg-[#FF2E9A]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] bg-[#0073AA]/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[35%] left-[25%] w-[25vw] h-[25vw] bg-[#10B981]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 max-w-[1540px] mx-auto relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Value Proposition */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-4 sm:space-y-5"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2E9A]/15 border border-[#FF2E9A]/30 text-[#FF7AC6] text-xs font-bold shadow-sm">
            <span>{content.homeHeroBadge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.12] tracking-tight">
            {content.homeHeroHeading}
          </h1>

          {/* Value proposition paragraph */}
          <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed font-normal">
            {content.homeHeroSubheading}
          </p>

          {/* Service Link Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Link
              to="/services/facebook-ads"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#00F2FE] hover:bg-[#1877F2]/25 text-xs font-bold transition-all"
            >
              <span>Facebook & Meta Ads</span>
              <ArrowRight size={12} />
            </Link>
            <Link
              to="/wordpress-development"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0073AA]/15 border border-[#0073AA]/30 text-[#0073AA] hover:bg-[#0073AA]/25 text-xs font-bold transition-all"
            >
              <span>WordPress Specialist</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/our-works"
              className="bg-white hover:bg-white/90 text-[#0A0710] px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{content.homePrimaryCta}</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Clean Metric Badges */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-white">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">{content.metric1Stat}</div>
              <div className="text-[9px] text-white/50 font-bold uppercase tracking-wider mt-0.5">
                {content.metric1Label}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-black text-[#FF2E9A] tracking-tight">{content.metric2Stat}</div>
              <div className="text-[9px] text-white/50 font-bold uppercase tracking-wider mt-0.5">
                {content.metric2Label}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-black text-[#10B981] tracking-tight">{content.metric3Stat}</div>
              <div className="text-[9px] text-white/50 font-bold uppercase tracking-wider mt-0.5">
                {content.metric3Label}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean, Compact Quote Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 flex flex-col justify-center items-center relative w-full"
        >
          <div className="w-full max-w-lg">
            <BannerServicesForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
