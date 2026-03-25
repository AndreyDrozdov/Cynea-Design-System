"use client";

import { useState } from "react";
import { motion } from "motion/react";
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
          <h2 className="text-4xl md:text-5xl text-[#151515]">
            See Cyanea in Action
          </h2>
          <p className="text-lg text-[#151515]/60 max-w-3xl mt-3 font-['Plus_Jakarta_Sans']">
            Explore our three autonomous AI-powered conservation systems.
            Each demo runs continuously, showing real-time analysis and decision-making.
          </p>
        </motion.div>

        <Tabs defaultValue="species-risk" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="flex w-full md:grid md:max-w-2xl md:grid-cols-3 mb-8 h-auto p-1 bg-white rounded-3xl">
            <TabsTrigger
              value="species-risk"
              className="flex items-center justify-center py-3 px-2 md:px-0 rounded-3xl data-[state=active]:bg-[#075D44] data-[state=active]:text-[#E6E8EC] transition-all min-w-0 flex-1 data-[state=active]:flex-[2]"
            >
              <div className="text-[10px] md:text-xs font-semibold truncate w-full px-1">Species Risk</div>
            </TabsTrigger>
            <TabsTrigger
              value="genetic"
              className="flex items-center justify-center py-3 px-2 md:px-0 rounded-3xl data-[state=active]:bg-[#075D44] data-[state=active]:text-[#E6E8EC] transition-all min-w-0 flex-1 data-[state=active]:flex-[2]"
            >
              <div className="text-[10px] md:text-xs font-semibold truncate w-full px-1">Genetic Optimizer</div>
            </TabsTrigger>
            <TabsTrigger
              value="poaching"
              className="flex items-center justify-center py-3 px-2 md:px-0 rounded-3xl data-[state=active]:bg-[#075D44] data-[state=active]:text-[#E6E8EC] transition-all min-w-0 flex-1 data-[state=active]:flex-[2]"
            >
              <div className="text-[10px] md:text-xs font-semibold truncate w-full px-1">Poaching Map</div>
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-3xl p-4 md:p-8 h-[890px] overflow-y-auto relative custom-scrollbar">
            <TabsContent value="species-risk" forceMount className={cn("mt-0", activeTab !== "species-risk" && "hidden")}>
              <SpeciesRiskDashboard isVisible={activeTab === "species-risk"} />
            </TabsContent>

            <TabsContent value="genetic" forceMount className={cn("mt-0", activeTab !== "genetic" && "hidden")}>
              <GeneticDiversityOptimizer isVisible={activeTab === "genetic"} />
            </TabsContent>

            <TabsContent value="poaching" forceMount className={cn("mt-0", activeTab !== "poaching" && "hidden")}>
              <GlobalPoachingMap isVisible={activeTab === "poaching"} />
            </TabsContent>
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
