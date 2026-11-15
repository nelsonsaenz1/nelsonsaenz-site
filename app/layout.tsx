import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Fonts are served from the repo (latin subset, SIL Open Font License) so the build never depends on Google Fonts. */
const dmSans = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  variable: "--font-dm-sans",
  weight: "300 700",
  display: "swap",
});

const dmSerif = localFont({
  src: "./fonts/dm-serif-display-latin.woff2",
  variable: "--font-dm-serif",
  weight: "400",
  display: "swap",
});

const siteUrl = "https://nelsonsaenz.vercel.app";
const title = "Nelson Saenz — product engineer in New York";
const description =
  "I build and ship software on my own. Cinch, an iOS app live on the App Store. MetaOrtho, a GLP-1 care platform built with two physicians. The AI skills my team uses every day.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s · Nelson Saenz" },
  description,
  openGraph: { title, description, type: "profile", url: "/", images: [{ url: "/headshot.jpg", width: 566, height: 566, alt: "Nelson Saenz" }] },
  twitter: { card: "summary", title, description, images: ["/headshot.jpg"] },
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nelson Saenz",
  jobTitle: "Product engineer",
  url: siteUrl,
  image: `${siteUrl}/headshot.jpg`,
  email: "mailto:nelsonjsaenz@gmail.com",
  telephone: "+1-901-831-0311",
  address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Southern Methodist University, Cox School of Business" },
  sameAs: ["https://github.com/nelsonsaenz1", "https://www.linkedin.com/in/nelson-saenz-28502a272/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-navy-deep focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-accent"
        >
          Skip to main content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
