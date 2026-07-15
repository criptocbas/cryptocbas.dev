"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

/* Softer motion — less blur/slide = cleaner, more “product” than “demo reel” */
const variants: Record<Direction, { initial: Record<string, number | string>; animate: Record<string, number | string> }> = {
  up: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  },
  left: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  },
  right: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  },
  scale: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
  },
};

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}) {
  const v = variants[direction];
  return (
    <m.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </m.div>
  );
}
