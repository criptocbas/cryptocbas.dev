"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "motion/react";
import { SITE } from "@/lib/constants";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(10, 10, 15, 0.95)"
          : "rgba(10, 10, 15, 0.85)",
        borderColor: scrolled
          ? "rgba(0, 255, 200, 0.1)"
          : "rgba(30, 30, 48, 0.3)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(16px)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 255, 200, 0.03)"
          : "none",
      }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300"
        style={{ padding: scrolled ? "0.75rem 1.5rem" : "1rem 1.5rem" }}
      >
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-accent"
        >
          {SITE.name}
          <span className="text-text-muted/40">_</span>
        </a>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-text-muted transition-colors duration-300 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <m.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text"
          />
          <m.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-text"
          />
          <m.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <m.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/20 bg-bg-nav backdrop-blur-2xl md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 font-mono text-sm text-text-muted transition-colors duration-300 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
