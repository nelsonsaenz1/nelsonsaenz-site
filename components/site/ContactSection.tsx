import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { Arrow, Eyebrow } from "@/components/ui/Text";
import { links } from "@/lib/content";

/** The one ask, shared by every page: coffee in New York, one button. */
export default function ContactSection({ backHome = false }: { backHome?: boolean }) {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-navy py-28 text-white md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />
      </div>
      <div aria-hidden className="dot-grid-dark absolute inset-0 opacity-[0.04]" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal amount={0.4}>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] text-white">Coffee in New York?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            I'm in Manhattan and happy to come to you. Email me and I'll send a few times.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button href={`mailto:${links.email}`} variant="white" size="lg">
            Email me
          </Button>
        </Reveal>
        <Reveal delay={0.25} y={0} className="mt-8 flex flex-wrap justify-center gap-x-6 text-sm text-white/55">
          <a href={links.resume} className="py-3 transition-colors hover:text-white">
            Resume
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className="group py-3 transition-colors hover:text-white">
            GitHub <Arrow />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="group py-3 transition-colors hover:text-white">
            LinkedIn <Arrow />
          </a>
          {backHome && (
            <Link href="/" className="py-3 transition-colors hover:text-white">
              ← Back to home
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
