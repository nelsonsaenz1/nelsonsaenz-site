import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import ContactSection from "@/components/site/ContactSection";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";
import { Bullets } from "@/components/ui/Text";
import { BrowserFrame, CaseHero, CaseSection, Chips, FactGrid, NextCase, PhoneFrame, Split, StatStrip, VideoFrame, type Shot } from "@/components/case/CaseStudy";

export const metadata: Metadata = {
  title: "MetaOrtho — a physician-led GLP-1 care platform, built end to end",
  description:
    "Case study: MetaOrtho, a GLP-1 care platform built with two physicians. Branching clinical assessment with tiered scoring, patient portal with a 28-biomarker optimization score, and twelve compliance pages. Built, not launched. Next.js, Supabase, Vercel.",
  openGraph: { title: "MetaOrtho — case study", description: "A GLP-1 care platform built with two physicians. Built, not launched.", images: [{ url: "/metaortho/home.jpg", width: 1440, height: 900 }] },
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
          kicker="Case study · Care platform"
          title="MetaOrtho"
          tagline="A GLP-1 care platform I built with my dad, who is an orthopedic surgeon, and an endocrinologist. The clinical model is theirs. Everything on the screen is mine. We never launched it to patients, so this page is about the build."
          meta={[
            ["Role", "Co-founder, product & engineering"],
            ["Timeline", "2025 — now"],
            ["Platform", "Web, Next.js on Vercel"],
            ["Status", "Built, not launched"],
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
            { n: 12, label: "legal and compliance pages" },
            { n: 40, label: "components, about 18k lines of TypeScript" },
          ]}
        />

        <CaseSection eyebrow="The product" title="GLP-1 care should be personalized, not one-size-fits-all." intro="Most GLP-1 telehealth is a prescription funnel. MetaOrtho was designed as the opposite: an orthopedic surgeon and an endocrinologist reviewing candidacy, dose, side effects, and the bone, muscle, and joint consequences nobody else is monitoring.">
          <Split
            aside={
              <Card tone="cream" padding="lg" className="h-full">
                <h3 className="text-xl tracking-[-0.02em] text-ink">What I built</h3>
                <Bullets
                  className="mt-5"
                  items={[
                    "Marketing site: home, how it works, pricing, medical team, FAQ, blog, resources, and a sources page for every clinical claim.",
                    "Free GLP-1 Management Profile: a branching assessment that scores candidacy and risk into Standard, Enhanced, and High-Risk management tiers.",
                    "Cash-pay booking and consult request flow with transactional email and a Slack-notified waitlist for states not yet licensed.",
                    "Patient portal: protocol, labs, body composition (DEXA), side-effect tracking, and care team, behind Supabase auth.",
                    "GLP-1 Optimization Score: 28 biomarkers across six body systems rolled into a single 0–100 number that moves visit to visit.",
                    "Twelve compliance pages, including privacy, telehealth consent and accessibility.",
                  ]}
                />
              </Card>
            }
          >
            <p>
              MetaOrtho is a GLP-1 care platform I built with Dr. Jay M. Saenz, a board-certified orthopedic surgeon, and Dr. Kashif Latif, a board-certified
              endocrinologist. The clinical model is theirs. Everything on the screen is mine: brand, design system, copy, the assessment logic,
              the booking flow, the portal, the email, the legal pages, and the deploys.
            </p>
            <p>
              The scoring is a typed question graph with plain rules. No trained model. I revised it with both physicians until they trusted what it said. Every page carries the disclaimers it needs, every claim has a
              source, and the free assessment is explicitly educational until a licensed clinician is in the loop.
            </p>
            <p>
              The design system on this very site is the one I built for MetaOrtho: warm cream and deep navy, a serif for headings, pill buttons, strong ease-out
              curves, cards that lift on hover.
            </p>
          </Split>
        </CaseSection>

        <CaseSection tone="cream" eyebrow="Screens" title="The patient journey" intro="Screens from the build. The assessment demo is open if you want to try it. The full flow runs from a free assessment to a booked consult to a longitudinal portal.">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:items-center">
            <Reveal y={20}>
              <VideoFrame src="/metaortho/assessment-flow.mp4" poster="/metaortho/assessment-flow-poster.jpg" url="metaortho.com/assessment" label="Screen recording of the GLP-1 Management Profile assessment: answering age, sex, height, weight, and GLP-1 history questions as the progress bar advances" />
            </Reveal>
            <Reveal y={16} delay={0.1}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">In motion</p>
              <h3 className="text-3xl tracking-[-0.02em] text-ink">The assessment, as a patient sees it</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                One question per screen, a single tap to answer, and the next question slides in before the hand leaves the phone. Branching logic decides
                what to ask next, so nobody sees a question that does not apply to them.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                Recorded in October 2026 with example answers.
              </p>
            </Reveal>
          </div>
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
            <Reveal y={20} delay={0.1} className="flex justify-center gap-4 sm:gap-5 lg:flex-col">
              <PhoneFrame shot={homeMobile} className="min-w-0 max-w-[230px] flex-1 lg:w-[230px] lg:flex-none" sizes="230px" />
              <PhoneFrame shot={assessmentMobile} className="min-w-0 max-w-[230px] flex-1 lg:w-[230px] lg:flex-none" sizes="230px" />
            </Reveal>
          </div>
          <Reveal y={8} className="mt-6">
            <p className="text-sm text-[var(--color-text-tertiary)]">Mobile first: every flow was designed at 390px before it was widened.</p>
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
            <Chips dark items={["Next.js 16", "React Server Components", "TypeScript", "Tailwind CSS 4", "framer-motion", "Supabase", "PostgreSQL", "@supabase/ssr", "Edge Functions", "Resend", "Slack", "Vercel", "HIPAA NPP"]} />
          </Reveal>
        </CaseSection>

        <CaseSection eyebrow="Decisions" title="Three decisions">
          <FactGrid
            facts={[
              {
                h: "Free profile first, consult second.",
                p: "A free assessment is a much smaller ask than a paid consult, and it hands the physician a structured brief before the visit.",
              },
              {
                h: "Compliance as a feature, not a chore.",
                p: "Writing the legal pages, consent flows, and source citations early meant every marketing claim had to earn its place.",
              },
              {
                h: "One number patients can watch.",
                p: "One number is easier to follow than twenty-eight.",
              },
            ]}
          />
        </CaseSection>

        <NextCase href="/cinch" logo={{ src: "/cinch/icon.png", alt: "Cinch app icon", fit: "cover" }} name="Cinch" tagline="An iOS wardrobe app with a deterministic on-device styling engine. Live on the App Store." />

        <ContactSection backHome />
      </main>
      <SiteFooter />
    </>
  );
}
