import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ExtinctionRiskIndicator } from "./ExtinctionRiskIndicator";
import { Badge } from "../ui/badge";
import { Leaf } from "lucide-react";
import { cn } from "../ui/utils";

interface SpeciesCardProps {
  commonName: string;
  scientificName: string;
  extinctionRisk: number;
  timeline: string;
  wildPopulation: string;
  recommendation: string;
  status: "critical" | "endangered" | "at-risk" | "stable";
  className?: string;
  imageUrl?: string;
  imageSize?: 36 | 42;
}

export function SpeciesCard({
  commonName,
  scientificName,
  extinctionRisk,
  timeline,
  wildPopulation,
  recommendation,
  status,
  className,
  imageUrl,
  imageSize = 42
}: SpeciesCardProps) {
  const statusColors = {
    critical: "bg-[#b091eb]/30 text-[#151515]",
    endangered: "bg-[#D0F17A]/30 text-[#075D44]",
    "at-risk": "bg-[#075D44]/30 text-[#075D44]",
    stable: "bg-[#075D44]/30 text-[#075D44]"
  };

  return (
    <Card className={cn(
      "overflow-hidden hover:shadow-lg transition-all duration-300 bg-white",
      className
    )}>
      <div className="p-5 flex flex-col h-full space-y-4">
        {/* Header Section - 100% Wide */}
        <div className="space-y-3 pb-1">
          <h3 className="text-xl font-bold font-['Dela_Gothic_One'] text-[#151515]">
            {commonName}
          </h3>
          <div className="h-px w-full bg-[#075D44]/10" />
        </div>

        {/* Content Section - Image Left, Data Right */}
        <div className="flex gap-6 items-start">
          {imageUrl && (
            <div className={cn(
              "flex-shrink-0 rounded-2xl overflow-hidden border border-[#075D44]/5",
              imageSize === 36 ? "w-36 h-36" : "w-42 h-42"
            )}>
              <img 
                src={imageUrl} 
                alt={commonName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          
          <div className="flex-1 space-y-4">
            <ExtinctionRiskIndicator risk={extinctionRisk} timeline={timeline} />

            <div className="flex items-center gap-1 text-sm font-['Plus_Jakarta_Sans']">
              <span className="text-muted-foreground">Wild Population:</span>
              <span className="font-semibold">{wildPopulation}</span>
            </div>

            {/* AI Recommendation moved here */}
            <div className="bg-[#E6E8EC]/30 p-3 rounded-2xl">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold font-['Plus_Jakarta_Sans']">AI RECOMMENDATION</p>
              <p className="text-xs font-['Plus_Jakarta_Sans'] leading-relaxed">{recommendation}</p>
            </div>
          </div>
        </div>

        {/* Footer Buttons - 100% Wide */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 mt-auto">
          <Button variant="default" size="sm" className="flex-1 bg-[#075D44] hover:bg-[#075D44]/90 text-[#E6E8EC] rounded-3xl h-11 text-sm font-semibold">
            View Full Analysis
          </Button>
          <Button size="sm" className="flex-1 rounded-3xl bg-[#E6E8EC]/80 text-[#075D44] hover:bg-[#E6E8EC] h-11 text-sm font-semibold">
            Request Collaboration
          </Button>
        </div>
      </div>
    </Card>
  );
}