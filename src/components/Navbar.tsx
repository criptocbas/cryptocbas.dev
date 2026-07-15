"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { m, AnimatePresence } from "motion/react";
import { SITE } from "@/lib/constants";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on ESC and return focus to toggle
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close mobile menu on click outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest("nav")) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open, handleClickOutside]);

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(10, 10, 15, 0.95)"
          : "rgba(10, 10, 15, 0.85)",
        borderColor: scrolled
          ? "rgba(20, 241, 149, 0.1)"
          : "rgba(30, 30, 48, 0.3)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(16px)",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(20, 241, 149, 0.03)"
          : "none",
      }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-accent"
        >
          {SITE.name}
          <span className="text-text-muted/40">_</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-block py-2 font-mono text-sm text-text-muted transition-colors duration-300 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SITE.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent/25 bg-accent/[0.08] px-4 py-1.5 font-mono text-xs text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.14]"
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle — 48×48 touch target */}
        <button
          ref={toggleRef}
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 md:hidden"
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
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="origin-top overflow-hidden border-t border-border/20 bg-bg-nav backdrop-blur-2xl md:hidden"
            aria-label="Mobile navigation"
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
            <li>
              <a
                href={SITE.calendar}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 font-mono text-sm text-accent transition-colors duration-300"
              >
                Hire me
              </a>
            </li>
          </m.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
