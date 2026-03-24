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
    location: "Thailand/Laos Border",
    species: "Paphiopedilum rothschildianum",
    specimenCount: 127,
    detectionMethod: "Satellite + Dark Web Monitoring",
    status: "alert",
    date: "March 21, 2026",
    coordinates: { x: 52, y: 44 }
  },
  {
    id: "2",
    location: "Mekong River Crossing",
    species: "Pachypodium (regional variant)",
    specimenCount: 89,
    detectionMethod: "Illegal Crossing Point Sensor",
    status: "recovered",
    date: "March 22, 2026",
    coordinates: { x: 38, y: 32 }
  },
  {
    id: "3",
    location: "Border Jungle Outpost",
    species: "Orchid variant rescued",
    specimenCount: 203,
    detectionMethod: "Patrol Drone Auto-Alert",
    status: "in-progress",
    date: "March 20, 2026",
    coordinates: { x: 74, y: 76 }
  },
  {
    id: "4",
    location: "Vientiane Checkpoint",
    species: "Intercepted Rare Seeds",
    specimenCount: 56,
    detectionMethod: "Thermal Imaging Scanners",
    status: "intercepted",
    date: "March 21, 2026",
    coordinates: { x: 25, y: 22 }
  }
];

const recoveryTimeline = [
  {
    date: "March 22, 2pm",
    event: "89 Pachypodium plants recovered - Madagascar",
    status: "recovered",
    location: "Currently in quarantine at local botanical garden"
  },
  {
    date: "March 21, 4pm",
    event: "56 orchids intercepted - Madagascar",
    status: "intercepted",
    location: "Customs recovery - transfer to conservation center"
  },
  {
    date: "March 20, 11am",
    event: "203 medicinal plants rescued - Peru",
    status: "in-progress",
    location: "Recovery team dispatched, ETA 24 hours"
  },
  {
    date: "March 18, 9am",
    event: "127 orchids seized - Thailand border",
    status: "alert",
    location: "Authorities notified, coordination in progress"
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
      case "alert": return "#b091eb";
      case "in-progress": return "#D0F17A";
      case "recovered": return "#075D44";
      case "intercepted": return "#E6E8EC";
      default: return "#717182";
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case "alert": return "#151515";
      case "in-progress": return "#075D44";
      case "recovered": return "#E6E8EC";
      case "intercepted": return "#151515";
      default: return "#151515";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Global Poaching Detection & Prevention</h2>
        <p className="text-muted-foreground">Real-time monitoring of illegal plant harvesting worldwide</p>
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
                {visibleIncidents.map((incident, index) => (
                  <motion.div
                    key={incident.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.3, type: "spring" }}
                    className="absolute cursor-pointer"
                    style={{ 
                      left: `${incident.coordinates.x}%`, 
                      top: `${incident.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setSelectedIncident(incident)}
                    onMouseEnter={() => setSelectedIncident(incident)}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative"
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                        style={{ 
                          backgroundColor: getStatusColor(incident.status),
                          border: '3px solid white'
                        }}
                      >
                        <span style={{ color: getStatusTextColor(incident.status) }} className="text-xs font-bold">
                          {incident.specimenCount}
                        </span>
                      </div>
                      
                      {/* Pulse effect */}
                      <motion.div
                        animate={{ 
                          scale: [1, 2.5],
                          opacity: [0.5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: getStatusColor(incident.status) }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#b091eb]" />
                <span>Critical Alert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D0F17A]" />
                <span>In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#E6E8EC] border border-[#151515]/20" />
                <span>Intercepted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#075D44]" />
                <span>Recovered</span>
              </div>
            </div>
          </Card>

          {/* Recovery Timeline */}
          <Card className="p-6 rounded-3xl">
            <h3 className="font-semibold mb-4 flex items-center gap-2 font-['Dela_Gothic_One']">
              <CheckCircle2 className="w-5 h-5 text-[#075D44]" />
              Successful Recoveries This Month
            </h3>
            <div className="space-y-3">
              {recoveryTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 1 }}
                  className="flex gap-3 pb-3 border-b last:border-0"
                >
                  <div className="flex-shrink-0 w-24 text-xs text-muted-foreground">
                    {item.date}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1">{item.event}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>
                  <div>
                    {item.status === "recovered" && <CheckCircle2 className="w-5 h-5 text-[#075D44]" />}
                    {item.status === "intercepted" && <CheckCircle2 className="w-5 h-5 text-[#151515]" />}
                    {item.status === "in-progress" && <Activity className="w-5 h-5 text-[#D0F17A]" />}
                    {item.status === "alert" && <AlertCircle className="w-5 h-5 text-[#b091eb]" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Sidebar - Statistics */}
        <div className="space-y-4">
          {/* Recent Incident Card (Top Priority) */}
          <div className="space-y-3">
            {visibleIncidents.slice(0, 1).map((incident) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <PoachingIncidentCard {...incident} />
              </motion.div>
            ))}
          </div>

          {/* Monthly Statistics */}
          <Card className="p-5 space-y-4 rounded-3xl">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Incidents Detected</p>
                <p className="text-4xl font-bold text-[#b091eb] font-['Dela_Gothic_One']">{stats.incidents}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Plants Recovered</p>
                <p className="text-4xl font-bold text-[#075D44] font-['Dela_Gothic_One']">{stats.plantsRecovered}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Legal Actions</p>
                <p className="text-4xl font-bold text-primary font-['Dela_Gothic_One']">{stats.legalActions}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-[#D0F17A] font-['Dela_Gothic_One']">{stats.successRate}%</p>
                  <TrendingDown className="w-5 h-5 text-[#D0F17A]" />
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