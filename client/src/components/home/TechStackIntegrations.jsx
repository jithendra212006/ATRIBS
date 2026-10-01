"use client";

import { useState } from "react";
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

const CATEGORIES = [
  {
    id: "Application",
    number: "01",
    description: "Digital experiences & applications",
  },
  {
    id: "Data",
    number: "02",
    description: "Data, storage & intelligence",
  },
  {
    id: "Compute",
    number: "03",
    description: "Platforms & processing",
  },
  {
    id: "Infrastructure",
    number: "04",
    description: "Scale, deployment & operations",
  },
];

function MobileIcon() {
  return (
    <div className="flex items-center gap-1">
      <FaApple className="h-[17px] w-[17px] text-[#111]" />
      <FaAndroid className="h-[17px] w-[17px] text-[#3DDC84]" />
    </div>
  );
}

function Technology({ tech, active, onEnter, onLeave }) {
  const Icon = tech.Icon;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative cursor-default"
    >
      <div
        className={`
          flex items-center gap-3
          py-2.5
          transition-all duration-300
          ${active ? "translate-x-2" : "translate-x-0"}
        `}
      >
        {/* Icon */}
        <div
          className={`
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-full
            border
            bg-white
            transition-all duration-300
            ${
              active
                ? "border-[#df2027] shadow-[0_5px_18px_rgba(223,32,39,0.12)]"
                : "border-slate-200"
            }
          `}
        >
          {tech.mobile ? (
            <MobileIcon />
          ) : (
            <Icon
              className="h-[17px] w-[17px]"
              style={{
                color: active ? tech.color : "#64748b",
              }}
            />
          )}
        </div>

        {/* Name */}
        <span
          className={`
            text-[15px] font-medium
            tracking-tight
            transition-colors duration-300
            ${active ? "text-[#003F55]" : "text-slate-600"}
          `}
        >
          {tech.name}
        </span>

        {/* Active line */}
        <span
          className={`
            ml-1 h-px
            transition-all duration-300
            ${active ? "w-8 bg-[#df2027]" : "w-0 bg-transparent"}
          `}
        />
      </div>
    </div>
  );
}

export default function TechStackIntegrations() {
  const [active, setActive] = useState(null);

  const getTechnologies = (category) =>
    TECHNOLOGIES.filter((tech) => tech.category === category);

  return (
    <section className="relative overflow-hidden bg-[#f7f8f7] px-6 py-24 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#003F55]/15 bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#df2027]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#003F55]">
                Technology ecosystem
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#003F55] sm:text-5xl lg:text-6xl">
              The technologies
              <br />
              <span className="text-[#df2027]">behind what we build.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              A technology ecosystem spanning applications, data, compute and
              infrastructure.
            </p>
          </div>

          {/* Counter */}
          <div className="flex items-center gap-4 lg:pb-2">
            <div className="text-right">
              <div className="text-3xl font-semibold tracking-tight text-[#003F55]">
                24
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Technologies
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div className="text-right">
              <div className="text-3xl font-semibold tracking-tight text-[#003F55]">
                04
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Domains
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CANVAS ================= */}

        <div className="overflow-hidden rounded-3xl border border-[#003F55]/10 bg-white">
          {/* Top strip */}
          <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#df2027]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#003F55]">
                Our technology landscape
              </span>
            </div>

            <span className="text-xs text-slate-400">
              Hover over a technology to explore
            </span>
          </div>

          {/* Categories */}
          <div className="grid lg:grid-cols-2">
            {CATEGORIES.map((category, index) => {
              const technologies = getTechnologies(category.id);

              return (
                <div
                  key={category.id}
                  className={`
                    p-7 sm:p-9
                    ${index % 2 === 0 ? "lg:border-r" : ""}
                    ${index < 2 ? "border-b" : ""}
                    border-slate-200
                  `}
                >
                  {/* Category header */}
                  <div className="mb-7 flex items-start justify-between">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-[11px] font-bold tracking-[0.18em] text-[#df2027]">
                          {category.number}
                        </span>

                        <span className="h-px w-7 bg-[#df2027]/30" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-[#003F55]">
                        {category.id}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        {category.description}
                      </p>
                    </div>

                    <span className="text-xs text-slate-300">
                      {String(technologies.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {technologies.map((tech) => (
                      <Technology
                        key={tech.name}
                        tech={tech}
                        active={active === tech.name}
                        onEnter={() => setActive(tech.name)}
                        onLeave={() => setActive(null)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom line */}
          <div className="border-t border-slate-200 px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-slate-400">
                From application interfaces to cloud infrastructure.
              </span>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#003F55]">
                  Built for scale
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mt-12 flex flex-col gap-5 border-t border-[#003F55]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Combining proven technologies with the right architecture for every
            business requirement.
          </p>

          <div className="flex items-center gap-3 text-xs font-medium text-[#003F55]">
            <span className="h-px w-8 bg-[#df2027]" />
            Technology that works together
          </div>
        </div>
      </div>
    </section>
  );
}
