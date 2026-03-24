import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { GitBranch, TrendingUp, Clock, Target } from "lucide-react";
import { cn } from "../ui/utils";

interface BreedingRecommendationCardProps {
  specimen1: string;
  specimen2: string;
  institution1?: string;
  institution2?: string;
  allelesGain: number;
  diversityImprovement: { from: number; to: number; percentage: number };
  inbreedingReduction: { from: number; to: number };
  successProbability: number;
  timeline: string;
  className?: string;
}

export function BreedingRecommendationCard({
  specimen1,
  specimen2,
  institution1,
  institution2,
  allelesGain,
  diversityImprovement,
  inbreedingReduction,
  successProbability,
  timeline,
  className
}: BreedingRecommendationCardProps) {
  return (
    <div className={cn("p-4 space-y-4 rounded-3xl", className)}>
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <p className="font-semibold font-['Dela_Gothic_One']">{specimen1} × {specimen2}</p>
          {institution1 && institution2 && (
            <p className="text-xs text-muted-foreground font-['Plus_Jakarta_Sans']">
              {institution1} • {institution2}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="font-['Plus_Jakarta_Sans'] uppercase tracking-widest opacity-60">Alleles Gain</span>
          </div>
          <p className="text-xl font-bold text-[#075D44] font-['Dela_Gothic_One']">+{allelesGain}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="font-['Plus_Jakarta_Sans'] uppercase tracking-widest opacity-60">Diversity</span>
          </div>
          <p className="text-xl font-bold font-['Dela_Gothic_One']">
            {diversityImprovement.from} → {diversityImprovement.to}
          </p>
          <p className="text-xs text-[#075D44] font-['Plus_Jakarta_Sans']">
            +{diversityImprovement.percentage}% gain
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-['Plus_Jakarta_Sans']">Inbreeding</p>
          <p className="text-lg font-semibold font-['Dela_Gothic_One']">
            {inbreedingReduction.from}% → {inbreedingReduction.to}%
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-['Plus_Jakarta_Sans']">Success Rate</p>
          <p className="text-lg font-semibold text-[#075D44] font-['Dela_Gothic_One']">
            {successProbability}%
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground font-['Plus_Jakarta_Sans'] uppercase tracking-widest text-[10px] opacity-60">{timeline}</span>
      </div>

      <Button className="w-full bg-[#075D44] hover:bg-[#075D44]/90 text-[#E6E8EC] rounded-3xl" size="sm">
        Schedule Cross
      </Button>
    </div>
  );
}