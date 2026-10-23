import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";
import AnimatedNumber from "@/components/motion/AnimatedNumber";
import { certifications, education, experience, links, projects, stack } from "@/lib/content";

const nav = [
  ["Work", "#work"],
  ["How I work", "#how"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">{children}</p>;
}

function SectionHeading({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <Reveal className="mb-14 max-w-3xl md:mb-16" amount={0.3}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`text-[clamp(2rem,4.5vw,3.25rem)] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/80" : "text-[var(--color-text-secondary)]"}`}>{intro}</p>}
    </Reveal>
  );
}

function Bullets({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className={`space-y-2.5 text-[15px] leading-relaxed ${dark ? "text-white/80" : "text-[var(--color-text-secondary)]"}`}>
      {items.map((h) => (
        <li key={h} className="flex gap-3">
          <span aria-hidden className={`mt-[0.65em] size-1.5 shrink-0 rounded-full ${dark ? "bg-sky" : "bg-accent"}`} />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

const Arrow = () => (
  <span aria-hidden className="inline-block transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)] group-hover:translate-x-0.5">
    ↗
  </span>
);

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#" className="font-serif text-xl tracking-[-0.02em] text-white">
            Nelson Saenz
          </a>
          <nav className="hidden gap-7 text-sm text-white/70 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)] hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href={`mailto:${links.email}`} variant="white" size="sm">
              Get in touch
            </Button>
          </div>
          <a href="#contact" className="text-sm text-white/80 md:hidden">
            Contact
          </a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy pt-20 text-white">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-[-20%] h-[70vw] w-[70vw] rounded-full bg-accent/10 blur-[160px]" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-teal/10 blur-[140px]" />
          </div>
          <div aria-hidden className="dot-grid-dark absolute inset-0 opacity-[0.04]" />

          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-24 pt-14 text-center sm:px-8 lg:px-12">
            <Reveal onMount y={12} duration={0.6}>
              <Image
                src="/headshot.jpg"
                alt="Nelson Saenz"
                width={566}
                height={566}
                priority
                className="mx-auto size-28 rounded-full object-cover ring-1 ring-white/15 shadow-[0_0_60px_rgba(42,111,151,0.35)] sm:size-36"
              />
            </Reveal>
            <Reveal onMount y={12} delay={0.1} duration={0.6} className="mt-8 inline-flex">
              <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                <span className="size-1.5 animate-pulse rounded-full bg-success" />
                Open to product engineering roles · New York
              </span>
            </Reveal>
            <Reveal onMount y={24} delay={0.2} duration={0.9}>
              <h1 className="mx-auto mt-8 max-w-4xl text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.02] tracking-[-0.04em] text-white">
                I build AI-native products end to end, <span className="text-sky">then run them in production.</span>
              </h1>
            </Reveal>
            <Reveal onMount y={20} delay={0.35} duration={0.8}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed tracking-[-0.01em] text-white/80 md:text-xl">
                Product engineer and founder. Solo-shipped a consumer iOS app to the App Store, engineered a physician-led
                telehealth platform from zero, and turned my day job at an expert network into an agentic AI system the whole
                team uses. Finance background, so I care about conversion and retention as much as the code.
              </p>
            </Reveal>
            <Reveal onMount y={16} delay={0.5} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="#work" variant="white" size="lg">
                See the work
              </Button>
              <Button href={links.resume} variant="outlineLight" size="lg">
                Resume (PDF)
              </Button>
            </Reveal>
            <Reveal onMount y={0} delay={0.7} duration={0.6} className="mt-8 flex justify-center gap-6 text-sm text-white/55">
              <a href={links.github} target="_blank" rel="noreferrer" className="group transition-colors hover:text-white">
                GitHub <Arrow />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="group transition-colors hover:text-white">
                LinkedIn <Arrow />
              </a>
              <a href={`mailto:${links.email}`} className="transition-colors hover:text-white">
                {links.email}
              </a>
            </Reveal>
          </div>
        </section>

        {/* Proof strip */}
        <section className="relative bg-cream py-16 md:py-20">
          <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {[
              { n: 3, label: "products shipped solo" },
              { n: 900, suffix: "+", label: "GitHub contributions, last 12 months" },
              { n: 28, label: "biomarkers in one 0–100 score" },
              { text: "hrs → min", label: "project setup at Office Hours" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} y={16} amount={0.4}>
                <Card padding="md" hover={false} className="h-full">
                  <p className="font-serif text-4xl tracking-[-0.03em] text-ink">
                    {"n" in s && s.n !== undefined ? <AnimatedNumber value={s.n} suffix={s.suffix} /> : s.text}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-tertiary)]">{s.label}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="relative scroll-mt-20 bg-white py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <SectionHeading
              eyebrow="Work"
              title="Things I built and operate"
              intro="Two products in production with real users, plus the systems I use to build them."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {featured.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.1} y={24}>
                  <Card tone="cream" padding="lg" className="flex h-full flex-col">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-2xl tracking-[-0.02em] text-ink">{p.name}</h3>
                      <span className="text-xs text-[var(--color-text-tertiary)]">{p.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">{p.role}</p>
                    <p className="mt-5 text-lg leading-snug text-ink">{p.tagline}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{p.body}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-[var(--radius-pill)] border border-line bg-white px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                          {s}
                        </li>
                      ))}
                    </ul>
                    {p.links.length > 0 && (
                      <div className="mt-7 flex flex-wrap gap-3">
                        {p.links.map((l, j) => (
                          <Button key={l.href} href={l.href} target="_blank" rel="noreferrer" variant={j === 0 ? "primary" : "ghost"} size="sm">
                            {l.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </Card>
                </Reveal>
              ))}
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08} y={20}>
                  <Card padding="md" className="flex h-full flex-col">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-xl tracking-[-0.02em] text-ink">{p.name}</h3>
                      <span className="text-xs text-[var(--color-text-tertiary)]">{p.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent">{p.role}</p>
                    <p className="mt-4 text-[15px] leading-snug text-ink">{p.tagline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{p.body}</p>
                    {p.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-4">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="group text-sm font-medium text-accent underline-offset-4 hover:underline">
                            {l.label} <Arrow />
                          </a>
                        ))}
                      </div>
                    )}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How I work */}
        <section id="how" className="relative scroll-mt-20 bg-cream py-24 md:py-32">
          <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <SectionHeading eyebrow="How I work" title="Find the slow, manual part. Build the system that removes it. Prove it until the team adopts it." />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  h: "AI as a force multiplier, not an excuse.",
                  p: "I use agents for parallel research, isolated worktrees, and verification, and I keep ownership of architecture, QA, product, and releases. The Cinch styling engine is deterministic and on-device; the model only does what it's actually better at.",
                },
                {
                  h: "Production over demos.",
                  p: "Row-level security with pgTAP tests, idempotent commands, subscription reconciliation, offline recovery, append-only migrations. Things that are boring until they aren't.",
                },
                {
                  h: "Adoption is the metric.",
                  p: "At Office Hours I didn't pitch AI. I ran it on live projects, showed the hours saved, and standardized it so an AI-skeptical team could use it without me in the loop.",
                },
              ].map((item, i) => (
                <Reveal key={item.h} delay={i * 0.08} y={16} amount={0.3}>
                  <Card padding="md" className="h-full">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="size-2 rounded-full bg-accent" />
                      <h3 className="text-xl tracking-[-0.02em] text-ink">{item.h}</h3>
                    </div>
                    <p className="pl-5 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{item.p}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="relative scroll-mt-20 overflow-hidden bg-navy py-24 text-white md:py-32">
          <div aria-hidden className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <SectionHeading eyebrow="Stack" title="What I reach for" dark />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {Object.entries(stack).map(([k, v], i) => (
                <Reveal key={k} delay={i * 0.06} y={16} amount={0.3}>
                  <h3 className="text-lg text-white">{k}</h3>
                  <ul className="mt-4 space-y-2 text-[15px] text-white/75">
                    {v.map((s) => (
                      <li key={s} className="flex gap-3">
                        <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-sky" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 bg-white py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <SectionHeading eyebrow="Experience" title="Where I've worked" />
            <ol className="divide-y divide-line border-y border-line">
              {experience.map((e, i) => (
                <Reveal key={e.company + e.role} delay={Math.min(i, 3) * 0.05} y={16} amount={0.2}>
                  <li className="grid gap-4 py-8 sm:grid-cols-[1fr_2fr] sm:gap-10">
                    <div>
                      <h3 className="text-2xl tracking-[-0.02em] text-ink">
                        {e.href ? (
                          <a href={e.href} target="_blank" rel="noreferrer" className="group underline-offset-4 hover:underline">
                            {e.company} <Arrow />
                          </a>
                        ) : (
                          e.company
                        )}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">{e.role}</p>
                      <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
                        {e.period} · {e.where}
                      </p>
                    </div>
                    <Bullets items={e.highlights} />
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal y={8} className="mt-8">
              <p className="text-[15px] text-[var(--color-text-secondary)]">
                Full detail, dates, and references in the{" "}
                <a href={links.resume} className="font-medium text-accent underline-offset-4 hover:underline">
                  resume (PDF)
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="relative scroll-mt-20 bg-cream py-24 md:py-32">
          <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <SectionHeading eyebrow="Education" title={education.school} />
            <div className="grid gap-5 md:grid-cols-[1fr_2fr]">
              <Reveal y={16} amount={0.3}>
                <Card tone="dark" padding="lg" className="h-full">
                  <p className="text-2xl tracking-[-0.02em]">{education.degree}</p>
                  <p className="mt-1 text-sm text-white/70">
                    {education.graduation} · {education.where}
                  </p>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-sky">Certifications</p>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-white/80">
                    {certifications.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
              <Reveal y={16} delay={0.1} amount={0.3}>
                <Card padding="lg" className="h-full">
                  <Bullets items={education.details} />
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-navy py-28 text-white md:py-36">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />
          </div>
          <div aria-hidden className="dot-grid-dark absolute inset-0 opacity-[0.04]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal amount={0.4}>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] text-white">
                Hiring for product engineering, founding engineer, or forward-deployed roles?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                I'm in New York and open to on-site, hybrid, or remote. The fastest way to reach me is email. Everything on
                this page is in the resume, and the code behind Cinch, MetaOrtho, and Soval is public on GitHub.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={`mailto:${links.email}`} variant="white" size="lg">
                {links.email}
              </Button>
              <Button href={links.resume} download variant="outlineLight" size="lg">
                Download resume
              </Button>
            </Reveal>
            <Reveal delay={0.25} y={0} className="mt-8 flex justify-center gap-6 text-sm text-white/55">
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="group transition-colors hover:text-white">
                LinkedIn <Arrow />
              </a>
              <a href={links.github} target="_blank" rel="noreferrer" className="group transition-colors hover:text-white">
                GitHub <Arrow />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Nelson Saenz · Built with Next.js, deployed on Vercel.
      </footer>
    </>
  );
}
