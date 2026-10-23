import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://nelsonsaenz.vercel.app";
const title = "Nelson Saenz — Founder & Builder";
const description =
  "Founder and builder in NYC. I build AI-native products end to end and run them in production: Cinch (iOS outfit planner on the App Store) and MetaOrtho (physician-led GLP-1 telehealth).";

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
  jobTitle: "Founder & Builder",
  url: siteUrl,
  image: `${siteUrl}/headshot.jpg`,
  email: "mailto:nelsonjsaenz@gmail.com",
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
