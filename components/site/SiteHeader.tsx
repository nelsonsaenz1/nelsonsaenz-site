import Link from "next/link";
import Button from "@/components/ui/Button";
import { links } from "@/lib/content";

const homeNav = [
  ["Work", "/#work"],
  ["Experience", "/#experience"],
  ["How I work", "/#how"],
  ["Education", "/#education"],
  ["Contact", "/#contact"],
] as const;

const caseNav = [
  ["Home", "/"],
  ["Cinch", "/cinch"],
  ["MetaOrtho", "/metaortho"],
  ["Contact", "/#contact"],
] as const;

/** Fixed glass top bar shared by every page. */
export default function SiteHeader({ current }: { current?: "/" | "/cinch" | "/metaortho" }) {
  const nav = current && current !== "/" ? caseNav : homeNav;
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="font-serif text-xl tracking-[-0.02em] text-white">
          Nelson Saenz
        </Link>
        <nav className="hidden gap-7 text-sm text-white/70 md:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={href === current ? "page" : undefined}
              className={`transition-colors duration-[var(--dur-hover)] ease-[var(--ease-out)] hover:text-white ${href === current ? "text-white" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href={`mailto:${links.email}`} variant="white" size="sm">
            Get in touch
          </Button>
        </div>
        <Link href={current && current !== "/" ? "/" : "/#contact"} className="text-sm text-white/80 md:hidden">
          {current && current !== "/" ? "← Home" : "Contact"}
        </Link>
      </div>
    </header>
  );
}
