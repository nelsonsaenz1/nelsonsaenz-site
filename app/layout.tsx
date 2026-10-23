import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nelsonsaenz.vercel.app";
const title = "Nelson Saenz — Product Engineer & Founder";
const description =
  "Product engineer and founder in NYC. I build AI-native products end to end and run them in production: Cinch (iOS AI stylist), MetaOrtho (GLP-1 telehealth), agentic workflows at Office Hours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { title, description, type: "profile", url: "/", images: [{ url: "/headshot.jpg", width: 566, height: 566, alt: "Nelson Saenz" }] },
  twitter: { card: "summary", title, description, images: ["/headshot.jpg"] },
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nelson Saenz",
  jobTitle: "Product Engineer & Founder",
  url: siteUrl,
  image: `${siteUrl}/headshot.jpg`,
  email: "mailto:nelsonjsaenz@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Southern Methodist University, Cox School of Business" },
  sameAs: ["https://github.com/nelsonsaenz1", "https://www.linkedin.com/in/nelson-saenz-28502a272/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
