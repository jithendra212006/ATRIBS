"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/*
=====================================================
LOGO — file inside /public
=====================================================
*/
const LOGO_SRC = "/logo.png";

/*
=====================================================
THEME
=====================================================
*/
const RED = "#df2027";
const DEEP = "#8c0f15";
const INK = "#2a1214";
const PAPER = "#fffdfa";
const PAPER_BACK = "#faf5ef";

// book thickness in px (front cover plane = +FRONT_Z, back board = -BACK_Z)
const FRONT_Z = 12;
const BACK_Z = 22;
const DEPTH = FRONT_Z + BACK_Z;

// fine matte grain used on the cover
const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

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

/*
=====================================================
SCROLL TIMELINE (0 -> 1)
=====================================================
0.00 -> 0.22   book flies in
0.22 -> 0.30   closed book, light sweeps the cover
0.30 -> 0.38   cover opens, spread slides to center
0.39 -> ~0.98  one milestone per page turn
*/

const ENTER_END = 0.22;
const OPEN_START = 0.3;
const OPEN_END = 0.38;
const PAGE_START = 0.39;
const PAGE_STEP = 0.098;
const LAST_END = PAGE_START + MILESTONES.length * PAGE_STEP;

const clamp = (v) => Math.min(1, Math.max(0, v));
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

const splitRegions = (s) =>
  s
    .split(/\s*\/{1,2}\s*/)
    .map((r) => r.trim())
    .filter(Boolean);

const tagLabel = (tag) => {
  const label = (tag.split(" / ")[1] || tag).toLowerCase();
  return label.charAt(0).toUpperCase() + label.slice(1);
};

/* =====================================================
   LOGO
===================================================== */

function Logo({ className }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={LOGO_SRC} alt="ATRIBS" className={className} draggable={false} />
  );
}

/* =====================================================
   ONE TURNING LEAF
   Front (right page) = milestone text
   Back  (left page)  = milestone photo
===================================================== */

function Leaf({ item, index, progress }) {
  const start = PAGE_START + index * PAGE_STEP;
  const center = start + PAGE_STEP / 2;
  const end = start + PAGE_STEP;
  const total = MILESTONES.length;

  const rotateY = useTransform(progress, [start, center, end], [0, -90, -180]);

  const z = useTransform(
    progress,
    [start, end],
    [2 + (total - index) * 0.6, 2 + index * 0.6],
  );

  const contentY = useTransform(progress, [start, end], [0, -22]);

  const frontShade = useTransform(progress, [start, center], [0, 0.35]);
  const backShade = useTransform(progress, [center, end], [0.35, 0]);

  const regions = splitRegions(item.regions);

  return (
    <motion.div
      className="absolute inset-0 origin-left"
      style={{ rotateY, z, transformStyle: "preserve-3d" }}
    >
      {/* FRONT — text page */}
      <div
        className="absolute inset-0 overflow-hidden rounded-r-[10px] shadow-[8px_10px_28px_rgba(120,20,25,0.12)]"
        style={{ backgroundColor: PAPER, backfaceVisibility: "hidden" }}
      >
        {/* gutter shadow */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/[0.07] to-transparent" />

        <motion.div
          className="absolute inset-0 flex flex-col justify-between p-7 pl-9 sm:p-9 sm:pl-11"
          style={{ y: contentY }}
        >
          <div>
            <div className="flex items-end gap-3">
              <span
                className="text-5xl font-light leading-[0.8] tracking-[-0.06em] sm:text-6xl"
                style={{ color: RED }}
              >
                {item.id}
              </span>

              <span
                className="mb-[2px] text-[10px] font-medium tracking-[0.02em]"
                style={{ color: DEEP }}
              >
                {tagLabel(item.tag)}
              </span>
            </div>

            <h3
              className="mt-7 text-[27px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[32px]"
              style={{ color: INK }}
            >
              {item.title}
            </h3>

            <p className="mt-4 max-w-[255px] text-[11.5px] leading-[1.7] text-[#2a1214]/60">
              {item.desc}
            </p>
          </div>

          <div>
            <div className="mb-5 flex flex-wrap gap-1.5">
              {regions.map((r) => (
                <span
                  key={r}
                  className="rounded-full border px-2.5 py-[3px] text-[9px] font-medium tracking-[0.04em]"
                  style={{ borderColor: "rgba(223,32,39,0.35)", color: DEEP }}
                >
                  {r}
                </span>
              ))}
            </div>

            {/* progress rail */}
            <div className="flex items-center gap-1">
              {MILESTONES.map((m, i) => (
                <span
                  key={m.id}
                  className="h-[3px] flex-1 rounded-full"
                  style={{
                    backgroundColor: i === index ? RED : "rgba(140,15,21,0.14)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black to-transparent"
          style={{ opacity: frontShade }}
        />
      </div>

      {/* BACK — photo page, lands on the left of the spread */}
      <div
        className="absolute inset-0 overflow-hidden rounded-l-[10px]"
        style={{
          backgroundColor: PAPER_BACK,
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        {/* gutter shadow */}
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/[0.08] to-transparent" />

        {/* photo card */}
        <div className="absolute inset-x-4 top-4 h-[66%] overflow-hidden rounded-[10px] sm:inset-x-5 sm:top-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background:
                "linear-gradient(180deg, rgba(223,32,39,0.22), rgba(140,15,21,0.5))",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a0509]/55 via-transparent to-transparent" />
        </div>

        {/* year */}
        <div className="absolute inset-x-6 bottom-5 flex items-end justify-between sm:inset-x-7 sm:bottom-6">
          <p
            className="text-[64px] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-[84px] lg:text-[100px]"
            style={{ color: DEEP }}
          >
            {item.year}
          </p>

          <span
            className="mb-1 h-2 w-2 rounded-full"
            style={{ backgroundColor: RED }}
          />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black to-transparent"
          style={{ opacity: backShade }}
        />
      </div>
    </motion.div>
  );
}

/* =====================================================
   MAIN
===================================================== */

export default function AtribsStoryBook() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });

  // keeps the two-page spread inside small screens
  const fit = useMotionValue(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const bookWidth = w >= 1024 ? 425 : w >= 640 ? 355 : 290;
      fit.set(Math.min(1, (w * 0.92) / (bookWidth * 2)));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [fit]);

  /* BOOK ENTRANCE */

  const bookScale = useTransform([progress, fit], ([p, f]) => {
    const enter = 0.2 + 0.8 * easeOut(clamp(p / ENTER_END));
    const open =
      1 + (f - 1) * clamp((p - OPEN_START) / (OPEN_END - OPEN_START));
    return enter * open;
  });

  const bookY = useTransform(progress, [0, ENTER_END], ["70vh", "0vh"]);
  const bookRotateX = useTransform(progress, [0, ENTER_END], [38, 0]);
  const bookRotateY = useTransform(progress, [0, ENTER_END], [-140, 0]);
  const bookRotateZ = useTransform(progress, [0, ENTER_END], [-12, 0]);
  const bookOpacity = useTransform(progress, [0, 0.06, 0.16], [0, 0.8, 1]);
  const bookX = useTransform(progress, [OPEN_START, OPEN_END], ["0%", "50%"]);

  /* INTRO */

  const introOpacity = useTransform(
    progress,
    [0, 0.08, 0.18, 0.23],
    [1, 1, 0.5, 0],
  );
  const introY = useTransform(progress, [0, ENTER_END], [0, -100]);

  /* COVER */

  const coverRotation = useTransform(
    progress,
    [ENTER_END, OPEN_START, OPEN_END],
    [0, 0, -180],
  );
  const coverZ = useTransform(progress, [OPEN_START, OPEN_END], [FRONT_Z, 1.5]);

  const shineX = useTransform(progress, [0.1, OPEN_START], ["-130%", "230%"]);
  const shineOpacity = useTransform(
    progress,
    [0.1, 0.16, 0.26, OPEN_START],
    [0, 1, 1, 0],
  );

  // the thick side faces fade away once the cover opens
  const bodyEdgeOpacity = useTransform(
    progress,
    [OPEN_START, OPEN_END],
    [1, 0],
  );

  /* LIGHT + SHADOW */

  const glowOpacity = useTransform(
    progress,
    [0.1, ENTER_END, OPEN_END, 1],
    [0, 0.6, 1, 0.75],
  );
  const glowScale = useTransform(progress, [0.1, OPEN_END], [0.5, 1.25]);

  const shadowScale = useTransform(
    progress,
    [0, ENTER_END, OPEN_END],
    [0.25, 1, 2],
  );
  const shadowOpacity = useTransform(
    progress,
    [0, 0.15, ENTER_END, 1],
    [0, 0.1, 0.28, 0.18],
  );

  const endOpacity = useTransform(
    progress,
    [LAST_END - 0.04, LAST_END],
    [0, 1],
  );

  const scrollIndicatorOpacity = useTransform(
    progress,
    [0.12, ENTER_END, OPEN_START, 0.4],
    [0, 1, 1, 0],
  );

  return (
    <section ref={sectionRef} className="relative h-[1000vh] bg-[#f6efea]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* BACKGROUND */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, #fffaf6 0%, #f6efea 45%, #eddfd8 100%)",
          }}
        />

        {/* RED GLOW */}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            opacity: glowOpacity,
            scale: glowScale,
            background:
              "radial-gradient(circle, rgba(223,32,39,0.26) 0%, rgba(223,32,39,0.09) 38%, transparent 66%)",
          }}
        />

        {/* HEADER */}

        <div className="absolute left-6 right-6 top-6 z-[100] flex items-center justify-between sm:left-10 sm:right-10">
          <Logo className="h-6 w-auto object-contain sm:h-7" />

          <span className="text-[11px] font-medium text-[#8c0f15]/55">
            The story
          </span>
        </div>

        {/* INTRO */}

        <motion.div
          className="absolute left-1/2 top-[17%] z-10 w-full -translate-x-1/2 px-6 text-center"
          style={{ opacity: introOpacity, y: introY }}
        >
          <p className="mb-5 text-[12px] font-medium text-[#8c0f15]/60">
            A digital story
          </p>

          <h2
            className="mx-auto max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            style={{ color: INK }}
          >
            Some stories deserve
            <br />
            to be experienced.
          </h2>

          <div className="mt-10 flex flex-col items-center gap-3">
            <span className="text-[11px] text-[#8c0f15]/50">
              Scroll to begin
            </span>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-8 w-px bg-[#8c0f15]/30"
            />
          </div>
        </motion.div>

        {/* BOOK STAGE */}

        <div
          className="absolute inset-0 z-30 flex items-center justify-center"
          style={{ perspective: 2200 }}
        >
          <motion.div
            className="relative h-[400px] w-[290px] sm:h-[490px] sm:w-[355px] lg:h-[580px] lg:w-[425px]"
            style={{
              x: bookX,
              y: bookY,
              scale: bookScale,
              rotateX: bookRotateX,
              rotateY: bookRotateY,
              rotateZ: bookRotateZ,
              opacity: bookOpacity,
              transformStyle: "preserve-3d",
            }}
          >
            {/* FLOOR SHADOW */}

            <motion.div
              className="absolute left-1/2 top-full h-12 w-[80%] -translate-x-1/2 rounded-[50%] bg-[#4a0509]/40 blur-2xl"
              style={{ scaleX: shadowScale, opacity: shadowOpacity }}
            />

            {/* RIBBON BOOKMARK */}

            <div
              className="absolute left-[68%] top-full h-14 w-3"
              style={{
                transform: "translateZ(-4px) translateY(-6px)",
                background: `linear-gradient(90deg, ${DEEP}, #b3141b)`,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)",
              }}
            />

            {/* BACK BOARD */}

            <div
              className="absolute inset-0 overflow-hidden rounded-[10px] rounded-l-[3px] shadow-[20px_25px_60px_rgba(120,20,25,0.35)]"
              style={{
                backgroundColor: DEEP,
                transform: `translateZ(-${BACK_Z}px)`,
              }}
            />

            {/* SPINE (left side) */}

            <motion.div
              className="absolute left-0 top-[1px] bottom-[1px] origin-left overflow-hidden"
              style={{
                width: DEPTH,
                opacity: bodyEdgeOpacity,
                transform: `translateZ(${FRONT_Z}px) rotateY(90deg)`,
                background: `linear-gradient(90deg, #a50f16, ${RED} 50%, #a50f16)`,
              }}
            >
              <div className="flex h-full items-center justify-center">
                <span
                  className="whitespace-nowrap text-[9px] font-semibold tracking-[0.3em] text-white/85"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "scaleX(-1) rotate(180deg)",
                  }}
                >
                  ATRIBS
                </span>
              </div>
            </motion.div>

            {/* PAGE BLOCK EDGE (right side) */}

            <motion.div
              className="absolute right-0 top-[4px] bottom-[4px] origin-right"
              style={{
                width: DEPTH,
                opacity: bodyEdgeOpacity,
                transform: `translateZ(${FRONT_Z}px) rotateY(-90deg)`,
                background:
                  "repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1.4px, #e8ddd0 1.4px, #e8ddd0 2.8px)",
              }}
            />

            {/* RIGHT-HAND BASE PAGE */}

            <div
              className="absolute inset-0 overflow-hidden rounded-[10px] rounded-l-[2px]"
              style={{ backgroundColor: PAPER, transform: "translateZ(1px)" }}
            >
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/[0.07] to-transparent" />

              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-10 text-center"
                style={{ opacity: endOpacity }}
              >
                <Logo className="h-9 w-auto object-contain" />

                <p
                  className="text-[30px] font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl"
                  style={{ color: INK }}
                >
                  To be
                  <br />
                  continued.
                </p>

                <div
                  className="h-[3px] w-10 rounded-full"
                  style={{ backgroundColor: RED }}
                />
              </motion.div>
            </div>

            {/* TURNING LEAVES */}

            {MILESTONES.map((item, index) => (
              <Leaf
                key={item.id}
                item={item}
                index={index}
                progress={progress}
              />
            ))}

            {/* FRONT COVER */}

            <motion.div
              className="absolute inset-0 origin-left"
              style={{
                rotateY: coverRotation,
                z: coverZ,
                transformStyle: "preserve-3d",
              }}
            >
              {/* OUTSIDE */}

              <div
                className="absolute inset-0 overflow-hidden rounded-[10px] rounded-l-[3px] shadow-[20px_25px_60px_rgba(120,20,25,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, #ea2a31 0%, #df2027 50%, #b5121a 100%)",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* matte grain */}
                <div
                  className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
                  style={{ backgroundImage: GRAIN }}
                />

                {/* concentric rings — connect, collaborate, celebrate */}
                <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full border border-white/25" />
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-white/25" />
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/10" />
                <div className="absolute bottom-[88px] right-[88px] h-2 w-2 rounded-full bg-white" />

                {/* hinge groove */}
                <div className="absolute inset-y-0 left-[16px] w-[7px] bg-gradient-to-r from-black/20 via-white/10 to-transparent" />

                {/* logo */}
                <div className="absolute left-9 top-7 rounded-full bg-[#fffdfa] px-4 py-2 shadow-[0_8px_20px_rgba(74,5,9,0.28)]">
                  <Logo className="h-5 w-auto object-contain sm:h-6" />
                </div>

                {/* connect / collaborate / celebrate */}
                <div className="absolute right-7 top-8 flex flex-col items-end gap-1 text-[10px] font-medium text-white/75">
                  <span>Connect</span>
                  <span>Collaborate</span>
                  <span>Celebrate</span>
                </div>

                {/* title */}
                <div className="absolute bottom-[68px] left-9 right-7">
                  <h1 className="text-[38px] font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                    The story
                    <br />
                    of ATRIBS.
                  </h1>
                </div>

                <div className="absolute bottom-7 left-9 text-[11px] font-medium text-white/80">
                  {MILESTONES[0].year} —{" "}
                  {MILESTONES[MILESTONES.length - 1].year}
                </div>

                {/* light sweep */}
                <motion.div
                  className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12"
                  style={{
                    x: shineX,
                    opacity: shineOpacity,
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)",
                  }}
                />
              </div>

              {/* INSIDE — left endpaper once open */}

              <div
                className="absolute inset-0 overflow-hidden rounded-l-[10px]"
                style={{
                  backgroundColor: PAPER_BACK,
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/[0.08] to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <Logo className="h-10 w-auto object-contain" />
                  <div
                    className="h-[3px] w-10 rounded-full"
                    style={{ backgroundColor: RED }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}

        <motion.div
          className="absolute bottom-7 left-1/2 z-[100] -translate-x-1/2"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <div className="flex items-center gap-3 text-[11px] text-[#8c0f15]/50">
            <span>Scroll</span>
            <span className="h-px w-8 bg-[#8c0f15]/25" />
            <span>Open the book</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
