import Image from "next/image";
import { certifications, education, experience, links, projects, stack } from "@/lib/content";

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Arrow() {
  return <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>;
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="relative">
      {/* Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#" className="font-mono text-sm text-muted hover:text-fg"><span className="sm:hidden">NS</span><span className="hidden sm:inline">Nelson Saenz</span></a>
        <nav className="flex gap-4 font-mono text-xs text-muted sm:gap-5">
          <a className="hover:text-fg" href="#work">Work</a>
          <a className="hover:text-fg" href="#stack">Stack</a>
          <a className="hover:text-fg" href="#experience">Experience</a>
          <a className="hidden hover:text-fg sm:inline" href="#education">Education</a>
          <a className="hover:text-fg" href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-16 pt-10 sm:px-8 sm:pt-20">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="order-2 sm:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Nelson Saenz · New York</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              I build AI-native products end to end, then run them in production.
            </h1>
          </div>
          <Image
            src="/headshot.jpg"
            alt="Nelson Saenz"
            width={566}
            height={566}
            priority
            className="order-1 size-24 shrink-0 rounded-full border border-line object-cover ring-4 ring-accent/15 sm:order-2 sm:mt-1 sm:size-40 md:size-44"
          />
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Product engineer and founder. Solo-shipped a consumer iOS app to the App Store, engineered a physician-led
          telehealth platform from zero, and turned my day job at an expert network into an agentic AI system the
          whole team uses. Finance background, so I care about conversion and retention as much as the code.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:opacity-90">See the work</a>
          <a href={links.resume} className="rounded-full border border-line px-5 py-2.5 text-sm text-fg hover:border-muted">Resume (PDF)</a>
          <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm text-fg hover:border-muted">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm text-fg hover:border-muted">LinkedIn</a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {[
            ["3", "products shipped solo"],
            ["900+", "GitHub contributions, last 12 mo"],
            ["28", "biomarkers in one 0–100 score"],
            ["hrs → min", "project setup at Office Hours"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="text-2xl font-semibold tracking-tight">{n}</dt>
              <dd className="mt-1 text-sm text-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Work */}
      <Section id="work" eyebrow="Work" title="Things I built and operate">
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <article key={p.name} className="rounded-2xl border border-line bg-elev p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                <span className="font-mono text-xs text-muted">{p.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{p.role}</p>
              <p className="mt-4 font-medium">{p.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">{s}</li>
                ))}
              </ul>
              {p.links.length > 0 && (
                <div className="mt-5 flex gap-4">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="group text-sm text-fg underline-offset-4 hover:underline">
                      {l.label} <Arrow />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {rest.map((p) => (
            <article key={p.name} className="rounded-2xl border border-line p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <span className="font-mono text-xs text-muted">{p.period}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{p.role}</p>
              <p className="mt-3 text-sm font-medium">{p.tagline}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              {p.links.length > 0 && (
                <div className="mt-4 flex gap-4">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="group text-sm underline-offset-4 hover:underline">
                      {l.label} <Arrow />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* How I work */}
      <Section id="how" eyebrow="How I work" title="Find the slow, manual part. Build the system that removes it. Prove it until the team adopts it.">
        <div className="grid gap-8 text-sm leading-relaxed text-muted md:grid-cols-3">
          <p>
            <span className="text-fg">AI as a force multiplier, not an excuse.</span> I use agents for parallel research, isolated
            worktrees, and verification, and I keep ownership of architecture, QA, product, and releases. The Cinch styling engine
            is deterministic and on-device; the model only does what it's actually better at.
          </p>
          <p>
            <span className="text-fg">Production over demos.</span> Row-level security with pgTAP tests, idempotent commands,
            subscription reconciliation, offline recovery, append-only migrations. Things that are boring until they aren't.
          </p>
          <p>
            <span className="text-fg">Adoption is the metric.</span> At Office Hours I didn't pitch AI. I ran it on live projects,
            showed the hours saved, and standardized it so an AI-skeptical team could use it without me in the loop.
          </p>
        </div>
      </Section>

      {/* Stack */}
      <Section id="stack" eyebrow="Stack" title="What I reach for">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {Object.entries(stack).map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{k}</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {v.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" eyebrow="Experience" title="Where I've worked">
        <ol className="divide-y divide-line border-y border-line">
          {experience.map((e) => (
            <li key={e.company + e.role} className="grid gap-3 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
              <div>
                <p className="font-medium">
                  {e.href ? (
                    <a href={e.href} target="_blank" rel="noreferrer" className="group underline-offset-4 hover:underline">
                      {e.company} <Arrow />
                    </a>
                  ) : (
                    e.company
                  )}
                </p>
                <p className="mt-0.5 text-sm text-accent">{e.role}</p>
                <p className="mt-1 font-mono text-xs text-muted">{e.period} · {e.where}</p>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted">
          Full detail, dates, and references in the <a href={links.resume} className="text-fg underline underline-offset-4">resume (PDF)</a>.
        </p>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title={education.school}>
        <div className="grid gap-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
          <div>
            <p className="font-medium">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-muted">{education.graduation} · {education.where}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Certifications</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            {education.details.map((d) => (
              <li key={d} className="flex gap-3">
                <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Hiring for product engineering, founding engineer, or forward-deployed roles?">
        <p className="max-w-2xl text-muted">
          I'm in New York and open to on-site, hybrid, or remote. The fastest way to reach me is email. Everything on
          this page is in the resume, and the code behind Cinch, MetaOrtho, and Soval is public on GitHub.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${links.email}`} className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:opacity-90">{links.email}</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-muted">LinkedIn</a>
          <a href={links.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-muted">GitHub</a>
          <a href={links.resume} download className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-muted">Download resume</a>
        </div>
      </Section>

      <footer className="relative z-10 mx-auto w-full max-w-5xl px-5 pb-10 pt-6 font-mono text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} Nelson Saenz · Built with Next.js, deployed on Vercel.
      </footer>
    </main>
  );
}
