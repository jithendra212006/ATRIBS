"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F3F2EF] text-[#111111]">
      {/* =====================================================
          TOP FOOTER
      ===================================================== */}

      <div className="px-4 pt-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            mx-auto
            max-w-[1500px]
            overflow-hidden
            rounded-[30px]
            bg-[#111111]
          "
        >
          {/* =================================================
              RED ARCHITECTURAL SHAPE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[120px]
              -top-[160px]
              h-[440px]
              w-[440px]
              rounded-full
              bg-[#C9282D]
              sm:-right-[150px]
              sm:-top-[190px]
              sm:h-[520px]
              sm:w-[520px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[40px]
              top-[40px]
              h-[170px]
              w-[170px]
              rounded-full
              border
              border-white/15
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[35px]
              top-[115px]
              h-[90px]
              w-[90px]
              rounded-full
              border
              border-white/15
            "
          />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              grid
              min-h-[500px]
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            {/* =================================================
                LEFT — CTA
            ================================================== */}

            <div
              className="
                flex
                flex-col
                justify-between
                p-8
                sm:p-12
                lg:p-16
              "
            >
              {/* LOGO */}

              <Link href="/" className="inline-flex w-fit items-center">
                <img
                  src="/logo.png"
                  alt="Atribs"
                  className="h-25 w-auto object-contain"
                />
              </Link>

              {/* MAIN CTA */}

              <div className="mt-20 max-w-[650px] lg:mt-25">
                <p
                  className="
                    mb-5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-white/40
                  "
                >
                  Atribs Digital Systems
                </p>

                <h2
                  className="
                    max-w-[650px]
                    text-4xl
                    font-medium
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                  "
                >
                  Let's build
                  <br />
                  what matters.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[470px]
                    text-sm
                    leading-6
                    text-white/50
                  "
                >
                  Intelligent digital systems designed to help businesses move
                  faster, work smarter and grow with confidence.
                </p>

                {/* CTA */}

                <Link
                  href="/#contact"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-[#111111]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Start a conversation
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C9282D]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={13} />
                  </span>
                </Link>
              </div>

              {/* LOCATION */}

              <div
                className="
                  mt-20
                  flex
                  flex-wrap
                  items-center
                  gap-x-6
                  gap-y-3
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                  lg:mt-12
                "
              >
                <span className="flex items-center gap-2">
                  <MapPin size={12} />
                  Chennai · India
                </span>

                <span className="h-px w-6 bg-white/15" />

                <span>Digital Systems</span>
              </div>
            </div>

            {/* =================================================
                RIGHT — NAVIGATION
            ================================================== */}

            <div
              className="
                relative
                flex
                flex-col
                justify-between
                border-t
                border-white/10
                p-8
                sm:p-12
                lg:border-l
                lg:border-t-0
                lg:p-16
              "
            >
              {/* RED CIRCLE DETAIL */}

              <div
                className="
                  absolute
                  right-8
                  top-8
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C9282D]
                  sm:right-12
                  sm:top-12
                  lg:right-16
                  lg:top-16
                "
              >
                <ArrowUpRight size={18} className="text-white" />
              </div>

              {/* NAVIGATION */}

              <div className="pt-20 lg:pt-0">
                <p
                  className="
                    mb-7
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Explore
                </p>

                <nav className="flex flex-col">
                  <FooterLink number="01" label="About" href="/#about" />

                  <FooterLink number="02" label="Services" href="/#services" />

                  <FooterLink
                    number="03"
                    label="Technology"
                    href="/#technology"
                  />

                  <FooterLink number="04" label="Work" href="/#work" />

                  <FooterLink number="05" label="Careers" href="/#careers" />
                </nav>
              </div>

              {/* CONTACT */}

              <div className="mt-16">
                <p
                  className="
                    mb-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Get in touch
                </p>

                <a
                  href="mailto:info@atribs.com"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-white
                  "
                >
                  <Mail size={14} className="text-[#C9282D]" />

                  <span className="border-b border-white/20 pb-1 transition-colors group-hover:border-white">
                    info@atribs.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <div className="px-4 pb-5 pt-4 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            flex-col
            gap-5
            rounded-[24px]
            border
            border-black/[0.07]
            bg-white
            px-6
            py-5
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-black/40
            "
          >
            <span>© 2026 Atribs</span>

            <span className="hidden h-3 w-px bg-black/10 sm:block" />

            <span>All rights reserved</span>
          </div>

          {/* CENTER */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <SocialButton href="#" label="Instagram">
              <FaInstagram size={13} />
            </SocialButton>

            <SocialButton href="#" label="LinkedIn">
              <FaLinkedinIn size={13} />
            </SocialButton>
          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="
                text-[10px]
                text-black/40
                transition-colors
                hover:text-black
              "
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="
                text-[10px]
                text-black/40
                transition-colors
                hover:text-black
              "
            >
              Terms
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                group
                flex
                items-center
                gap-2
                text-[10px]
                text-black/50
                transition-colors
                hover:text-black
              "
            >
              Back to top
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  transition-all
                  duration-300
                  group-hover:border-black
                  group-hover:bg-black
                  group-hover:text-white
                "
              >
                <ArrowUp size={11} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   NAV LINK
========================================================= */

function FooterLink({ number, label, href }) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        items-center
        gap-4
        border-b
        border-white/10
        py-4
        transition-all
        duration-300
      "
    >
      <span
        className="
          w-7
          text-[9px]
          tracking-[0.1em]
          text-white/25
          transition-colors
          duration-300
          group-hover:text-[#C9282D]
        "
      >
        {number}
      </span>

      <span
        className="
          text-lg
          font-medium
          tracking-[-0.025em]
          text-white/65
          transition-all
          duration-300
          group-hover:translate-x-2
          group-hover:text-white
          sm:text-xl
        "
      >
        {label}
      </span>

      <ArrowUpRight
        size={15}
        className="
          ml-auto
          -translate-x-2
          opacity-0
          text-[#C9282D]
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        border
        border-black/10
        text-black/45
        transition-all
        duration-300
        hover:border-[#C9282D]
        hover:bg-[#C9282D]
        hover:text-white
      "
    >
      {children}
    </a>
  );
}
