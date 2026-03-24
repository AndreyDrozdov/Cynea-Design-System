import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Leaf, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const plantSlides = [
  {
    src: "https://images.unsplash.com/photo-1708432331136-4b121bf5111c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3VnYWludmlsbGVhJTIwcGluayUyMGZsb3dlcnMlMjBwbGFudHxlbnwxfHx8fDE3NzQzNDA5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Bougainvillea spectabilis",
    label: "Bougainvillea spectabilis",
  },
  {
    src: "https://images.unsplash.com/photo-1759579726362-f0cde07d9e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Rare tropical plant",
    label: "Heliconia psittacorum",
  },
  {
    src: "https://images.unsplash.com/photo-1765988757705-0a58ce1481df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Tropical rainforest biodiversity",
    label: "Monstera deliciosa",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % plantSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#E6E8EC] h-screen flex flex-col overflow-hidden">
      <div className="flex-1 container mx-auto px-6 pt-20 pb-6 flex flex-col min-h-0">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 flex-1 min-h-0">

          {/* Left: text card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#075D44] rounded-3xl p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D0F17A] rounded-3xl">
                <Leaf className="w-4 h-4 text-[#075D44]" />
                <span className="text-[#075D44] text-sm font-['Plus_Jakarta_Sans'] font-semibold">
                  AI-Powered Plant Conservation
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl text-[#E6E8EC] leading-tight">
                Protecting Rare Plants,<br />
                Restoring Biodiversity
              </h1>

              <p className="text-base text-[#E6E8EC]/70 leading-relaxed font-['Plus_Jakarta_Sans']">
                AI-powered software that prevents plant extinction through predictive risk analysis,
                genetic optimization, poaching detection, and global conservation coordination.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-[#D0F17A] text-[#075D44] rounded-3xl px-8 hover:bg-[#D0F17A]/90"
                >
                  Request Platform Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-[#E6E8EC] text-[#075D44] rounded-3xl px-8 hover:bg-[#E6E8EC]/90"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex gap-8 font-['Plus_Jakarta_Sans']">
                <div>
                  <p className="text-3xl text-[#D0F17A] font-['Dela_Gothic_One']">847</p>
                  <p className="text-sm text-[#E6E8EC]/60">Species Monitored</p>
                </div>
                <div>
                  <p className="text-3xl text-[#D0F17A] font-['Dela_Gothic_One']">76</p>
                  <p className="text-sm text-[#E6E8EC]/60">Partner Institutions</p>
                </div>
                <div>
                  <p className="text-3xl text-[#D0F17A] font-['Dela_Gothic_One']">60-70%</p>
                  <p className="text-sm text-[#E6E8EC]/60">Cost Reduction</p>
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
                    <span className="text-[#E6E8EC] text-xs font-['Plus_Jakarta_Sans'] italic">
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

            {/* Bottom row — fixed height */}
            <div className="grid grid-cols-2 gap-4 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-[#D0F17A] rounded-3xl p-6 flex flex-col justify-end h-36"
              >
                <p className="text-4xl text-[#075D44] font-['Dela_Gothic_One'] mb-1">2,400+</p>
                <p className="text-sm text-[#075D44]/70 font-['Plus_Jakarta_Sans']">
                  Genetic Samples Stored
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="bg-[#FFC5EE] rounded-3xl p-6 flex flex-col justify-end h-36"
              >
                <p className="text-4xl text-[#151515] font-['Dela_Gothic_One'] mb-1">312</p>
                <p className="text-sm text-[#151515]/70 font-['Plus_Jakarta_Sans']">
                  Active Breeding Programs
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}