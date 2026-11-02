export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  imageUrl?: string;
}

export interface SiteContent {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  fbPixelId: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  serviceManagementFee: number;

  // 1. Home Page Banner & Hero
  homeHeroHeading: string;
  homeHeroSubheading: string;
  homeHeroBadge: string;
  homePrimaryCta: string;
  homeSecondaryCta: string;

  // Home Metrics Strip
  metric1Stat: string;
  metric1Label: string;
  metric1Sub: string;
  metric2Stat: string;
  metric2Label: string;
  metric2Sub: string;
  metric3Stat: string;
  metric3Label: string;
  metric3Sub: string;
  metric4Stat: string;
  metric4Label: string;
  metric4Sub: string;

  // 2. Services Index Page & Homepage Services Section
  servicesHeading: string;
  servicesSubheading: string;

  // 3. Revenue Velocity & Agency Architecture Section
  revenueBadge: string;
  revenueHeading: string;
  revenueSubheading: string;
  revenueCardTitle: string;
  revenueCardDesc: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;

  // 4. Technical SEO Page
  seoHeading: string;
  seoSubheading: string;
  seoBadge: string;

  // 5. Paid Social Ads Page
  paidAdsHeading: string;
  paidAdsSubheading: string;
  paidAdsBadge: string;

  // 6. Facebook & Meta Ads Page
  fbAdsHeading: string;
  fbAdsSubheading: string;
  fbAdsBadge: string;

  // 7. Web Design Page
  webDesignHeading: string;
  webDesignSubheading: string;
  webDesignBadge: string;

  // 8. WordPress Page
  wpHeading: string;
  wpSubheading: string;
  wpBadge: string;

  // 9. Content & Branding Page
  brandingHeading: string;
  brandingSubheading: string;
  brandingBadge: string;

  // 10. YouTube Management Page
  ytHeading: string;
  ytSubheading: string;
  ytBadge: string;

  // 11. About Page
  aboutHeading: string;
  aboutSubheading: string;
  aboutStory: string;

  // 12. Our Works / Portfolio Page
  worksHeading: string;
  worksSubheading: string;

  // 13. Blog Page & Blog Posts
  blogHeading: string;
  blogSubheading: string;
  blogPosts: BlogPost[];

  // 14. Contact Page & Form
  contactHeading: string;
  contactSubheading: string;
  contactFormHeading: string;
}

export const initialSiteContent: SiteContent = {
  metaTitle: 'My DP Digital | SEO & Website Development in Chennai',
  metaDescription: 'My DP Digital helps Chennai businesses with website development, local SEO, Google Ads, Meta Ads, and content support.',
  metaKeywords: 'Digital Marketing Chennai, SEO Services Chennai, Website Development Chennai, WordPress Development, Google Ads, Meta Ads',
  fbPixelId: '',
  phone: '+91 81483 20217',
  whatsapp: '918148320217',
  email: 'growth@mydpdigital.in',
  address: '45 Landmark, The Lords International School, No. 92, Seguvara Street, Kishkintha Main Road, Samathuva Periyar Nagar, West Tambaram, Chennai, Tamil Nadu 600045',
  serviceManagementFee: 15000,

  homeHeroHeading: 'Digital Marketing & Website Development for Chennai Businesses',
  homeHeroSubheading: 'Build a stronger online presence with business websites, WordPress development, local SEO, Google Ads, Meta Ads, and content support from My DP Digital.',
  homeHeroBadge: 'Websites • SEO • Paid Ads | Chennai',
  homePrimaryCta: 'View Our Work',
  homeSecondaryCta: 'Explore Services',

  metric1Stat: 'SEO',
  metric1Label: 'Local & Technical SEO',
  metric1Sub: 'Improve visibility for relevant searches.',
  metric2Stat: 'Web',
  metric2Label: 'Website Development',
  metric2Sub: 'WordPress and custom business websites.',
  metric3Stat: 'Ads',
  metric3Label: 'Google & Meta Ads',
  metric3Sub: 'Campaign planning, creative and tracking.',
  metric4Stat: 'Direct',
  metric4Label: 'Project Support',
  metric4Sub: 'Clear communication and project updates.',

  servicesHeading: 'Digital Marketing & Website Services',
  servicesSubheading: 'Choose the support your business needs: website development, local SEO, paid advertising, content, and video services.',

  revenueBadge: 'A Practical Growth Process',
  revenueHeading: 'Plan, Build, Measure, Improve.',
  revenueSubheading: 'A clear workflow for improving your online presence and handling enquiries—from discovery and planning to launch and ongoing optimization.',
  revenueCardTitle: 'A Clear Plan for Growth',
  revenueCardDesc: 'Every project starts with your business goals, audience, and current setup. We recommend the work that fits your requirements and budget.',
  
  step1Title: 'Audit & Discovery',
  step1Desc: 'Review your website, search presence, competitors, and customer enquiry journey.',
  step2Title: 'Strategy & Priorities',
  step2Desc: 'Prioritize the website, SEO, and advertising improvements that match your goals and budget.',
  step3Title: 'Implementation',
  step3Desc: 'Build or improve website pages, campaigns, enquiry flows, and conversion tracking.',
  step4Title: 'Review & Improve',
  step4Desc: 'Review enquiries and agreed performance indicators, then refine the work where needed.',

  seoHeading: 'Technical & Local SEO',
  seoSubheading: 'Improve search visibility with technical fixes, useful on-page content, accurate local information, and a clear keyword strategy—without promising specific rankings.',
  seoBadge: 'Technical Foundations • Local Search',

  paidAdsHeading: 'Google & Meta Ads Management',
  paidAdsSubheading: 'Plan and manage Google and Meta campaigns with audience research, creative testing, conversion tracking, and ongoing optimization.',
  paidAdsBadge: 'Campaign Strategy • Conversion Tracking',

  fbAdsHeading: 'Facebook & Instagram Ads Management',
  fbAdsSubheading: 'Support product and lead campaigns with audience targeting, creative testing, retargeting, and conversion tracking.',
  fbAdsBadge: 'Meta Campaigns • Conversion Tracking',

  webDesignHeading: 'Business Website Design & Development',
  webDesignSubheading: 'Build responsive business websites and landing pages with clear content, useful navigation, and conversion-focused calls to action.',
  webDesignBadge: 'Responsive Design • Clear Structure',

  wpHeading: 'WordPress & WooCommerce Development',
  wpSubheading: 'Build and maintain WordPress websites and WooCommerce stores with mobile-friendly layouts, payment integrations, and essential SEO setup.',
  wpBadge: 'WordPress • WooCommerce',

  brandingHeading: 'Content Marketing & Brand Identity Engineering',
  brandingSubheading: 'Build consistent brand messaging with clear copywriting, useful content, and visual design.',
  brandingBadge: 'Brand Messaging • Content Support',

  ytHeading: 'YouTube Growth & Professional Video Editing Agency',
  ytSubheading: 'Improve your YouTube presence with video editing, custom thumbnails, channel management, and content planning.',
  ytBadge: 'Video Editing • Channel Support',

  aboutHeading: 'Results-Driven Digital Engineering & Performance Marketing',
  aboutSubheading: 'My DP Digital helps businesses with practical website development and digital marketing support across SEO, paid advertising, and content.',
  aboutStory: 'Our approach connects website structure, search visibility, and customer acquisition so visitors can understand your services and take the next step.',

  worksHeading: 'Selected Website & Digital Projects',
  worksSubheading: 'Explore a selection of business websites and digital projects, with links to published work where available.',

  blogHeading: 'Digital Marketing & Website Development Insights',
  blogSubheading: 'Read practical guides on local SEO, website planning, WordPress, paid campaigns, and online growth.',
  blogPosts: [
    {
      id: 'blog-1',
      title: 'How We Scaled an D2C Apparel Brand to ₹1.2 Cr/Month with Meta CAPI Ads',
      excerpt: 'A deep-dive technical breakdown of creative catalog segmentation and event deduplication strategies.',
      date: 'May 14, 2026',
      readTime: '6 min read',
      category: 'Meta Ads',
      content: 'Scaling D2C brands beyond 50L/month requires strict adherence to Conversions API (CAPI) matching quality scores above 8.5/10...'
    },
    {
      id: 'blog-2',
      title: 'Core Web Vitals 2026: Why Your WooCommerce Store is Losing Sales',
      excerpt: 'Unoptimized script execution and bloated plugins are killing your conversion rate. Here is how we fix it.',
      date: 'May 02, 2026',
      readTime: '8 min read',
      category: 'WordPress',
      content: 'When time-to-interactive exceeds 2.5 seconds on mobile devices, bounce rates surge by 53%...'
    },
    {
      id: 'blog-3',
      title: 'The YouTube Retention Playbook: Hooking Viewers in the First 5 Seconds',
      excerpt: 'Psychological pacing triggers, pattern interrupts, and audio design secrets used by top creators.',
      date: 'Apr 21, 2026',
      readTime: '5 min read',
      category: 'YouTube',
      content: 'Audience retention graph drop-offs almost always occur due to delayed value delivery in the opening hook...'
    }
  ],

  contactHeading: 'Let’s Build Something Extraordinary Together',
  contactSubheading: 'Tell us about your website or marketing goals. We will review your requirements and respond with next steps.',
  contactFormHeading: 'Request a Website or Digital Marketing Consultation'
};

export interface LeadSubmission {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: 'New' | 'Contacted' | 'Closed';
}

export const initialLeads: LeadSubmission[] = [
  {
    id: 'lead-1',
    timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
    name: 'Rahul Sharma',
    phone: '+91 98221 34567',
    service: 'Facebook & Meta Ads',
    message: 'Looking to scale e-commerce apparel brand with ₹1L monthly ad budget.',
    status: 'New'
  },
  {
    id: 'lead-2',
    timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
    name: 'Priya Patel',
    phone: '+91 97112 88990',
    service: 'WordPress Development',
    message: 'Need a lightning-fast WooCommerce store with Razorpay integration.',
    status: 'Contacted'
  }
];
