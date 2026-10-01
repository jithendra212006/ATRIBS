"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="group relative flex h-[220px] w-[340px] shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Placeholder background */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#df2027]/10 blur-3xl" />

        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/90">
          <span className="h-1.5 w-1.5 rounded-full bg-[#df2027]" />
          <span>{item.category}</span>
        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-200 group-hover:border-[#df2027] group-hover:bg-[#df2027]">
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
          className="text-base font-bold leading-snug tracking-tight text-white"
          style={{
            fontFamily: "var(--font-jakarta), sans-serif",
          }}
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
      className="relative w-full overflow-hidden bg-white py-12 lg:py-16 select-none"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16 mb-12 ml-4">
        <div className="flex flex-col items-start max-w-2xl ml-7 ">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 shadow-sm mb-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#df2027]" />
            Our Solutions
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-neutral-950 leading-tight"
            style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
          >
            Engineering scalable solutions for{" "}
            <span className="text-[#df2027]">modern enterprise.</span>
          </h2>
        </div>
      </div>

      {/* Marquee Tracks Container with Fade Edges */}
      <div className="relative w-full space-y-4">
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
              <div className="relative h-52 w-full overflow-hidden bg-neutral-950 sm:h-60">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />

                <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[#df2027]/10 blur-3xl" />

                <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />

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
