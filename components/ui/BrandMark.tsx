import Image from "next/image";
import type { Logo } from "@/lib/content";

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, { box: string; px: number; pad: string; text: string }> = {
  sm: { box: "size-9 rounded-[10px]", px: 36, pad: "p-1.5", text: "text-sm" },
  md: { box: "size-12 rounded-[var(--radius-sm)]", px: 48, pad: "p-2", text: "text-base" },
  lg: { box: "size-16 rounded-[var(--radius-md)]", px: 64, pad: "p-2.5", text: "text-xl" },
  xl: { box: "size-24 rounded-[var(--radius-lg)]", px: 96, pad: "p-4", text: "text-3xl" },
};

/**
 * Square logo tile. Logos that are already tiles (app icons) fill it; wordmarks
 * and symbols sit padded on white. With no logo, falls back to serif initials.
 */
export default function BrandMark({ logo, initials, size = "md", className = "" }: { logo?: Logo; initials?: string; size?: Size; className?: string }) {
  const s = sizes[size];
  const base = `relative shrink-0 overflow-hidden border border-line bg-white ${s.box} ${className}`;
  if (!logo) {
    return (
      <span aria-hidden className={`${base} flex items-center justify-center font-serif text-ink ${s.text}`}>
        {initials ?? "·"}
      </span>
    );
  }
  const cover = logo.fit === "cover";
  return (
    <span className={`${base} ${cover ? "" : s.pad} block`}>
      <Image src={logo.src} alt={logo.alt} width={s.px} height={s.px} unoptimized className={`size-full ${cover ? "object-cover" : "object-contain"}`} />
    </span>
  );
}
