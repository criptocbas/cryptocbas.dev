"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-shadow hover:shadow-[0_0_40px_rgba(0,255,200,0.08)] ${className}`}
    >
      {/* Glow gradient on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-1/2 left-1/2 h-full w-3/4 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
