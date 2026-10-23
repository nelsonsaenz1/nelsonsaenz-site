import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "white" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };
type AsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };
type ButtonProps = AsButton | AsLink;

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]",
  white: "bg-white text-navy hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.12)]",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight: "border border-white/20 text-white/85 hover:border-white/35 hover:bg-white/5",
  ghost: "text-accent hover:bg-accent-light",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-9 py-4 text-base",
};

/** Pill button shared with metaortho.com: strong ease-out, press scale, visible focus. */
export default function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const classes =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold tracking-[-0.01em] cursor-pointer " +
    "transition-[background-color,color,box-shadow,transform,border-color] duration-[var(--dur-hover)] ease-[var(--ease-out)] " +
    "active:scale-[0.97] active:duration-[var(--dur-press)] motion-reduce:active:scale-100 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 " +
    `${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  );
}
