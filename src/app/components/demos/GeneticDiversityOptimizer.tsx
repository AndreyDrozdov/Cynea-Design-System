"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { GeneticHealthCard } from "../cyanea/GeneticHealthCard";
import { BreedingRecommendationCard } from "../cyanea/BreedingRecommendationCard";
import { GeneticRescueCard } from "../cyanea/IntelligenceUnits";
import { motion } from "motion/react";
import { Dna, TrendingUp } from "lucide-react";

interface GeneticMetrics {
  diversityScore: number;
  inbreedingCoefficient: number;
  alleleCount: number;
}

interface GeneticDiversityOptimizerProps {
  isVisible?: boolean;
}

export function GeneticDiversityOptimizer({ isVisible = true }: GeneticDiversityOptimizerProps) {
  const [metrics, setMetrics] = useState<GeneticMetrics>({
    diversityScore: 0,
    inbreedingCoefficient: 0,
    alleleCount: 0
  });
  const [showRecommendations, setShowRecommendations] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      setMetrics({ diversityScore: 0, inbreedingCoefficient: 0, alleleCount: 0 });
      return;
    }

    const animateMetrics = async () => {
      const targetMetrics = {
        diversityScore: 42,
        inbreedingCoefficient: 32,
        alleleCount: 14
      };

      const steps = 30;
      const delay = 50;

      for (let i = 0; i <= steps; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        const progress = i / steps;
        
        setMetrics({
          diversityScore: Math.round(targetMetrics.diversityScore * progress),
          inbreedingCoefficient: Math.round(targetMetrics.inbreedingCoefficient * progress),
          alleleCount: Math.round(targetMetrics.alleleCount * progress)
        });
      }
    };

    animateMetrics();
  }, [isVisible]);

  return (
    <div className="space-y-6 lg:max-h-[calc(100vh-48px)] lg:overflow-hidden">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Genetic Diversity Optimizer</h2>
        <p className="text-muted-foreground/70">AI-powered breeding strategy for Aetheria Lumina</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto pr-0 lg:pr-2">
        {/* Left Panel - Current Genetic Status */}
        <div className="space-y-4">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="space-y-4"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-xl font-semibold flex items-center gap-2"
            >
              Current Population Genetics
            </motion.h3>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <GeneticHealthCard
                diversityScore={metrics.diversityScore}
                inbreedingCoefficient={metrics.inbreedingCoefficient}
                alleleCount={metrics.alleleCount}
                historicalAlleleCount={47}
                commonName="Aetheria Lumina"
                imageUrl="https://images.unsplash.com/photo-1725912196296-bfda8fffaff6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="px-6 py-3 border border-[#c0a7ef]/30 bg-transparent rounded-[32px] flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-[#c0a7ef] rounded-full animate-pulse flex-shrink-0" />
                <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight">
                  <strong className="font-bold text-[#151515]">Critical Genetic Alert:</strong>
                  <span className="text-muted-foreground/70 ml-2">Species has lost 70% of genetic diversity (47 → 14 alleles). Effective population size is only 4 genetically unique plants. Immediate genetic rescue required.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {/* Baseline Comparison */}
              <Card className="p-5 rounded-3xl">
                <h4 className="font-semibold mb-3 font-['Dela_Gothic_One'] tracking-tight">Historical Baseline Comparison</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground/70">Allele Count</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#075d44] font-semibold">14</span>
                      <span className="text-muted-foreground/70">vs</span>
                      <span className="text-muted-foreground/70">47 historical</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground/70">Inbreeding</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#075d44] font-semibold">32%</span>
                      <span className="text-muted-foreground/70">vs</span>
                      <span className="text-muted-foreground/70">2% historical</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground/70">Effective Pop Size</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#075d44] font-semibold">4 plants</span>
                      <span className="text-muted-foreground/70">vs</span>
                      <span className="text-muted-foreground/70">200+ historical</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Panel - AI Recommendations */}
        <div className="space-y-4">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="space-y-4"
          >
            {showRecommendations ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="md:col-span-2"
                >
                  <BreedingRecommendationCard
                    specimen1="Specimen #47"
                    specimen2="Specimen #19"
                    institution1="Singapore Botanic Gardens"
                    institution2="Sydney Royal Botanic Garden"
                    allelesGain={18}
                    diversityImprovement={{ from: 42, to: 58, percentage: 38 }}
                    inbreedingReduction={{ from: 32, to: 24 }}
                    successProbability={94}
                    timeline="3-year breeding program"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="md:col-span-2"
                >
                  <GeneticRescueCard isVisible={isVisible} />
                </motion.div>
              </div>
            ) : (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="p-8 flex items-center justify-center rounded-3xl">
                  <div className="text-center space-y-2">
                    <Dna className="w-8 h-8 text-primary mx-auto animate-pulse" />
                    <p className="text-muted-foreground/70">Analyzing breeding combinations...</p>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}