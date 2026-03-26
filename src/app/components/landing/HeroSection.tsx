"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Leaf, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const plantSlides = [
  {
    src: "https://images.unsplash.com/photo-1725912196296-bfda8fffaff6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Aetheria Lumina",
    label: "Aetheria Lumina",
  },
  {
    src: "https://images.unsplash.com/photo-1560369073-233ebcda63a1?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Crimson Fernelia",
    label: "Crimson Fernelia",
  },
  {
    src: "https://images.unsplash.com/photo-1754920098558-63ab73cd213b?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cyanea Spectra",
    label: "Cyanea Spectra",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % plantSlides.length);
    }, 5000); // 5 seconds cycle
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="bg-[#E6E8EC] lg:min-h-screen lg:flex lg:flex-col lg:overflow-hidden">
      <div className="lg:flex-1 container mx-auto px-6 pt-20 pb-8 lg:pt-20 xl:pt-28 flex flex-col lg:min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:flex-1 lg:min-h-0">

          {/* Left: text card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#075D44] rounded-3xl p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D0F17A] rounded-3xl">
                <Leaf className="w-4 h-4 text-[#D0F17A]" />
                <span className="text-[#D0F17A] text-sm font-['Plus_Jakarta_Sans'] font-semibold">
                  AI-Powered Plant Conservation
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl text-[#cfedcc] leading-tight tracking-tight">
                Protecting Rare Plants, Restoring Biodiversity
              </h1>

              <p className="text-base text-[#cfedcc]/70 leading-relaxed font-['Plus_Jakarta_Sans']">
                AI-powered software that prevents plant extinction through predictive risk analysis,
                genetic optimization, poaching detection, and global conservation coordination.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-[#D0F17A] text-[#075D44] rounded-3xl px-6 xl:px-8 hover:bg-[#D0F17A]/90 h-10 xl:h-12"
                >
                  Request Platform Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-[#E6E8EC] text-[#46014f] rounded-3xl px-6 xl:px-8 hover:bg-[#E6E8EC]/90 h-10 xl:h-12"
                >
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-2 md:flex md:gap-8 gap-y-4 font-['Plus_Jakarta_Sans']">
                <div>
                  <p className="text-2xl md:text-3xl text-[#cfedcc] font-['Dela_Gothic_One'] tracking-tight">847</p>
                  <p className="text-[10px] md:text-sm text-[#cfedcc]/70 uppercase tracking-widest">Species Monitored</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl text-[#cfedcc] font-['Dela_Gothic_One'] tracking-tight">76</p>
                  <p className="text-[10px] md:text-sm text-[#cfedcc]/70 uppercase tracking-widest">Partner Institutions</p>
                </div>
                <div className="col-span-2 md:col-span-1 border-t border-[#cfedcc]/10 pt-4 md:pt-0 md:border-0">
                  <p className="text-2xl md:text-3xl text-[#cfedcc] font-['Dela_Gothic_One'] tracking-tight">64%</p>
                  <p className="text-[10px] md:text-sm text-[#cfedcc]/70 uppercase tracking-widest">Recovery Rate</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: stacked images */}
          <div className="flex flex-col gap-4 min-h-0">
            {/* Main large image — cycling plant slideshow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-3xl overflow-hidden flex-1 min-h-0 relative"
            >
              <AnimatePresence mode="sync">
                <motion.img
                  key={current}
                  src={plantSlides[current].src}
                  alt={plantSlides[current].alt}
                  initial={{ opacity: 0, scale: 1.12 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Species label */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#151515]/60 backdrop-blur-sm rounded-3xl"
                  >
                    <Leaf className="w-3 h-3 text-[#D0F17A]" />
                    <span className="text-[#E6E8EC] text-sm font-['Plus_Jakarta_Sans']">
                      {plantSlides[current].label}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dot indicators */}
              <div className="absolute top-4 right-4 z-10 flex gap-1.5">
                {plantSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-[#D0F17A] w-5" : "bg-[#E6E8EC]/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Bottom row — stats */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-[#D0F17A] w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-auto min-h-[140px] sm:h-40 lg:h-48"
              >
                <p className="text-5xl text-[#075D44] font-['Dela_Gothic_One'] tracking-tight leading-none">2,400+</p>
                <p className="text-sm text-[#075D44] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Unique Genetic Samples Stored in Global Vaults
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="bg-[#c0a7ef] w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-auto min-h-[140px] sm:h-40 lg:h-48"
              >
                <p className="text-5xl text-[#46014f] font-['Dela_Gothic_One'] tracking-tight leading-none">312</p>
                <p className="text-sm text-[#46014f] font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Active Global Breeding Programs Managed
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}