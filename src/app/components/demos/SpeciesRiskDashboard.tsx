"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { SpeciesCard } from "../dendrogene/SpeciesCard";
import { Activity, Database, Building2, RefreshCw, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
  {
    id: "3",
    commonName: "Corpse Flower",
    scientificName: "Rafflesia arnoldii",
    extinctionRisk: 58,
    timeline: "15-20 years",
    wildPopulation: "~500 plants declining",
    recommendation: "Plan population relocation due to climate change impact",
    status: "endangered",
  },
  {
    id: "4",
    commonName: "Western Prairie Fringed Orchid",
    scientificName: "Platanthera praeclara",
    extinctionRisk: 45,
    timeline: "25-30 years",
    wildPopulation: "2,000+ plants",
    recommendation: "Monitor habitat suitability under climate scenarios",
    status: "at-risk",
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
  const [criticalCount, setCriticalCount] = useState(1);
  const [visibleSpecies, setVisibleSpecies] = useState<SpeciesData[]>([]);
  const [stats, setStats] = useState({
    totalSpecies: 0,
    criticalCases: 0,
    breedingPrograms: 0,
    institutions: 76,
  });
  const [activities, setActivities] = useState<string[]>([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let isMounted = true;

    const showSpecies = async () => {
      for (let i = 0; i < speciesData.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (isMounted) {
          setVisibleSpecies((prev) => {
            // Check if species already exists to avoid duplicates in strict mode
            if (prev.find(s => s.id === speciesData[i].id)) return prev;
            return [...prev, speciesData[i]];
          });
        }
      }
    };

    const countInterval = setInterval(() => {
      setCriticalCount((prev) => (prev < 4 ? prev + 1 : prev));
    }, 1500);

    let currentStats = { totalSpecies: 0, criticalCases: 0, breedingPrograms: 0, institutions: 76 };
    const statsInterval = setInterval(() => {
      if (currentStats.totalSpecies < 847) currentStats.totalSpecies = Math.min(847, currentStats.totalSpecies + 42);
      if (currentStats.criticalCases < 4) currentStats.criticalCases = Math.min(4, currentStats.criticalCases + 1);
      if (currentStats.breedingPrograms < 312) currentStats.breedingPrograms = Math.min(312, currentStats.breedingPrograms + 16);
      setStats({ ...currentStats });
    }, 100);

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

    showSpecies();

    return () => {
      isMounted = false;
      clearInterval(countInterval);
      clearInterval(statsInterval);
      clearInterval(activityInterval);
      clearInterval(refreshInterval);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Species Risk Dashboard</h2>
          <p className="text-muted-foreground text-sm md:text-base">Real-time extinction risk monitoring</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span>Last updated: {mounted ? lastUpdate.toLocaleTimeString() : "Loading..."}</span>
        </div>
      </div>

      {/* Alert Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#c0a7ef]/30 text-[#151515] p-6 rounded-3xl"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xl font-['Dela_Gothic_One'] text-[#46014f] leading-none mb-1">
              {criticalCount} Species at Critical Risk
            </p>
            <p className="text-sm font-['Plus_Jakarta_Sans'] font-medium text-[#46014f]/70">
              Immediate intervention required to prevent extinction
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - Species List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold font-['Dela_Gothic_One']">Priority Species</h3>
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {visibleSpecies.slice(0, 2).map((species, index) => (
                <motion.div
                  key={species.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SpeciesCard {...species} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="p-5 space-y-4 rounded-3xl">
            <h3 className="font-semibold font-['Dela_Gothic_One'] tracking-tight">
              Network Statistics
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Total Species at Risk</p>
                <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.totalSpecies}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Critical Priority Cases</p>
                <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.criticalCases}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Breeding Programs</p>
                <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.breedingPrograms}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Network Institutions</p>
                <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.institutions}</p>
              </div>
            </div>
          </Card>

          <Card className="p-5 space-y-3 rounded-3xl">
            <h3 className="font-semibold font-['Dela_Gothic_One'] tracking-tight">
              Recent Network Activity
            </h3>
            <div className="space-y-2">
              <AnimatePresence>
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm p-2 bg-[#E6E8EC]/30 rounded-3xl"
                  >
                    {activity}
                  </motion.div>
                ))}
              </AnimatePresence>
              {activities.length === 0 && (
                <p className="text-sm text-muted-foreground">Loading activity...</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}