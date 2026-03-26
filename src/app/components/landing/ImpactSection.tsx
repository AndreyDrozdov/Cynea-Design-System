"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Leaf, Globe, TrendingUp, Dna, AlertTriangle, TreePine } from "lucide-react";

// --- Animated counter hook ---
function useCountUp(target: number, duration = 1400, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      start = Math.min(start + step, target);
      setValue(Math.floor(start));
      if (start >= target) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration, active]);
  return value;
}

// --- Circular progress SVG ---
function CircularProgress({
  value,
  max,
  size = 96,
  stroke = 7,
  color,
  trackColor,
}: {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  color: string;
  trackColor: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: circ - pct * circ }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
    </svg>
  );
}

// --- Mini bar ---
function MiniBar({ label, value, max, color, textColor }: { label: string; value: number; max: number; color: string; textColor: string }) {
  const [hovered, setHovered] = useState(false);
  const pct = (value / max) * 100;
  return (
    <div
      className="cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <span className={`text-sm font-['Plus_Jakarta_Sans'] ${textColor}`}>{label}</span>
        <span className={`text-sm font-['Dela_Gothic_One'] tracking-tight ${textColor} opacity-70`}>{value}</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: hovered ? `${Math.min(pct + 4, 100)}%` : `${pct}%` }}
          transition={{ duration: hovered ? 0.2 : 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// --- Left card: Species Rescued ---
function SpeciesCard({ active }: { active: boolean }) {
  const count = useCountUp(32, 1200, active);
  const [activeTab, setActiveTab] = useState<"rescued" | "critical" | "stable">("rescued");

  const tabs = [
    { key: "rescued", label: "Rescued", icon: Leaf },
    { key: "critical", label: "Critical", icon: AlertTriangle },
    { key: "stable", label: "Stable", icon: TreePine },
  ] as const;

  // Auto-cycle tabs
  useEffect(() => {
    const keys: Array<"rescued" | "critical" | "stable"> = ["rescued", "critical", "stable"];
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const idx = keys.indexOf(prev);
        return keys[(idx + 1) % keys.length];
      });
    }, 2500); // Reverted to 2.5s for metrics
    return () => clearInterval(interval);
  }, []);

  const tabData = {
    rescued: [
      { label: "Orchids", value: 12, max: 32 },
      { label: "Camellias", value: 7, max: 32 },
      { label: "Cycads", value: 8, max: 32 },
      { label: "Ferns", value: 5, max: 32 },
    ],
    critical: [
      { label: "Red-listed", value: 18, max: 32 },
      { label: "Under 50 plants", value: 9, max: 32 },
      { label: "Habitat lost >80%", value: 6, max: 32 },
      { label: "Captive only", value: 4, max: 32 },
    ],
    stable: [
      { label: "Self-sustaining", value: 14, max: 32 },
      { label: "Returned to wild", value: 8, max: 32 },
      { label: "Seed-banked", value: 22, max: 32 },
      { label: "Network-monitored", value: 32, max: 32 },
    ],
  };

  return (
    <div className="bg-[#D0F17A] rounded-3xl p-6 flex flex-col justify-between h-full gap-4 min-h-[460px]">
      {/* Top: ring + counter */}
      <div className="flex flex-col justify-end">
        <p className="text-5xl text-[#075D44] font-['Dela_Gothic_One'] tracking-tight leading-none">{count}</p>
        <p className="text-base text-[#075D44]/70 font-['Plus_Jakarta_Sans'] mt-1">Species rescued &amp; rehabilitated</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Tabs */}
        <div className="flex gap-1 bg-[#075D44]/10 rounded-2xl p-1">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-xl text-sm font-['Plus_Jakarta_Sans'] font-semibold transition-all duration-200 ${
                activeTab === key
                   ? "bg-[#075D44] text-[#cfedcc]"
                   : "text-[#075D44]/70 hover:text-[#075D44]"
              }`}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>

        {/* Bars */}
        <div className="space-y-2.5">
          {tabData[activeTab].map((item) => (
            <MiniBar
              key={item.label}
              label={item.label}
              value={item.value}
              max={item.max}
              color="#075D44"
              textColor="text-[#075D44]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function RadialArcChart({ regions, metricIdx }: {
  regions: { label: string; values: number[]; maxes: number[] }[];
  metricIdx: number;
}) {
  const width = 340;
  const height = 130;
  const cx = width / 2;
  const cy = height; 
  const arcColors = ["#46014f", "rgba(70,1,79,0.65)", "rgba(70,1,79,0.42)", "rgba(70,1,79,0.22)"];
  const radii = [105, 82, 60, 38];
  const stroke = 8;
  
  return (
    <svg width="100%" className="block max-w-full overflow-visible" viewBox={`0 0 ${width} ${height + stroke}`}>
      <g transform={`rotate(180 ${cx} ${cy})`}>
        {regions.map((region, i) => {
          const r = radii[i];
          const circ = 2 * Math.PI * r;
          const totalArcLen = circ / 2;
          const pct = Math.min(region.values[metricIdx] / region.maxes[metricIdx], 1);
          const filledLen = pct * totalArcLen;

          return (
            <g key={region.label}>
              {/* Track */}
              <circle
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke="rgba(70,1,79,0.08)"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${totalArcLen} ${circ}`}
              />
              {/* Fill */}
              <motion.circle
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={arcColors[i]}
                strokeWidth={stroke}
                strokeLinecap="round"
                initial={{ strokeDasharray: `0 ${circ}` }}
                animate={{ strokeDasharray: `${filledLen} ${circ}` }}
                transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </g>
          );
        })}
      </g>
      {/* Center dot at baseline */}
      <circle cx={cx} cy={cy} r={stroke / 2} fill="#46014f" opacity={0.6} />
    </svg>
  );
}

// --- Right card: Institutions ---
function InstitutionsCard({ active }: { active: boolean }) {
  const count = useCountUp(120, 1400, active);
  const [metricIdx, setMetricIdx] = useState(0);

  const metrics = [
    { label: "Institutions", icon: Globe },
    { label: "Species Protected", icon: Leaf },
    { label: "Research Papers", icon: Dna },
  ] as const;

  const regions = [
    {
      label: "Asia Pacific", icon: Globe,
      values: [34, 142, 45],
      maxes: [120, 500, 200],
      display: [["34", ""], ["142", ""], ["45", ""]],
    },
    {
      label: "Europe", icon: TrendingUp,
      values: [28, 89, 67],
      maxes: [120, 500, 200],
      display: [["28", ""], ["89", ""], ["67", ""]],
    },
    {
      label: "Americas", icon: Dna,
      values: [38, 167, 38],
      maxes: [120, 500, 200],
      display: [["38", ""], ["167", ""], ["38", ""]],
    },
    {
      label: "Africa", icon: Leaf,
      values: [20, 73, 29],
      maxes: [120, 500, 200],
      display: [["20", ""], ["73", ""], ["29", ""]],
    },
  ];

  const arcColors = ["#46014f", "rgba(70,1,79,0.62)", "rgba(70,1,79,0.38)", "rgba(70,1,79,0.20)"];

  // Auto-cycle metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetricIdx((prev) => (prev + 1) % metrics.length);
    }, 2500); // Reverted to 2.5s for metrics
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#c0a7ef] rounded-3xl p-6 flex flex-col justify-between h-full gap-4 min-h-[460px]">
      {/* Top: counter + ring */}
      <div className="flex items-center gap-4">
        <div>
          <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">{count}+</p>
          <p className="text-base text-[#46014f]/70 font-['Plus_Jakarta_Sans'] mt-1">Institutions supporting the network</p>
        </div>
      </div>

      {/* Metric pill tabs */}
      <div className="flex gap-1 flex-wrap">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <button
              key={m.label}
              onClick={() => setMetricIdx(i)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-sm font-['Plus_Jakarta_Sans'] font-semibold transition-all duration-200 ${
                metricIdx === i
                   ? "bg-[#46014f] text-[#c0a7ef]"
                   : "bg-[#46014f]/10 text-[#46014f]/70 hover:text-[#46014f]"
              }`}
            >
              <Icon className="w-3 h-3" />
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Radial arc chart + legend */}
      <div className="flex flex-col flex-1">
        {/* Radial Arc Chart - centered */}
        <div className="flex justify-center items-center flex-1 mb-8">
          <RadialArcChart regions={regions} metricIdx={metricIdx} />
        </div>
        {/* Legend - pinned to bottom */}
        <div className="flex flex-col gap-2.5 mt-auto">
          {regions.map((r, i) => {
            const pct = Math.round((r.values[metricIdx] / r.maxes[metricIdx]) * 100);
            const [val, suffix] = r.display[metricIdx];
            return (
              <div key={r.label} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: arcColors[i] }}
                />
                <span className="text-sm text-[#46014f] font-['Plus_Jakarta_Sans'] flex-1 leading-tight truncate">{r.label}</span>
                <motion.span
                  key={`${r.label}-${metricIdx}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-[#46014f] font-['Dela_Gothic_One'] tracking-tight flex-shrink-0"
                >
                  {val}{suffix} <span className="opacity-70 text-[10px]">{pct}%</span>
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const impactImage2 = "https://plus.unsplash.com/premium_photo-1661439931497-53bf017c249f?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const impactSlides = [
  { src: "https://images.unsplash.com/photo-1725912196296-bfda8fffaff6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Aetheria Lumina", label: "Aetheria Lumina" },
  { src: "https://images.unsplash.com/photo-1560369073-233ebcda63a1?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Crimson Fernelia", label: "Crimson Fernelia" },
  { src: "https://images.unsplash.com/photo-1754920098558-63ab73cd213b?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cyanea Spectra", label: "Cyanea Spectra" },
];

export function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % impactSlides.length);
    }, 5000); // 5 seconds for image carousel
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="impact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#075D44] font-semibold mb-2 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-sm">
            Our Impact
          </p>
          <h2 className="text-4xl md:text-5xl text-[#151515] tracking-tight">
            Impact in{" "}
            <span className="text-[#151515]">
              Numbers
            </span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="h-full"
          >
            <SpeciesCard active={inView} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl overflow-hidden min-h-[300px] relative"
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={slideIndex}
                src={impactSlides[slideIndex].src}
                alt={impactSlides[slideIndex].alt}
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Species label */}
            <div className="absolute bottom-4 left-4 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#151515]/60 backdrop-blur-sm rounded-3xl"
                >
                  <Leaf className="w-3 h-3 text-[#D0F17A]" />
                  <span className="text-[#E6E8EC] text-xs font-['Plus_Jakarta_Sans']">
                    {impactSlides[slideIndex].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="absolute top-4 right-4 z-10 flex gap-1.5">
              {impactSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slideIndex ? "bg-[#D0F17A] w-5" : "bg-[#E6E8EC]/50 w-2"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="h-full"
          >
            <InstitutionsCard active={inView} />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#151515] rounded-3xl p-8 flex flex-col justify-between min-h-[200px]"
          >
            <p className="text-5xl text-[#D0F17A] font-['Dela_Gothic_One'] tracking-tight leading-none">18</p>
            <p className="text-sm text-[#D0F17A]/70 font-['Plus_Jakarta_Sans'] leading-relaxed">
              Successful Endangered Species Rescue Operations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="md:col-span-1 lg:col-span-2 bg-[#075D44] rounded-3xl p-8 flex items-start justify-between min-h-[200px]"
          >
            <div className="flex flex-col justify-between h-full">
              <p className="text-5xl text-[#cfedcc] font-['Dela_Gothic_One'] tracking-tight leading-none">$2.3M</p>
              <p className="text-sm text-[#cfedcc]/70 font-['Plus_Jakarta_Sans'] leading-relaxed">
                Total Annual Research Funding Raised Globally
              </p>
            </div>
            <div className="hidden md:block rounded-3xl overflow-hidden w-48 h-36">
              <img src={impactImage2} alt="Forest biodiversity" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Additional stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#E6E8EC] rounded-3xl p-8 flex flex-col justify-between h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 h-full py-4 sm:py-0">
              <div className="flex flex-col justify-between h-full border-b border-[#46014f]/10 pb-4 sm:border-0 sm:pb-0">
                <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">571</p>
                <p className="text-sm text-[#46014f]/70 mt-1 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Plant species extinct in last 250 years — each an irreplaceable gene pool
                </p>
              </div>
              <div className="flex flex-col justify-between h-full border-b border-[#46014f]/10 pb-4 sm:border-0 sm:pb-0">
                <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">3–5×</p>
                <p className="text-sm text-[#46014f]/70 mt-1 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  More species saved with the same budget through AI-driven prioritization
                </p>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">60-70%</p>
                <p className="text-sm text-[#46014f]/70 mt-1 font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Reduction in conservation costs through automated monitoring
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="bg-[#D0F17A] rounded-3xl p-8 flex flex-col justify-between h-full"
          >
            <p className="text-[#075D44] font-['Dela_Gothic_One'] tracking-tight text-2xl">Measurable Conservation Success</p>
            <p className="text-sm text-[#075D44] font-['Plus_Jakarta_Sans'] mt-3 leading-relaxed">
              Verified outcomes across 76 partner institutions worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}