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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-all duration-500 hover:border-border-hover hover:bg-bg-card-hover hover:shadow-[0_0_50px_rgba(0,255,200,0.06),0_0_100px_rgba(0,255,200,0.03)] ${className}`}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all duration-700 group-hover:via-accent/40" />

      {/* Corner glow on hover */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/0 blur-[60px] transition-all duration-700 group-hover:bg-accent/[0.06]" />

      {/* Bottom-left subtle glow */}
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-purple/0 blur-[50px] transition-all duration-700 group-hover:bg-purple/[0.04]" />

      <div className="relative">{children}</div>
    </motion.div>
  );
}
