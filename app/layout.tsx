import type { Metadata } from "next";
import "./globals.css";

const title = "Nelson Saenz — Product Engineer & Founder";
const description =
  "Product engineer and founder in NYC. I build AI-native products end to end and run them in production: Cinch (iOS AI stylist), MetaOrtho (GLP-1 telehealth), agentic workflows at Office Hours.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nelsonsaenz-site.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", url: "/" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
