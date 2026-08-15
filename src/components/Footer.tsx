import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050308] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden w-full">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF2E9A]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 bg-gradient-to-tr from-[#FF2E9A] to-[#B026FF] flex items-center justify-center rounded-2xl shadow-xl shadow-[#FF2E9A]/20 group-hover:scale-105 transition-transform duration-500">
                <span className="text-white font-black text-xl tracking-tighter">DP</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none">
                  My DP <span className="text-[#FF2E9A]">Digital</span>
                </span>
                <span className="text-[10px] font-bold text-[#FF7AC6] mt-1">
                  Web & Growth Agency
                </span>
              </div>
            </Link>

            <p className="text-white/70 leading-relaxed text-xs sm:text-sm max-w-sm font-normal">
              We design and engineer high-performance Single Page Websites, Business Portals, 20+ Page Custom Websites, E-Commerce Stores, and Automated Sales Funnels.
            </p>

            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF2E9A] hover:text-white hover:border-[#FF2E9A] hover:scale-110 transition-all duration-300"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold mb-6 uppercase tracking-widest text-white/40">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'YouTube', path: '/youtube-management' },
                { name: 'Our Works', path: '/our-works' },
                { name: 'About', path: '/about' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-[#FF7AC6] transition-all flex items-center gap-2 group text-xs font-semibold"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold mb-6 uppercase tracking-widest text-white/40">Solutions</h4>
            <ul className="space-y-3">
              {[
                { name: 'Facebook & Meta Product Ads', path: '/services/facebook-ads' },
                { name: 'WordPress Development', path: '/wordpress-development' },
                { name: 'YouTube Channel Management', path: '/youtube-management' },
                { name: 'Single Page Websites', path: '/our-works' },
                { name: 'Business Websites', path: '/our-works' },
                { name: 'Custom 20+ Page Sites', path: '/our-works' },
                { name: 'E-Commerce Websites', path: '/our-works' },
                { name: 'Sales Landing & Automation', path: '/our-works' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/70 hover:text-[#FF7AC6] transition-all flex items-center gap-2 group text-xs font-semibold"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Direct WhatsApp</h4>
            <div className="p-6 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-[#25D366]/30 space-y-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/15 blur-2xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={18} fill="#25D366" className="text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white">Live WhatsApp Desk</div>
                    <div className="text-[10px] text-[#25D366] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span>Online & Active 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918148320217?text=Hi%20DP%20Digital,%20I%20am%20reaching%20out%20via%20the%20footer%20chat%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer group active:scale-98"
              >
                <MessageCircle size={15} fill="white" className="text-white group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="pt-2 border-t border-white/10 space-y-1">
                <div className="text-[11px] text-[#FF7AC6] font-bold uppercase tracking-wider">
                  growth@mydpdigital.in
                </div>
                <p className="text-white/50 text-xs leading-relaxed font-normal">
                  Tamil Nadu & Pan-India Fast Turnaround <br />
                  Instant quotes delivered on WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 font-bold uppercase tracking-widest">
          <div>© 2026 MY DP DIGITAL. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link to="/our-works" className="hover:text-[#FF7AC6] transition-colors">Our Portfolio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
