import { Dna, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "../ui/utils";

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
    <Card className={cn("p-4 space-y-4 rounded-3xl", className)}>
      <div className="flex items-center gap-2">
        <div className="p-2 bg-[#075D44]/30 rounded-3xl">
          <Dna className="w-5 h-5 text-[#075D44]" />
        </div>
        <h3 className="font-semibold font-['Dela_Gothic_One']">Genetic Health</h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1 font-['Plus_Jakarta_Sans']">Diversity Score</p>
          <div className={cn("text-3xl font-bold font-['Dela_Gothic_One']", getScoreColor(diversityScore))}>
            {diversityScore}/100
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-1 font-['Plus_Jakarta_Sans']">Inbreeding</p>
          <div className="text-3xl font-bold text-[#075D44] font-['Dela_Gothic_One']">
            {inbreedingCoefficient}%
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-muted-foreground mb-1 font-['Plus_Jakarta_Sans']">Unique Alleles</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold font-['Dela_Gothic_One']">{alleleCount}</span>
            {historicalAlleleCount && (
              <div className="flex items-center gap-1 text-sm">
                {alleleChange < 0 ? (
                  <TrendingDown className="w-4 h-4 text-[#075D44]" />
                ) : (
                  <TrendingUp className="w-4 h-4 text-[#075D44]" />
                )}
                <span className="text-muted-foreground font-['Plus_Jakarta_Sans']">
                  from {historicalAlleleCount}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-3">
        <div className="h-2 bg-[#E6E8EC] rounded-full overflow-hidden">
          <div 
            className={cn("h-full transition-all duration-500", getScoreBg(diversityScore))}
            style={{ width: `${diversityScore}%` }}
          />
        </div>
      </div>
    </Card>
  );
}