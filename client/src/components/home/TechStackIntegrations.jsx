"use client";

import { useRef } from "react";

import {
  FaAws,
  FaJava,
  FaMicrosoft,
  FaApple,
  FaAndroid,
  FaInfinity,
} from "react-icons/fa";

import {
  SiFlutter,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiMongodb,
  SiDotnet,
  SiApachegroovy,
  SiElixir,
  SiGo,
  SiSpring,
  SiRedis,
  SiPostgresql,
  SiPython,
  SiNodedotjs,
  SiApachehadoop,
  SiApachespark,
} from "react-icons/si";

import { Database } from "lucide-react";

import { motion, useInView } from "framer-motion";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const TECHNOLOGIES = [
  // APPLICATION

  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB",
    category: "Application",
  },

  {
    name: "Angular",
    Icon: SiAngular,
    color: "#DD0031",
    category: "Application",
  },

  {
    name: "Vue",
    Icon: SiVuedotjs,
    color: "#4FC08D",
    category: "Application",
  },

  {
    name: "Flutter",
    Icon: SiFlutter,
    color: "#02569B",
    category: "Application",
  },

  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#339933",
    category: "Application",
  },

  // DATA

  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#47A248",
    category: "Data",
  },

  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#4169E1",
    category: "Data",
  },

  {
    name: "Redis",
    Icon: SiRedis,
    color: "#DC382D",
    category: "Data",
  },

  {
    name: "Oracle",
    Icon: Database,
    color: "#F80000",
    category: "Data",
  },

  {
    name: "SQL Server",
    Icon: Database,
    color: "#CC2927",
    category: "Data",
  },

  {
    name: "Python",
    Icon: SiPython,
    color: "#3776AB",
    category: "Data",
  },

  // COMPUTE

  {
    name: "AWS",
    Icon: FaAws,
    color: "#FF9900",
    category: "Compute",
  },

  {
    name: ".NET",
    Icon: SiDotnet,
    color: "#512BD4",
    category: "Compute",
  },

  {
    name: "Java",
    Icon: FaJava,
    color: "#ED8B00",
    category: "Compute",
  },

  {
    name: "Go",
    Icon: SiGo,
    color: "#00ADD8",
    category: "Compute",
  },

  {
    name: "Spring",
    Icon: SiSpring,
    color: "#6DB33F",
    category: "Compute",
  },

  {
    name: "C#",
    Icon: SiDotnet,
    color: "#239120",
    category: "Compute",
  },

  // INFRASTRUCTURE

  {
    name: "DevOps",
    Icon: FaInfinity,
    color: "#0DB7ED",
    category: "Infrastructure",
  },

  {
    name: "Hadoop",
    Icon: SiApachehadoop,
    color: "#66CCFF",
    category: "Infrastructure",
  },

  {
    name: "Spark",
    Icon: SiApachespark,
    color: "#E25A1C",
    category: "Infrastructure",
  },

  {
    name: "Microsoft",
    Icon: FaMicrosoft,
    color: "#737373",
    category: "Infrastructure",
  },

  {
    name: "Groovy",
    Icon: SiApachegroovy,
    color: "#4298B8",
    category: "Infrastructure",
  },

  {
    name: "Elixir",
    Icon: SiElixir,
    color: "#4B275F",
    category: "Infrastructure",
  },

  // MOBILE

  {
    name: "iOS / Android",
    Icon: null,
    color: "#111111",
    category: "Application",
    mobile: true,
  },
];

/* =========================================================
   MOBILE ICON
========================================================= */

function MobileIcon() {
  return (
    <div className="flex items-center gap-1">
      <FaApple className="h-[17px] w-[17px] text-[#111]" />

      <FaAndroid className="h-[17px] w-[17px]" style={{ color: "#3DDC84" }} />
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechStackIntegrations() {
  /*
    Detect when the section enters the viewport.

    once: true
    → animation happens only once

    amount: 0.4
    → approximately 40% of the section needs
       to enter the viewport before opening
  */

  const sectionRef = useRef(null);

  const isOpen = useInView(sectionRef, {
    once: false,
    amount: 0.35,
  });

  /* =======================================================
     3 ORBITAL RINGS

     24 technologies
     8 technologies per ring
  ======================================================= */

  const rings = [
    TECHNOLOGIES.slice(0, 8),
    TECHNOLOGIES.slice(8, 16),
    TECHNOLOGIES.slice(16, 24),
  ];

  /* =======================================================
     ORBIT CONFIGURATION
  ======================================================= */

  const ringConfig = [
    {
      radius: 125,
      duration: 22,
      direction: 1,
    },

    {
      radius: 185,
      duration: 30,
      direction: -1,
    },

    {
      radius: 245,
      duration: 38,
      direction: 1,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-24
        sm:px-10
        lg:px-16
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="max-w-xl">
            {/* Label */}

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-neutral-200
                bg-white
                px-4
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-neutral-600
                shadow-sm
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#df2027]
                "
              />
              Integrations
            </div>

            {/* Heading */}

            <h2
              className="
                text-4xl
                font-extrabold
                leading-[1.05]
                tracking-[-0.045em]
                text-neutral-950
                sm:text-5xl
                lg:text-6xl
              "
              style={{
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              Powerful tools
              <br />
              for digital
              <br />
              <span className="text-[#df2027]">excellence.</span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-md
                text-base
                leading-7
                text-neutral-500
                sm:text-lg
              "
            >
              A connected technology ecosystem powering modern applications,
              intelligent data and scalable digital infrastructure.
            </p>

            {/* Status */}

            <motion.div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-neutral-400
              "
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity: isOpen ? 1 : 0,
                x: isOpen ? 0 : -10,
              }}
              transition={{
                duration: 0.6,
                delay: 1.2,
              }}
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#df2027]
                "
              />
              Technology ecosystem
            </motion.div>
          </div>

          {/* =================================================
              TECHNOLOGY ORBIT
          ================================================= */}

          <div
            className="
              relative
              flex
              h-[580px]
              w-full
              items-center
              justify-center
              overflow-visible
            "
          >
            {/* =================================================
                ORBIT CANVAS
            ================================================= */}

            <div
              className="
                relative
                h-[560px]
                w-[560px]
                max-w-none
                scale-[0.65]
                sm:scale-[0.78]
                lg:scale-100
              "
            >
              {/* =================================================
                  SOFT BACKGROUND GLOW
              ================================================= */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[#003F55]/[0.025]
                  blur-3xl
                "
                animate={{
                  scale: isOpen ? [1, 1.08, 1] : 0.7,

                  opacity: isOpen ? [0.4, 0.7, 0.4] : 0,
                }}
                transition={{
                  duration: 5,
                  repeat: isOpen ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />

              {/* =================================================
                  ORBIT RINGS + TECHNOLOGIES
              ================================================= */}

              {rings.map((ring, ringIndex) => {
                const config = ringConfig[ringIndex];

                return (
                  <motion.div
                    key={`orbit-${ringIndex}`}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                    "
                    style={{
                      width: config.radius * 2,

                      height: config.radius * 2,

                      marginLeft: -config.radius,

                      marginTop: -config.radius,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.35,
                      rotate: 0,
                    }}
                    animate={{
                      opacity: isOpen ? 1 : 0,

                      scale: isOpen ? 1 : 0.35,

                      rotate: isOpen ? config.direction * 360 : 0,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.45,
                        delay: ringIndex * 0.18,
                      },

                      scale: {
                        duration: 1,
                        delay: ringIndex * 0.15,

                        ease: [0.22, 1, 0.36, 1],
                      },

                      rotate: {
                        duration: config.duration,

                        delay: 1.15 + ringIndex * 0.15,

                        repeat: Infinity,

                        ease: "linear",
                      },
                    }}
                  >
                    {/* =========================================
                        ORBIT LINE
                    ========================================= */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-neutral-200
                      "
                    />

                    {/* =========================================
                        ORBIT ACCENT
                    ========================================= */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-0
                        h-1.5
                        w-1.5
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-[#df2027]
                      "
                    />

                    {/* =========================================
                        TECHNOLOGIES
                    ========================================= */}

                    {ring.map((tech, itemIndex) => {
                      const Icon = tech.Icon;

                      const angle =
                        (itemIndex / ring.length) * Math.PI * 2 - Math.PI / 2;

                      const x = Math.cos(angle) * config.radius;

                      const y = Math.sin(angle) * config.radius;

                      return (
                        <div
                          key={tech.name}
                          className="
                              absolute
                              left-1/2
                              top-1/2
                              -translate-x-1/2
                              -translate-y-1/2
                            "
                          style={{
                            transform: `translate(${x}px, ${y}px)`,
                          }}
                        >
                          {/* =================================
                                COUNTER ROTATION

                                Keeps the technology logos
                                upright while their orbit
                                rotates.
                            ================================= */}

                          <motion.div
                            className="
                                group
                                relative
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-neutral-200
                                bg-white
                                shadow-[0_6px_20px_rgba(0,0,0,0.06)]
                              "
                            animate={{
                              rotate: isOpen ? config.direction * -360 : 0,
                            }}
                            transition={{
                              rotate: {
                                duration: config.duration,

                                delay: 1.15 + ringIndex * 0.15,

                                repeat: Infinity,

                                ease: "linear",
                              },
                            }}
                          >
                            {/* ICON */}

                            {tech.mobile ? (
                              <MobileIcon />
                            ) : (
                              <Icon
                                className="
                                    h-5
                                    w-5
                                  "
                                style={{
                                  color: tech.color,
                                }}
                              />
                            )}

                            {/* =================================
                                  TOOLTIP
                              ================================= */}

                            <div
                              className="
                                  pointer-events-none
                                  absolute
                                  -bottom-8
                                  left-1/2
                                  z-50
                                  -translate-x-1/2
                                  whitespace-nowrap
                                  rounded-full
                                  bg-neutral-950
                                  px-2.5
                                  py-1
                                  text-[9px]
                                  font-medium
                                  text-white
                                  opacity-0
                                  transition-opacity
                                  duration-200
                                  group-hover:opacity-100
                                "
                            >
                              {tech.name}
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                );
              })}

              {/* =================================================
                  CENTER PULSE
              ================================================= */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  z-30
                  h-32
                  w-32
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[#df2027]/20
                "
                animate={{
                  scale: isOpen ? [1, 1.35, 1] : 0.5,

                  opacity: isOpen ? [0.45, 0, 0.45] : 0,
                }}
                transition={{
                  duration: 2.5,
                  repeat: isOpen ? Infinity : 0,
                  ease: "easeOut",
                }}
              />

              {/* =================================================
                  CENTER FOLDER
              ================================================= */}

              <motion.div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-40
                  -translate-x-1/2
                  -translate-y-1/2
                "
                initial={{
                  scale: 0.7,
                  opacity: 0,
                }}
                animate={{
                  scale: isOpen ? 0.92 : 0.7,

                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* =============================================
                    FOLDER SHADOW
                ============================================= */}

                <motion.div
                  className="
                    absolute
                    -inset-4
                    rounded-[28px]
                    bg-[#003F55]/10
                    blur-2xl
                  "
                  animate={{
                    scale: isOpen ? [1, 1.08, 1] : 1,

                    opacity: isOpen ? [0.7, 0.45, 0.7] : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: isOpen ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />

                {/* =============================================
                    FOLDER
                ============================================= */}

                <div
                  className="
                    relative
                    h-[145px]
                    w-[190px]
                    rounded-[22px]
                    border
                    border-[#003F55]/10
                    bg-[#003F55]
                    shadow-[0_25px_50px_rgba(0,63,85,0.22)]
                  "
                >
                  {/* Folder tab */}

                  <div
                    className="
                      absolute
                      -top-3
                      left-5
                      h-7
                      w-20
                      rounded-t-xl
                      bg-[#003F55]
                    "
                  />

                  {/* Inner folder */}

                  <div
                    className="
                      absolute
                      inset-x-3
                      bottom-3
                      top-8
                      rounded-[16px]
                      border
                      border-white/10
                      bg-[#064b61]
                    "
                  />

                  {/* =========================================
                      FOLDER CONTENT
                  ========================================= */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      flex-col
                      items-center
                      justify-center
                      gap-2
                      text-white
                    "
                  >
                    <div
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-white/50
                      "
                    >
                      Atribs
                    </div>

                    <div
                      className="
                        text-xl
                        font-semibold
                        tracking-tight
                      "
                    >
                      Technology
                    </div>

                    <div
                      className="
                        text-xs
                        text-white/45
                      "
                    >
                      {TECHNOLOGIES.length} technologies
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
