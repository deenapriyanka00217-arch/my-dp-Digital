import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  Home,
  Layers,
  FolderGit2,
  Users,
  BookOpen,
  Mail,
  ChevronRight,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Youtube,
  Globe,
  Megaphone,
  LayoutDashboard,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WhatsAppIcon } from './StickyWhatsApp';

const WHATSAPP_PHONE = '918148320217';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change & manage body scroll lock
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Layers },
    { name: 'Facebook Ads', path: '/services/facebook-ads', icon: Megaphone },
    { name: 'WordPress', path: '/wordpress-development', icon: Globe },
    { name: 'YouTube', path: '/youtube-management', icon: Youtube },
    { name: 'Our Works', path: '/our-works', icon: FolderGit2 },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      <header
        id="main-sticky-header"
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 bg-[#07050C]/80 backdrop-blur-2xl border-b border-white/10 ${
          scrolled
            ? 'py-2.5 sm:py-3 shadow-[0_12px_35px_rgba(0,0,0,0.8)] bg-[#07050C]/90'
            : 'py-3.5 sm:py-4 shadow-[0_6px_25px_rgba(0,0,0,0.4)]'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#FF2E9A] via-[#B026FF] to-[#0A0710] flex items-center justify-center rounded-xl shadow-lg shadow-[#FF2E9A]/25 border border-white/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xl tracking-tighter">DP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white leading-none">
                My DP <span className="text-[#FF2E9A]">Digital</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-white/50 mt-1 uppercase tracking-wider">
                Web Design & Growth Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path === '/our-works' && location.pathname === '/portfolio');
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-[#0A0710] font-black shadow-md shadow-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] hover:from-[#FF7AC6] hover:to-[#FF2E9A] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:scale-105 shadow-md shadow-[#FF2E9A]/20 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Get Quote</span>
              <Sparkles size={13} className="text-white" />
            </Link>
          </nav>

          {/* Mobile Toggle & Quick Action */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I need a consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] active:scale-95 transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={16} className="text-[#25D366]" />
              <span className="text-[11px]">Chat</span>
            </a>

            <button
              id="mobile-menu-toggle"
              aria-label="Open Navigation Menu"
              className="text-white p-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/20 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={18} />
              <span className="text-[11px] font-bold">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= COMPACT SLIDING MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Left Compact Sliding Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              className="relative w-[78vw] max-w-[290px] h-full bg-[#0B0715] text-white border-r border-white/15 shadow-2xl flex flex-col justify-between overflow-hidden z-10"
            >
              {/* Drawer Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#FF2E9A] via-[#B026FF] to-[#0A0710] flex items-center justify-center rounded-lg shadow-md border border-white/20">
                    <span className="text-white font-black text-sm">DP</span>
                  </div>
                  <div>
                    <div className="text-xs font-black text-white leading-tight">
                      My DP <span className="text-[#FF2E9A]">Digital</span>
                    </div>
                    <div className="text-[8px] text-white/50 font-semibold">
                      Agency Hub
                    </div>
                  </div>
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close menu drawer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Compact Scrollable Navigation Items - Single Line Text */}
              <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-none">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive =
                    location.pathname === link.path ||
                    (link.path === '/our-works' && location.pathname === '/portfolio');

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`w-full px-3 py-2.5 rounded-xl flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-black shadow-md shadow-[#FF2E9A]/20'
                          : 'bg-white/[0.03] text-white/80 hover:bg-white/[0.08] hover:text-white border border-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={15} className={isActive ? 'text-white' : 'text-[#FF7AC6]'} />
                        <span className="text-xs font-bold whitespace-nowrap">{link.name}</span>
                      </div>

                      <ChevronRight
                        size={13}
                        className={isActive ? 'text-white' : 'text-white/30'}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-3 border-t border-white/10 bg-black/40 space-y-2">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hi DP Digital, I would like to consult about a project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 active:scale-98 transition-transform cursor-pointer"
                >
                  <WhatsAppIcon size={15} className="text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#FF2E9A]/20 active:scale-98 transition-transform cursor-pointer"
                >
                  <span>Get Free Quote</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
