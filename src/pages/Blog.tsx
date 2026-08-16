import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Search,
  Tag,
  MessageSquare,
  Clock,
  Share2,
  Bookmark,
  FolderOpen,
  ChevronRight,
  Rss,
  CheckCircle2,
  X,
  Send,
  Flame,
  ThumbsUp,
  FileText,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
  CornerDownRight,
  HelpCircle,
  Eye
} from 'lucide-react';
import { subscribeNewsletter } from '../lib/services';
import { useCms } from '../context/CmsContext';
import PageSEO from '../components/PageSEO';

const BLOG_JSON_LD = [
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'My DP Digital Blog',
    url: 'https://www.mydpdigital.in/blog',
    description:
      'Digital marketing insights, SEO tips, and website design trends from My DP Digital — practical advice on Google Ads, agencies, and growing your business online.',
    publisher: {
      '@type': 'Organization',
      name: 'My DP Digital',
      url: 'https://www.mydpdigital.in',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mydpdigital.in/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mydpdigital.in/blog' },
    ],
  },
];

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  readingTime: string;
  commentsCount: number;
  tags: string[];
  isSticky?: boolean;
  featuredImgColor: string;
  imageUrl?: string;
}

const CATEGORIES = [
  'All Categories',
  'Web Design & Funnels',
  'Automation & Webhooks',
  'SEO & Growth',
  'E-Commerce & Retail',
  'Paid Ads & Meta',
  'Strategy & Architecture'
];

const POPULAR_TAGS = [
  'WordPress',
  'WebGL',
  'SalesFunnels',
  'WhatsAppAPI',
  'Automation',
  'GoogleSEO',
  'CoreWebVitals',
  'MetaAds',
  'ECommerce',
  'ROAS'
];

const ARCHIVE_MONTHS = [
  { month: 'August 2026', count: 3 },
  { month: 'July 2026', count: 7 },
  { month: 'June 2026', count: 12 },
  { month: 'May 2026', count: 9 },
  { month: 'April 2026', count: 15 },
];

export const BlogPage: React.FC = () => {
  const { content } = useCms();

  const BLOG_POSTS: BlogPost[] = content.blogPosts.map((p, idx) => ({
    id: p.id,
    title: p.title,
    slug: p.id,
    excerpt: p.excerpt,
    content: [p.content],
    date: p.date,
    author: {
      name: 'Priyanka D.',
      role: 'Principal Growth Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    },
    category: p.category || 'Web Design & Funnels',
    readingTime: p.readTime,
    commentsCount: 12 + idx,
    tags: ['WordPress', 'MetaAds', 'Growth', 'SEO'],
    isSticky: idx === 0,
    featuredImgColor: idx % 2 === 0 ? 'from-[#FF2E9A] to-[#B026FF]' : 'from-[#06B6D4] to-[#25D366]',
    imageUrl: p.imageUrl,
  }));
  
  // Single Post Page View State (WordPress style)
  const [singlePostView, setSinglePostView] = useState<BlogPost | null>(null);
  const [activePostReader, setActivePostReader] = useState<BlogPost | null>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Newsletter state
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Comment submission state
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submittedComments, setSubmittedComments] = useState<Record<string, Array<{ name: string; text: string; date: string }>>>({
    'post-1': [
      { name: 'Arun M.', text: 'The sub-50ms render loop with Three.js sounds incredible. We tested WhatsApp routing and our lead retention doubled in 48 hours!', date: 'August 14, 2026' },
      { name: 'Dr. S. Nair', text: 'Very clear technical explanation. The comparison between static forms and dynamic calculators is spot on.', date: 'August 15, 2026' }
    ]
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);
    try {
      await subscribeNewsletter({ email });
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsSubscribing(false);
    }
  };

  const handlePostComment = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment = {
      name: commentName.trim(),
      text: commentText.trim(),
      date: 'Just now',
    };

    setSubmittedComments((prev) => ({
      ...prev,
      [postId]: [newComment, ...(prev[postId] || [])],
    }));

    setCommentName('');
    setCommentEmail('');
    setCommentText('');
  };

  const handleCopyLink = (postTitle: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  // Filtered posts logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Categories' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTag && matchesSearch;
  });

  // Calculate category counts
  const categoryCounts = CATEGORIES.reduce((acc, cat) => {
    if (cat === 'All Categories') {
      acc[cat] = BLOG_POSTS.length;
    } else {
      acc[cat] = BLOG_POSTS.filter((p) => p.category === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
    <PageSEO
      title="Digital Marketing Blog & Insights | My DP Digital"
      description="Digital marketing insights, SEO tips, and web design trends — practical advice on Google Ads, agencies, and growing your business online."
      canonicalPath="/blog"
      jsonLd={BLOG_JSON_LD}
    />
    <div className="pt-28 pb-24 bg-[#07050C] text-white min-h-screen relative overflow-hidden w-full font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-[-10%] w-[45vw] h-[45vw] bg-[#FF2E9A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-[#B026FF]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-[20%] w-[35vw] h-[35vw] bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* WordPress Header Masthead */}
      <div className="w-full border-b border-white/10 bg-white/[0.02] backdrop-blur-2xl py-8 mb-10 relative z-10">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 max-w-[1800px] mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/50 mb-4 font-mono">
            <button
              onClick={() => {
                setSinglePostView(null);
                setSelectedCategory('All Categories');
                setSelectedTag(null);
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight size={12} />
            <button
              onClick={() => setSinglePostView(null)}
              className="hover:text-white transition-colors cursor-pointer text-[#FF7AC6]"
            >
              Journal & Publications
            </button>
            {singlePostView ? (
              <>
                <ChevronRight size={12} />
                <span className="text-[#06B6D4]">{singlePostView.category}</span>
                <ChevronRight size={12} />
                <span className="text-white max-w-[200px] sm:max-w-md truncate">
                  {singlePostView.title}
                </span>
              </>
            ) : (
              <>
                {selectedCategory !== 'All Categories' && (
                  <>
                    <ChevronRight size={12} />
                    <span className="text-white">{selectedCategory}</span>
                  </>
                )}
                {selectedTag && (
                  <>
                    <ChevronRight size={12} />
                    <span className="text-[#25D366]">#{selectedTag}</span>
                  </>
                )}
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold uppercase tracking-wider text-white">
                <Rss size={12} className="text-[#FF2E9A]" /> The DP Digital Publication Desk
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {singlePostView ? (
                  <span>WordPress <span className="text-[#FF7AC6]">Article View</span></span>
                ) : (
                  <span>Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E9A] via-[#B026FF] to-[#25D366]">Journal & Playbooks</span></span>
                )}
              </h1>
              <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-medium">
                {singlePostView
                  ? 'Full WordPress layout with article analysis, table of contents, author bio, and interactive comments.'
                  : 'Battle-tested architectural teardowns, WebGL funnel engineering, WordPress optimizations, and automated WhatsApp CRM blueprints.'}
              </p>
            </div>

            {/* Quick Stats & Actions Pill */}
            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 p-3 rounded-2xl backdrop-blur-xl shrink-0">
              {singlePostView ? (
                <button
                  onClick={() => setSinglePostView(null)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer hover:scale-105 transition-transform"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Blog Stream</span>
                </button>
              ) : (
                <>
                  <div className="text-center px-3 border-r border-white/10">
                    <div className="text-lg font-black text-white">{BLOG_POSTS.length}</div>
                    <div className="text-[10px] text-white/50 font-bold uppercase">Articles</div>
                  </div>
                  <div className="text-center px-3 border-r border-white/10">
                    <div className="text-lg font-black text-[#25D366]">Weekly</div>
                    <div className="text-[10px] text-white/50 font-bold uppercase">Frequency</div>
                  </div>
                  <div className="text-center px-3">
                    <div className="text-lg font-black text-[#FF7AC6]">5.8k</div>
                    <div className="text-[10px] text-white/50 font-bold uppercase">Readers</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column WordPress / Blogger Layout */}
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ================= LEFT / MAIN CONTENT (8 Cols) ================= */}
          <main className="lg:col-span-8 space-y-8">

            {/* ================= IF SINGLE POST VIEW IS ACTIVE (WordPress Single Page) ================= */}
            {singlePostView ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Back to Blog Stream Link */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <button
                    onClick={() => setSinglePostView(null)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#FF7AC6] hover:text-white transition-colors cursor-pointer group"
                  >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    <span>« Return to All Articles</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyLink(singlePostView.title)}
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedUrl ? <Check size={13} className="text-[#25D366]" /> : <Copy size={13} />}
                      <span>{copiedUrl ? 'Copied Link!' : 'Share'}</span>
                    </button>
                    <a
                      href={`https://wa.me/918148320217?text=${encodeURIComponent(`Hi DP Digital, I am reading your article "${singlePostView.title}" and would like to ask a question.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle size={13} fill="currentColor" />
                      <span>Ask Author</span>
                    </a>
                  </div>
                </div>

                {/* Classic WordPress Article Card */}
                <article className="bg-white/[0.035] backdrop-blur-2xl rounded-[32px] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8">
                  
                  {/* WordPress Post Header */}
                  <div className="space-y-4 border-b border-white/10 pb-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                      <button
                        onClick={() => {
                          setSelectedCategory(singlePostView.category);
                          setSinglePostView(null);
                        }}
                        className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#FF7AC6] text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <FolderOpen size={11} className="inline mr-1.5" />
                        {singlePostView.category}
                      </button>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#FF2E9A]" /> {singlePostView.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#06B6D4]" /> {singlePostView.readingTime}
                      </span>
                      <span>•</span>
                      <a href="#comments" className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors">
                        <MessageSquare size={13} className="text-[#25D366]" />
                        <span>{(submittedComments[singlePostView.id]?.length || 0) + singlePostView.commentsCount} Comments</span>
                      </a>
                    </div>

                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                      {singlePostView.title}
                    </h1>

                    {/* Author Byline Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={singlePostView.author.avatar}
                          alt={singlePostView.author.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-2xl border-2 border-[#FF2E9A] object-cover shadow-md"
                        />
                        <div>
                          <div className="text-sm font-black text-white">
                            {singlePostView.author.name}
                          </div>
                          <div className="text-xs text-white/50">{singlePostView.author.role}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-white/40">Verified Publication</span>
                        <CheckCircle2 size={15} className="text-[#25D366]" />
                      </div>
                    </div>
                  </div>

                  {/* Visual Blueprint Hero Banner OR Featured Image */}
                  {singlePostView.imageUrl ? (
                    <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
                      <img 
                        src={singlePostView.imageUrl} 
                        alt={singlePostView.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-full h-36 sm:h-48 rounded-2xl bg-gradient-to-r ${singlePostView.featuredImgColor} p-6 sm:p-8 flex items-center justify-between text-white relative overflow-hidden shadow-inner`}
                    >
                      <div className="relative z-10 max-w-lg">
                        <div className="text-[11px] font-black uppercase tracking-wider text-white/80 mb-1">
                          Architectural Teardown & Case Blueprint
                        </div>
                        <div className="text-base sm:text-2xl font-black">{singlePostView.title}</div>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-black/30 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-lg">
                        <FileText size={32} />
                      </div>
                    </div>
                  )}

                  {/* Summary Callout Box (WordPress Key Highlights) */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#FF2E9A]/30 space-y-2">
                    <div className="text-xs font-black uppercase tracking-wider text-[#FF7AC6] flex items-center gap-2">
                      <Sparkles size={14} />
                      <span>Article Summary & Key Highlights</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                      {singlePostView.excerpt}
                    </p>
                  </div>

                  {/* WordPress Formatted Article Content */}
                  <div className="space-y-6 text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                    {singlePostView.content.map((paragraph, pIdx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h2
                            key={pIdx}
                            className="text-xl sm:text-2xl lg:text-3xl font-black text-white pt-6 pb-2 tracking-tight border-b border-white/10 flex items-center gap-2"
                          >
                            <span className="w-2 h-6 rounded-full bg-gradient-to-b from-[#FF2E9A] to-[#B026FF]" />
                            <span>{paragraph.replace('### ', '')}</span>
                          </h2>
                        );
                      }
                      if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n');
                        return (
                          <div
                            key={pIdx}
                            className="p-6 rounded-2xl bg-white/[0.035] border border-white/10 space-y-3 shadow-md"
                          >
                            {items.map((it, i) => (
                              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                                <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                                <div>
                                  <span>{it.replace(/^[0-9]+\.\s+|\-\s+/, '')}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      }
                      return <p key={pIdx} className="leading-relaxed">{paragraph}</p>;
                    })}
                  </div>

                  {/* WordPress Post Tags */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <Tag size={14} className="text-white/40 mr-1" />
                    <span className="text-xs text-white/50 font-bold uppercase mr-1">Tags:</span>
                    {singlePostView.tags.map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setSelectedTag(t);
                          setSinglePostView(null);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#25D366] hover:text-black text-white text-xs font-semibold transition-all cursor-pointer"
                      >
                        #{t}
                      </button>
                    ))}
                  </div>

                  {/* WordPress Author Bio Box */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
                    <img
                      src={singlePostView.author.avatar}
                      alt={singlePostView.author.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-2xl border-2 border-[#FF2E9A] object-cover shrink-0 shadow-lg"
                    />
                    <div className="space-y-2 text-center sm:text-left">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <span className="text-base font-black text-white">
                          About the Author: {singlePostView.author.name}
                        </span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FF2E9A]/20 text-[#FF7AC6] font-bold">
                          {singlePostView.author.role}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed font-normal">
                        Senior technical growth strategist at My DP Digital. Specializing in high-performance WebGL frameworks, headless WordPress backends, and WhatsApp sales automation.
                      </p>
                      <a
                        href={`https://wa.me/918148320217?text=${encodeURIComponent(`Hi ${singlePostView.author.name}, I loved your article on "${singlePostView.title}". Can we schedule a quick call?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:underline"
                      >
                        <MessageCircle size={14} fill="currentColor" />
                        <span>Chat directly with author on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* WordPress Post Navigation (Previous / Next) */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        const currIdx = BLOG_POSTS.findIndex((p) => p.id === singlePostView.id);
                        const prevPost = BLOG_POSTS[(currIdx - 1 + BLOG_POSTS.length) % BLOG_POSTS.length];
                        setSinglePostView(prevPost);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-left transition-colors cursor-pointer group"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 flex items-center gap-1 group-hover:text-[#FF7AC6]">
                        <ArrowLeft size={12} />
                        <span>Previous Article</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-1 truncate">
                        {BLOG_POSTS[(BLOG_POSTS.findIndex((p) => p.id === singlePostView.id) - 1 + BLOG_POSTS.length) % BLOG_POSTS.length].title}
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        const currIdx = BLOG_POSTS.findIndex((p) => p.id === singlePostView.id);
                        const nextPost = BLOG_POSTS[(currIdx + 1) % BLOG_POSTS.length];
                        setSinglePostView(nextPost);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-right transition-colors cursor-pointer group"
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-white/40 flex items-center justify-end gap-1 group-hover:text-[#25D366]">
                        <span>Next Article</span>
                        <ArrowRight size={12} />
                      </div>
                      <div className="text-xs font-bold text-white mt-1 truncate">
                        {BLOG_POSTS[(BLOG_POSTS.findIndex((p) => p.id === singlePostView.id) + 1) % BLOG_POSTS.length].title}
                      </div>
                    </button>
                  </div>

                  {/* WordPress Comments Section */}
                  <div id="comments" className="space-y-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                        <MessageSquare size={20} className="text-[#FF2E9A]" />
                        <span>Discussion ({(submittedComments[singlePostView.id]?.length || 0) + singlePostView.commentsCount})</span>
                      </h3>
                      <span className="text-xs text-white/50 font-mono">WordPress Live Thread</span>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {(submittedComments[singlePostView.id] || []).map((comm, cIdx) => (
                        <div key={cIdx} className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-[#FF2E9A] text-white flex items-center justify-center font-black text-xs">
                                {comm.name.charAt(0)}
                              </div>
                              <span className="font-bold text-white">{comm.name}</span>
                            </div>
                            <span className="text-white/40 text-[10px]">{comm.date}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-white/80 pl-9 font-normal">{comm.text}</p>
                        </div>
                      ))}

                      {/* Default sample comments */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#06B6D4] text-white flex items-center justify-center font-black text-xs">
                              V
                            </div>
                            <span className="font-bold text-white">Venkatesh S.</span>
                          </div>
                          <span className="text-white/40 text-[10px]">August 14, 2026</span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/80 pl-9 font-normal">
                          Excellent breakdown of the webhook routing and speed optimization! We implemented similar architecture for our Chennai portal and saw instant results.
                        </p>
                      </div>
                    </div>

                    {/* Classic WordPress "Leave a Reply" Form */}
                    <form
                      onSubmit={(e) => handlePostComment(singlePostView.id, e)}
                      className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4 shadow-xl"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-black uppercase tracking-wider text-white">
                          Leave a Reply
                        </h4>
                        <p className="text-xs text-white/50">
                          Your email address will not be published. Required fields are marked *
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] transition-all"
                        />
                        <input
                          type="email"
                          placeholder="Your Email (Optional)"
                          value={commentEmail}
                          onChange={(e) => setCommentEmail(e.target.value)}
                          className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] transition-all"
                        />
                      </div>

                      <textarea
                        rows={4}
                        required
                        placeholder="Type your comment, query, or technical question here... *"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] transition-all"
                      />

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                          type="submit"
                          className="w-full sm:w-auto bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] hover:from-[#FF7AC6] hover:to-[#FF2E9A] text-white px-8 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#FF2E9A]/20 transition-all cursor-pointer"
                        >
                          <Send size={13} />
                          <span>Post Comment</span>
                        </button>
                        <span className="text-[11px] text-white/40 font-mono">
                          Moderated by DP Editorial Desk
                        </span>
                      </div>
                    </form>
                  </div>
                </article>

                {/* Related Articles 3-Column Grid */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <Flame size={18} className="text-[#FF2E9A]" />
                    <span>Related Growth Playbooks</span>
                  </h3>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {BLOG_POSTS.filter((p) => p.id !== singlePostView.id).slice(0, 3).map((rel) => (
                      <div
                        key={rel.id}
                        onClick={() => {
                          setSinglePostView(rel);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="p-5 rounded-2xl bg-white/[0.035] hover:bg-white/[0.07] border border-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-[#FF7AC6] uppercase">
                            {rel.category}
                          </span>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors line-clamp-2 leading-tight">
                            {rel.title}
                          </h4>
                        </div>
                        <div className="text-[10px] text-white/40 mt-4 flex items-center justify-between pt-2 border-t border-white/10">
                          <span>{rel.readingTime}</span>
                          <span className="text-[#FF7AC6] group-hover:translate-x-0.5 transition-transform">Read »</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            ) : (

              /* ================= MAIN BLOG STREAM (WordPress Editorial Magazine) ================= */
              <div className="space-y-8">
                {/* Active Filter Indicator Bar */}
                {(selectedCategory !== 'All Categories' || selectedTag || searchQuery) && (
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-white/50">Filtering By:</span>
                      {selectedCategory !== 'All Categories' && (
                        <span className="px-2.5 py-1 rounded-md bg-[#FF2E9A]/20 text-[#FF7AC6] font-bold">
                          Category: {selectedCategory}
                        </span>
                      )}
                      {selectedTag && (
                        <span className="px-2.5 py-1 rounded-md bg-[#25D366]/20 text-[#25D366] font-bold">
                          Tag: #{selectedTag}
                        </span>
                      )}
                      {searchQuery && (
                        <span className="px-2.5 py-1 rounded-md bg-[#06B6D4]/20 text-[#06B6D4] font-bold">
                          Keyword: "{searchQuery}"
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCategory('All Categories');
                        setSelectedTag(null);
                        setSearchQuery('');
                      }}
                      className="text-white/60 hover:text-white font-bold underline cursor-pointer"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}

                {/* Published Articles Stream */}
                {filteredPosts.length > 0 ? (
                  <div className="space-y-8">
                    {filteredPosts.map((post, idx) => {
                      const isSticky = post.isSticky && idx === 0 && selectedCategory === 'All Categories';
                      const totalComments = (submittedComments[post.id]?.length || 0) + post.commentsCount;

                      return (
                        <motion.article
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.05 }}
                          className={`rounded-[32px] border transition-all duration-300 overflow-hidden group ${
                            isSticky
                              ? 'bg-gradient-to-b from-[#170E28] via-[#0E0919] to-[#0A0710] border-[#FF2E9A]/40 shadow-[0_20px_60px_-15px_rgba(255,46,154,0.15)]'
                              : 'bg-white/[0.035] hover:bg-white/[0.05] border-white/10 shadow-xl'
                          }`}
                        >
                          {/* Sticky Post Badge */}
                          {isSticky && (
                            <div className="bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                              <Flame size={14} /> Featured Sticky Post • Editorial Choice
                            </div>
                          )}

                          <div className="p-6 sm:p-9 space-y-6">
                            {/* WordPress Post Header & Meta */}
                            <div className="space-y-3">
                              <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                                {/* Category Pill */}
                                <button
                                  onClick={() => setSelectedCategory(post.category)}
                                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#FF7AC6] text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                                >
                                  <FolderOpen size={11} className="inline mr-1.5" />
                                  {post.category}
                                </button>

                                <span>•</span>
                                <span className="flex items-center gap-1.5">
                                  <Calendar size={13} className="text-[#FF2E9A]" /> {post.date}
                                </span>

                                <span>•</span>
                                <span className="flex items-center gap-1.5">
                                  <Clock size={13} className="text-[#06B6D4]" /> {post.readingTime}
                                </span>

                                <span>•</span>
                                <button
                                  onClick={() => setSinglePostView(post)}
                                  className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors cursor-pointer"
                                >
                                  <MessageSquare size={13} className="text-[#25D366]" /> {totalComments} Comments
                                </button>
                              </div>

                              {/* Post Title */}
                              <h2
                                onClick={() => setSinglePostView(post)}
                                className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug cursor-pointer group-hover:text-[#FF7AC6] transition-colors"
                              >
                                {post.title}
                              </h2>
                            </div>

                            {/* Visual Decorative Feature Header OR Featured Image */}
                            {post.imageUrl ? (
                              <div 
                                className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-white/10 cursor-pointer group"
                                onClick={() => setSinglePostView(post)}
                              >
                                <img 
                                  src={post.imageUrl} 
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ) : (
                              <div
                                className={`w-full h-24 sm:h-28 rounded-2xl bg-gradient-to-r ${post.featuredImgColor} p-5 flex items-center justify-between text-white relative overflow-hidden shadow-inner cursor-pointer`}
                                onClick={() => setSinglePostView(post)}
                              >
                                <div className="relative z-10 max-w-md">
                                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                                    Article Blueprint
                                  </div>
                                  <div className="text-sm sm:text-base font-black truncate">{post.title}</div>
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-black/30 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                  <FileText size={22} />
                                </div>
                              </div>
                            )}

                            {/* Article Excerpt */}
                            <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed">
                              {post.excerpt}
                            </p>

                            {/* Tags Pill Row */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-2">
                              <Tag size={13} className="text-white/40 mr-1" />
                              {post.tags.map((t) => (
                                <button
                                  key={t}
                                  onClick={() => setSelectedTag(t)}
                                  className={`text-[10px] font-bold px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                                    selectedTag === t
                                      ? 'bg-[#25D366] text-black font-black'
                                      : 'bg-white/[0.05] hover:bg-white/[0.1] text-white/70'
                                  }`}
                                >
                                  #{t}
                                </button>
                              ))}
                            </div>

                            {/* WordPress Post Footer: Author & Continue Reading Action */}
                            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  referrerPolicy="no-referrer"
                                  className="w-10 h-10 rounded-full border border-white/20 object-cover"
                                />
                                <div>
                                  <div className="text-xs font-black text-white">{post.author.name}</div>
                                  <div className="text-[10px] text-white/50">{post.author.role}</div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setActivePostReader(post)}
                                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                                  title="Quick Popup Preview"
                                >
                                  <Eye size={13} />
                                  <span>Quick Preview</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setSinglePostView(post);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                  className="bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] hover:from-[#FF7AC6] hover:to-[#FF2E9A] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-[#FF2E9A]/20 transition-all cursor-pointer"
                                >
                                  <span>Full Article</span>
                                  <ArrowRight size={13} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.article>
                      );
                    })}

                    {/* Classic WordPress Pagination */}
                    <div className="p-4 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-xl flex items-center justify-between text-xs font-bold text-white">
                      <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer">
                        « Newer Entries
                      </button>
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-[#FF2E9A] text-white flex items-center justify-center font-black">
                          1
                        </span>
                        <span className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 flex items-center justify-center cursor-pointer">
                          2
                        </span>
                        <span className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 flex items-center justify-center cursor-pointer">
                          3
                        </span>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer">
                        Older Entries »
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center bg-white/[0.035] border border-white/10 rounded-3xl space-y-4">
                    <Search size={36} className="text-white/30 mx-auto" />
                    <h3 className="text-xl font-black text-white">No Blog Posts Found</h3>
                    <p className="text-xs text-white/60 max-w-sm mx-auto">
                      No published teardowns matched your filters. Try resetting the category or tag filter.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory('All Categories');
                        setSelectedTag(null);
                        setSearchQuery('');
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white text-xs font-bold cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            )}

          </main>


          {/* ================= RIGHT COLUMN: WordPress Blogger Sidebar Widgets (4 Cols) ================= */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Widget 1: Search WordPress */}
            <div className="bg-white/[0.035] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 space-y-3 shadow-xl">
              <div className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                <Search size={14} className="text-[#FF2E9A]" />
                <span>Search Publication</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type keywords & press Enter..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Widget 2: Author / Editorial Desk Profile */}
            <div className="bg-white/[0.035] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 space-y-4 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF2E9A]/15 blur-2xl rounded-full" />
              
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-white/10 pb-3 flex items-center justify-between">
                <span>About The Editorial Desk</span>
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                  alt="Editor"
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-2xl border-2 border-[#FF2E9A] object-cover shadow-md"
                />
                <div>
                  <h4 className="text-sm font-black text-white">DP Digital Editorial Team</h4>
                  <p className="text-[11px] text-[#FF7AC6] font-semibold">Web & Growth Engineering</p>
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed font-normal">
                Publishing actionable architectural blueprints, zero-latency lead routing formulas, and verified full-stack case studies for scaling enterprises.
              </p>

              <a
                href="https://wa.me/918148320217?text=Hi%20DP%20Digital,%20I%20am%20reading%20your%20blog%20and%20would%20like%20to%20discuss%20a%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle size={14} fill="currentColor" />
                <span>Chat with Editorial on WhatsApp</span>
              </a>
            </div>

            {/* Widget 3: Categories Widget (WordPress Style) */}
            <div className="bg-white/[0.035] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <FolderOpen size={14} className="text-[#06B6D4]" />
                <span>Categories</span>
              </div>

              <ul className="space-y-1.5">
                {CATEGORIES.map((cat) => {
                  if (cat === 'All Categories') return null;
                  const isCurrent = selectedCategory === cat;
                  const count = categoryCounts[cat] || 0;

                  return (
                    <li key={cat}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSelectedTag(null);
                          setSinglePostView(null);
                        }}
                        className={`w-full py-2 px-3 rounded-xl text-xs text-left flex items-center justify-between transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-white/10 text-[#FF7AC6] font-black'
                            : 'text-white/70 hover:bg-white/[0.05] hover:text-white'
                        }`}
                      >
                        <span className="truncate">{cat}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-white/80">
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Widget 4: Trending / Recent Posts */}
            <div className="bg-white/[0.035] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Flame size={14} className="text-[#FF2E9A]" />
                <span>Trending Playbooks</span>
              </div>

              <div className="space-y-3">
                {BLOG_POSTS.slice(0, 4).map((post, idx) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setSinglePostView(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex gap-3 items-start p-2 rounded-xl hover:bg-white/[0.05] transition-colors cursor-pointer group"
                  >
                    <span className="w-6 h-6 rounded-lg bg-white/10 text-white/60 font-mono font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-[#FF2E9A] group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h5 className="text-xs font-bold text-white group-hover:text-[#FF7AC6] transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h5>
                      <span className="text-[10px] text-white/40 block mt-1">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 5: Popular Tag Cloud */}
            <div className="bg-white/[0.035] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Tag size={14} className="text-[#25D366]" />
                <span>Tag Cloud</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {POPULAR_TAGS.map((tag) => {
                  const isSelected = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTag(isSelected ? null : tag);
                        setSinglePostView(null);
                      }}
                      className={`text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#25D366] text-black font-black scale-105'
                          : 'bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/5'
                      }`}
                    >
                      #{tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Widget 6: Monthly Archives */}
            <div className="bg-white/[0.035] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Calendar size={14} className="text-[#B026FF]" />
                <span>Monthly Archives</span>
              </div>

              <ul className="space-y-1 text-xs text-white/70">
                {ARCHIVE_MONTHS.map((arch) => (
                  <li
                    key={arch.month}
                    onClick={() => {
                      setSinglePostView(null);
                    }}
                    className="flex items-center justify-between py-1.5 px-2 hover:bg-white/[0.05] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{arch.month}</span>
                    <span className="text-[10px] font-mono text-white/40">({arch.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 7: Newsletter Subscribe */}
            <div className="bg-gradient-to-tr from-[#160B24] via-[#0E0919] to-[#07050C] rounded-3xl border border-white/15 p-6 space-y-4 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2E9A]/20 blur-3xl rounded-full" />
              
              <div className="space-y-1.5 relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF7AC6]">RSS & Dispatch</span>
                <h4 className="text-base font-black text-white">Subscribe to The Weekly Dispatch</h4>
                <p className="text-xs text-white/70 font-normal">
                  Receive our latest WordPress development breakdowns & automation playbooks directly in your inbox.
                </p>
              </div>

              {isSubscribed ? (
                <div className="p-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-center text-xs font-bold text-white">
                  ✓ You are subscribed to our RSS Feed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5 relative z-10">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF2E9A]"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white font-bold text-xs uppercase tracking-wider hover:from-[#FF7AC6] hover:to-[#FF2E9A] transition-all cursor-pointer"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe to RSS'}
                  </button>
                </form>
              )}
            </div>

          </aside>
        </div>
      </div>

      {/* ================= QUICK POPUP MODAL (Alternative quick reader) ================= */}
      <AnimatePresence>
        {activePostReader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-[#0E0919] text-white rounded-[36px] max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-white/20 relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePostReader(null)}
                className="sticky top-0 float-right z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close reader"
              >
                <X size={20} />
              </button>

              <div className="space-y-8">
                {/* Article Header */}
                <div className="space-y-4 border-b border-white/10 pb-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-3 py-1 rounded-md bg-[#FF2E9A] text-white font-bold uppercase tracking-wider text-[10px]">
                      {activePostReader.category}
                    </span>
                    <span className="text-white/50 flex items-center gap-1">
                      <Calendar size={13} /> {activePostReader.date}
                    </span>
                    <span className="text-white/50 flex items-center gap-1">
                      <Clock size={13} /> {activePostReader.readingTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                    {activePostReader.title}
                  </h2>

                  {/* Author Line */}
                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={activePostReader.author.avatar}
                      alt={activePostReader.author.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full border border-[#FF2E9A] object-cover"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">
                        Written by {activePostReader.author.name}
                      </div>
                      <div className="text-xs text-white/50">{activePostReader.author.role}</div>
                    </div>
                  </div>
                </div>

                {/* Article Formatted Body */}
                <div className="space-y-6 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  {activePostReader.content.map((paragraph, pIdx) => {
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={pIdx} className="text-xl sm:text-2xl font-black text-white pt-4 tracking-tight">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n');
                      return (
                        <div key={pIdx} className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                          {items.map((it, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
                              <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                              <span>{it.replace(/^[0-9]+\.\s+|\-\s+/, '')}</span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return <p key={pIdx}>{paragraph}</p>;
                  })}
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-white/50 font-bold uppercase mr-2">Filed Under:</span>
                  {activePostReader.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs font-semibold">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      const post = activePostReader;
                      setActivePostReader(null);
                      setSinglePostView(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF2E9A] to-[#B026FF] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Open in Full WordPress View</span>
                    <ExternalLink size={13} />
                  </button>

                  <a
                    href={`https://wa.me/918148320217?text=${encodeURIComponent(`Hi DP Digital, I am reading "${activePostReader.title}" in your blog.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle size={14} fill="white" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default BlogPage;
