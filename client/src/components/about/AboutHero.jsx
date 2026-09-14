"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import GradientWaves from "@/components/backgrounds/GradientWaves";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden select-none bg-white">
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden flex items-center justify-center">
        <div className="w-full h-full scale-x-[1.45] scale-y-[1.1] origin-center">
          <GradientWaves
            horizonColor="#fecdd3"
            waveColor="#DB5C61"
            crestColor="#BF3F41"
            tilt={1.22}
            zoom={1.1}
            height={2.6}
            waveScale={0.32}
            amplitude={3.4}
            swell={40}
            turbulence={22}
            speed={0.35}
            fogDepth={38}
            brightness={1.05}
            opacity={1.0}
            grain={false}
            mouseInteraction={true}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-7 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[#df2027]" />
          <span>The ATRIBS Story</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center gap-2 sm:gap-4"
        >
          <span
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-neutral-950 leading-tight drop-shadow-sm"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Engineering
          </span>

          <span
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold italic text-[#df2027] leading-tight tracking-tight mt-1 sm:mt-2 drop-shadow-sm"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Digital Excellence.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl font-normal text-neutral-800 leading-relaxed text-balance px-4"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          We construct high-frequency settlement rails, mission-critical
          government infrastructure, and deterministic IoT fabrics powering
          enterprise intelligence across borders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9"
        >
          <a
            href="#timeline"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#df2027] text-white text-sm font-semibold tracking-tight shadow-lg shadow-red-500/25 transition-all duration-300 hover:bg-[#b80d15] hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Explore Our Journey</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex items-center gap-4 text-[12px] font-medium text-neutral-500"
        >
          <span>2004 — Present</span>
          <span>•</span>
          <span>Enterprise Scale</span>
          <span>•</span>
          <span>Global Delivery</span>
        </motion.div>
      </div>
    </section>
  );
}
