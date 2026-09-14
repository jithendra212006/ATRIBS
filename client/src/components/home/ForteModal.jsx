"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

const FORTE_CONTENT = {
  "System Integration": {
    number: "01",
    eyebrow: "CORE CAPABILITY",
    title: "System Integration",
    image: "/images/forte/system-integration.jpg",
    description:
      "Business technology has made significant progress and now includes systems that are used across entire companies and cover various aspects of the business. This progress has been driven by the combination of digital platforms, which have become more flexible and scalable, allowing for real-time processing and integration across multiple channels. These advancements have contributed to the growth of the global business sector.",
    additional:
      "Creating these advanced systems involves tasks like designing and building custom structures or applications, connecting them with new or existing hardware and software, and establishing communication networks. We at Atribs, provide support for managing programs, designing, creating architectures, integrating systems, implementing solutions, and providing ongoing support. We also work with complex scenarios and specific categories of information to give our clients an extra advantage.",
    tags: [
      "Architecture",
      "System Integration",
      "Implementation",
      "Program Management",
    ],
  },

  "Digital Pods": {
    number: "02",
    eyebrow: "CORE CAPABILITY",
    title: "Digital Pods",
    image: "/images/forte/digital-pods.jpg",
    description:
      "Digital Pods offer a distinct departure from conventional team-building models. These self-contained functional units possess the ability to assume complete responsibility for product functionality.",
    additional:
      "They encompass a diverse range of skills essential for the formation of agile teams dedicated to mobile, data, and web products. Unlike regular project teams, Pods operate under a broader mandate, emphasising the need to surpass conventional thinking and foster innovation.",
    tags: ["Agile Teams", "Mobile", "Data", "Web Products"],
  },

  "Application Development": {
    number: "03",
    eyebrow: "CORE CAPABILITY",
    title: "Application Development",
    image: "/images/forte/application-development.jpg",
    description:
      "Our team of developers works hard to create the best solutions for our clients. We pay attention to both the big picture and small details.",
    additional:
      "We use the latest technology and design techniques to make sure our applications are secure, visually appealing, easy to use, and can grow as needed. These things are very important to us.",
    tags: [
      "Web Applications",
      "Mobile Applications",
      "Enterprise Solutions",
      "Scalable Systems",
    ],
  },
};

export default function ForteModal({ selectedForte, onClose }) {
  useEffect(() => {
    if (!selectedForte) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedForte, onClose]);

  const content = selectedForte ? FORTE_CONTENT[selectedForte] : null;

  return (
    <AnimatePresence>
      {content && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md sm:p-6 lg:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/20 bg-white shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-[#df2027]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-2">
              <div className="relative min-h-[280px] overflow-hidden bg-neutral-950 lg:min-h-[620px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#df2027]/30 via-transparent to-black" />

                <div className="absolute left-6 top-6 z-10">
                  <span className="font-mono text-xs tracking-[0.3em] text-white/50">
                    {content.number} / 04
                  </span>
                </div>

                <div className="absolute inset-6 flex items-center justify-center rounded-2xl border border-white/10">
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                        Image
                      </span>
                    </div>

                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                      Image Placeholder
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#df2027]" />
                    ATRIBS / CAPABILITY
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                    {content.eyebrow}
                  </span>
                </div>

                <h2 className="mt-5 max-w-lg text-4xl font-black uppercase leading-[0.92] tracking-[-0.045em] text-neutral-950 sm:text-5xl">
                  {content.title}
                </h2>

                <div className="mt-6 h-0.5 w-8 bg-[#df2027]" />

                <div className="mt-7 space-y-5 text-sm leading-7 text-neutral-600">
                  <p>{content.description}</p>
                  <p>{content.additional}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-[9px] font-medium uppercase tracking-wide text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <div className="flex items-center justify-between border-t border-neutral-200 pt-5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                      Ideas → Integration → Impact
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
