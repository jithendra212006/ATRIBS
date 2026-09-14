"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ForteModal from "./ForteModal";
import {
  ArrowUpRight,
  Blocks,
  Code2,
  GraduationCap,
  Network,
} from "lucide-react";

const FORTE = [
  {
    number: "01",
    title: "System Integration",
    description:
      "Connecting complex systems, platforms, and workflows into unified digital ecosystems.",
    tags: ["Architecture", "Integration", "Implementation"],
    label: "SEAMLESS ECOSYSTEMS",
    icon: Network,
    dark: true,
  },
  {
    number: "02",
    title: "Digital Pods",
    description:
      "Specialized teams that bring focused expertise, faster execution, and collaborative innovation.",
    tags: ["Agile Teams", "Focused Delivery", "Business Impact"],
    label: "IDEAS TO EXECUTION",
    icon: Blocks,
    dark: false,
  },
  {
    number: "03",
    title: "Application Development",
    description:
      "Building secure, scalable, and high-performance digital applications for modern enterprises.",
    tags: ["Web & Mobile", "Enterprise Apps", "Custom Solutions"],
    label: "PRODUCTS THAT PERFORM",
    icon: Code2,
    dark: false,
  },
  {
    number: "04",
    title: "Shield Skill Hub",
    description:
      "Developing future-ready technology talent and capabilities for a stronger digital ecosystem.",
    tags: ["Skilling", "Certifications", "Talent Ecosystem"],
    label: "PEOPLE POWER PROGRESS",
    icon: GraduationCap,
    dark: true,
  },
];

export default function Forte() {
  const [selectedForte, setSelectedForte] = useState(null);
  return (
    <section
      id="ourforte"
      className="relative overflow-hidden bg-white px-6 py-28 lg:px-16 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-100/40 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-neutral-100 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:col-span-4"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#df2027]" />
              Our Forte
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-neutral-400">
                04 Core Capabilities
              </p>

              <h2 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] text-neutral-950 sm:text-6xl">
                What we
                <br />
                engineer
                <br />
                <span className="text-[#df2027]">best.</span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg">
                Combining expertise, technology, and execution to turn complex
                challenges into real-world solutions.
              </p>
            </div>

            <div className="mt-10 space-y-0 border-t border-neutral-200">
              {[
                "People-Centric Approach",
                "Scalable & Future-Ready",
                "Domain-Driven Expertise",
                "Impact Beyond Technology",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-neutral-200 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-neutral-400">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-neutral-700">
                      {item}
                    </span>
                  </div>

                  <span className="text-lg font-light text-neutral-400">+</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
              >
                Explore Our Capabilities
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#df2027]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                  Built for what&apos;s next
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {FORTE.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  onClick={() => {
                    if (item.title === "Shield Skill Hub") {
                      window.open("https://www.shieldskillhub.com/", "_blank");
                      return;
                    }

                    setSelectedForte(item.title);
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className={`group relative min-h-[350px] cursor-pointer overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-2 ${
                    item.dark
                      ? "border-neutral-800 bg-[#101010] text-white"
                      : "border-neutral-200 bg-white text-neutral-950 shadow-[0_15px_50px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  <div className="absolute right-6 top-6">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 ${
                        item.dark
                          ? "border-white/20 bg-white/5"
                          : "border-neutral-300 bg-neutral-50"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs ${
                        item.dark ? "text-white/50" : "text-neutral-400"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span
                      className={`h-px w-10 ${
                        item.dark ? "bg-white/20" : "bg-neutral-300"
                      }`}
                    />
                  </div>

                  <div className="mt-10 flex items-start justify-between gap-5">
                    <div className="max-w-[250px]">
                      <h3 className="text-2xl font-black uppercase leading-[0.95] tracking-[-0.035em] sm:text-[1.7rem]">
                        {item.title}
                      </h3>

                      <div className="mt-5 h-0.5 w-5 bg-[#df2027]" />

                      <p
                        className={`mt-5 text-sm leading-relaxed ${
                          item.dark ? "text-white/60" : "text-neutral-500"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div
                      className={`relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl ${
                        item.dark ? "bg-white/[0.04]" : "bg-neutral-50"
                      }`}
                    >
                      <div
                        className={`absolute inset-2 rounded-full border ${
                          item.dark
                            ? "border-[#df2027]/30"
                            : "border-[#df2027]/20"
                        }`}
                      />

                      <Icon
                        className={`relative h-8 w-8 ${
                          item.dark ? "text-white" : "text-neutral-900"
                        }`}
                        strokeWidth={1.4}
                      />

                      <span className="absolute right-1 top-1 h-1.5 w-1.5 animate-pulse rounded-full bg-[#df2027]" />
                    </div>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1.5 text-[9px] font-medium ${
                            item.dark
                              ? "border-white/15 bg-white/5 text-white/70"
                              : "border-neutral-200 bg-neutral-50 text-neutral-600"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`mt-5 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.25em] ${
                        item.dark ? "text-white/40" : "text-neutral-400"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
                      {item.label}
                    </div>
                  </div>

                  <div
                    className={`absolute -bottom-24 -right-24 h-48 w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${
                      item.dark ? "bg-[#df2027]/10" : "bg-red-50"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-neutral-400">
            Ideas → Integration → Solutions → Impact
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
      </div>
      <ForteModal
        selectedForte={selectedForte}
        onClose={() => setSelectedForte(null)}
      />
    </section>
  );
}
