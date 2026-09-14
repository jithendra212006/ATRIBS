"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator({ targetId = "services" }) {
  const handleScroll = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll to next section"
      className="group relative flex h-10 w-6 cursor-pointer items-start justify-center rounded-full border-2 border-neutral-300/80 bg-white/40 p-1 backdrop-blur-sm transition-colors duration-300 hover:border-neutral-500"
    >
      <motion.span
        animate={{
          y: [0, 14, 0],
          opacity: [0.9, 0.2, 0.9],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-1.5 w-1.5 rounded-full bg-neutral-400 transition-colors duration-300 group-hover:bg-[#df2027]"
      />
    </button>
  );
}
