"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { PoachingIncidentCard } from "../dendrogene/PoachingIncidentCard";
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
    id: "1",
    location: "Vientiane Border",
    species: "Paphiopedilum rothschildianum",
    specimenCount: 127,
    detectionMethod: "Satellite + Dark Web Monitoring",
    status: "alert",
    date: "March 21, 2026",
    coordinates: { x: 52, y: 44 }
  },
  {
    id: "2",
    location: "Chiang Rai",
    species: "Dalbergia species",
    specimenCount: 89,
    detectionMethod: "Illegal Crossing Point Sensor",
    status: "in-progress",
    date: "March 22, 2026",
    coordinates: { x: 38, y: 32 }
  },
  {
    id: "3",
    location: "Mekong Basin",
    species: "Medicinal ginger specimens",
    specimenCount: 203,
    detectionMethod: "Patrol Drone Auto-Alert",
    status: "recovered",
    date: "March 20, 2026",
    coordinates: { x: 74, y: 76 }
  },
  {
    id: "4",
    location: "Luang Prabang",
    species: "Native orchid variant",
    specimenCount: 56,
    detectionMethod: "Thermal Imaging Scanners",
    status: "intercepted",
    date: "March 19, 2026",
    coordinates: { x: 25, y: 22 }
  }
];

const recoveryTimeline = [
  {
    id: "1",
    date: "March 21, 9am",
    event: "127 Paphiopedilum detected - Vientiane Border",
    status: "alert",
    location: "Authorities notified, cross-border coordination in progress"
  },
  {
    id: "2",
    date: "March 22, 2pm",
    event: "89 Dalbergia species tracking - Chiang Rai",
    status: "in-progress",
    location: "Continuous sensor monitoring at regional crossing point"
  },
  {
    id: "3",
    date: "March 20, 11am",
    event: "203 medicinal ginger specimens rescued - Mekong Basin",
    status: "recovered",
    location: "Recovery team successfully transfered plants to sanctuary"
  },
  {
    id: "4",
    date: "March 19, 4pm",
    event: "56 native orchids intercepted - Luang Prabang",
    status: "intercepted",
    location: "Customs recovery - transfer to regional conservation center"
  }
];

export function GlobalPoachingMap() {
  const [visibleIncidents, setVisibleIncidents] = useState<Incident[]>([]);
  const [stats, setStats] = useState({
    incidents: 0,
    plantsRecovered: 0,
    legalActions: 0,
    successRate: 0
  });
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [activeIncidentIndex, setActiveIncidentIndex] = useState(0);

  // Auto-cycling logic
  useEffect(() => {
    if (visibleIncidents.length < 4) return;

    const interval = setInterval(() => {
      setActiveIncidentIndex((prev) => (prev + 1) % incidents.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [visibleIncidents]);

  useEffect(() => {
    if (visibleIncidents.length > 0) {
      setSelectedIncident(incidents[activeIncidentIndex]);
    }
  }, [activeIncidentIndex, visibleIncidents]);

  useEffect(() => {
    let isMounted = true;
    
    // Animate incidents appearing on map
    const showIncidents = async () => {
      for (let i = 0; i < incidents.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        if (isMounted) {
          setVisibleIncidents(prev => {
            if (prev.find(inc => inc.id === incidents[i].id)) return prev;
            return [...prev, incidents[i]];
          });
        }
      }
    };

    // Animate statistics
    const animateStats = () => {
      const targetStats = {
        incidents: 18,
        plantsRecovered: 847,
        legalActions: 12,
        successRate: 64
      };

      const steps = 40;
      const delay = 50;

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(interval);
          return;
        }

        const progress = currentStep / steps;
        setStats({
          incidents: Math.round(targetStats.incidents * progress),
          plantsRecovered: Math.round(targetStats.plantsRecovered * progress),
          legalActions: Math.round(targetStats.legalActions * progress),
          successRate: Math.round(targetStats.successRate * progress)
        });

        currentStep++;
      }, delay);
    };

    showIncidents();
    animateStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "alert": return "#b091eb";      // Purple
      case "in-progress": return "#075D44"; // Green (Brand Emerald)
      case "recovered": return "#D0F17A";   // Yellow/Lime
      case "intercepted": return "#94a3b8"; // Gray
      default: return "#717182";
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case "alert": return "#ffffff";
      case "in-progress": return "#ffffff";
      case "recovered": return "#075D44";
      case "intercepted": return "#151515";
      default: return "#ffffff";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Regional Poaching Detection</h2>
        <p className="text-muted-foreground">Live AI-driven monitoring of Southeast Asian wildlife corridors</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Visualization */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Active Incidents - March 2026</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="w-4 h-4 animate-pulse text-[#b091eb]" />
                <span>Live Monitoring</span>
              </div>
            </div>

            {/* Simplified World Map Visualization */}
            <div className="relative w-full bg-[#151515] rounded-3xl overflow-hidden" style={{ height: '400px' }}>
              {/* Interactive Google Map Background */}
              <div className="absolute inset-0 grayscale contrast-[1.2] brightness-[0.7] invert-[0.9] hue-rotate-[180deg]">
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

              {/* Incident Markers */}
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
                        
                        {/* Pulse effect */}
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
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#b091eb]" />
                <span>Critical Alert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#075D44]" />
                <span>In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D0F17A]" />
                <span>Recovered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#94a3b8]" />
                <span>Intercepted</span>
              </div>
            </div>
          </Card>

          {/* Recovery Timeline */}
          <Card className="p-6 rounded-3xl overflow-hidden border-2 border-transparent transition-all duration-500">
            <h3 className="font-semibold mb-6 flex items-center gap-3 font-['Plus_Jakarta_Sans'] text-xl uppercase tracking-wider">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Recovery Timeline - March 2026
            </h3>
            <div className="space-y-3">
              {recoveryTimeline.map((item, index) => {
                const isActive = visibleIncidents[activeIncidentIndex]?.id === item.id;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      backgroundColor: isActive ? "rgba(176, 145, 235, 0.08)" : "transparent",
                      borderColor: isActive ? "rgba(176, 145, 235, 0.2)" : "transparent"
                    }}
                    className={`flex items-center gap-6 p-4 rounded-2xl transition-all duration-500 text-[#151515] ${isActive ? "bg-[#c0a7ef]/10 scale-[1.01]" : "bg-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <div className="flex-shrink-0 w-28 text-xs font-semibold text-muted-foreground uppercase tracking-tight">
                      {item.date}
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-base mb-0.5 transition-colors ${isActive ? "text-[#151515]" : "text-muted-foreground"}`}>
                        {item.event}
                      </p>
                      <p className="text-sm text-muted-foreground/80">{item.location}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 px-2 py-1 rounded bg-black/5">
                        {item.status}
                      </span>
                      {isActive && (
                        <motion.div
                          animate={{ scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#b091eb]" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Right Sidebar - Statistics */}
        <div className="space-y-4">
          {/* Incident Detail (Dynamic) */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait">
              {selectedIncident && (
                <motion.div
                  key={selectedIncident.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PoachingIncidentCard {...selectedIncident} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Monthly Statistics */}
          <Card className="p-5 space-y-4 rounded-3xl">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Incidents Detected</p>
                <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.incidents}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Plants Recovered</p>
                <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.plantsRecovered}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Legal Actions</p>
                <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.legalActions}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.successRate}%</p>
                  <TrendingDown className="w-5 h-5 text-[#075D44]" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Poaching declining month-over-month</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}