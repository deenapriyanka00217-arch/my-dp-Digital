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
  metaTitle: 'DP Digital | WordPress, Meta Ads & Business Automation Agency',
  metaDescription: 'Scale your e-commerce and business with high-ROAS Meta Ads, custom WordPress websites, and WhatsApp automation.',
  metaKeywords: 'Meta Ads, Facebook Product Ads, WordPress Development, Business Automation, SEO Agency India',
  fbPixelId: 'PIXEL-8492049102',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@dpdigital.in',
  address: 'Tech Hub, Bangalore & Chennai, India',
  serviceManagementFee: 15000,

  homeHeroHeading: 'Websites, Automation & Ads That Drive Real Growth',
  homeHeroSubheading: 'We are specialists in WordPress Development, Custom Web Apps, Business Automation, and high-ROI Facebook & Meta Product Ads, Google Ads, YouTube Growth & Technical SEO.',
  homeHeroBadge: 'Verified 5.4x Average ROAS • 4.8Cr+ Client Revenue',
  homePrimaryCta: 'Discuss Project on WhatsApp',
  homeSecondaryCta: 'Explore Services',

  metric1Stat: '22+',
  metric1Label: 'Websites Built',
  metric1Sub: 'Live Client Portfolio',
  metric2Stat: '90+',
  metric2Label: 'PageSpeed Score',
  metric2Sub: 'Speed & SEO Guaranteed',
  metric3Stat: '3–7 Days',
  metric3Label: 'Average Delivery',
  metric3Sub: 'Fast Turnaround Time',
  metric4Stat: '100%',
  metric4Label: 'Direct Support',
  metric4Sub: 'Dedicated WhatsApp Desk',

  servicesHeading: 'Our High-Impact Digital Growth Services',
  servicesSubheading: 'Choose from our specialized growth packages designed to skyrocket your revenue and customer acquisition.',

  revenueBadge: 'Revenue-First Methodology',
  revenueHeading: 'Engineering Your Market Leadership.',
  revenueSubheading: 'A battle-tested scaling framework designed for rapid testing, immediate conversion lift, and compound revenue growth.',
  revenueCardTitle: 'Growth, Quantified.',
  revenueCardDesc: 'We reject superficial vanity retainers. Every campaign, web application, and automation pipeline is quantitatively architected for measurable bottom-line market dominance.',
  
  step1Title: 'Funnel Forensic Audit',
  step1Desc: 'Diagnosing conversion choke points, competitor blind spots, and automated pipeline leaks.',
  step2Title: 'Precision Strategy Matrix',
  step2Desc: 'Custom roadmap matching your budget to highest-yield channels like 3D Web, SEO, and Paid Scaling.',
  step3Title: 'Agile Deployment',
  step3Desc: 'Our technical squad builds high-performance funnels and integrates seamless CRM automation.',
  step4Title: 'Algorithmic Scale',
  step4Desc: 'Weekly split testing and cohort analysis to multiply your ROI and dominate your niche.',

  seoHeading: 'Technical SEO & Organic Ranking Dominance',
  seoSubheading: 'Rank #1 on Google with high-authority backlinks, blazing-fast Core Web Vitals, and keyword optimization.',
  seoBadge: 'Organic Growth • Zero Ad Spend Decay',

  paidAdsHeading: 'High-ROAS Paid Social & Performance Marketing',
  paidAdsSubheading: 'Scale your brand across Meta, Instagram, and Google with data-backed creative funnels and CAPI tracking.',
  paidAdsBadge: 'Guaranteed ROAS • Real-Time Attribution',

  fbAdsHeading: 'Scale Your E-Commerce Product Sales with Meta & Facebook Ads',
  fbAdsSubheading: 'High-conversion CAPI tracking, dynamic product catalogs, and creative retargeting funnels built to multiply your ROAS.',
  fbAdsBadge: 'Verified ROAS Guarantee • Zero Waste Funnels',

  webDesignHeading: 'Custom Web Apps & High-Converting UI/UX Design',
  webDesignSubheading: 'Handcrafted web applications built with React, Next.js, and Tailwind CSS for lightning-fast speeds and high conversions.',
  webDesignBadge: 'Modern Architecture • 100% Responsive',

  wpHeading: 'Lightning-Fast Custom WordPress & WooCommerce Stores',
  wpSubheading: 'Engineered for sub-second load times, flawless mobile UX, and high conversion rates with secure payment gateways.',
  wpBadge: 'Enterprise Grade • 100% SEO Optimized',

  brandingHeading: 'Content Marketing & Brand Identity Engineering',
  brandingSubheading: 'Establish market authority with compelling copywriting, brand messaging guidelines, and viral content systems.',
  brandingBadge: 'Brand Storytelling • High Engagement',

  ytHeading: 'YouTube Growth & Professional Video Editing Agency',
  ytSubheading: 'Turn raw footage into viral retention machines with cinematic editing, custom thumbnails, and channel growth strategies.',
  ytBadge: 'Millions of Views • Retainer & Project Models',

  aboutHeading: 'Results-Driven Digital Engineering & Performance Marketing',
  aboutSubheading: 'We are a team of senior developers, media buyers, and growth strategists dedicated to scaling Indian and global brands.',
  aboutStory: 'Founded with a singular mission: bridge the gap between stunning web engineering and high-ROI customer acquisition.',

  worksHeading: 'Our Proven Case Studies & Client Success Stories',
  worksSubheading: 'Explore how we scaled e-commerce brands, SaaS platforms, and service agencies from 6 to 8 figures.',

  blogHeading: 'Digital Growth Insights, Playbooks & Strategies',
  blogSubheading: 'Read our latest guides on Meta Ads scaling, WordPress optimization, and conversion rate optimization.',
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
  contactSubheading: 'Reach out to our experts for a free growth audit and custom project estimate within 2 hours.',
  contactFormHeading: 'Request Your Free Growth Audit & Estimate'
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
