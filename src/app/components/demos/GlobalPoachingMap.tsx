"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { PoachingIncidentCard } from "../cyanea/PoachingIncidentCard";
import { Badge } from "../ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, AlertCircle, CheckCircle2, TrendingDown, Activity } from "lucide-react";

interface Incident {
  id: string;
  location: string;
  species: string;
  specimenCount: number;
  detectionMethod: string;
  status: "alert" | "in-progress" | "recovered" | "intercepted";
  date: string;
  coordinates: { x: number; y: number };
}

const incidents: Incident[] = [
  {
    id: "0",
    location: "Thailand/Laos Border",
    species: "Middlemist Red Camellia",
    specimenCount: 847,
    detectionMethod: "Patrol Drone Auto-Alert",
    status: "recovered",
    date: "March 20, 2026",
    coordinates: { x: 58, y: 72 }
  },
  {
    id: "1",
    location: "Khao Yai North",
    species: "Thai Rosewood (Dalbergia)",
    specimenCount: 14,
    detectionMethod: "Acoustic Sensor #47A",
    status: "alert",
    date: "March 18, 2026",
    coordinates: { x: 42, y: 35 }
  }
];

const recoveryTimeline: Incident[] = incidents;

interface GlobalPoachingMapProps {
  isVisible?: boolean;
}

export function GlobalPoachingMap({ isVisible = true }: GlobalPoachingMapProps) {
  const [visibleIncidents, setVisibleIncidents] = useState<Incident[]>([]);
  const [stats, setStats] = useState({
    incidents: 18,
    plantsRecovered: 847,
    legalActions: 12,
    successRate: 64
  });
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [activeIncidentIndex, setActiveIncidentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    // Reset and select first incident
    setVisibleIncidents(incidents);
    setSelectedIncident(incidents[0]);
  }, [isVisible]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "alert": return "#c0a7ef";      // Purple
      case "in-progress": return "#075D44"; // Green (Brand Emerald)
      case "recovered": return "#D0F17A";   // Yellow/Lime
      case "intercepted": return "#46014f"; // Deep Purple
      default: return "#717182";
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case "alert": return "#ffffff";
      case "in-progress": return "#ffffff";
      case "recovered": return "#075D44";
      case "intercepted": return "#ffffff";
      default: return "#ffffff";
    }
  };

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
      className="space-y-4 lg:max-h-screen lg:overflow-hidden"
    >
      {/* Header */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
        className="space-y-1 md:space-y-2"
      >
        <h2 className="text-2xl md:text-3xl font-bold">Regional Poaching Detection</h2>
        <p className="text-muted-foreground/70 text-sm md:text-base">Live AI-driven monitoring of Southeast Asian wildlife corridors</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 max-h-[calc(100vh-140px)] overflow-y-auto pr-2">
        {/* Map Visualization */}
        <div className="space-y-4">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Card className="p-0 overflow-hidden relative border-none bg-transparent">
              {/* Simplified World Map Visualization */}
              <div className="relative w-full bg-[#151515] rounded-3xl overflow-hidden" style={{ height: '320px' }}>
                <div className="absolute inset-0 grayscale contrast-[1.2] brightness-[0.7] invert-[0.9] hue-rotate-[180deg]">
                  <div className="absolute inset-0 scale-[1.3] pointer-events-none">
                    <iframe
                      title="Thailand/Laos Border Map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?q=Mekong%20River%20Thailand%20Laos%20Border&t=k&z=9&ie=UTF8&iwloc=&output=embed"
                      style={{ border: 0, opacity: 0.6 }}
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {visibleIncidents.map((incident, index) => {
                    const isActive = activeIncidentIndex === index;
                    return (
                      <motion.div
                        key={incident.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: isActive ? 1.2 : 1, 
                          opacity: 1,
                          zIndex: isActive ? 50 : 10
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute cursor-pointer"
                        style={{ 
                          left: `${incident.coordinates.x}%`, 
                          top: `${incident.coordinates.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => {
                          setActiveIncidentIndex(index);
                        }}
                      >
                        <motion.div
                          animate={isActive ? { 
                            opacity: [0.6, 1, 0.6]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="relative"
                        >
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                            style={{ 
                              backgroundColor: getStatusColor(incident.status),
                              border: isActive ? '4px solid white' : '2px solid white',
                              transform: isActive ? 'scale(1.1)' : 'scale(1)'
                            }}
                          >
                            <span style={{ color: getStatusTextColor(incident.status) }} className="text-sm font-bold">
                              {incident.specimenCount}
                            </span>
                          </div>
                          <motion.div
                            animate={{ 
                              scale: [1, 2.8],
                              opacity: isActive ? [0.6, 0] : [0.3, 0]
                            }}
                            transition={{ 
                              duration: 2.5, 
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: getStatusColor(incident.status) }}
                          />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Legend */}
              <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-4 text-[10px] sm:text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#c0a7ef]" />
                  <span>Critical Alert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#075D44]" />
                  <span>In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D0F17A]" />
                  <span>Recovered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#46014f]" />
                  <span>Intercepted</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Recovery Timeline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Card className="p-5 rounded-3xl overflow-hidden border border-transparent transition-all duration-500">
              <h3 className="text-xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#151515] mb-6">
                Recovery Timeline - March 2026
              </h3>
              <motion.div 
                className="space-y-3"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {recoveryTimeline.map((item, index) => {
                  const isActive = visibleIncidents[activeIncidentIndex]?.id === item.id;
                  return (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 },
                      }}
                      className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 rounded-2xl border transition-all duration-500 text-[#151515] ${isActive ? "border-[#c0a7ef]/40 bg-transparent scale-[1.01]" : "border-transparent bg-transparent opacity-70 hover:opacity-100"}`}
                    >
                      <div className="flex-shrink-0 sm:w-28 text-[10px] sm:text-xs font-bold sm:font-semibold text-muted-foreground/70 uppercase tracking-widest sm:tracking-normal">
                        {item.date}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-bold text-sm sm:text-base mb-0.5 transition-colors truncate ${isActive ? "text-[#151515]" : "text-muted-foreground/70"}`}>
                          {item.species}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground/70 truncate">{item.location}</p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#151515]/5 mt-1 sm:mt-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 px-2 py-1 rounded bg-black/5 block sm:inline">
                          {item.status}
                        </span>
                        <motion.div
                          animate={isActive ? { scale: [0.8, 1.2, 0.8] } : { scale: 1 }}
                          transition={isActive ? { duration: 1.5, repeat: Infinity } : { duration: 0.2 }}
                        >
                          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#c0a7ef]' : 'bg-[#c0a7ef]/30'}`} />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-4">
          {/* Incident Detail (Dynamic) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="relative min-h-[220px]"
          >
            <AnimatePresence mode="wait">
              {selectedIncident && (
                <motion.div
                  key={selectedIncident.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PoachingIncidentCard 
                    {...selectedIncident} 
                    headerTitle="Active Incidents" 
                    headerSubtitle="Real-time regional monitoring network"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Monthly Statistics - Reorganized into themed bento cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="p-5 space-y-4 rounded-[32px] border-none bg-[#c0a7ef]/15 h-full">
                <div className="space-y-0.5 border-b border-[#46014f]/10 pb-3">
                  <h3 className="text-base font-bold font-['Dela_Gothic_One'] tracking-tight text-[#46014f]">
                    Most Targeted Species
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-bold font-['Plus_Jakarta_Sans']">
                    Monthly activity trends
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-white/20 aspect-square">
                      <img 
                        src="/assets/botanical/slipper_orchid.png" 
                        alt="Rothschild's Slipper Orchid"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium font-['Plus_Jakarta_Sans'] mb-1 leading-none">
                        Rothschild's Slipper Orchid
                      </p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#46014f] leading-none">
                          {stats.incidents}
                        </p>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium font-['Plus_Jakarta_Sans']">Incidents</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-white/20 aspect-square">
                      <img 
                        src="/assets/botanical/dudleya_farinosa.png" 
                        alt="Dudleya farinosa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium font-['Plus_Jakarta_Sans'] mb-1 leading-none">
                        Dudleya farinosa (Succulent)
                      </p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#46014f] leading-none">
                          {stats.plantsRecovered}
                        </p>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium font-['Plus_Jakarta_Sans']">Incidents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="p-5 space-y-4 rounded-[32px] border-none bg-[#075d44]/10 h-full">
                <div className="space-y-0.5 border-b border-[#075d44]/15 pb-3">
                  <h3 className="text-base font-bold font-['Dela_Gothic_One'] tracking-tight text-[#075D44]">
                    Units Recovered
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70 font-bold font-['Plus_Jakarta_Sans']">
                    Total specimens secure by source
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium font-['Plus_Jakarta_Sans'] mb-1">Singapore Botanic Gardens</p>
                    <p className="text-2xl font-bold font-['Dela_Gothic_One'] tracking-tight text-[#075D44]">{stats.plantsRecovered}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground/70 font-medium font-['Plus_Jakarta_Sans'] mb-1">Kew Gardens (UK)</p>
                    <div className="flex items-baseline gap-2 text-[#075D44]">
                      <p className="text-2xl font-bold font-['Dela_Gothic_One'] tracking-tight">{stats.incidents}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}