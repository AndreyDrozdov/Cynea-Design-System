"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../ui/utils";

const processCards = [
  {
    id: "01",
    title: "Rescue Mission",
    description: "Our AI monitors 847 plant species around the clock for rapid-response rescue coordinating teams.",
    bg: "bg-[#075D44]", // Brand Emerald
    textColor: "text-[#cfedcc]",
    descColor: "text-[#cfedcc]/70"
  },
  {
    id: "02",
    title: "Genetic Analysis",
    description: "We assess species' genetic health and allele diversity to determine the most urgent intervention required.",
    bg: "bg-[#c0a7ef]", // Brand Accent Lavender
    textColor: "text-[#46014f]",
    descColor: "text-[#46014f]/70"
  },
  {
    id: "03",
    title: "Relocation",
    description: "Specimens are carefully relocated to protected botanical gardens and seed banks for safe recovery.",
    bg: "bg-[#D0F17A]", // Brand Secondary Lime
    textColor: "text-[#075D44]",
    descColor: "text-[#075D44]/70"
  }
];

export function RescueProcessSection() {
  return (
    <section 
      id="how-we-rescue"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1584204559709-ca7d413229eb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000000]/60" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#D0F17A] font-bold mb-2 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-sm">
              How We Rescue
            </p>
            <h2 className="text-3xl md:text-5xl font-['Dela_Gothic_One'] tracking-tight text-white leading-[1.1]">
              How We Rescue Plants
            </h2>
          </motion.div>
        </div>

        {/* Stacked Vertical Layout as per screenshot */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {processCards.map((card, index) => (
            <motion.a
              key={card.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={cn(
                card.bg,
                "group rounded-3xl p-8 md:p-10 flex flex-col items-start gap-2 relative overflow-hidden",
                "transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl hover:brightness-105"
              )}
            >
              <div className="absolute top-8 right-8 md:top-10 md:right-10">
                <ArrowUpRight className={cn(
                  "w-8 h-8 transition-all duration-500",
                  "group-hover:translate-x-1.5 group-hover:-translate-y-1.5",
                  card.textColor
                )} />
              </div>
              
              <h3 className={cn(
                "text-2xl md:text-2xl font-['Dela_Gothic_One'] font-bold tracking-tight leading-tight",
                card.textColor
              )}>
                {card.title}
              </h3>
              <p className={cn(
                "text-base font-['Plus_Jakarta_Sans'] font-medium leading-relaxed max-w-2xl",
                card.descColor
              )}>
                {card.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
