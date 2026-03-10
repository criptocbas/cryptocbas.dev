"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, m } from "motion/react";

const CHAR_DELAY = 25;
const PROGRESS_BLOCKS = 12;
const BLOCK = "\u2588";

interface Line {
  text: string;
  accent?: boolean;
}

function shouldSkip() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  if (sessionStorage.getItem("booted")) return true;
  return false;
}

export default function BootSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const skip = useRef(shouldSkip());
  const [lines, setLines] = useState<Line[]>([]);
  const [done, setDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (skip.current) {
      sessionStorage.setItem("booted", "1");
      onComplete();
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;
    sessionStorage.setItem("booted", "1");

    runSequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function runSequence() {
    await typeLine("> initializing cbas.sol...", true);
    await typeProgressLine();
    await typeLine("> establishing connection...", true);
    await typeLine("> gm", true);
    await wait(350);
    setDone(true);
    setTimeout(onComplete, 450);
  }

  function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function typeLine(text: string, accent: boolean): Promise<void> {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setLines((prev) => {
          const copy = [...prev];
          const lineIndex =
            copy.length === 0 ||
            copy[copy.length - 1].text !== text.slice(0, i - 1)
              ? copy.length
              : copy.length - 1;
          copy[lineIndex] = { text: text.slice(0, i), accent };
          return copy;
        });
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, CHAR_DELAY);
    });
  }

  function typeProgressLine(): Promise<void> {
    return new Promise((resolve) => {
      const prefix = "> loading modules ";
      const suffix = " done";
      let i = 0;

      const prefixInterval = setInterval(() => {
        i++;
        setLines((prev) => {
          const copy = [...prev];
          const lineIndex =
            copy.length === 0 ||
            !copy[copy.length - 1].text.startsWith("> loading")
              ? copy.length
              : copy.length - 1;
          copy[lineIndex] = { text: prefix.slice(0, i), accent: true };
          return copy;
        });
        if (i >= prefix.length) {
          clearInterval(prefixInterval);
          let b = 0;
          const barInterval = setInterval(() => {
            b++;
            setLines((prev) => {
              const copy = [...prev];
              copy[copy.length - 1] = {
                text:
                  prefix +
                  BLOCK.repeat(b) +
                  (b < PROGRESS_BLOCKS ? "" : suffix),
                accent: true,
              };
              return copy;
            });
            if (b >= PROGRESS_BLOCKS) {
              clearInterval(barInterval);
              resolve();
            }
          }, 500 / PROGRESS_BLOCKS);
        }
      }, CHAR_DELAY);
    });
  }

  if (skip.current) return null;

  return (
    <AnimatePresence>
      {!done && (
        <m.div
          className="fixed inset-0 z-[60] bg-bg flex flex-col justify-center px-8 md:px-16 lg:px-24 font-mono"
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ pointerEvents: done ? "none" : "auto" }}
        >
          {/* Scanline overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
            }}
          />

          {/* Terminal lines */}
          <div className="relative z-10 space-y-2 text-sm md:text-base">
            {lines.map((line, i) => (
              <div
                key={i}
                className={line.accent ? "text-accent/70" : "text-text"}
              >
                {line.text}
                {i === lines.length - 1 && (
                  <span className="animate-pulse">_</span>
                )}
              </div>
            ))}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
