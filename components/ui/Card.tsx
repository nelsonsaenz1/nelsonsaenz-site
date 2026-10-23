import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "white" | "cream" | "dark";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
};

const tones = {
  white: "bg-white border border-line",
  cream: "bg-cream border border-line",
  dark: "bg-navy text-white border border-white/10",
};

const paddings = { sm: "p-5", md: "p-7", lg: "p-9" };

/** Rounded card shared with metaortho.com: lifts half a pixel and gains a shadow on hover. */
export default function Card({ children, className = "", tone = "white", hover = true, padding = "md" }: CardProps) {
  const lift = hover
    ? "no-touch-hover transition-[box-shadow,transform] duration-[var(--dur-hover)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
    : "";
  return <div className={`rounded-[var(--radius-xl)] ${tones[tone]} ${paddings[padding]} ${lift} ${className}`}>{children}</div>;
}
