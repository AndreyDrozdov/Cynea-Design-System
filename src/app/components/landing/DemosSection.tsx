"use client";

import { motion } from "motion/react";
import { SpeciesRiskDashboard } from "../demos/SpeciesRiskDashboard";
import { GeneticDiversityOptimizer } from "../demos/GeneticDiversityOptimizer";
import { GlobalPoachingMap } from "../demos/GlobalPoachingMap";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function DemosSection() {
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

        <Tabs defaultValue="species-risk" className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mb-8 h-auto p-1 bg-white rounded-3xl">
            <TabsTrigger
              value="species-risk"
              className="flex items-center justify-center py-3 rounded-3xl data-[state=active]:bg-[#075D44] data-[state=active]:text-[#E6E8EC]"
            >
              <div className="text-xs font-semibold">Species Risk</div>
            </TabsTrigger>
            <TabsTrigger
              value="genetic"
              className="flex items-center justify-center py-3 rounded-3xl data-[state=active]:bg-[#075D44] data-[state=active]:text-[#E6E8EC]"
            >
              <div className="text-xs font-semibold">Genetic Optimizer</div>
            </TabsTrigger>
            <TabsTrigger
              value="poaching"
              className="flex items-center justify-center py-3 rounded-3xl data-[state=active]:bg-[#075D44] data-[state=active]:text-[#E6E8EC]"
            >
              <div className="text-xs font-semibold">Poaching Map</div>
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-3xl p-8">
            <TabsContent value="species-risk" className="mt-0">
              <SpeciesRiskDashboard />
            </TabsContent>

            <TabsContent value="genetic" className="mt-0">
              <GeneticDiversityOptimizer />
            </TabsContent>

            <TabsContent value="poaching" className="mt-0">
              <GlobalPoachingMap />
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
