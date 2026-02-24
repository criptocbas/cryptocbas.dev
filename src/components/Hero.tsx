"use client";

import { motion } from "motion/react";
import { SITE } from "@/lib/constants";
import { socials } from "@/data/socials";
import { SocialIcon } from "./SocialIcon";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          gm, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="bg-gradient-to-r from-accent via-purple to-accent bg-clip-text text-transparent">
            {SITE.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 font-mono text-lg text-text-muted md:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-muted"
        >
          {SITE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          {socials.map((s) => (
            <SocialIcon
              key={s.label}
              icon={s.icon}
              url={s.url}
              label={s.label}
              className="text-xl"
            />
          ))}
          <a
            href="#projects"
            className="ml-4 rounded-full border border-accent/30 bg-accent-dim px-6 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
