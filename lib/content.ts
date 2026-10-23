export const links = {
  email: "nelsonjsaenz@gmail.com",
  phone: "(901) 831-0311",
  phoneHref: "tel:+19018310311",
  smsHref: "sms:+19018310311",
  github: "https://github.com/nelsonsaenz1",
  linkedin: "https://www.linkedin.com/in/nelson-saenz-28502a272/",
  resume: "/Nelson_Saenz_Resume.pdf",
  site: "https://nelsonsaenz.vercel.app",
};

export type Logo = {
  src: string;
  alt: string;
  /** cover: the image is already a tile (app icon). contain: pad it inside a white tile. */
  fit?: "cover" | "contain";
};

export type Project = {
  name: string;
  logo?: Logo;
  initials?: string;
  /** Internal case-study route. */
  caseStudy?: string;
  role: string;
  period: string;
  tagline: string;
  body: string;
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Cinch",
    logo: { src: "/cinch/icon.png", alt: "Cinch app icon", fit: "cover" },
    caseStudy: "/cinch",
    role: "Founder & Product Engineer",
    period: "2026 — now",
    tagline: "An iOS wardrobe app that tells you what to wear from the clothes you actually own.",
    body:
      "Built, shipped, and operate it solo. The styling engine is deterministic and runs on-device: perceptual colour math in OKLCH, a beam search over the closet, and a linear model over named features that learns from every thumbs-up. A language model is used only to read a photo of a garment and write a sentence about a look the engine already chose. Row-level security is the security model, proven by pgTAP tests across four roles. Social layer: shared closets, event outfit voting, borrow requests.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Edge Functions", "EAS", "App Store"],
    links: [
      { label: "cinchstyle.com", href: "https://cinchstyle.com" },
      { label: "GitHub", href: "https://github.com/nelsonsaenz1/cinch" },
    ],
    featured: true,
  },
  {
    name: "MetaOrtho",
    logo: { src: "/logos/metaortho-navy.svg", alt: "MetaOrtho monogram" },
    caseStudy: "/metaortho",
    role: "Co-Founder · Product & Engineering Lead",
    period: "2025 — now",
    tagline: "Physician-led telehealth for musculoskeletal complications in GLP-1 patients.",
    body:
      "Solely designed and engineered the product end to end: marketing site, branching clinical assessment with tiered risk scoring, patient-portal dashboard, and cash-pay booking and checkout. Built a longitudinal health dashboard that rolls 28 biomarkers across six body systems into a single 0–100 GLP-1 Optimization Score with DEXA, lab, visit, and side-effect tracking. Took the site through LegitScript healthcare certification and helped two board-certified physicians launch from zero.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel", "LegitScript"],
    links: [
      { label: "metaortho.com", href: "https://metaortho.com" },
      { label: "GitHub", href: "https://github.com/nelsonsaenz1/metaortho" },
    ],
    featured: true,
  },
  {
    name: "Internal tooling at Office Hours",
    logo: { src: "/logos/officehours.svg", alt: "Office Hours logo" },
    role: "Client Solutions Associate",
    period: "2026 — now",
    tagline: "Small AI-assisted tools that take repetitive steps out of expert-network project work.",
    body:
      "Alongside the day job: reusable prompts and document templates that help turn a client brief into a structured project setup, shared outreach templates, and a simple Notion tracker. Built for my own workflow first and shared with teammates where it was useful.",
    stack: ["Claude Code", "Custom skills", "Notion"],
    links: [],
  },
  {
    name: "Soval AI",
    initials: "S",
    role: "Founder",
    period: "2026",
    tagline: "Done-for-you personal AI assistants and small-business automation.",
    body: "Marketing site plus an Agent Fit Quiz that scopes what an AI assistant could take off a small business owner's plate.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    links: [
      { label: "Live site", href: "https://soval-ai.vercel.app" },
      { label: "GitHub", href: "https://github.com/nelsonsaenz1/soval-ai" },
    ],
  },
  {
    name: "Glacwell",
    initials: "G",
    role: "CEO & Founder",
    period: "2026 — now",
    tagline: "An e-commerce operation run by a network of AI agents.",
    body: "Agents handle product research, ad optimization, and daily store operations 24/7, with human oversight limited to a single store manager leading day-to-day staff.",
    stack: ["AI agents", "Ads", "Supply chain"],
    links: [],
  },
  {
    name: "Mastermind",
    initials: "M",
    role: "Personal infrastructure",
    period: "ongoing",
    tagline: "A 24/7 multi-agent system running on a Mac Mini.",
    body: "Orchestrator, executor, developer, and researcher agents coordinated through a Mission Control dashboard and Discord. Where I work out model selection, prompt caching, Claude Code orchestration with git worktrees, and MCP integrations before they go into products.",
    stack: ["Claude Code", "MCP", "Hermes", "git worktrees"],
    links: [],
  },
];

export type Experience = {
  company: string;
  logo?: Logo;
  initials?: string;
  /** Internal case-study route. */
  caseStudy?: string;
  role: string;
  period: string;
  where: string;
  highlights: string[];
  href?: string;
};

export const experience: Experience[] = [
  {
    company: "Cinch",
    logo: { src: "/cinch/icon.png", alt: "Cinch app icon", fit: "cover" },
    caseStudy: "/cinch",
    role: "Founder & Product Engineer",
    period: "2026 — Present",
    where: "New York",
    href: "https://cinchstyle.com",
    highlights: [
      "Built, shipped, and operate a production consumer iOS styling app end to end: React Native, Expo, TypeScript, Supabase/PostgreSQL, AI systems, subscriptions, analytics, and App Store releases.",
      "Engineered a closet-grounded AI styling system with structured outputs, fallback models, usage limits, and cost controls in production.",
      "Implemented row-level security, transactional writes, idempotent commands, subscription reconciliation, and offline recovery; manage migrations and TestFlight/App Store releases.",
    ],
  },
  {
    company: "Office Hours",
    logo: { src: "/logos/officehours.svg", alt: "Office Hours logo" },
    href: "https://officehours.com",
    role: "Client Solutions Associate",
    period: "2026 — Present",
    where: "New York",
    highlights: [
      "Run expert-network projects end to end for investor and corporate clients: scoping briefs, sourcing and screening experts, and coordinating calls.",
      "Built AI-assisted templates and a project tracker for my own workflow and shared them with teammates where they helped.",
    ],
  },
  {
    company: "MetaOrtho",
    logo: { src: "/logos/metaortho-navy.svg", alt: "MetaOrtho monogram" },
    caseStudy: "/metaortho",
    role: "Co-Founder, Product & Engineering Lead",
    period: "2025 — Present",
    where: "Remote",
    href: "https://metaortho.com",
    highlights: [
      "Solely designed, engineered, and shipped a physician-led GLP-1 telehealth product: marketing site, branching clinical assessment with tiered risk scoring, patient portal, and cash-pay booking and checkout.",
      "Built a longitudinal health dashboard that rolls 28 biomarkers across six body systems into a single 0–100 score with DEXA, lab, visit, and side-effect tracking.",
    ],
  },
  {
    company: "Glacwell",
    initials: "G",
    role: "CEO & Founder",
    period: "2026 — Present",
    where: "Dallas",
    highlights: [
      "Founded an autonomous e-commerce operation run by AI agents that handle product research, ad optimization, and daily store operations, with a single store manager providing human oversight.",
    ],
  },
  {
    company: "Better Brain",
    logo: { src: "/logos/betterbrain-icon.png", alt: "Better Brain logo" },
    role: "Start-up Intern",
    period: "Jul — Aug 2025",
    where: "New York",
    highlights: [
      "Built and launched a complete e-commerce storefront from scratch and sourced 15+ manufacturers and wholesalers to stand up supplement manufacturing and fulfillment.",
    ],
  },
  {
    company: "Broadway Bank",
    logo: { src: "/logos/broadwaybank.svg", alt: "Broadway Bank logo" },
    role: "Private Wealth Management Intern",
    period: "May — Jul 2025",
    where: "San Antonio",
    highlights: [
      "Built custom portfolio models in Fi-Tek GWES, trained portfolio managers on them, and introduced AI-driven strategy and model creation to support a $3.6B asset allocation meeting.",
    ],
  },
  {
    company: "Hey! Food is Ready",
    logo: { src: "/logos/heyfood.png", alt: "Hey! Food is Ready logo" },
    role: "Summer Intern",
    period: "Jul — Aug 2024",
    where: "London",
    highlights: [
      "Generated 20% additional revenue by expanding the client base through market analysis and outreach; worked with the CEO on the business model and second-round investor materials.",
    ],
  },
];

export const education = {
  logo: { src: "/logos/smu-mustang.svg", alt: "SMU Mustang logo" } as Logo,
  wordmark: { src: "/logos/smu-wordmark.svg", alt: "Southern Methodist University" } as Logo,
  school: "Southern Methodist University, Cox School of Business",
  degree: "BBA, Finance",
  graduation: "May 2026",
  where: "Dallas, TX",
  details: [
    "3.80 / 4.00 cumulative GPA, maintained while founding two companies and completing four internships",
    "EnCap Investments & LCM Group Alternative Asset Management Center Program, a selective alternative-asset honors program",
    "Second Century Scholar, awarded to select first-year students for academics, character, and achievement",
    "Finance Club · Private Equity & Venture Capital Club · Sigma Alpha Epsilon",
  ],
};

export const certifications = [
  "Wall Street Prep Financial & Valuation Modeling (DCF, M&A, LBO, Trading Comps)",
];

export const stack = {
  "Build": ["React Native", "Expo", "Next.js", "TypeScript", "Tailwind"],
  "Data": ["Supabase", "PostgreSQL", "Row-level security", "Edge Functions", "pgTAP"],
  "Ship": ["EAS", "CI", "TestFlight", "App Store", "Vercel"],
  "AI": ["Claude Code", "MCP", "Custom skills", "Structured outputs", "Evals", "Multi-agent orchestration"],
  "Business": ["Financial modeling (DCF, LBO, comps)", "Subscription analytics", "Client solutions"],
};

/** Shown under the hero and in the footer so the site never looks abandoned. Update the date when you touch content. */
export const updated = "October 2026";

export const now = [
  "Shipping Cinch updates to the App Store",
  "Running MetaOrtho in production",
  "Client solutions at Office Hours by day",
];
