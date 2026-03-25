"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SpeciesRiskDashboard } from "../demos/SpeciesRiskDashboard";
import { GeneticDiversityOptimizer } from "../demos/GeneticDiversityOptimizer";
import { GlobalPoachingMap } from "../demos/GlobalPoachingMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "../ui/utils";

export function DemosSection() {
  const [activeTab, setActiveTab] = useState("species-risk");
  return (
    <section id="demos" className="py-20 bg-[#E6E8EC]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#075D44] font-semibold mb-2 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-sm">
            Live Platform
          </p>
          <h2 className="text-4xl md:text-5xl text-[#151515] tracking-tight">
            See Cyanea in Action
          </h2>
          <p className="text-lg text-[#151515]/60 max-w-3xl mt-3 font-['Plus_Jakarta_Sans']">
            Explore our three autonomous AI-powered conservation systems.
            Each demo runs continuously, showing real-time analysis and decision-making.
          </p>
        </motion.div>

        <Tabs defaultValue="species-risk" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="relative flex w-full md:grid md:max-w-xl md:grid-cols-3 mb-10 h-auto p-1 bg-white/80 backdrop-blur-md rounded-[24px] border border-white overflow-hidden mx-auto">
            {["species-risk", "genetic", "poaching"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="relative z-10 flex items-center justify-center py-2.5 px-2 md:px-0 rounded-[20px] text-[#151515]/60 data-[state=active]:text-white transition-colors duration-500 min-w-0 flex-1 font-bold"
              >
                <span className="relative z-20 text-[10px] md:text-xs uppercase tracking-wider">
                  {tab === "species-risk" ? "Species Risk" : tab === "genetic" ? "Genetic Optimizer" : "Poaching Map"}
                </span>
                
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0.5 inset-y-0.5 bg-[#075D44] rounded-[19px] z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="bg-white rounded-[32px] p-4 md:p-10 h-[890px] overflow-y-auto relative custom-scrollbar border border-white">
            <div className="relative h-full">
              {/* Species Risk Dashboard */}
              <motion.div
                initial={false}
                animate={{ 
                  opacity: activeTab === "species-risk" ? 1 : 0,
                  y: activeTab === "species-risk" ? 0 : 20,
                  scale: activeTab === "species-risk" ? 1 : 0.98,
                  pointerEvents: activeTab === "species-risk" ? "auto" : "none"
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "w-full h-full",
                  activeTab !== "species-risk" && "absolute inset-0 invisible h-0 overflow-hidden"
                )}
              >
                <SpeciesRiskDashboard isVisible={activeTab === "species-risk"} />
              </motion.div>

              {/* Genetic Optimizer */}
              <motion.div
                initial={false}
                animate={{ 
                  opacity: activeTab === "genetic" ? 1 : 0,
                  y: activeTab === "genetic" ? 0 : 20,
                  scale: activeTab === "genetic" ? 1 : 0.98,
                  pointerEvents: activeTab === "genetic" ? "auto" : "none"
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "w-full h-full",
                  activeTab !== "genetic" && "absolute inset-0 invisible h-0 overflow-hidden"
                )}
              >
                <GeneticDiversityOptimizer isVisible={activeTab === "genetic"} />
              </motion.div>

              {/* Poaching Map */}
              <motion.div
                initial={false}
                animate={{ 
                  opacity: activeTab === "poaching" ? 1 : 0,
                  y: activeTab === "poaching" ? 0 : 20,
                  scale: activeTab === "poaching" ? 1 : 0.98,
                  pointerEvents: activeTab === "poaching" ? "auto" : "none"
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "w-full h-full",
                  activeTab !== "poaching" && "absolute inset-0 invisible h-0 overflow-hidden"
                )}
              >
                <GlobalPoachingMap isVisible={activeTab === "poaching"} />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-5 bg-[#D0F17A] rounded-3xl"
          >
            <p className="text-sm text-[#075D44] font-['Plus_Jakarta_Sans']">
              <strong>Note:</strong> These demos run autonomously with simulated data to demonstrate
              real-time AI conservation monitoring. Actual platform connects to live institutional
              databases and satellite feeds.
            </p>
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
}
