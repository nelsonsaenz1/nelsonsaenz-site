import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { Bullets } from "@/components/ui/Text";
import { BrowserFrame, CaseHero, CaseSection, Chips, FactGrid, NextCase, PhoneFrame, Split, StatStrip, type Shot } from "@/components/case/CaseStudy";
import { links } from "@/lib/content";

export const metadata: Metadata = {
  title: "MetaOrtho — physician-led GLP-1 telehealth, built end to end",
  description:
    "Case study: MetaOrtho, a specialty GLP-1 telehealth practice. Marketing site, branching clinical assessment with tiered scoring, patient portal with a 28-biomarker optimization score, cash-pay booking, and LegitScript-ready compliance. Next.js, Supabase, Vercel.",
  openGraph: { title: "MetaOrtho — case study", description: "Physician-led GLP-1 telehealth, designed and engineered end to end by one person.", images: [{ url: "/metaortho/home.jpg", width: 1440, height: 900 }] },
  alternates: { canonical: "/metaortho" },
};

const shot = (file: string, alt: string, width: number, height: number, caption?: string): Shot => ({ src: `/metaortho/${file}`, alt, width, height, caption });

const home = shot("home.jpg", "metaortho.com home page hero: GLP-1 care should be personalized", 1440, 900);
const assessment = shot("assessment.jpg", "The free GLP-1 Management Profile assessment, first question", 1440, 1420, "Assessment: a branching, clinical-style questionnaire with a progress bar and tiered scoring at the end.");
const book = shot("book.jpg", "Book a specialty GLP-1 consult page with pricing and email capture", 1440, 1060, "Booking: $400 initial consult, $200 follow-ups, with a profile-first nudge and a direct request path.");
const pricing = shot("pricing.jpg", "Pricing page with initial and follow-up consult cards", 1440, 1330, "Pricing: two cards, what's included, what isn't. No insurance billing, FSA/HSA eligible.");
const howItWorks = shot("how-it-works.jpg", "How it works page: an eight-step timeline from free profile to follow-up", 1440, 2300, "How it works: an eight-step timeline from free profile to follow-up and monitoring.");
const portal = shot("portal.jpg", "Patient portal sign-in", 1440, 900, "Patient portal: sign-in, protocol, labs, body composition, and care team.");
const homeMobile = shot("home-mobile.jpg", "metaortho.com home page on a phone", 1000, 1690);
const assessmentMobile = shot("assessment-mobile.jpg", "Assessment on a phone", 860, 1860);

export default function MetaOrthoPage() {
  return (
    <>
      <SiteHeader current="/metaortho" />
      <main id="main">
        <CaseHero
          logo={{ src: "/logos/metaortho-navy.svg", alt: "MetaOrtho monogram" }}
          kicker="Case study · Telehealth platform"
          title="MetaOrtho"
          tagline="A physician-led specialty practice for people starting, taking, or questioning GLP-1 treatment. I designed and engineered the entire product and helped two board-certified physicians launch it from zero."
          meta={[
            ["Role", "Co-founder, product & engineering"],
            ["Timeline", "2025 — now"],
            ["Platform", "Web, Next.js on Vercel"],
            ["Status", "Live, taking patients"],
          ]}
          links={[
            { label: "Visit metaortho.com", href: "https://metaortho.com", primary: true },
            { label: "Source on GitHub", href: "https://github.com/nelsonsaenz1/metaortho" },
          ]}
        >
          <BrowserFrame shot={home} url="metaortho.com" priority />
        </CaseHero>

        <StatStrip
          stats={[
            { n: 28, label: "biomarkers rolled into one 0–100 score" },
            { n: 6, label: "body systems tracked over time" },
            { n: 12, label: "legal and compliance pages, LegitScript-ready" },
            { n: 40, label: "components, about 18k lines of TypeScript" },
          ]}
        />

        <CaseSection eyebrow="The product" title="GLP-1 care should be personalized, not one-size-fits-all." intro="Most GLP-1 telehealth is a prescription funnel. MetaOrtho is the opposite: an orthopedic surgeon and an endocrinologist reviewing candidacy, dose, side effects, and the bone, muscle, and joint consequences nobody else is monitoring.">
          <Split
            aside={
              <Card tone="cream" padding="lg" className="h-full">
                <h3 className="text-xl tracking-[-0.02em] text-ink">What I shipped</h3>
                <Bullets
                  className="mt-5"
                  items={[
                    "Marketing site: home, how it works, pricing, medical team, FAQ, blog, resources, and a sources page for every clinical claim.",
                    "Free GLP-1 Management Profile: a branching assessment that scores candidacy and risk into Standard, Enhanced, and High-Risk management tiers.",
                    "Cash-pay booking and consult request flow with transactional email and a Slack-notified waitlist for states not yet licensed.",
                    "Patient portal: protocol, labs, body composition (DEXA), side-effect tracking, and care team, behind Supabase auth.",
                    "GLP-1 Optimization Score: 28 biomarkers across six body systems rolled into a single 0–100 number that moves visit to visit.",
                    "Compliance: LegitScript certification audit, HIPAA Notice of Privacy Practices, telehealth consent, cookie consent that never loads tracking on health pages, and an accessibility audit.",
                  ]}
                />
              </Card>
            }
          >
            <p>
              MetaOrtho is a telemedicine practice founded with Dr. Jay M. Saenz, a board-certified orthopedic surgeon, and Dr. Kashif Latif, a board-certified
              endocrinologist. The clinical model is theirs. Everything a patient touches on a screen is mine: brand, design system, copy, the assessment logic,
              the booking flow, the portal, the email, the legal pages, and the deploys.
            </p>
            <p>
              The hard part was not the code. It was building something a healthcare compliance reviewer would certify, a nervous first-time patient would trust,
              and two physicians with no product background could run without me on call. Every page carries the disclaimers it needs, every claim has a
              source, and the free assessment is explicitly educational until a licensed clinician is in the loop.
            </p>
            <p>
              The design system on this very site is the one I built for MetaOrtho: warm cream and deep navy, a serif for headings, pill buttons, strong ease-out
              curves, cards that lift on hover.
            </p>
          </Split>
        </CaseSection>

        <CaseSection tone="cream" eyebrow="Screens" title="The patient journey" intro="Captured from the live site. The full flow runs from a free assessment to a booked consult to a longitudinal portal.">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal y={20}>
              <BrowserFrame shot={assessment} url="metaortho.com/assessment" />
            </Reveal>
            <Reveal y={20} delay={0.08}>
              <BrowserFrame shot={book} url="metaortho.com/book" />
            </Reveal>
            <Reveal y={20}>
              <BrowserFrame shot={pricing} url="metaortho.com/pricing" />
            </Reveal>
            <Reveal y={20} delay={0.08}>
              <BrowserFrame shot={portal} url="metaortho.com/portal" />
            </Reveal>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <Reveal y={20}>
              <BrowserFrame shot={howItWorks} url="metaortho.com/how-it-works" />
            </Reveal>
            <Reveal y={20} delay={0.1} className="flex justify-center gap-5 lg:flex-col">
              <PhoneFrame shot={homeMobile} className="w-[200px] sm:w-[230px]" sizes="230px" />
              <PhoneFrame shot={assessmentMobile} className="w-[200px] sm:w-[230px]" sizes="230px" />
            </Reveal>
          </div>
          <Reveal y={8} className="mt-6">
            <p className="text-sm text-[var(--color-text-tertiary)]">Mobile first: most patients arrive from a phone, so every flow was designed at 390px before it was widened.</p>
          </Reveal>
        </CaseSection>

        <CaseSection tone="navy" eyebrow="How it's built" title="A small, auditable stack for a regulated product." intro="Healthcare punishes cleverness. The architecture is deliberately plain so a compliance reviewer or a new engineer can read all of it in an afternoon.">
          <FactGrid
            dark
            facts={[
              {
                h: "Assessment engine",
                p: "A typed question graph with branching, a scoring module that maps answers to tiers and flags, and a test suite over the scoring rules. Telemetry records drop-off per step so the questionnaire can be shortened with evidence.",
              },
              {
                h: "Optimization Score",
                p: "28 biomarkers (labs, DEXA body composition, vitals, side-effect reports) normalised against reference ranges and weighted across six body systems into one 0–100 score, with the per-system breakdown one tap away.",
              },
              {
                h: "Portal and auth",
                p: "Supabase with @supabase/ssr for server-rendered, cookie-based sessions. Protected routes for protocol, labs, body, and care team. No health data is ever placed in a URL or sent to analytics.",
              },
              {
                h: "Email and ops",
                p: "Resend for transactional mail (consult requests, confirmations). A Supabase Edge Function posts new waitlist and consult requests to Slack so the physicians see them without opening a dashboard.",
              },
              {
                h: "Compliance surface",
                p: "Twelve legal pages: privacy, Notice of Privacy Practices, terms, telehealth consent, pharmacy selection, affiliate disclosure, refunds, accessibility, grievances, licensed states, cookies, and sources. Audits live in the repo next to the code.",
              },
              {
                h: "Front end",
                p: "Next.js App Router and React Server Components, Tailwind CSS 4 with a tokenised design system, framer-motion for reveals with reduced-motion fallbacks, and Vercel for previews on every push.",
              },
            ]}
          />
          <Reveal y={12} className="mt-10">
            <Chips dark items={["Next.js 16", "React Server Components", "TypeScript", "Tailwind CSS 4", "framer-motion", "Supabase", "PostgreSQL", "@supabase/ssr", "Edge Functions", "Resend", "Slack", "Vercel", "LegitScript", "HIPAA NPP"]} />
          </Reveal>
        </CaseSection>

        <CaseSection eyebrow="Decisions" title="Three calls I'd make again">
          <FactGrid
            facts={[
              {
                h: "Free profile first, consult second.",
                p: "A free, educational assessment is a far lower ask than a $400 booking. It qualifies patients, gives the physicians a structured brief before the visit, and is the single biggest conversion lever on the site.",
              },
              {
                h: "Compliance as a feature, not a chore.",
                p: "Writing the legal pages, consent flows, and source citations early meant the LegitScript review was a checklist rather than a rewrite, and every marketing claim had to earn its place.",
              },
              {
                h: "One number patients can watch.",
                p: "Twenty-eight biomarkers are noise to a patient. A single 0–100 score that moves visit to visit is something they come back to check, which is the whole point of longitudinal care.",
              },
            ]}
          />
        </CaseSection>

        <NextCase href="/cinch" logo={{ src: "/cinch/icon.png", alt: "Cinch app icon", fit: "cover" }} name="Cinch" tagline="An iOS wardrobe app with a deterministic on-device styling engine. Live on the App Store." />

        <section id="contact" className="relative overflow-hidden bg-navy py-24 text-center text-white md:py-28">
          <div aria-hidden className="dot-grid-dark absolute inset-0 opacity-[0.04]" />
          <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal amount={0.4}>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-white">Building something regulated, clinical, or just hard?</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">I'm happy to walk through the assessment logic, the compliance work, or how the portal is put together.</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={`mailto:${links.email}`} variant="white" size="lg">
                {links.email}
              </Button>
              <Button href="/" variant="outlineLight" size="lg">
                Back to home
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
