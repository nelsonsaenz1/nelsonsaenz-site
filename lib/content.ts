export const links = {
  email: "nelsonjsaenz@gmail.com",
  github: "https://github.com/nelsonsaenz1",
  linkedin: "https://www.linkedin.com/in/nelson-saenz-28502a272/",
  resume: "/Nelson_Saenz_Resume.pdf",
};

export type Project = {
  name: string;
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
    role: "Founder & Product Engineer",
    period: "2026 — now",
    tagline: "An iOS wardrobe app that tells you what to wear from the clothes you actually own.",
    body:
      "Built, shipped, and operate it solo. The styling engine is deterministic and runs on-device: perceptual colour math in OKLCH, a beam search over the closet, and a linear model over named features that learns from every thumbs-up. A language model is used only to read a photo of a garment and write a sentence about a look the engine already chose. Row-level security is the security model, proven by pgTAP tests across four roles. Social layer: shared closets, event outfit voting, borrow requests.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Edge Functions", "EAS", "App Store"],
    links: [{ label: "GitHub", href: "https://github.com/nelsonsaenz1/cinch" }],
    featured: true,
  },
  {
    name: "MetaOrtho",
    role: "Co-Founder · Product & Engineering Lead",
    period: "2025 — now",
    tagline: "Physician-led telehealth for musculoskeletal complications in GLP-1 patients.",
    body:
      "Solely designed and engineered the product end to end: marketing site, branching clinical assessment with tiered risk scoring, patient-portal dashboard, and cash-pay booking and checkout. Built a longitudinal health dashboard that rolls 28 biomarkers across six body systems into a single 0–100 GLP-1 Optimization Score with DEXA, lab, visit, and side-effect tracking. Took the site through LegitScript healthcare certification and helped two board-certified physicians launch from zero.",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel", "LegitScript"],
    links: [
      { label: "Live site", href: "https://metaortho.vercel.app" },
      { label: "GitHub", href: "https://github.com/nelsonsaenz1/metaortho" },
    ],
    featured: true,
  },
  {
    name: "Agentic OS for Office Hours",
    role: "Client Solutions Associate",
    period: "2026 — now",
    tagline: "Turned an expert-network workflow into an AI operating system the whole team adopted.",
    body:
      "Designed and deployed versioned context files, custom skills, and automated document pipelines that turn raw client briefs into platform-ready builds in minutes. Shipped 4 production skills through 11+ versions in 30 days, encoding sourcing methodology, screening standards, and MNPI compliance guardrails. Standardized colleagues' playbooks into shared tooling: outreach template libraries, a merged expert-sourcing skill, and a Notion tracker with auto-computing traction metrics. Won adoption from AI-skeptical teammates by running it on live projects.",
    stack: ["Claude Code", "MCP", "Custom skills", "Notion", "Gmail", "Quo"],
    links: [],
  },
  {
    name: "Soval AI",
    role: "Founder",
    period: "2026",
    tagline: "Done-for-you personal AI assistants and small-business automation.",
    body: "Marketing site plus an Agent Fit Quiz that scopes what an AI assistant could take off a small business owner's plate.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    links: [{ label: "GitHub", href: "https://github.com/nelsonsaenz1/soval-ai" }],
  },
  {
    name: "Glacwell",
    role: "CEO & Founder",
    period: "2026 — now",
    tagline: "An e-commerce operation run by a network of AI agents.",
    body: "Agents handle product research, ad optimization, and daily store operations 24/7, with human oversight limited to a single store manager leading day-to-day staff.",
    stack: ["AI agents", "Ads", "Supply chain"],
    links: [],
  },
  {
    name: "Mastermind",
    role: "Personal infrastructure",
    period: "ongoing",
    tagline: "A 24/7 multi-agent system running on a Mac Mini.",
    body: "Orchestrator, executor, developer, and researcher agents coordinated through a Mission Control dashboard and Discord. Where I work out model selection, prompt caching, Claude Code orchestration with git worktrees, and MCP integrations before they go into products.",
    stack: ["Claude Code", "MCP", "Hermes", "git worktrees"],
    links: [],
  },
];

export const experience = [
  { company: "Cinch", role: "Founder & Product Engineer", period: "2026 — Present", where: "New York" },
  { company: "Office Hours", role: "Client Solutions Associate", period: "2026 — Present", where: "New York" },
  { company: "MetaOrtho", role: "Co-Founder, Product & Engineering Lead", period: "2025 — Present", where: "Remote" },
  { company: "Glacwell", role: "CEO & Founder", period: "2026 — Present", where: "Dallas" },
  { company: "Better Brain", role: "Start-up Intern", period: "Summer 2025", where: "New York" },
  { company: "Broadway Bank", role: "Private Wealth Management Intern", period: "Summer 2025", where: "San Antonio" },
  { company: "Hey! Food is Ready", role: "Summer Intern", period: "Summer 2024", where: "London" },
];

export const stack = {
  "Build": ["React Native", "Expo", "Next.js", "TypeScript", "Tailwind"],
  "Data": ["Supabase", "PostgreSQL", "Row-level security", "Edge Functions", "pgTAP"],
  "Ship": ["EAS", "CI", "TestFlight", "App Store", "Vercel"],
  "AI": ["Claude Code", "MCP", "Custom skills", "Structured outputs", "Evals", "Multi-agent orchestration"],
  "Business": ["Financial modeling (DCF, LBO, comps)", "Subscription analytics", "Client solutions"],
};
