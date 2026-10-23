import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import BrandMark from "@/components/ui/BrandMark";
import Reveal from "@/components/motion/Reveal";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Arrow, Bullets, Eyebrow, SectionHeading } from "@/components/ui/Text";
import { certifications, education, experience, links, projects, stack } from "@/lib/content";

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <SiteHeader current="/" />

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
                Open to new roles · New York
              </span>
            </Reveal>
            <Reveal onMount y={24} delay={0.2} duration={0.9}>
              <h1 className="mx-auto mt-8 max-w-4xl text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.02] tracking-[-0.04em] text-white">
                I build AI-native products end to end, <span className="text-sky">then run them in production.</span>
              </h1>
            </Reveal>
            <Reveal onMount y={20} delay={0.35} duration={0.8}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed tracking-[-0.01em] text-white/80 md:text-xl">
                Founder and builder. Solo-shipped a consumer iOS app to the App Store, engineered a physician-led telehealth
                platform from zero, and work in client solutions at an expert network by day. Finance background, so I care
                about conversion and retention as much as the code.
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
            <Reveal onMount y={0} delay={0.7} duration={0.6} className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/55">
              <a href={links.github} target="_blank" rel="noreferrer" className="group transition-colors hover:text-white">
                GitHub <Arrow />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="group transition-colors hover:text-white">
                LinkedIn <Arrow />
              </a>
              <a href={`mailto:${links.email}`} className="transition-colors hover:text-white">
                {links.email}
              </a>
              <a href={links.phoneHref} className="transition-colors hover:text-white">
                {links.phone}
              </a>
            </Reveal>
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
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <BrandMark logo={p.logo} initials={p.initials} size="lg" />
                        <div>
                          <h3 className="text-2xl tracking-[-0.02em] text-ink">
                            {p.caseStudy ? (
                              <Link href={p.caseStudy} className="group underline-offset-4 hover:underline">
                                {p.name}
                              </Link>
                            ) : (
                              p.name
                            )}
                          </h3>
                          <p className="mt-0.5 text-sm font-medium text-accent">{p.role}</p>
                        </div>
                      </div>
                      <span className="order-first basis-full text-xs text-[var(--color-text-tertiary)] sm:order-none sm:basis-auto">{p.period}</span>
                    </div>
                    <p className="mt-5 text-lg leading-snug text-ink">{p.tagline}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{p.body}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-[var(--radius-pill)] border border-line bg-white px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      {p.caseStudy && (
                        <Button href={p.caseStudy} variant="primary" size="sm">
                          Read the case study
                        </Button>
                      )}
                      {p.links.map((l, j) => (
                        <Button key={l.href} href={l.href} target="_blank" rel="noreferrer" variant={!p.caseStudy && j === 0 ? "primary" : "ghost"} size="sm">
                          {l.label}
                        </Button>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08} y={20}>
                  <Card padding="md" className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <BrandMark logo={p.logo} initials={p.initials} size="md" />
                        <div>
                          <h3 className="text-xl tracking-[-0.02em] text-ink">{p.name}</h3>
                          <p className="mt-0.5 text-sm font-medium text-accent">{p.role}</p>
                        </div>
                      </div>
                      <span className="shrink-0 text-xs text-[var(--color-text-tertiary)]">{p.period}</span>
                    </div>
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

        {/* Experience */}
        <section id="experience" className="relative scroll-mt-20 bg-cream py-24 md:py-32">
          <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <SectionHeading eyebrow="Experience" title="Where I've worked" />
            <ol className="divide-y divide-line border-y border-line-strong">
              {experience.map((e, i) => (
                <Reveal key={e.company + e.role} delay={Math.min(i, 3) * 0.05} y={16} amount={0.2}>
                  <li className="grid gap-4 py-8 sm:grid-cols-[1fr_2fr] sm:gap-10">
                    <div className="flex items-start gap-4">
                      <BrandMark logo={e.logo} initials={e.initials} size="md" className="mt-1" />
                      <div>
                        <h3 className="text-2xl tracking-[-0.02em] text-ink">
                          {e.caseStudy ? (
                            <Link href={e.caseStudy} className="group underline-offset-4 hover:underline">
                              {e.company} <Arrow />
                            </Link>
                          ) : e.href ? (
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
                        {e.caseStudy && (
                          <Link href={e.caseStudy} className="mt-2 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline">
                            Case study →
                          </Link>
                        )}
                      </div>
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

        {/* How I work */}
        <section id="how" className="relative scroll-mt-20 bg-white py-24 md:py-32">
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
                  p: "A tool nobody uses is a demo. I build internal tooling the way I build product: run it on real work first, measure the time it saves, and make it usable without me in the loop.",
                },
              ].map((item, i) => (
                <Reveal key={item.h} delay={i * 0.08} y={16} amount={0.3}>
                  <Card tone="cream" padding="md" className="h-full">
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

        {/* Education */}
        <section id="education" className="relative scroll-mt-20 bg-cream py-24 md:py-32">
          <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
            <SectionHeading eyebrow="Education" title={education.school} />
            <div className="grid gap-5 md:grid-cols-[1fr_2fr]">
              <Reveal y={16} amount={0.3}>
                <Card tone="dark" padding="lg" className="h-full">
                  <BrandMark logo={education.logo} size="lg" className="mb-6" />
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
                  <Image src={education.wordmark.src} alt={education.wordmark.alt} width={250} height={85} unoptimized className="mb-6 h-10 w-auto" />
                  <Bullets items={education.details} />
                </Card>
              </Reveal>
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

        {/* Contact */}
        <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-navy py-28 text-white md:py-36">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />
          </div>
          <div aria-hidden className="dot-grid-dark absolute inset-0 opacity-[0.04]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal amount={0.4}>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] text-white">
                Need someone who can build it, ship it, and own the numbers?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                I'm open to anything where I get to build and own outcomes: product, engineering, operations, or a founding team.
                Based in New York, happy with on-site, hybrid, or remote. Call or text any time, seriously. I pick up for
                unknown numbers. Email works too. Everything on this page is in the resume, and the code behind Cinch,
                MetaOrtho, and Soval is public on GitHub.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={links.phoneHref} variant="white" size="lg">
                Call or text {links.phone}
              </Button>
              <Button href={`mailto:${links.email}`} variant="outlineLight" size="lg">
                {links.email}
              </Button>
            </Reveal>
            <Reveal delay={0.25} y={0} className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/55">
              <a href={links.smsHref} className="transition-colors hover:text-white">
                Text me
              </a>
              <a href={links.resume} download className="transition-colors hover:text-white">
                Download resume
              </a>
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

      <SiteFooter />
    </>
  );
}
