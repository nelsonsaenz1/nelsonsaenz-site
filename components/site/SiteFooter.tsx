import Link from "next/link";
import { links } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-8 text-sm text-white/45">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 sm:flex-row sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Nelson Saenz · Built with Next.js, deployed on Vercel.</p>
        <nav className="flex gap-5">
          <Link href="/cinch" className="transition-colors hover:text-white">
            Cinch
          </Link>
          <Link href="/metaortho" className="transition-colors hover:text-white">
            MetaOrtho
          </Link>
          <a href={links.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
