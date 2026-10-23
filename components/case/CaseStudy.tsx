import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import BrandMark from "@/components/ui/BrandMark";
import Reveal from "@/components/motion/Reveal";
import AnimatedNumber from "@/components/motion/AnimatedNumber";
import { Eyebrow, SectionHeading } from "@/components/ui/Text";
import type { Logo } from "@/lib/content";

/* ---------- Hero ---------- */

export type CaseLink = { label: string; href: string; primary?: boolean };

export function CaseHero({
  logo,
  kicker,
  title,
  tagline,
  meta,
  links,
  children,
}: {
  logo: Logo;
  kicker: string;
  title: string;
  tagline: string;
  meta: [string, string][];
  links: CaseLink[];
  /** Visual for the right column (desktop) / below (mobile). */
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 text-white md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-30%] h-[60vw] w-[60vw] rounded-full bg-accent/10 blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[45vw] w-[45vw] rounded-full bg-teal/10 blur-[140px]" />
      </div>
      <div aria-hidden className="dot-grid-dark absolute inset-0 opacity-[0.04]" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:pb-28">
        <div>
          <Reveal onMount y={12} duration={0.6}>
            <Link href="/#work" className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
              <span aria-hidden className="inline-block transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)] group-hover:-translate-x-0.5">
                ←
              </span>
              All work
            </Link>
          </Reveal>
          <Reveal onMount y={12} delay={0.08} duration={0.6} className="mt-8 flex items-center gap-4">
            <BrandMark logo={logo} size="lg" className="shadow-[0_0_40px_rgba(42,111,151,0.35)]" />
            <Eyebrow dark>
              <span className="mb-0 inline-block">{kicker}</span>
            </Eyebrow>
          </Reveal>
          <Reveal onMount y={24} delay={0.16} duration={0.9}>
            <h1 className="mt-6 text-[clamp(2.75rem,6.5vw,5rem)] leading-[1.02] tracking-[-0.04em] text-white">{title}</h1>
          </Reveal>
          <Reveal onMount y={20} delay={0.3} duration={0.8}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">{tagline}</p>
          </Reveal>
          <Reveal onMount y={16} delay={0.42} className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {meta.map(([k, v]) => (
              <div key={k}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">{k}</p>
                <p className="mt-1 text-sm text-white/90">{v}</p>
              </div>
            ))}
          </Reveal>
          <Reveal onMount y={16} delay={0.52} className="mt-10 flex flex-wrap gap-3">
            {links.map((l) => (
              <Button key={l.href} href={l.href} target={l.href.startsWith("/") ? undefined : "_blank"} rel="noreferrer" variant={l.primary ? "white" : "outlineLight"} size="md">
                {l.label}
              </Button>
            ))}
          </Reveal>
        </div>
        <Reveal onMount y={32} delay={0.35} duration={1}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

export type Stat = { n?: number; suffix?: string; prefix?: string; text?: string; label: string };

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative bg-cream py-14 md:py-16">
      <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} y={16} amount={0.4}>
            <Card padding="md" hover={false} className="h-full">
              <p className="font-serif text-4xl tracking-[-0.03em] text-ink">
                {s.n !== undefined ? <AnimatedNumber value={s.n} prefix={s.prefix} suffix={s.suffix} /> : s.text}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-tertiary)]">{s.label}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Sections ---------- */

type Tone = "white" | "cream" | "navy";
const toneClass: Record<Tone, string> = { white: "bg-white", cream: "bg-cream", navy: "bg-navy text-white" };

export function CaseSection({ id, tone = "white", eyebrow, title, intro, children, wide = false }: { id?: string; tone?: Tone; eyebrow: string; title: string; intro?: string; children: React.ReactNode; wide?: boolean }) {
  const dark = tone === "navy";
  return (
    <section id={id} className={`relative scroll-mt-20 py-24 md:py-32 ${toneClass[tone]} ${dark ? "overflow-hidden" : ""}`}>
      {tone === "cream" && <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />}
      {dark && <div aria-hidden className="absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />}
      <div className={`relative z-10 mx-auto px-5 sm:px-8 lg:px-12 ${wide ? "max-w-7xl" : "max-w-6xl"}`}>
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} dark={dark} />
        {children}
      </div>
    </section>
  );
}

/** Two-column prose block: lead paragraphs on the left, a card on the right. */
export function Split({ children, aside }: { children: React.ReactNode; aside: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
      <Reveal y={16} className="space-y-5 text-[17px] leading-relaxed text-[var(--color-text-secondary)]">
        {children}
      </Reveal>
      <Reveal y={16} delay={0.1}>
        {aside}
      </Reveal>
    </div>
  );
}

/* ---------- Fact cards ---------- */

export type Fact = { h: string; p: string };

export function FactGrid({ facts, dark = false, cols = 3 }: { facts: Fact[]; dark?: boolean; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-5 ${cols === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
      {facts.map((f, i) => (
        <Reveal key={f.h} delay={(i % 3) * 0.08} y={16} amount={0.3}>
          <Card tone={dark ? "dark" : "white"} padding="md" className="h-full">
            <div className="mb-3 flex items-center gap-3">
              <span className={`size-2 shrink-0 rounded-full ${dark ? "bg-sky" : "bg-accent"}`} />
              <h3 className={`text-xl tracking-[-0.02em] ${dark ? "text-white" : "text-ink"}`}>{f.h}</h3>
            </div>
            <p className={`pl-5 text-[15px] leading-relaxed ${dark ? "text-white/75" : "text-[var(--color-text-secondary)]"}`}>{f.p}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function Chips({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className={`rounded-[var(--radius-pill)] border px-3 py-1 text-xs ${dark ? "border-white/15 bg-white/5 text-white/80" : "border-line bg-white text-[var(--color-text-secondary)]"}`}>
          {s}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Screenshots ---------- */

export type Shot = { src: string; alt: string; caption?: string; width: number; height: number };

/** Desktop screenshot inside a faux browser window. */
export function BrowserFrame({ shot, url, priority = false, className = "" }: { shot: Shot; url?: string; priority?: boolean; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[var(--radius-md)] border border-line bg-white shadow-[var(--shadow-xl)]">
        <div className="flex items-center gap-2 border-b border-line bg-warm px-3 py-2">
          <span aria-hidden className="flex gap-1.5">
            <i className="block size-2.5 rounded-full bg-black/10" />
            <i className="block size-2.5 rounded-full bg-black/10" />
            <i className="block size-2.5 rounded-full bg-black/10" />
          </span>
          {url && <span className="mx-auto truncate rounded-[6px] bg-white px-3 py-0.5 text-[11px] text-[var(--color-text-tertiary)]">{url}</span>}
        </div>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" className="block h-auto w-full" />
      </div>
      {shot.caption && <figcaption className="mt-3 text-sm text-[var(--color-text-tertiary)]">{shot.caption}</figcaption>}
    </figure>
  );
}

/** Muted, looping screen recording inside a browser chrome or a phone bezel. Falls back to the poster when autoplay is blocked. */
export function VideoFrame({ src, poster, kind = "browser", url, caption, className = "", label }: { src: string; poster: string; kind?: "browser" | "phone"; url?: string; caption?: string; className?: string; label: string }) {
  const video = (
    <video src={src} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-label={label} className={kind === "phone" ? "block h-auto w-full rounded-[22px]" : "block h-auto w-full"} />
  );
  return (
    <figure className={className}>
      {kind === "phone" ? (
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-navy-deep p-1.5 shadow-[var(--shadow-xl)]">{video}</div>
      ) : (
        <div className="overflow-hidden rounded-[var(--radius-md)] border border-line bg-white shadow-[var(--shadow-xl)]">
          <div className="flex items-center gap-2 border-b border-line bg-warm px-3 py-2">
            <span aria-hidden className="flex gap-1.5">
              <i className="block size-2.5 rounded-full bg-black/10" />
              <i className="block size-2.5 rounded-full bg-black/10" />
              <i className="block size-2.5 rounded-full bg-black/10" />
            </span>
            {url && <span className="mx-auto truncate rounded-[6px] bg-white px-3 py-0.5 text-[11px] text-[var(--color-text-tertiary)]">{url}</span>}
            <span className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-tertiary)]"><span className="size-1.5 rounded-full bg-error" />REC</span>
          </div>
          {video}
        </div>
      )}
      {caption && <figcaption className={`mt-3 text-sm text-[var(--color-text-tertiary)] ${kind === "phone" ? "text-center" : ""}`}>{caption}</figcaption>}
    </figure>
  );
}

/** Phone screenshot with a rounded bezel. */
export function PhoneFrame({ shot, priority = false, className = "", sizes = "260px" }: { shot: Shot; priority?: boolean; className?: string; sizes?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[28px] border border-black/10 bg-navy-deep p-1.5 shadow-[var(--shadow-xl)]">
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} priority={priority} sizes={sizes} className="block h-auto w-full rounded-[22px]" />
      </div>
      {shot.caption && <figcaption className="mt-3 text-center text-sm text-[var(--color-text-tertiary)]">{shot.caption}</figcaption>}
    </figure>
  );
}

/** Horizontal, snap-scrolling strip of phone screenshots. */
export function PhoneStrip({ shots }: { shots: Shot[] }) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 [scrollbar-width:thin]">
      <ul className="flex snap-x snap-mandatory gap-5">
        {shots.map((s, i) => (
          <li key={s.src} className="w-[240px] shrink-0 snap-start sm:w-[260px]">
            <Reveal delay={Math.min(i, 4) * 0.07} y={20} amount={0.2}>
              <PhoneFrame shot={s} priority={i < 2} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Next ---------- */

export function NextCase({ href, logo, name, tagline }: { href: string; logo: Logo; name: string; tagline: string }) {
  return (
    <section className="relative bg-cream py-20 md:py-24">
      <div aria-hidden className="dot-grid-light absolute inset-0 opacity-[0.025]" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <Reveal y={16} amount={0.3}>
          <Eyebrow>Next case study</Eyebrow>
          <Link href={href} className="group block">
            <Card tone="white" padding="lg" className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-5">
                <BrandMark logo={logo} size="lg" />
                <div>
                  <h3 className="text-3xl tracking-[-0.02em] text-ink">{name}</h3>
                  <p className="mt-1 text-[15px] text-[var(--color-text-secondary)]">{tagline}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Read the case study
                <span aria-hidden className="inline-block transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)] group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Card>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
