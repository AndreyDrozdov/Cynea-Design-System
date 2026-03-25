"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Species<br/>Rescue",
    subtitle: "Risk Prediction & Early Detection",
    description:
      "AI predicts extinction risk 2–3 years before it becomes inevitable, analyzing population trends and habitat suitability in real-time.",
    features: [
      "Extinction timeline prediction",
      "Critical intervention windows",
      "Multi-factor risk analysis",
    ],
    bg: "bg-[#D0F17A]",
    titleColor: "text-[#075D44]",
    subtitleColor: "text-[#075D44]/70",
    textColor: "text-[#075D44]/70",
    dotColor: "bg-[#075D44]",
  },
  {
    title: "Genetic<br/>Optimization",
    subtitle: "Breeding Program Coordination",
    description:
      "Machine learning optimizes breeding pairs across 76 global institutions to maximize genetic diversity and prevent gene pool collapse.",
    features: [
      "40–60% diversity increase",
      "Outcrossing recommendations",
      "Multi-generation planning",
    ],
    bg: "bg-[#075D44]",
    titleColor: "text-[#cfedcc]",
    subtitleColor: "text-[#cfedcc]/70",
    textColor: "text-[#cfedcc]/70",
    dotColor: "bg-[#D0F17A]",
  },
  {
    title: "Poaching<br/>Prevention",
    subtitle: "Global Monitoring & Law Enforcement",
    description:
      "AI detects illegal plant harvesting via satellite and web monitoring, coordinating rapid recovery with local law enforcement.",
    features: [
      "Satellite monitoring",
      "Marketplace AI detection",
      "64% prevention success rate",
    ],
    bg: "bg-[#151515]",
    titleColor: "text-[#D0F17A]",
    subtitleColor: "text-[#D0F17A]/70",
    textColor: "text-[#D0F17A]/70",
    dotColor: "bg-[#D0F17A]",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements removed for cleaner architectural aesthetic */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-[#075D44] font-semibold mb-2 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-sm">
            Design Methods
          </p>
          <h2 className="text-4xl md:text-5xl text-[#151515] tracking-tight">
            Three Core{" "}
            <span className="text-[#151515]">
              Conservation
            </span>{" "}
            Services
          </h2>
        </motion.div>

        {/* Row 1: three service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.bg} rounded-3xl p-8 flex flex-col justify-between min-h-[440px]`}
            >
              <div className="space-y-4">
                <h3 
                  className={`text-2xl md:text-3xl xl:text-4xl ${service.titleColor} font-['Dela_Gothic_One'] leading-none tracking-tight`}
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <p className={`text-sm ${service.subtitleColor} font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-widest`}>
                  {service.subtitle}
                </p>
              </div>

              <div>
                <p className={`text-base ${service.textColor} font-['Plus_Jakarta_Sans'] leading-relaxed mb-6`}>
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${service.textColor} font-['Plus_Jakarta_Sans']`}>
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.dotColor} opacity-60`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: wide dark stat card + CTA card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#c0a7ef] rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full min-h-[120px] py-4 sm:py-0">
              <div className="flex flex-col justify-between h-full border-b border-[#46014f]/10 pb-4 sm:border-0 sm:pb-0">
                <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">847</p>
                <div className="space-y-0.5">
                  <p className="text-base text-[#46014f] font-['Plus_Jakarta_Sans'] font-medium">Species Monitored</p>
                  <p className="text-sm text-[#46014f] font-['Plus_Jakarta_Sans'] opacity-70">Real-time detection across 12 corridors</p>
                </div>
              </div>
              <div className="flex flex-col justify-between h-full border-b border-[#46014f]/10 pb-4 sm:border-0 sm:pb-0">
                <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">76</p>
                <div className="space-y-0.5">
                  <p className="text-base text-[#46014f] font-['Plus_Jakarta_Sans'] font-medium">Global Partners</p>
                  <p className="text-sm text-[#46014f] font-['Plus_Jakarta_Sans'] opacity-70">Bridging research with on-ground action</p>
                </div>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">64%</p>
                <div className="space-y-0.5">
                  <p className="text-base text-[#46014f] font-['Plus_Jakarta_Sans'] font-medium">Success Rate</p>
                  <p className="text-sm text-[#46014f] font-['Plus_Jakarta_Sans'] opacity-70">Calculated via predictive neural modeling</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#E6E8EC] rounded-3xl p-8 flex flex-col justify-between h-full"
          >
            <p className="text-[#46014f] font-['Dela_Gothic_One'] tracking-tight text-xl leading-snug mb-4">
              AI-powered tools working together to prevent extinction
            </p>
            <Button
              className="w-full bg-[#46014f] text-[#e6e8ec] rounded-3xl hover:bg-[#46014f]/90"
            >
              Request Platform Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}