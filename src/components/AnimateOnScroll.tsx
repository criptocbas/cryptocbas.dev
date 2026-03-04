"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

const variants: Record<Direction, { initial: Record<string, number | string>; animate: Record<string, number | string> }> = {
  up: {
    initial: { opacity: 0, y: 30, filter: "blur(5px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    initial: { opacity: 0, x: -40, filter: "blur(5px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  right: {
    initial: { opacity: 0, x: 40, filter: "blur(5px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    initial: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
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
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}
