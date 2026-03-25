"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { SpeciesCard } from "../cyanea/SpeciesCard";
import { Activity, Database, Building2, RefreshCw, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RescueStrategyCard, SystemAnalysisCard } from "../cyanea/IntelligenceUnits";

interface SpeciesData {
  id: string;
  commonName: string;
  scientificName: string;
  extinctionRisk: number;
  timeline: string;
  wildPopulation: string;
  recommendation: string;
  status: "critical" | "endangered" | "at-risk" | "stable";
  imageUrl?: string;
}

const speciesData: SpeciesData[] = [
  {
    id: "1",
    commonName: "Middlemist Red Camellia",
    scientificName: "Camellia middlemistii",
    extinctionRisk: 87,
    timeline: "3-5 years",
    wildPopulation: "2 known plants",
    recommendation: "Initiate genetic rescue breeding program immediately",
    status: "critical",
    imageUrl: "/assets/botanical/middlemist_red.png"
  },
  {
    id: "2",
    commonName: "Rothschild's Slipper Orchid",
    scientificName: "Paphiopedilum rothschildianum",
    extinctionRisk: 62,
    timeline: "10-15 years",
    wildPopulation: "<50 plants",
    recommendation: "Establish anti-poaching patrols and increase habitat protection",
    status: "endangered",
    imageUrl: "/assets/botanical/slipper_orchid.png"
  },
];

const networkActivity = [
  "Singapore Botanic Gardens - Camellia breeding pairs selected",
  "Royal Botanic Gardens, Kew - Seed viability test completed",
  "Peru Conservation Reserve - Population census updated",
  "Missouri Botanical Garden - Genetic analysis completed",
  "Berlin-Dahlem Botanical Garden - Propagation successful",
];

interface SpeciesRiskDashboardProps {
  isVisible?: boolean;
}

export function SpeciesRiskDashboard({ isVisible = true }: SpeciesRiskDashboardProps) {
  const [criticalCount, setCriticalCount] = useState(4);
  const [visibleSpecies, setVisibleSpecies] = useState<SpeciesData[]>(speciesData);
  const [stats, setStats] = useState({
    totalSpecies: 847,
    criticalCases: 4,
    breedingPrograms: 312,
    institutions: 76,
  });
  const [activities, setActivities] = useState<string[]>(networkActivity.slice(0, 3));
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isVisible) return;
    let isMounted = true;
    
    const activityInterval = setInterval(() => {
      const randomActivity = networkActivity[Math.floor(Math.random() * networkActivity.length)];
      const timeAgo = `${Math.floor(Math.random() * 12) + 1} hours ago`;
      if (isMounted) {
        setActivities((prev) => [`${randomActivity} (${timeAgo})`, ...prev.slice(0, 2)]);
      }
    }, 2500);

    const refreshInterval = setInterval(() => {
      if (isMounted) setLastUpdate(new Date());
    }, 30000);

    return () => {
      isMounted = false;
      clearInterval(activityInterval);
      clearInterval(refreshInterval);
    };
  }, [isVisible]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className="space-y-6 lg:max-h-[calc(100vh-48px)] lg:overflow-hidden"
    >
      {/* Header */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">Species Risk Dashboard</h2>
          <p className="text-muted-foreground text-sm md:text-base">Real-time extinction risk monitoring</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span>Last updated: {mounted ? lastUpdate.toLocaleTimeString() : "Loading..."}</span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Main Content - Species Monitoring (Left) */}
        <div className="space-y-3">
          {/* Alert Banner */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="px-6 py-3 border border-[#c0a7ef]/30 bg-transparent rounded-[32px] flex items-center gap-4"
          >
            <div className="w-2.5 h-2.5 bg-[#c0a7ef] rounded-full animate-pulse flex-shrink-0" />
            <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight">
              <strong className="font-bold text-[#151515]">4 Species at Critical Risk:</strong>
              <span className="text-muted-foreground ml-2">Immediate intervention required to prevent extinction</span>
            </p>
          </motion.div>

          <div className="space-y-4 lg:max-h-[calc(100vh-240px)] lg:overflow-y-auto pr-0 lg:pr-2">
            <AnimatePresence mode="popLayout">
              {visibleSpecies.map((species, index) => (
                <motion.div
                  key={species.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <SpeciesCard 
                    {...species} 
                    className="bg-transparent border-none shadow-none p-0"
                    imageSize={36}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Intelligence Grid - Bento Layout (Right) */}
        <div className="space-y-4">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Diagnostics - Now at the Top */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <RescueStrategyCard isVisible={isVisible} />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <SystemAnalysisCard isVisible={isVisible} />
            </motion.div>

            {/* Network Statistics - Now below */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="md:col-span-2"
            >
              <Card className="p-6 space-y-5 rounded-[32px] border-none bg-[#D0F17A]/30 h-full">
                <div>
                  <div className="space-y-0.5 border-b border-[#151515]/10 pb-3 mb-5 flex justify-between items-end">
                    <div>
                      <h3 className="text-base font-bold font-['Dela_Gothic_One'] tracking-tight text-[#151515]">
                        Network Statistics
                      </h3>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold font-['Plus_Jakarta_Sans']">
                        Global conservation corridor network
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 pb-1">
                      <div className="w-1.5 h-1.5 bg-[#075D44] rounded-full animate-pulse" />
                      <span className="text-[10px] uppercase font-bold text-[#075D44] tracking-widest">Live Connect</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-6">
                    <div>
                      <p className="text-xs text-muted-foreground font-['Plus_Jakarta_Sans'] mb-1">Risk Coverage</p>
                      <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One'] tracking-tight">{stats.totalSpecies}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-['Plus_Jakarta_Sans'] mb-1">Critically Low</p>
                      <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One'] tracking-tight">{stats.criticalCases}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#151515]/5">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Active Labs</p>
                      <p className="text-lg font-bold text-[#151515] font-['Dela_Gothic_One'] tracking-tight">{stats.breedingPrograms}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Institutions</p>
                      <p className="text-lg font-bold text-[#151515] font-['Dela_Gothic_One'] tracking-tight">{stats.institutions}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Uptime</p>
                      <p className="text-lg font-bold text-[#075D44] font-['Dela_Gothic_One'] tracking-tight">99.9%</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}