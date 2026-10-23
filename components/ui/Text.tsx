import Reveal from "@/components/motion/Reveal";

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.15em] ${dark ? "text-sky" : "text-accent"}`}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <Reveal className="mb-14 max-w-3xl md:mb-16" amount={0.3}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className={`text-[clamp(2rem,4.5vw,3.25rem)] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/80" : "text-[var(--color-text-secondary)]"}`}>{intro}</p>}
    </Reveal>
  );
}

export function Bullets({ items, dark = false, className = "" }: { items: string[]; dark?: boolean; className?: string }) {
  return (
    <ul className={`space-y-2.5 text-[15px] leading-relaxed ${dark ? "text-white/80" : "text-[var(--color-text-secondary)]"} ${className}`}>
      {items.map((h) => (
        <li key={h} className="flex gap-3">
          <span aria-hidden className={`mt-[0.65em] size-1.5 shrink-0 rounded-full ${dark ? "bg-sky" : "bg-accent"}`} />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

export const Arrow = () => (
  <span aria-hidden className="inline-block transition-transform duration-[var(--dur-hover)] ease-[var(--ease-out)] group-hover:translate-x-0.5">
    ↗
  </span>
);
