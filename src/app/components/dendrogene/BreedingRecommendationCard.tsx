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
    <Card className={cn("p-4 space-y-4 hover:shadow-md transition-all rounded-3xl", className)}>
      <div className="flex items-center gap-2">
        <div className="p-2 bg-[#D0F17A]/30 rounded-3xl">
          <GitBranch className="w-5 h-5 text-[#075D44]" />
        </div>
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
            <Target className="w-3 h-3" />
            <span className="font-['Plus_Jakarta_Sans']">Alleles Gain</span>
          </div>
          <p className="text-xl font-bold text-[#075D44] font-['Dela_Gothic_One']">+{allelesGain}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3" />
            <span className="font-['Plus_Jakarta_Sans']">Diversity</span>
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
        <Clock className="w-4 h-4 text-muted-foreground" />
        <span className="text-muted-foreground font-['Plus_Jakarta_Sans']">{timeline}</span>
      </div>

      <Button className="w-full bg-[#075D44] hover:bg-[#075D44]/90 text-[#E6E8EC] rounded-3xl" size="sm">
        Schedule Cross
      </Button>
    </Card>
  );
}