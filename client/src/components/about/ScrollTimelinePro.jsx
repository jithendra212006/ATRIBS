"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const MILESTONES = [
  {
    id: "01",
    year: "2004",
    tag: "01 / FOUNDATIONS",
    title: "Regional Genesis",
    desc: "Focus to establish the entity to cater to INDIA & UAE enterprise markets with dedicated software engineering.",
    regions: "INDIA / UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
    accent: "#0284c7",
  },
  {
    id: "02",
    year: "2007",
    tag: "02 / CROSS-BORDER",
    title: "Global IT Consulting",
    desc: "Catered custom engineering and strategic enterprise IT consulting to USA clients and tier-1 tech partners.",
    regions: "INDIA / USA",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=1600&auto=format&fit=crop",
    accent: "#df2027",
  },
  {
    id: "03",
    year: "2012",
    tag: "03 / EXPANSION",
    title: "Middle East Scale",
    desc: "Extended operations and mission-critical enterprise solutions across the entire GCC corridor.",
    regions: "MIDDLE EAST",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
    accent: "#0ea5e9",
  },
  {
    id: "04",
    year: "2014",
    tag: "04 / SOVEREIGN CONTRACTS",
    title: "Large-Scale Deployments",
    desc: "Secured enterprise shared services implementation for VFS Tasheel and Oracle EBS across 33 countries.",
    regions: "MIDDLE EAST // GLOBAL",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop",
    accent: "#e11d48",
  },
  {
    id: "05",
    year: "2022",
    tag: "05 / MULTI-NATIONAL",
    title: "Global Solutions Fabric",
    desc: "Business consulting, cloud solutions, enterprise system architectures, and mobile/software suites.",
    regions: "INDIA / USA / JAPAN",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop",
    accent: "#f59e0b",
  },
  {
    id: "06",
    year: "2025",
    tag: "06 / FRONTIER",
    title: "DeepTech & Automation",
    desc: "Cloud infrastructure, Blockchain, AI/ML models, Industrial SCADA automation, and Shield Skill Hub.",
    regions: "GLOBAL // SOUTH EAST",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    accent: "#df2027",
  },
];

function TimelineCard({ item, index, total, progress }) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const step = 1 / (total - 1);
  const start = index * step;
  const prevStart = (index - 1) * step;
  const nextStart = (index + 1) * step;

  // GPU translation
  const x = useTransform(
    progress,
    isFirst
      ? [0, nextStart]
      : isLast
        ? [prevStart, start]
        : [prevStart, start, nextStart],
    isFirst ? ["0%", "-10%"] : isLast ? ["100%", "0%"] : ["100%", "0%", "-10%"],
  );

  // Counter-clockwise card exit rotation
  const rotate = useTransform(
    progress,
    isFirst
      ? [0, nextStart]
      : isLast
        ? [prevStart, start]
        : [prevStart, start, nextStart],
    isFirst ? [0, -28] : isLast ? [0, 0] : [0, 0, -28],
  );

  return (
    <motion.div
      style={{
        x,
        rotate,
        transformOrigin: "bottom left",
        zIndex: index + 1,
        willChange: "transform",
      }}
      className="absolute inset-0 h-screen w-screen overflow-hidden bg-black text-white transform-gpu select-none"
    >
      {/* Background Image Layer (Zero CSS filter blur for buttery smooth rendering) */}
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        <img
          src={item.image}
          alt={item.title}
          loading={index < 2 ? "eager" : "lazy"}
          className="h-full w-full object-cover scale-100 opacity-70 contrast-110 brightness-90 transform-gpu"
        />
        {/* Gradients provide the visual softening without GPU lag */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Edge-to-Edge Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 sm:p-14 lg:p-20">
        {/* Top-Right Metadata */}
        <div className="flex flex-col items-end text-right max-w-md ml-auto mt-2 sm:mt-4">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-zinc-300 uppercase mb-2">
            {item.tag}
          </span>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-black/60 text-xs font-mono text-white mb-3">
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: item.accent }}
            />
            <span>{item.regions}</span>
          </div>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
            {item.desc}
          </p>
        </div>

        {/* Bottom Year and Headline */}
        <div className="relative z-10 flex flex-col justify-end">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-1">
            {item.title}
          </h2>
          <div className="text-[140px] sm:text-[240px] lg:text-[340px] font-black leading-none tracking-tighter text-white select-none">
            {item.year}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollTimelinePro() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring physics interpolator to eliminate jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
    restDelta: 0.0001,
  });

  const total = MILESTONES.length;

  return (
    <div ref={containerRef} className="relative h-[600vh] w-full bg-black">
      {/* Full Viewport Pinned Frame */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-black">
        {MILESTONES.map((item, index) => (
          <TimelineCard
            key={item.id}
            item={item}
            index={index}
            total={total}
            progress={smoothProgress}
          />
        ))}
      </div>
    </div>
  );
}
