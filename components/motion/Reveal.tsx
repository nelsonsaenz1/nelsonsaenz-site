"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const ease = [0.23, 1, 0.32, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the reveal, for staggered groups. */
  delay?: number;
  /** Pixels of upward travel. Reduced-motion users get opacity only. */
  y?: number;
  /** Fraction of the element that must be visible before it reveals. */
  amount?: number;
  /** Play on mount instead of on scroll (hero). */
  onMount?: boolean;
  duration?: number;
};

/** Scroll reveal shared with metaortho.com: fade and slide up once, strong ease-out. */
export default function Reveal({ children, className, delay = 0, y = 20, amount = 0.2, onMount = false, duration = 0.7 }: RevealProps) {
  const reduce = useReducedMotion();
  const hidden = { opacity: 0, y: reduce ? 0 : y };
  const shown = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={hidden}
      {...(onMount ? { animate: shown } : { whileInView: shown, viewport: { once: true, amount } })}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
