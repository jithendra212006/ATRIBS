"use client";

import { motion } from "framer-motion";
import GradientWaves from "@/components/backgrounds/GradientWaves";
import PipCharacter from "@/components/home/PipCharacter";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-6 pt-20 pb-16 lg:pt-24 lg:px-16 select-none">
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden flex items-center justify-center">
        <div className="w-full h-full">
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

      <PipCharacter />

      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-neutral-500">
            You see the solution.
          </p>

          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-[4.7rem]">
            We engineer what
            <br />
            <span className="text-[#df2027]">makes it possible.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg"
        >
          We transform ideas, integrate complex systems, and build digital
          solutions that help organizations move forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 grid w-full max-w-xl grid-cols-3 border-y border-neutral-300/70"
        >
          <div className="border-r border-neutral-300/70 py-4 pr-4">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
              <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                01
              </span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-neutral-900">
              Digital
            </p>
            <p className="mt-1 text-[10px] text-neutral-500">Transformation</p>
          </div>

          <div className="border-r border-neutral-300/70 px-4 py-4">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
              <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                02
              </span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-neutral-900">
              System
            </p>
            <p className="mt-1 text-[10px] text-neutral-500">Integration</p>
          </div>

          <div className="py-4 pl-4">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
              <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                03
              </span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-neutral-900">
              Application
            </p>
            <p className="mt-1 text-[10px] text-neutral-500">Services</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="#solutions"
            className="group flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Discover What We Build
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Systems Operational
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <ScrollIndicator targetId="services" />
      </div>
    </section>
  );
}
