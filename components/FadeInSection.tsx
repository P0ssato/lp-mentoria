"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────
   Reusable fade-up-on-scroll wrapper
   Wraps any section content with a clean
   scroll-triggered entrance animation.
───────────────────────────────────────── */

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeInSection({
  children,
  delay = 0,
  className,
  style,
}: FadeInSectionProps) {
  const ref = useRef(null);
  // Trigger once when 15% of the element is visible
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        delay,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
