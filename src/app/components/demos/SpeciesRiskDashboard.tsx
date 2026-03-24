"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { SpeciesCard } from "../dendrogene/SpeciesCard";
import { Activity, Database, Building2, RefreshCw, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { RescueStrategyCard, SystemAnalysisCard } from "../dendrogene/IntelligenceUnits";

interface SpeciesData {
  id: string;
  commonName: string;
  scientificName: string;
  extinctionRisk: number;
  timeline: string;
  wildPopulation: string;
  recommendation: string;
  status: "critical" | "endangered" | "at-risk" | "stable";
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
  },
];

const networkActivity = [
  "Singapore Botanic Gardens - Camellia breeding pairs selected",
  "Royal Botanic Gardens, Kew - Seed viability test completed",
  "Peru Conservation Reserve - Population census updated",
  "Missouri Botanical Garden - Genetic analysis completed",
  "Berlin-Dahlem Botanical Garden - Propagation successful",
];

export function SpeciesRiskDashboard() {
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
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">Species Risk Dashboard</h2>
          <p className="text-muted-foreground text-sm md:text-base">Real-time extinction risk monitoring</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span>Last updated: {mounted ? lastUpdate.toLocaleTimeString() : "Loading..."}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Main Content - Species Monitoring (Left) */}
        <div className="space-y-6">
          {/* Alert Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 border border-[#c0a7ef]/30 bg-transparent rounded-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#c0a7ef] rounded-full animate-pulse flex-shrink-0" />
              <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight">
                <strong className="font-bold text-[#151515]">4 Species at Critical Risk:</strong>
                <span className="text-muted-foreground ml-1.5">Immediate intervention required to prevent extinction</span>
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {visibleSpecies.map((species, index) => (
                <motion.div
                  key={species.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SpeciesCard 
                    {...species} 
                    className="bg-transparent border-none shadow-none p-0"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Intelligence Grid - Bento Layout (Right) */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Top Primary Stats - Green */}
            <div className="md:col-span-2">
              <Card className="p-6 space-y-5 rounded-[32px] border-none bg-[#D0F17A]/30 h-full">
                <h3 className="text-xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#151515]">
                  Network Pulse
                </h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground opacity-60 font-medium mb-1">Risk Coverage</p>
                    <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.totalSpecies}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground opacity-60 font-medium mb-1">Critically Low</p>
                    <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.criticalCases}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground opacity-60 font-medium mb-1">Active Labs</p>
                    <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.breedingPrograms}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground opacity-60 font-medium mb-1">Institutions</p>
                    <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.institutions}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bottom Left Activity - Purple */}
            <RescueStrategyCard />

            {/* Bottom Right System Info - Gray */}
            <SystemAnalysisCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
}