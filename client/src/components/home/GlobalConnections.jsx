"use client";

import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import PARTNERS_DATA from "./connectionsdata";

function PartnerItem({ name, logo }) {
  return (
    <div
      className="
        group
        flex
        h-20
        w-full
        items-center
        gap-3
        rounded-xl
        border
        border-neutral-200/80
        bg-white
        px-3
        py-2
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#003F55]/30
        hover:shadow-md
      "
    >
      {/* Enlarged Logo Container */}
      <div
        className="
          relative
          flex
          h-16
          w-20
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          bg-neutral-50
          p-1
        "
      >
        {logo ? (
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain p-0.5"
            sizes="(max-width: 768px) 80px, 80px"
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-[#003F55]/20" />
          </div>
        )}
      </div>

      {/* Name */}
      <span
        className="
          min-w-0
          truncate
          text-sm
          font-semibold
          tracking-tight
          text-neutral-800
          transition-colors
          duration-300
          group-hover:text-[#003F55]
        "
      >
        {name}
      </span>
    </div>
  );
}

/* =========================================================
   VERTICAL MARQUEE COLUMN
========================================================= */

function VerticalMarqueeColumn({ title, items = [], reverse = false }) {
  const duplicatedItems = [...items, ...items];
  const [scope, animate] = useAnimate();
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = animate(
      scope.current,
      { y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] },
      { duration: 25, repeat: Infinity, ease: "linear" },
    );
  }, [animate, reverse, scope]);

  return (
    <div className="flex w-full min-w-0 flex-col items-center gap-3">
      {/* Category Title */}
      <div className="flex h-5 items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-neutral-400
            sm:text-[10px]
          "
        >
          {title}
        </span>
      </div>

      {/* Marquee Window - Pauses on Hover */}
      <div
        onMouseEnter={() => animationRef.current?.pause()}
        onMouseLeave={() => animationRef.current?.play()}
        className="
          relative
          h-[420px]
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-neutral-200/70
          bg-neutral-50/40
          p-2
          sm:h-[480px]
        "
      >
        {/* Top Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-20
            h-16
            bg-gradient-to-b
            from-white
            via-white/80
            to-transparent
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            z-20
            h-16
            bg-gradient-to-t
            from-white
            via-white/80
            to-transparent
          "
        />

        {/* Moving Track */}
        <div
          ref={scope}
          style={{ willChange: "transform" }}
          className="transform-gpu flex flex-col gap-3 py-1"
        >
          {duplicatedItems.map((item, index) => (
            <PartnerItem
              key={`${item.name}-${index}`}
              name={item.name}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   GLOBAL CONNECTIONS
========================================================= */

export default function GlobalConnections() {
  return (
    <section
      id="global-connections"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-16
        select-none
        sm:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-12
            lg:gap-10
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div className="flex flex-col gap-5 lg:col-span-4 lg:pr-8">
            {/* Small Label */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#df2027]" />
              Global Network
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-lg
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.045em]
                text-neutral-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Global
              <br />
              <span className="text-[#003F55]">Connections.</span>
            </h2>

            {/* Description */}
            <p className="max-w-md text-sm leading-7 text-neutral-500 sm:text-base">
              Building strategic global alliances across industrial leaders,
              strategic partners, proud members, and skill enablers.
            </p>

            {/* Small Divider */}
            <div className="mt-2 flex items-center gap-3">
              <div className="h-px w-10 bg-[#003F55]" />
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                Connected by Atribs
              </span>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#df2027]
                  transition-colors
                  duration-200
                  hover:text-[#b8181e]
                  sm:text-sm
                "
              >
                Explore Opportunities
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — FOUR MARQUEES
          ================================================== */}
          <div
            className="
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-4
              sm:gap-4
              lg:col-span-8
            "
          >
            {/* 01 — TOP → BOTTOM */}
            <VerticalMarqueeColumn
              title="Industrial Partners"
              items={PARTNERS_DATA?.industrial}
              reverse={false}
            />

            {/* 02 — BOTTOM → TOP */}
            <VerticalMarqueeColumn
              title="Strategic Partners"
              items={PARTNERS_DATA?.strategic}
              reverse={true}
            />

            {/* 03 — TOP → BOTTOM */}
            <VerticalMarqueeColumn
              title="Proud Members"
              items={PARTNERS_DATA?.members}
              reverse={false}
            />

            {/* 04 — BOTTOM → TOP */}
            <VerticalMarqueeColumn
              title="Skill Enablers"
              items={PARTNERS_DATA?.enablers}
              reverse={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
