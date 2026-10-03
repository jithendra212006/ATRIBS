"use client";

import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";

/* ---------------------------------------------------------------
   ATRIBS reel loader

   The screen is split into six tall columns, one per letter.
   Each column is a slot reel of outlined letters that spins fast
   and brakes one after another, left to right, until the word
   ATRIBS locks in. Letters fill solid as they land and a red tick
   marks each one. After a short hold, the columns tear apart:
   odd ones fall, even ones rise, and the page appears behind.

   No circles, no particles, just type and structure.
---------------------------------------------------------------- */

const RED = "#df2027";
const WORD = "ATRIBS".split("");
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CELLS = 14;
const EASE = [0.16, 1, 0.3, 1];

// fourteen letters per reel; the last one is the real letter
const reel = (target, i) =>
  Array.from({ length: CELLS }, (_, k) =>
    k === CELLS - 1 ? target : ABC[(i * 7 + k * 5 + 3) % 26],
  );

const TAGS = ["Connect", "Collaborate", "Celebrate"];

export default function AtribsReelLoader({ onComplete }) {
  const reduce = useReducedMotion();
  const [landed, setLanded] = useState(() => WORD.map(() => false));
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);
  const [gone, setGone] = useState(false);
  const all = landed.every(Boolean);

  useEffect(() => {
    if (reduce) {
      setGone(true);
      onComplete?.();
    }
  }, [reduce]);

  useEffect(() => {
    const c = animate(0, 100, {
      duration: 3.2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => c.stop();
  }, []);

  useEffect(() => {
    if (!all) return;
    const t = setTimeout(() => setExit(true), 1700);
    return () => clearTimeout(t);
  }, [all]);

  if (gone || reduce) return null;

  return (
    <>
      {/* ------------ the six columns ------------ */}
      <div className="fixed inset-0 z-[999999] flex">
        {WORD.map((letter, i) => {
          const dur = 1.8 + i * 0.2;
          const delay = 0.2 + i * 0.05;
          return (
            <motion.div
              key={i}
              className="relative flex h-full flex-1 items-center justify-center overflow-hidden"
              style={{
                background: "#07070a",
                borderRight:
                  i < 5 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
              animate={{ y: exit ? (i % 2 ? "100%" : "-100%") : "0%" }}
              transition={{
                duration: 0.95,
                delay: exit ? Math.abs(i - 2.5) * 0.08 : 0,
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={() => {
                if (exit && i === 0) {
                  setGone(true);
                  onComplete?.();
                }
              }}
            >
              {/* faint red light along the reading line */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 30%, rgba(223,32,39,0.08) 50%, transparent 70%)",
                }}
              />

              {/* reel window, one letter tall */}
              <div className="relative h-[0.9em] w-full overflow-hidden border-y border-white/10 text-[17vw] font-extrabold leading-none">
                <motion.div
                  className="flex flex-col"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.55)" }}
                  initial={{
                    y: "0%",
                    filter: "blur(0px)",
                    color: "rgba(255,255,255,0)",
                  }}
                  animate={{
                    y: `-${((CELLS - 1) / CELLS) * 100}%`,
                    filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
                    color: landed[i] ? "#ffffff" : "rgba(255,255,255,0)",
                  }}
                  transition={{
                    y: { duration: dur, delay, ease: EASE },
                    filter: { duration: dur, delay, times: [0, 0.3, 1] },
                    color: { duration: 0.5 },
                  }}
                  onAnimationComplete={() =>
                    setLanded((p) => (p[i] ? p : p.map((v, k) => v || k === i)))
                  }
                >
                  {reel(letter, i).map((ch, k) => (
                    <span
                      key={k}
                      className="flex h-[0.9em] items-center justify-center"
                    >
                      {ch}
                    </span>
                  ))}
                </motion.div>

                {/* red tick when the letter locks in */}
                <motion.span
                  className="absolute bottom-0 left-0 h-[3px]"
                  style={{ background: RED, boxShadow: `0 0 18px ${RED}` }}
                  initial={{ width: "0%" }}
                  animate={{ width: landed[i] ? "100%" : "0%" }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ------------ text layer above the columns ------------ */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[1000000] text-white"
        animate={{ opacity: exit ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-x-0 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-6 text-sm tracking-[0.2em] text-white/70"
          style={{ top: "calc(50% + 7.65vw + 2rem)" }}
        >
          {TAGS.map((w, i) => (
            <span key={w} className="flex items-center gap-5">
              <span className="overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: all ? "0%" : "110%" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                >
                  {w}
                </motion.span>
              </span>
              {i < TAGS.length - 1 && (
                <motion.span
                  className="h-3 w-px"
                  style={{ background: RED }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: all ? 1 : 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.12,
                    ease: EASE,
                  }}
                />
              )}
            </span>
          ))}
        </div>

        <span className="absolute bottom-7 left-6 text-3xl font-light tabular-nums text-white/80 sm:left-10">
          {String(count).padStart(3, "0")}
        </span>
      </motion.div>
    </>
  );
}
