"use client";

import { motion } from "motion/react";

const missionImages = {
  nursery: "https://images.unsplash.com/photo-1771712256832-c75c2439e514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  lab: "https://images.unsplash.com/photo-1601601319316-bace8ae2b548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
};

const steps = [
  {
    number: "01",
    title: "Rescue Mission",
    description: "Our AI monitors 847 plant species around the clock, flagging those in danger and coordinating rapid-response conservation teams.",
    bg: "bg-[#075D44]",
    numColor: "text-[#cfedcc]",
    titleColor: "text-[#cfedcc]",
    textColor: "text-[#cfedcc]/60",
  },
  {
    number: "02",
    title: "Genetic Analysis",
    description: "We assess each species' genetic health, inbreeding coefficient, and allele diversity to determine the most urgent intervention required.",
    bg: "bg-[#D0F17A]",
    numColor: "text-[#075D44]",
    titleColor: "text-[#075D44]",
    textColor: "text-[#075D44]/70",
  },
  {
    number: "03",
    title: "Relocation",
    description: "Endangered specimens are carefully relocated to protected botanical gardens and seed banks to provide a safe environment for recovery.",
    bg: "bg-[#151515]",
    numColor: "text-[#D0F17A]",
    titleColor: "text-[#D0F17A]",
    textColor: "text-[#D0F17A]/60",
  },
  {
    number: "04",
    title: "Safe Future",
    description: "Plants are returned to restored habitats once populations reach viable thresholds through AI-guided programs.",
    bg: "bg-[#b091eb]",
    numColor: "text-[#46014f]",
    titleColor: "text-[#46014f]",
    textColor: "text-[#46014f]/60",
  },
];

export function MissionSection() {
  return (
    <section className="py-16 bg-[#E6E8EC]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-[#075D44] font-semibold mb-1 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-sm">
            How We Rescue
          </p>
          <h2 className="text-4xl md:text-5xl text-[#151515]">
            How We Rescue{" "}
            <span className="text-[#D0F17A]">
              Plants
            </span>
          </h2>
        </motion.div>

        {/* Row 1: wide image + 2 step cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-3xl overflow-hidden h-64 lg:h-72"
          >
            <img
              src={missionImages.nursery}
              alt="Plant nursery conservation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {steps.slice(0, 2).map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className={`${step.bg} rounded-3xl p-8 flex flex-col justify-between h-64 lg:h-72`}
              >
                <div className="space-y-4">
                  <span className={`text-5xl ${step.numColor} font-['Dela_Gothic_One'] leading-none block`}>
                    {step.number}
                  </span>
                  <h3 className={`text-base ${step.titleColor} font-['Dela_Gothic_One'] uppercase tracking-wide`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-xs ${step.textColor} font-['Plus_Jakarta_Sans'] leading-relaxed`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2: 2 step cards + wide image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            {steps.slice(2).map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className={`${step.bg} rounded-3xl p-8 flex flex-col justify-between h-64 lg:h-72`}
              >
                <div className="space-y-4">
                  <span className={`text-5xl ${step.numColor} font-['Dela_Gothic_One'] leading-none block`}>
                    {step.number}
                  </span>
                  <h3 className={`text-base ${step.titleColor} font-['Dela_Gothic_One'] uppercase tracking-wide`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-xs ${step.textColor} font-['Plus_Jakarta_Sans'] leading-relaxed`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32 }}
            className="rounded-3xl overflow-hidden h-64 lg:h-72"
          >
            <img
              src={missionImages.lab}
              alt="Genetic research laboratory"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}