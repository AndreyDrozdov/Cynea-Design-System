"use client";

import { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { GeneticHealthCard } from "../dendrogene/GeneticHealthCard";
import { BreedingRecommendationCard } from "../dendrogene/BreedingRecommendationCard";
import { RescueStrategyCard, SystemAnalysisCard } from "../dendrogene/IntelligenceUnits";
import { motion } from "motion/react";
import { Dna, TrendingUp } from "lucide-react";

interface GeneticMetrics {
  diversityScore: number;
  inbreedingCoefficient: number;
  alleleCount: number;
}

export function GeneticDiversityOptimizer() {
  const [metrics, setMetrics] = useState<GeneticMetrics>({
    diversityScore: 0,
    inbreedingCoefficient: 0,
    alleleCount: 0
  });
  const [showRecommendations, setShowRecommendations] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Genetic Diversity Recovery Optimizer</h2>
        <p className="text-muted-foreground">AI-powered breeding strategy for Middlemist Red Camellia</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Panel - Current Genetic Status */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            Current Population Genetics
          </h3>

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
            animate="show"
            className="space-y-4"
          >
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
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="px-6 py-3 border border-[#b091eb]/30 bg-transparent rounded-full flex items-center gap-4">
                <div className="w-2.5 h-2.5 bg-[#b091eb] rounded-full animate-pulse flex-shrink-0" />
                <p className="text-sm font-['Plus_Jakarta_Sans'] leading-tight">
                  <strong className="font-bold text-[#151515]">Critical Genetic Alert:</strong>
                  <span className="text-muted-foreground ml-2">Species has lost 70% of genetic diversity (47 → 14 alleles). Effective population size is only 4 genetically unique plants. Immediate genetic rescue required.</span>
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
                <h4 className="font-semibold mb-3 font-['Dela_Gothic_One']">Historical Baseline Comparison</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Allele Count</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#b091eb] font-semibold">14</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="text-muted-foreground">47 historical</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Inbreeding</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#b091eb] font-semibold">32%</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="text-muted-foreground">2% historical</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Effective Pop Size</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#b091eb] font-semibold">4 plants</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="text-muted-foreground">200+ historical</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Panel - AI Recommendations */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            Recommended Breeding Pairs
          </h3>

          {showRecommendations ? (
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
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
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
                  className="bg-[#D0F17A]/30"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <RescueStrategyCard />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <SystemAnalysisCard />
              </motion.div>
            </motion.div>
          ) : (
            <Card className="p-8 flex items-center justify-center rounded-3xl">
              <div className="text-center space-y-2">
                <Dna className="w-8 h-8 text-primary mx-auto animate-pulse" />
                <p className="text-muted-foreground">Analyzing breeding combinations...</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}