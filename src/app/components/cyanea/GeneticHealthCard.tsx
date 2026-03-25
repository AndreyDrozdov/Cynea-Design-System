import { Dna, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "../ui/utils";
import { motion } from "motion/react";

interface GeneticHealthCardProps {
  diversityScore: number; // 0-100
  inbreedingCoefficient: number; // percentage
  alleleCount: number;
  historicalAlleleCount?: number;
  className?: string;
}

export function GeneticHealthCard({
  diversityScore,
  inbreedingCoefficient,
  alleleCount,
  historicalAlleleCount,
  className
}: GeneticHealthCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-[#075D44]";
    if (score >= 50) return "text-[#D0F17A]";
    return "text-[#075D44]";
  };

  const getScoreBg = (score: number) => {
    if (score >= 70) return "bg-[#075D44]";
    if (score >= 50) return "bg-[#D0F17A]";
    return "bg-[#075D44]";
  };

  const alleleChange = historicalAlleleCount 
    ? ((alleleCount - historicalAlleleCount) / historicalAlleleCount) * 100 
    : 0;

  return (
    <Card className={cn("p-5 space-y-4 rounded-3xl", className)}>
      <div className="flex items-center gap-2 border-b border-[#075D44]/10 pb-3 mb-2">
        <h3 className="text-xl font-bold font-['Dela_Gothic_One'] text-[#151515]">Genetic Health</h3>
      </div>

      <div className="flex gap-6 items-start">
        <div className="flex-shrink-0 w-42 h-42 rounded-2xl overflow-hidden border border-[#075D44]/5 bg-white">
          <img 
            src="/assets/botanical/middlemist_red.png" 
            alt="Middlemist Red Camellia"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 space-y-5">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 pb-2">
            <div>
              <p className="text-sm text-muted-foreground mb-1 font-['Plus_Jakarta_Sans'] font-medium">Diversity Score</p>
              <div className={cn("text-3xl font-bold font-['Dela_Gothic_One'] leading-none", getScoreColor(diversityScore))}>
                {diversityScore}/100
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1 font-['Plus_Jakarta_Sans'] font-medium">Inbreeding</p>
              <div className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One'] leading-none">
                {inbreedingCoefficient}%
              </div>
            </div>

            <div className="col-span-2">
              <p className="text-sm text-muted-foreground mb-1 font-['Plus_Jakarta_Sans'] font-medium">Unique Alleles</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-['Dela_Gothic_One'] leading-none">{alleleCount}</span>
                {historicalAlleleCount && (
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-muted-foreground font-['Plus_Jakarta_Sans']">
                      from {historicalAlleleCount}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-1">
            <div className="h-2 bg-[#E6E8EC]/80 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${diversityScore}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn("h-full", getScoreBg(diversityScore))}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}