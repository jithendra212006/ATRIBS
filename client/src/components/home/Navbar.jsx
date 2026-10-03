"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Forte", href: "/#ourforte" },
  { label: "Services", href: "/#services" },
  { label: "Careers", href: "/#careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (e, href) => {
    if (href.includes("#")) {
      const targetId = href.split("#")[1];

      if (pathname === "/") {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          if (window.__lenis) {
            window.__lenis.scrollTo(targetElement, {
              offset: -60,
              duration: 2.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        // Navigating from another route (like /about) to the homepage section
        router.push(href);
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15,
      }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <nav
        className={`pointer-events-auto relative flex w-full max-w-4xl items-center justify-between bg-black px-6 py-2 rounded-b-[24px] transition-shadow duration-300 ${
          scrolled ? "shadow-[0_16px_36px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        <svg
          className="pointer-events-none absolute -left-[24px] top-0 h-[24px] w-[24px] fill-black"
          viewBox="0 0 24 24"
        >
          <path d="M0,0 C13.255,0 24,10.745 24,24 L24,0 Z" />
        </svg>

        <svg
          className="pointer-events-none absolute -right-[24px] top-0 h-[24px] w-[24px] fill-black"
          viewBox="0 0 24 24"
        >
          <path d="M24,0 C10.745,0 0,10.745 0,24 L0,0 Z" />
        </svg>

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ATRIBS Logo"
            width={200}
            height={60}
            className="w-32 sm:w-36 h-auto object-contain"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden shrink-0 md:inline-flex">
          <InteractiveHoverButton text="Get in Touch" />
        </a>

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-8 w-8 items-center justify-center rounded-full text-white md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute left-4 right-4 top-[56px] z-40 mx-auto max-w-3xl rounded-[24px] bg-black p-5 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-[14px] font-semibold text-black"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
