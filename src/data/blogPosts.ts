// Real, static blog post content for My DP Digital.
//
// This file intentionally replaces the old CMS/localStorage-driven blog data.
// Everything here is committed straight into the deployed site, so it is the
// same for every visitor and every search engine crawler — unlike the old
// system, which only ever reflected whatever was saved in one editor's
// browser storage.
//
// To add a new post: append a new object to BLOG_POSTS below, following the
// same shape. `content` is an array of paragraphs, where each string can be:
//   - a normal paragraph (plain text)
//   - an "### " prefixed string, rendered as a section heading
//   - a "- " / "1. " prefixed string (with "\n" between items), rendered as
//     a checklist/list block
// See src/pages/Blog.tsx for exactly how these are rendered.

export interface BlogPost {
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'best-digital-marketing-agency-tambaram-how-to-choose',
    slug: 'best-digital-marketing-agency-tambaram-how-to-choose',
    title: 'Best Digital Marketing Agency in Tambaram: How to Choose (2026 Checklist)',
    excerpt:
      "Searching for a digital marketing agency in Tambaram? Here's a practical, no-fluff checklist covering real work samples, website ownership, honest SEO, and clear reporting — so you know exactly what to ask before you sign a contract.",
    date: 'August 17, 2026',
    author: {
      name: 'Priyanka D.',
      role: 'Founder, My DP Digital',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    },
    category: 'SEO & Growth',
    readingTime: '7 min read',
    commentsCount: 0,
    tags: ['SEO', 'Tambaram', 'DigitalMarketing', 'LocalBusiness'],
    isSticky: true,
    featuredImgColor: 'from-[#FF2E9A] to-[#B026FF]',
    imageUrl: '/blog-images/tambaram-agency-checklist-2026.png',
    content: [
      "If you run a business in Tambaram and you've searched \"best digital marketing agency in Tambaram,\" you've probably noticed the same problem everyone runs into: every single agency's homepage says they're the best. Every one of them has a stock photo of a team high-fiving over a laptop. None of that tells you who will actually do good work for your business.",
      '### Why "Best Agency" Searches Are Tricky',
      "There's no independent, verified ranking of local marketing agencies the way there is for, say, hospitals or restaurants. Google reviews can be bought. Case studies can be exaggerated. So instead of chasing a \"best of\" list, the more useful approach is to judge agencies against a short, specific checklist — the same one we'd want a client to judge us against.",
      '### 1. Do They Show You Real, Verifiable Work?',
      "Ask for links to live websites they've built or ad accounts they currently manage — not screenshots, not mockups, actual URLs you can open yourself. If an agency is cagey about this or only shows you cropped screenshots with the client's name blurred out, that's worth asking about directly. A real agency should be comfortable pointing you to work you can inspect.",
      '### 2. Do You Own Your Website and Data?',
      "This one matters more than most people realize until it's too late. Some agencies build your website on a locked platform, keep the login credentials, or host it under their own account — so if you ever want to leave, you can't take your website with you. Before you sign anything, ask plainly: will I own the domain, the hosting account, and the website code? Will I have my own Google Analytics and Google Search Console access under my own email? If the answer is vague, treat that as a red flag.",
      '### 3. How Do They Handle SEO — Honestly?',
      "Good SEO is slow, steady, and explainable. If an agency promises page-1 Google rankings in a set number of days, or won't explain in plain language what they're actually doing to your website, be cautious. Real SEO work looks like: fixing technical issues on your site, writing genuinely useful content, building your Google Business Profile properly, and tracking keyword rankings over weeks and months — not overnight tricks.",
      '### 4. Is Reporting Clear, or Just a PDF Dump?',
      "Ask to see a sample report before you commit. A good report should tell you, in plain language, what was done that month and what changed as a result — not just a wall of charts with no explanation. If you can't understand your own marketing report, something is being lost in translation.",
      '### 5. Do They Understand Your Local Market?',
      "Tambaram and the wider Chennai market have their own customer behavior — how people search, which platforms they actually use, what price points feel reasonable locally. An agency that only knows generic, one-size-fits-all playbooks will miss a lot of this. Ask how they'd approach your specific business and neighborhood, not just your industry in general.",
      '- Do they show real, verifiable websites or ad accounts you can check yourself?\n- Will you personally own your domain, hosting, and website code?\n- Do they explain SEO/ads work in plain language, without guaranteeing overnight rankings?\n- Will you get your own Google Analytics and Search Console access?\n- Is their reporting understandable, not just charts with no explanation?\n- Can they speak specifically to your local market, not just generic advice?\n- Is pricing clear upfront, with no vague or hidden add-on costs?',
      '### What My DP Digital Does Differently',
      "We're a Chennai-based agency working with businesses in and around Tambaram on SEO, Google Ads, website design and development, branding, and newer tools like AI chatbots and voice agents. We build every website so the client owns the domain, hosting, and code from day one, and we set up Analytics and Search Console under the client's own account rather than ours. If you're evaluating agencies right now, feel free to use the checklist above on us too — we'd rather earn the work than just claim to be the best.",
      "If you'd like to talk through your specific situation, you can reach us at +91 81483 20217 or deenapriyanka00217@gmail.com.",
    ],
  },
];
