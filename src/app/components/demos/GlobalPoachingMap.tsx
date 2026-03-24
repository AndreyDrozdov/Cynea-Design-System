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
    coordinates: { x: 70, y: 35 }
  },
  {
    id: "2",
    location: "Madagascar",
    species: "Pachypodium (rare variant)",
    specimenCount: 89,
    detectionMethod: "Illegal Nursery Network Detection",
    status: "recovered",
    date: "March 22, 2026",
    coordinates: { x: 55, y: 60 }
  },
  {
    id: "3",
    location: "Peru (Amazon)",
    species: "Medicinal plant variant",
    specimenCount: 203,
    detectionMethod: "GPS Camera + Ranger Reports",
    status: "in-progress",
    date: "March 20, 2026",
    coordinates: { x: 25, y: 55 }
  },
  {
    id: "4",
    location: "Madagascar (North)",
    species: "Rare orchid variant",
    specimenCount: 56,
    detectionMethod: "Customs Intercept",
    status: "intercepted",
    date: "March 21, 2026",
    coordinates: { x: 55, y: 50 }
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
    // Animate incidents appearing on map
    const showIncidents = async () => {
      for (let i = 0; i < incidents.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setVisibleIncidents(prev => [...prev, incidents[i]]);
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
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "alert": return "#FFC5EE";
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
                <Activity className="w-4 h-4 animate-pulse text-[#FFC5EE]" />
                <span>Live Monitoring</span>
              </div>
            </div>

            {/* Simplified World Map Visualization */}
            <div className="relative w-full bg-[#E6E8EC] rounded-3xl overflow-hidden" style={{ height: '400px' }}>
              {/* Continents (simplified shapes) */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <path d="M 100 150 Q 150 120 200 140 T 300 160 Q 350 180 300 220 T 200 240 Q 150 220 100 200 Z" fill="#075D44" />
                <path d="M 350 100 Q 400 80 450 100 T 550 120 Q 600 140 550 180 T 450 200 Q 400 180 350 160 Z" fill="#075D44" />
                <path d="M 150 280 Q 200 260 250 280 T 350 300 Q 400 320 350 360 T 250 380 Q 200 360 150 340 Z" fill="#075D44" />
              </svg>

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

              {/* Selected Incident Popup */}
              <AnimatePresence>
                {selectedIncident && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-3xl shadow-xl"
                    style={{ borderLeft: `4px solid ${getStatusColor(selectedIncident.status)}` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{selectedIncident.location}</span>
                      </div>
                      <Badge 
                        className="text-xs"
                        style={{ 
                          backgroundColor: getStatusColor(selectedIncident.status),
                          color: getStatusTextColor(selectedIncident.status)
                        }}
                      >
                        {selectedIncident.status.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-sm mb-1"><strong>{selectedIncident.species}</strong></p>
                    <p className="text-lg font-bold text-[#075D44] mb-2">
                      {selectedIncident.specimenCount} plants detected
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>Detection: {selectedIncident.detectionMethod}</p>
                      <p>Date: {selectedIncident.date}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#FFC5EE]" />
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
                    {item.status === "alert" && <AlertCircle className="w-5 h-5 text-[#FFC5EE]" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Sidebar - Statistics */}
        <div className="space-y-4">
          {/* Monthly Statistics */}
          <Card className="p-5 space-y-4 rounded-3xl">
            <h3 className="font-semibold font-['Dela_Gothic_One']">Global Report - March 2026</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Incidents Detected</p>
                <p className="text-4xl font-bold text-[#FFC5EE]">{stats.incidents}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Plants Recovered</p>
                <p className="text-4xl font-bold text-[#075D44]">{stats.plantsRecovered}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Legal Actions</p>
                <p className="text-4xl font-bold text-primary">{stats.legalActions}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-[#D0F17A]">{stats.successRate}%</p>
                  <TrendingDown className="w-5 h-5 text-[#D0F17A]" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Poaching declining month-over-month</p>
              </div>
            </div>
          </Card>

          {/* Most Targeted Species */}
          <Card className="p-5 rounded-3xl">
            <h3 className="font-semibold mb-3 font-['Dela_Gothic_One']">Most Targeted Species</h3>
            <div className="space-y-3">
              {[
                { name: "Rare Orchid species", count: 412 },
                { name: "Succulent species", count: 203 },
                { name: "Medicinal plants", count: 156 },
                { name: "Cycad species", count: 76 }
              ].map((species, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{species.name}</span>
                  <Badge variant="outline" className="font-semibold">
                    {species.count}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Incident Cards */}
          <div className="space-y-3">
            {visibleIncidents.slice(0, 2).map((incident) => (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <PoachingIncidentCard {...incident} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}