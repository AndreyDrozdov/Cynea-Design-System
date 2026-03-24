"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Species<br/>Rescue",
    subtitle: "Risk Prediction & Early Detection",
    description:
      "AI analyzes 847 plant species continuously, predicting extinction risk 2–3 years before it becomes inevitable. Real-time monitoring of population trends, genetic health, habitat suitability, and poaching pressure.",
    features: [
      "Extinction timeline prediction",
      "Critical intervention windows",
      "Multi-factor risk analysis",
      "Automated priority ranking",
    ],
    bg: "bg-[#075D44]",
    titleColor: "text-[#cfedcc]",
    subtitleColor: "text-[#cfedcc]/60",
    textColor: "text-[#cfedcc]/80",
    dotColor: "bg-[#D0F17A]",
  },
  {
    title: "Genetic<br/>Optimization",
    subtitle: "Breeding Program Coordination",
    description:
      "Machine learning optimizes breeding pairs to maximize genetic diversity recovery. Coordinates breeding programs across 76 institutions, preventing inbreeding and restoring gene pools from collapse.",
    features: [
      "40–60% diversity increase",
      "Outcrossing recommendations",
      "Multi-generation planning",
      "Global coordination",
    ],
    bg: "bg-[#D0F17A]",
    titleColor: "text-[#075D44]",
    subtitleColor: "text-[#075D44]/60",
    textColor: "text-[#075D44]/80",
    dotColor: "bg-[#075D44]",
  },
  {
    title: "Poaching<br/>Prevention",
    subtitle: "Global Monitoring & Law Enforcement",
    description:
      "AI monitors satellite imagery, dark web marketplaces, and ranger reports to detect illegal plant harvesting within days. Coordinates with customs and law enforcement for rapid recovery.",
    features: [
      "Satellite monitoring",
      "Marketplace AI detection",
      "64% prevention success rate",
      "DNA barcode matching",
    ],
    bg: "bg-[#b091eb]",
    titleColor: "text-[#46014f]",
    subtitleColor: "text-[#46014f]/60",
    textColor: "text-[#46014f]/70",
    dotColor: "bg-[#46014f]",
  },
];

export function ServicesSection() {
  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1711519159306-8e81ef07eea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJhaW5mb3Jlc3QlMjBjYW5vcHklMjBhZXJpYWwlMjBsdXNoJTIwZ3JlZW58ZW58MXx8fHwxNzc0Mjg3MDc2fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#151515]/60" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-[#D0F17A] font-semibold mb-1 font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-sm">
            Design Methods
          </p>
          <h2 className="text-4xl md:text-5xl text-white">
            Three Core{" "}
            <span className="text-[#D0F17A]">
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
                  className={`text-3xl md:text-4xl xl:text-5xl ${service.titleColor} font-['Dela_Gothic_One'] leading-none tracking-tighter`}
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <p className={`text-sm ${service.subtitleColor} font-['Plus_Jakarta_Sans'] font-semibold uppercase tracking-widest`}>
                  {service.subtitle}
                </p>
              </div>

              <div>
                <p className={`text-sm ${service.textColor} font-['Plus_Jakarta_Sans'] leading-relaxed mb-6`}>
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
            className="md:col-span-2 bg-[#151515] rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 h-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full min-h-[120px] py-4 sm:py-0">
              <div className="flex flex-col justify-between h-full border-b border-[#D0F17A]/10 pb-4 sm:border-0 sm:pb-0">
                <p className="text-5xl text-[#075D44] font-['Dela_Gothic_One'] leading-none">847</p>
                <p className="text-sm text-[#075D44]/80 font-['Plus_Jakarta_Sans']">Species monitored around the clock</p>
              </div>
              <div className="flex flex-col justify-between h-full border-b border-[#D0F17A]/10 pb-4 sm:border-0 sm:pb-0">
                <p className="text-5xl text-[#075D44] font-['Dela_Gothic_One'] leading-none">76</p>
                <p className="text-sm text-[#075D44]/80 font-['Plus_Jakarta_Sans']">Partner institutions coordinated globally</p>
              </div>
              <div className="flex flex-col justify-between h-full">
                <p className="text-5xl text-[#075D44] font-['Dela_Gothic_One'] leading-none">64%</p>
                <p className="text-sm text-[#075D44]/80 font-['Plus_Jakarta_Sans']">Poaching prevention success rate</p>
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
            <p className="text-[#46014f] font-['Dela_Gothic_One'] text-xl leading-snug mb-4">
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