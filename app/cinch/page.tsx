import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { Bullets } from "@/components/ui/Text";
import { BrowserFrame, CaseHero, CaseSection, Chips, FactGrid, NextCase, PhoneFrame, PhoneStrip, Split, StatStrip, type Shot } from "@/components/case/CaseStudy";
import { links } from "@/lib/content";

const appStore = "https://apps.apple.com/us/app/cinch-outfit-planner-closet/id6798479578";

export const metadata: Metadata = {
  title: "Cinch — iOS outfit planner, built and shipped solo",
  description:
    "Case study: Cinch, an iOS wardrobe app on the App Store. Deterministic on-device styling engine (OKLCH colour maths, beam search, learned preferences), Supabase with row-level security proven by pgTAP, Expo and EAS releases.",
  openGraph: { title: "Cinch — case study", description: "An iOS wardrobe app that tells you what to wear from the clothes you own. Built, shipped, and operated solo.", images: [{ url: "/cinch/screen-1.jpg", width: 552, height: 1200 }] },
  alternates: { canonical: "/cinch" },
};

const phone = (n: number, alt: string, caption: string): Shot => ({ src: `/cinch/screen-${n}.jpg`, alt, caption, width: 552, height: 1200 });

const screens: Shot[] = [
  phone(1, "Cinch Today screen showing the morning outfit with weather and calendar context", "Today: one outfit, with the weather and the day it was built for"),
  phone(2, "Cinch onboarding explaining that ten pieces is enough for a wardrobe", "Start with ten pieces, not your whole closet"),
  phone(3, "Cinch Closet grid with 84 active items filtered by category", "Closet: every piece tagged and searchable"),
  phone(4, "Cinch stylist chat answering a question about what to wear", "Stylist: ask in plain words, get outfits from your own clothes"),
  phone(5, "Cinch Friends screen with an event and outfit options to vote on", "Friends: post the dinner, everyone pins options, everyone votes"),
  phone(6, "Cinch Plan screen with a calendar of upcoming outfits", "Plan: outfits on the calendar, packing lists for trips"),
];

const web: Shot = { src: "/cinch/web.jpg", alt: "cinchstyle.com marketing site", width: 1440, height: 1250 };

export default function CinchPage() {
  return (
    <>
      <SiteHeader current="/cinch" />
      <main id="main">
        <CaseHero
          logo={{ src: "/cinch/icon.png", alt: "Cinch app icon", fit: "cover" }}
          kicker="Case study · iOS app"
          title="Cinch"
          tagline="An iOS wardrobe app that tells you what to wear from the clothes you actually own. I built it, shipped it to the App Store, and run it."
          meta={[
            ["Role", "Founder, sole engineer"],
            ["Timeline", "2026 — now"],
            ["Platform", "iOS 17+, App Store"],
            ["Status", "Live, v1.2.6"],
          ]}
          links={[
            { label: "Download on the App Store", href: appStore, primary: true },
            { label: "cinchstyle.com", href: "https://cinchstyle.com" },
            { label: "Source on GitHub", href: "https://github.com/nelsonsaenz1/cinch" },
          ]}
        >
          <div className="mx-auto flex max-w-sm justify-center gap-4 lg:max-w-none">
            <PhoneFrame shot={{ ...screens[0], caption: undefined }} priority className="w-[220px] sm:w-[250px]" sizes="250px" />
            <PhoneFrame shot={{ ...screens[2], caption: undefined }} priority className="mt-12 hidden w-[220px] sm:block sm:w-[250px]" sizes="250px" />
          </div>
        </CaseHero>

        <StatStrip
          stats={[
            { n: 1258, label: "unit tests on the pure logic" },
            { n: 277, label: "pgTAP tests across four database roles" },
            { n: 123, label: "migrations, applied in order, never edited" },
            { n: 21, label: "Supabase Edge Functions in production" },
          ]}
        />

        <CaseSection eyebrow="The product" title="Ten pieces is a wardrobe." intro="Every wardrobe app asks you to photograph your whole closet, and almost nobody finishes. Cinch asks for ten pieces and starts dressing you from there.">
          <Split
            aside={
              <Card tone="cream" padding="lg" className="h-full">
                <h3 className="text-xl tracking-[-0.02em] text-ink">What it does</h3>
                <Bullets
                  className="mt-5"
                  items={[
                    "Photograph a garment; a model tags it (category, colour, fabric, formality) and the closet grows.",
                    "Every morning: one outfit for today's forecast and calendar, with the reason it was chosen.",
                    "Thumbs up or down and the engine learns your taste as named feature weights, not a black box.",
                    "Ask the stylist in plain words: \"client dinner at seven, drinks at ten\" gets one outfit that carries both.",
                    "Friends: post an event, invite people, everyone pins options from their own closet and votes. Borrow the piece you don't own.",
                    "Plan ahead with a calendar of outfits and packing lists; see what you actually wear and what has sat untouched since March.",
                  ]}
                />
              </Card>
            }
          >
            <p>
              Cinch is a consumer iOS app, free on the App Store with two subscription tiers. I own every part of it: product, design, the React Native
              codebase, the Postgres schema, the AI pipeline, the paywall, analytics, and each TestFlight and App Store release.
            </p>
            <p>
              The decision that shaped everything else: <strong className="font-semibold text-ink">the styling is not an API call.</strong> Outfit generation is a
              deterministic engine that runs on the phone. It works offline, it costs nothing per outfit, and every recommendation decomposes into a reason
              you can argue with. A language model is used only for the two things it is genuinely better at: reading a photograph of a garment, and writing a
              sentence about a look the engine already chose.
            </p>
            <p>
              The same discipline holds for the social layer. Every outfit a friend votes on is real, from a real closet, judged only against that person's other
              options. No leaderboard, no strangers, no feed of clothes nobody owns.
            </p>
          </Split>
        </CaseSection>

        <section className="relative bg-cream py-24 md:py-32">
          <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <Reveal className="mb-12 max-w-3xl" amount={0.3}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">Screens</p>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] text-ink">The app, as shipped</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">App Store screenshots from the current release. Swipe through on mobile.</p>
            </Reveal>
            <PhoneStrip shots={screens} />
          </div>
        </section>

        <CaseSection tone="navy" eyebrow="How it's built" title="Deterministic where it matters, a model only where it earns its keep." intro="Production details an engineer would ask about.">
          <FactGrid
            dark
            facts={[
              {
                h: "On-device styling engine",
                p: "Garments are projected into OKLCH, a colour space where equal numeric steps look like equal steps to a human eye. Harmony, contrast, and vividness are distance judgements in that space. A beam search over the closet builds the shortlist in milliseconds, offline.",
              },
              {
                h: "Learning you can read",
                p: "Preferences are a linear model over named features (hue family, formality, layering, what you reach for). Every thumbs-up nudges weights you could print out. No embeddings, no retraining, nothing that can drift silently.",
              },
              {
                h: "LLM for two jobs only",
                p: "Garment tagging from a photo and a one-sentence reason for an outfit the engine already chose. Structured outputs, fallback models, per-user usage limits, and a cost of roughly $0.0005 per garment tagged.",
              },
              {
                h: "Row-level security as the security model",
                p: "Every table carries RLS policies; the app talks to Postgres directly through Supabase. 27 pgTAP files (277 tests) prove the policies for anonymous, authenticated, friend, and service roles on every migration.",
              },
              {
                h: "Boring, correct writes",
                p: "Transactional writes, idempotent commands keyed by client-generated IDs, subscription reconciliation against the Superwall webhook, and offline recovery so a flaky connection never duplicates or loses an outfit.",
              },
              {
                h: "Shipping",
                p: "Expo SDK 57 with EAS builds, TestFlight for every release candidate, append-only migrations (123 so far), 257 unit test files on the pure logic, and a 14-day trial enforced server-side rather than trusted from the client.",
              },
            ]}
          />
          <Reveal y={12} className="mt-10">
            <Chips dark items={["React Native", "Expo SDK 57", "TypeScript", "expo-router", "Zod at every boundary", "Supabase", "PostgreSQL", "Row-level security", "pgTAP", "Deno Edge Functions", "OpenRouter", "Superwall", "EAS", "TestFlight"]} />
          </Reveal>
        </CaseSection>

        <CaseSection eyebrow="Decisions" title="Three calls I'd make again">
          <FactGrid
            facts={[
              {
                h: "Ten, not everything.",
                p: "A smaller onboarding ask is the whole growth strategy. Pieces multiply rather than add, so ten garments already produce a real run of outfits, and people finish setup.",
              },
              {
                h: "Reasons, not verdicts.",
                p: "The scoring pass hands its reasoning to the model as fact. What you read describes what actually happened, which is why users trust a thumbs-down to change something.",
              },
              {
                h: "Private by default.",
                p: "Cinch never reads the photo library; iOS shows its own picker. Coordinates are rounded to half a mile before they leave the phone and never stored. No advertising SDK in the app at all.",
              },
            ]}
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal y={16}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">Marketing site</p>
              <h3 className="text-3xl tracking-[-0.02em] text-ink">cinchstyle.com</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                A deliberately quiet landing page: the argument for the product in prose, a waitlist, and the privacy policy. Same serif, same restraint as the
                app.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="https://cinchstyle.com" target="_blank" rel="noreferrer" variant="primary" size="sm">
                  Visit the site
                </Button>
                <Button href={appStore} target="_blank" rel="noreferrer" variant="ghost" size="sm">
                  App Store listing
                </Button>
              </div>
            </Reveal>
            <Reveal y={20} delay={0.1}>
              <BrowserFrame shot={web} url="cinchstyle.com" />
            </Reveal>
          </div>
        </CaseSection>

        <NextCase href="/metaortho" logo={{ src: "/logos/metaortho-navy.svg", alt: "MetaOrtho monogram" }} name="MetaOrtho" tagline="Physician-led GLP-1 telehealth, designed and engineered end to end." />

        <section id="contact" className="relative overflow-hidden bg-navy py-24 text-center text-white md:py-28">
          <div aria-hidden className="dot-grid-dark absolute inset-0 opacity-[0.04]" />
          <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal amount={0.4}>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-white">Want to talk through how any of this works?</h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">The code is public. Happy to walk through the engine, the RLS test suite, or the release process.</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={links.phoneHref} variant="white" size="lg">
                Call or text {links.phone}
              </Button>
              <Button href={`mailto:${links.email}`} variant="outlineLight" size="lg">
                {links.email}
              </Button>
            </Reveal>
            <Reveal delay={0.25} y={0} className="mt-6">
              <Link href="/" className="text-sm text-white/55 transition-colors hover:text-white">
                ← Back to home
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
