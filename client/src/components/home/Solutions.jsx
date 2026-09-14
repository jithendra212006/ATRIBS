"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  Sparkles,
  Bot,
  Cloud,
  Layers,
  ShieldAlert,
  Binary,
  Cpu,
  Boxes,
  Zap,
  Wheat,
  Landmark,
  Radio,
  Workflow,
  Glasses,
  FileSearch,
  Users2,
  Sliders,
  CheckCircle2,
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "conversational-ai",
    title: "Conversational AI Bots",
    tagline: "Autonomous Agentic Workflows",
    category: "AI & Data",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=75&w=800&auto=format&fit=crop",
    overview:
      "Context-aware neural LLM pipelines trained on domain documentation to resolve complex inquiries with zero-hallucination guardrails.",
    features: [
      "Sub-200ms latency voice & text interfaces",
      "Dynamic tool calling & CRM bi-directional sync",
      "On-premise sovereign model hosting",
    ],
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Management",
    tagline: "Multi-Region Resilience",
    category: "Infrastructure",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=800&auto=format&fit=crop",
    overview:
      "Terraform-orchestrated multi-region cloud foundations with automated drift detection and proactive failover architecture.",
    features: [
      "Zero-downtime FinOps automation",
      "Kubernetes cluster fleet lifecycle",
    ],
  },
  {
    id: "cybersecurity",
    title: "AI-Based Cybersecurity",
    tagline: "Zero-Trust Threat Shield",
    category: "SecOps",
    icon: ShieldAlert,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=75&w=800&auto=format&fit=crop",
    overview:
      "Continuous algorithmic vector analysis detecting malicious behavioral deviations and zero-day intrusion patterns.",
    features: [
      "Automated containment playbooks",
      "FedRAMP & SOC2 compliant auditing",
    ],
  },
  {
    id: "trade-finance-nlp",
    title: "Trade Finance & AI Extraction",
    tagline: "Intelligent OCR & Compliance",
    category: "FinTech",
    icon: FileSearch,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=75&w=800&auto=format&fit=crop",
    overview:
      "Vision-language models parsing bills of lading, sanction checks, and letters of credit down to validated structured payloads.",
    features: [
      "99.4% precision on stamps & signatures",
      "Cross-checks against SWIFT rules",
    ],
  },
  {
    id: "unified-workspace",
    title: "Unified Digital Workspace",
    tagline: "Secure Distributed Fabric",
    category: "Enterprise IT",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=75&w=800&auto=format&fit=crop",
    overview:
      "Centralized identity and SSO mesh connecting distributed workforces to internal perimeters and application clusters.",
    features: [
      "Biometric WebAuthn hardware keys",
      "Device fleet telemetry verification",
    ],
  },
  {
    id: "blockchain",
    title: "Enterprise Blockchain",
    tagline: "Immutable Audit Trails",
    category: "Decentralized",
    icon: Binary,
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=75&w=800&auto=format&fit=crop",
    overview:
      "Permissioned Hyperledger and EVM consortium layers establishing provenance verification across supply networks.",
    features: [
      "High-throughput private networks",
      "Gasless transaction settlement",
    ],
  },
  {
    id: "micro-finance",
    title: "Microfinance & Co-op IT",
    tagline: "Core Banking Modernization",
    category: "FinTech",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=75&w=800&auto=format&fit=crop",
    overview:
      "Lightweight core banking engines designed for cooperatives, managing member ledgers, passbooks, and disbursements.",
    features: [
      "Offline-first tablet syncing",
      "Direct account clearing via central rails",
    ],
  },
  {
    id: "energy-automation",
    title: "Energy Controls & Automation",
    tagline: "Autonomous SCADA & Grid Edge",
    category: "Smart Industry",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=75&w=800&auto=format&fit=crop",
    overview:
      "PLC telemetry connected to AI controllers to automatically redistribute load during peak regional tariff windows.",
    features: [
      "Real-time HVAC & plant optimization",
      "Carbon intensity telemetry capture",
    ],
  },
  {
    id: "metaverse-ar-vr",
    title: "AR / VR / Web3 Metaverse",
    tagline: "Spatial Enterprise Twins",
    category: "Spatial",
    icon: Glasses,
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=75&w=800&auto=format&fit=crop",
    overview:
      "1:1 spatial digital twins for field training, architectural walkthroughs, and collaborative 3D hardware reviews.",
    features: [
      "WebXR low-bandwidth streaming",
      "Multi-user spatial audio corridors",
    ],
  },
  {
    id: "industrial-maintenance",
    title: "Industrial Maintenance",
    tagline: "Predictive Equipment Uptime",
    category: "Industry 4.0",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=800&auto=format&fit=crop",
    overview:
      "Vibration and acoustic sensor streams alerting maintenance teams weeks ahead of mechanical bearing breakdown.",
    features: [
      "Automated spare-part replenishment",
      "Mean-Time-To-Failure prediction",
    ],
  },
  {
    id: "cattle-management",
    title: "Cattle Telemetry & Tracking",
    tagline: "Livestock Biometric Tracking",
    category: "AgriTech",
    icon: Radio,
    image:
      "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=75&w=800&auto=format&fit=crop",
    overview:
      "LoRaWAN ear tags tracking core temperature and activity to isolate health anomalies before herd outbreaks spread.",
    features: [
      "Sub-GHz multi-kilometer range",
      "Estrus and viral illness prediction",
    ],
  },
  {
    id: "agri-lending",
    title: "Agri Lending Platform",
    tagline: "Satellite Yield Underwriting",
    category: "FinTech",
    icon: Wheat,
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=75&w=800&auto=format&fit=crop",
    overview:
      "Sentinel satellite NDVI indexes coupled with historical weather models to underwrite regional farm capital.",
    features: [
      "Instant land boundary validation",
      "Parametric insurance auto-triggers",
    ],
  },
  {
    id: "itops-itsm",
    title: "ITOPS & ITSM",
    tagline: "Service Desk Orchestration",
    category: "Operations",
    icon: Workflow,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=75&w=800&auto=format&fit=crop",
    overview:
      "Automated routing engines connecting telemetry breaches to runbooks and self-healing cloud actions.",
    features: [
      "Incident triage AI copilot",
      "Automated rollbacks via webhooks",
    ],
  },
  {
    id: "cloud-catalogue",
    title: "Cloud Digital Catalogue",
    tagline: "Pre-Approved Blueprints",
    category: "DevOps",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=800&auto=format&fit=crop",
    overview:
      "Pre-approved infrastructure blueprints allowing squads to launch compliant staging clusters without gatekeepers.",
    features: [
      "Policy-as-code enforcement",
      "Ephemeral cluster self-destruction",
    ],
  },
  {
    id: "hrms",
    title: "Enterprise HRMS",
    tagline: "Global Workforce Operations",
    category: "Enterprise",
    icon: Users2,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=800&auto=format&fit=crop",
    overview:
      "Multi-currency payroll engine handling automated tax withholding across 40+ national enterprise corridors.",
    features: ["Cross-border tax withholdings", "Single-portal benefits admin"],
  },
  {
    id: "low-code-platform",
    title: "Low-Code / No-Code Platform",
    tagline: "Rapid Internal Tooling",
    category: "Platform",
    icon: Sliders,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=800&auto=format&fit=crop",
    overview:
      "Drag-and-drop workflow canvas connected directly to databases and REST endpoints with strict enterprise permissions.",
    features: [
      "React extension SDK",
      "Git-backed branch versioning",
      "Granular row-level permissions",
    ],
  },
  {
    id: "facility-maintenance",
    title: "Facility & Assets Maintenance",
    tagline: "Physical Estate Auditing",
    category: "Operations",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=75&w=800&auto=format&fit=crop",
    overview:
      "QR/NFC-tagged facility auditing dispatching maintenance squads based on real equipment runtime metrics.",
    features: [
      "Offline mobile field inspection",
      "Contractor SLA resolution timers",
    ],
  },
];

const ROW_ONE = SOLUTIONS.slice(0, 9);
const ROW_TWO = SOLUTIONS.slice(9);

function MarqueeCard({ item, onSelect }) {
  const Icon = item.icon;
  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex h-[220px] w-[340px] shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 p-5 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          loading="lazy"
          className="object-cover opacity-25 transition-opacity duration-300 group-hover:opacity-40"
          sizes="340px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />
      </div>

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/90">
          <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
          <span>{item.category}</span>
        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-200 group-hover:bg-[#df2027] group-hover:border-[#df2027]">
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-1.5 flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5 text-[#df2027]" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-neutral-400">
            {item.tagline}
          </span>
        </div>

        <h3
          className="text-base font-bold text-white tracking-tight leading-snug"
          style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
        >
          {item.title}
        </h3>
      </div>
    </div>
  );
}

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(null);

  useEffect(() => {
    if (activeSolution) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
  }, [activeSolution]);

  return (
    <section
      id="solutions"
      className="relative w-full overflow-hidden bg-white py-24 lg:py-32 select-none"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16 mb-12">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#df2027]" />
            <span>Capability Carousel</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-neutral-950 leading-tight"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Engineering scalable solutions for{" "}
            <span className="text-[#df2027]">modern enterprise.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            17 production capabilities gliding across continuous operational
            tracks. Hover to pause, click to inspect.
          </p>
        </div>
      </div>

      {/* Marquee Tracks Container with Fade Edges */}
      <div className="relative w-full space-y-4">
        {/* Left & Right gradient masks to blend cleanly into white bg */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent" />

        {/* Row 1: Leftward Glide */}
        <div className="group flex w-max gap-4 [animation:marquee-left_42s_linear_infinite] hover:[animation-play-state:paused]">
          {[...ROW_ONE, ...ROW_ONE].map((item, index) => (
            <MarqueeCard
              key={`row1-${item.id}-${index}`}
              item={item}
              onSelect={setActiveSolution}
            />
          ))}
        </div>

        {/* Row 2: Rightward Glide */}
        <div className="group flex w-max gap-4 [animation:marquee-right_38s_linear_infinite] hover:[animation-play-state:paused]">
          {[...ROW_TWO, ...ROW_TWO].map((item, index) => (
            <MarqueeCard
              key={`row2-${item.id}-${index}`}
              item={item}
              onSelect={setActiveSolution}
            />
          ))}
        </div>
      </div>

      {/* CSS Keyframes for smooth, zero-recalculation scrolling */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>

      {/* Expandable Technical Brief Modal */}
      <AnimatePresence>
        {activeSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveSolution(null)}
              className="absolute inset-0 bg-black/80"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[32px] border border-neutral-800 bg-neutral-950 text-white shadow-2xl"
            >
              <div className="relative h-52 sm:h-60 w-full overflow-hidden">
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

                <button
                  onClick={() => setActiveSolution(null)}
                  className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white hover:bg-white hover:text-black transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-5 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#df2027] mb-1">
                    <span className="h-2 w-2 rounded-full bg-[#df2027]" />
                    <span>{activeSolution.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {activeSolution.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1.5">
                    Overview
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {activeSolution.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2.5">
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSolution.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 rounded-xl border border-neutral-800 bg-neutral-900/80 p-3 text-xs text-neutral-200"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#df2027] mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800 pt-5">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    Enterprise SLA Ready
                  </span>

                  <a
                    href="#contact"
                    onClick={() => setActiveSolution(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#df2027] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#b80d15] transition-colors"
                  >
                    <span>Request Brief</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
